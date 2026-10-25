"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  updateProfile,
} from "firebase/auth";

import { doc, setDoc, serverTimestamp } from "firebase/firestore";

import { auth, db } from "@/lib/firebase";

export default function SignupPage() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [verificationSent, setVerificationSent] = useState(false);

  const handleSignup = async () => {
    const cleanEmail = email.trim();

    if (!name.trim() || !cleanEmail || !password) {
      setError("Please fill all fields.");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      // Create Firebase account
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        cleanEmail,
        password
      );

      const user = userCredential.user;

      // Save user's name
      await updateProfile(user, {
        displayName: name.trim(),
      });

      // Send verification email
      await sendEmailVerification(user);

      // Save user information in Firestore
      await setDoc(doc(db, "users", user.uid), {
        uid: user.uid,
        name: name.trim(),
        email: cleanEmail,
        role: "student",
        emailVerified: false,
        createdAt: serverTimestamp(),
      });

      // Sign-up complete, but verification is required
      setVerificationSent(true);
    } catch (err: any) {
      console.error("Signup error:", err);

      if (err.code === "auth/email-already-in-use") {
        setError("An account with this email already exists.");
      } else if (err.code === "auth/invalid-email") {
        setError("Please enter a valid email address.");
      } else if (err.code === "auth/weak-password") {
        setError("Password is too weak.");
      } else {
        setError("Unable to create account. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  if (verificationSent) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-slate-950">
        <div className="w-full max-w-md rounded-2xl bg-slate-900 p-8 text-center shadow-xl">

          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-cyan-500/10 text-3xl">
            📧
          </div>

          <h1 className="mt-6 text-3xl font-bold text-cyan-400">
            Verify Your Email
          </h1>

          <p className="mt-4 text-gray-400">
            We sent a verification link to:
          </p>

          <p className="mt-2 font-semibold text-white">
            {email}
          </p>

          <p className="mt-4 text-sm text-gray-500">
            Please verify your email before logging in.
          </p>

          <Link
            href="/login"
            className="mt-6 block w-full rounded-lg bg-cyan-500 py-3 font-bold text-white transition hover:bg-cyan-600"
          >
            Go to Login
          </Link>

        </div>
      </main>
    );
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950">
      <div className="w-full max-w-md rounded-2xl bg-slate-900 p-8 shadow-xl">

        <h1 className="text-center text-3xl font-bold text-cyan-400">
          CampusMind AI
        </h1>

        <p className="mt-2 text-center text-gray-400">
          Create Student Account
        </p>

        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-8 w-full rounded-lg border border-slate-700 bg-slate-800 p-3 text-white outline-none"
        />

        <input
          type="email"
          placeholder="College Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-4 w-full rounded-lg border border-slate-700 bg-slate-800 p-3 text-white outline-none"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mt-4 w-full rounded-lg border border-slate-700 bg-slate-800 p-3 text-white outline-none"
        />

        {error && (
          <p className="mt-4 text-center text-sm text-red-400">
            {error}
          </p>
        )}

        <button
          onClick={handleSignup}
          disabled={loading}
          className="mt-6 w-full rounded-lg bg-cyan-500 py-3 font-bold transition hover:bg-cyan-600 disabled:opacity-50"
        >
          {loading ? "Creating Account..." : "Create Account"}
        </button>

        <p className="mt-6 text-center text-gray-400">
          Already have an account?{" "}
          <Link
            href="/login"
            className="text-cyan-400 hover:underline"
          >
            Login
          </Link>
        </p>

      </div>
    </main>
  );
}