"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import {
  signInWithEmailAndPassword,
  sendEmailVerification,
  sendPasswordResetEmail,
  signOut,
  type AuthError,
} from "firebase/auth";

import { auth } from "@/lib/firebase";
import { Eye, EyeOff } from "lucide-react";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = async () => {
    const cleanEmail = email.trim();

    if (!cleanEmail || !password) {
      setError("Please enter email and password.");
      return;
    }

    setLoading(true);
    setError("");
    setMessage("");

    try {
      const result = await signInWithEmailAndPassword(
        auth,
        cleanEmail,
        password
      );

      // Refresh Firebase user information
      await result.user.reload();

      const user = auth.currentUser;

      if (!user) {
        setError("Unable to verify your account. Please try again.");
        return;
      }

      // Block unverified users
      if (!user.emailVerified) {
        await signOut(auth);

        setError(
          "Please verify your email before logging in. Check your inbox or spam folder."
        );
        return;
      }

      // Verified user
      router.push("/dashboard");
    } catch (err) {
      const authError = err as AuthError;

      console.error(
        "Login error:",
        authError.code,
        authError.message
      );

      switch (authError.code) {
        case "auth/invalid-credential":
        case "auth/wrong-password":
        case "auth/user-not-found":
          setError("Email or password is incorrect.");
          break;

        case "auth/too-many-requests":
          setError(
            "Too many login attempts. Please try again later."
          );
          break;

        case "auth/network-request-failed":
          setError(
            "Network error. Please check your internet connection."
          );
          break;

        default:
          setError("Unable to login. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleResendVerification = async () => {
    const cleanEmail = email.trim();

    if (!cleanEmail || !password) {
      setError("Enter your email and password first.");
      return;
    }

    setLoading(true);
    setError("");
    setMessage("");

    try {
      const result = await signInWithEmailAndPassword(
        auth,
        cleanEmail,
        password
      );

      await result.user.reload();

      const user = auth.currentUser;

      if (!user) {
        setError("Unable to find your account.");
        return;
      }

      if (user.emailVerified) {
        await signOut(auth);
        setMessage("Your email is already verified. You can login now.");
        return;
      }

      await sendEmailVerification(user);
      await signOut(auth);

      setMessage(
        "Verification email sent. Check your inbox and spam folder."
      );
    } catch (err) {
      console.error("Verification email error:", err);
      setError(
        "Unable to send verification email. Check your email and password."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleForgotPassword = async () => {
    const cleanEmail = email.trim();

    if (!cleanEmail) {
      setError("Enter your email address first.");
      return;
    }

    setLoading(true);
    setError("");
    setMessage("");

    try {
      await sendPasswordResetEmail(auth, cleanEmail);

      setMessage(
        "Password reset email sent. Check your inbox and spam folder."
      );
    } catch (err) {
      const authError = err as AuthError;

      console.error(
        "Password reset error:",
        authError.code,
        authError.message
      );

      setError("Unable to send password reset email.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950">
      <div className="w-full max-w-md rounded-2xl bg-slate-900 p-8 shadow-xl">

        <h1 className="text-center text-3xl font-bold text-cyan-400">
          CampusMind AI
        </h1>

        <p className="mt-2 text-center text-gray-400">
          Student Login
        </p>

        {/* Email */}
        <input
          type="email"
          placeholder="College Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-8 w-full rounded-lg border border-slate-700 bg-slate-800 p-3 text-white outline-none focus:border-cyan-400"
        />

        {/* Password */}
        <div className="relative mt-4">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-lg border border-slate-700 bg-slate-800 p-3 pr-12 text-white outline-none focus:border-cyan-400"
          />

          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-cyan-400"
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? (
              <EyeOff size={20} />
            ) : (
              <Eye size={20} />
            )}
          </button>
        </div>

        {/* Forgot Password */}
        <div className="mt-3 text-right">
          <button
            type="button"
            onClick={handleForgotPassword}
            disabled={loading}
            className="text-sm text-cyan-400 hover:underline"
          >
            Forgot Password?
          </button>
        </div>

        {/* Error */}
        {error && (
          <p className="mt-4 rounded-lg bg-red-500/10 p-3 text-center text-sm text-red-400">
            {error}
          </p>
        )}

        {/* Success */}
        {message && (
          <p className="mt-4 rounded-lg bg-green-500/10 p-3 text-center text-sm text-green-400">
            {message}
          </p>
        )}

        {/* Login */}
        <button
          onClick={handleLogin}
          disabled={loading}
          className="mt-6 w-full rounded-lg bg-cyan-500 py-3 font-bold transition hover:bg-cyan-400 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {loading ? "Please wait..." : "Login"}
        </button>

        {/* Resend verification */}
        <button
          type="button"
          onClick={handleResendVerification}
          disabled={loading}
          className="mt-4 w-full rounded-lg border border-slate-700 py-3 text-sm text-slate-300 transition hover:border-cyan-400 hover:text-cyan-400 disabled:opacity-50"
        >
          Resend Verification Email
        </button>

        {/* Signup */}
        <p className="mt-6 text-center text-gray-400">
          Don't have an account?{" "}
          <Link
            href="/signup"
            className="text-cyan-400 hover:underline"
          >
            Sign Up
          </Link>
        </p>

      </div>
    </main>
  );
}