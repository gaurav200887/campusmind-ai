"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebase";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async () => {
    if (!email || !password) {
      setError("Please enter email and password.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      await signInWithEmailAndPassword(auth, email, password);

      router.push("/dashboard");
    } catch (err: any) {
      setError(err.message);
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

        <input
          type="email"
          placeholder="College Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-8 w-full rounded-lg border border-slate-700 bg-slate-800 p-3 text-white outline-none"
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
          onClick={handleLogin}
          disabled={loading}
          className="mt-6 w-full rounded-lg bg-cyan-500 py-3 font-bold transition hover:bg-cyan-600 disabled:opacity-50"
        >
          {loading ? "Logging in..." : "Login"}
        </button>

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