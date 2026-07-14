import Link from "next/link";
<Link href="/login" className="text-cyan-400 hover:underline">
  Login
</Link>

export default function SignupPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-950">

      <div className="w-full max-w-md rounded-2xl bg-slate-900 p-8 shadow-xl">

        <h1 className="text-3xl font-bold text-center text-cyan-400">
          CampusMind AI
        </h1>

        <p className="mt-2 text-center text-gray-400">
          Create Student Account
        </p>

        <input
          type="text"
          placeholder="Full Name"
          className="mt-8 w-full rounded-lg border border-slate-700 bg-slate-800 p-3 text-white"
        />

        <input
          type="email"
          placeholder="College Email"
          className="mt-4 w-full rounded-lg border border-slate-700 bg-slate-800 p-3 text-white"
        />

        <input
          type="password"
          placeholder="Password"
          className="mt-4 w-full rounded-lg border border-slate-700 bg-slate-800 p-3 text-white"
        />

        <button className="mt-6 w-full rounded-lg bg-cyan-500 py-3 font-bold hover:bg-cyan-600">
          Create Account
        </button>

        <p className="mt-6 text-center text-gray-400">
          Already have an account?{" "}
          <a href="/login" className="text-cyan-400 hover:underline">
            Login
          </a>
        </p>

      </div>

    </main>
  );
}