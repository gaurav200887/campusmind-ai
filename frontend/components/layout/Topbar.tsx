"use client";

import { signOut } from "firebase/auth";
import { useRouter } from "next/navigation";
import { auth } from "@/lib/firebase";
import { LogOut } from "lucide-react";

export default function Topbar() {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      router.push("/login");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <div className="flex items-center justify-between border-b border-slate-800 p-6">
      
      <div>
        <h2 className="text-3xl font-bold">
          Dashboard
        </h2>

        <p className="text-gray-400">
          Welcome back 👋
        </p>
      </div>

      <div className="flex items-center gap-4">
        
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-cyan-500 font-bold">
          G
        </div>

        <button
          onClick={handleLogout}
          className="flex items-center gap-2 rounded-xl border border-slate-700 px-4 py-2 text-slate-300 transition hover:border-red-400 hover:bg-red-500/10 hover:text-red-400"
        >
          <LogOut size={18} />
          Logout
        </button>

      </div>

    </div>
  );
}