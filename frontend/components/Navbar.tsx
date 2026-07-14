import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-5 bg-slate-900 border-b border-slate-800">

      <h1 className="text-2xl font-bold text-cyan-400">
        CampusMind AI
      </h1>

      <div className="flex gap-6 text-white">

        <Link href="/" className="hover:text-cyan-400 transition">
          Home
        </Link>

        <Link href="/ai-chat" className="hover:text-cyan-400 transition">
          AI Chat
        </Link>

        <Link href="/complaint" className="hover:text-cyan-400 transition">
          Complaint
        </Link>

        <Link href="/campus-map" className="hover:text-cyan-400 transition">
          Campus Map
        </Link>

        <Link href="/login" className="hover:text-cyan-400 transition">
          Login
        </Link>

      </div>

    </nav>
  );
}