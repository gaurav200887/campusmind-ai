import Link from "next/link";

export default function LoginPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-950">

      <div className="w-full max-w-md rounded-2xl bg-slate-900 p-8 shadow-xl">

        <h1 className="text-3xl font-bold text-center text-cyan-400">
          CampusMind AI
        </h1>

        <p className="mt-2 text-center text-gray-400">
          Student Login
        </p>

        <input
          type="email"
          placeholder="College Email"
          className="mt-8 w-full rounded-lg border border-slate-700 bg-slate-800 p-3 text-white"
        />

        <input
          type="password"
          placeholder="Password"
          className="mt-4 w-full rounded-lg border border-slate-700 bg-slate-800 p-3 text-white"
        />

        <Link href="/dashboard">
          <button className="mt-6 w-full rounded-lg bg-cyan-500 py-3 font-bold hover:bg-cyan-600">
            Login
          </button>
        </Link>

      </div>

    </main>
  );
}