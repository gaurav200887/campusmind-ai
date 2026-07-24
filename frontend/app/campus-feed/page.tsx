import Sidebar from "@/components/layout/Sidebar";
import Topbar from "@/components/layout/Topbar";
import { Heart, MessageCircle, ImagePlus } from "lucide-react";

export default function CampusFeedPage() {
  return (
    <main className="flex min-h-screen bg-slate-950 text-white">
      <Sidebar />

      <div className="flex-1">
        <Topbar />

        <div className="mx-auto max-w-3xl p-8">

          {/* Create Post */}
          {/* Create Post */}
<div className="mb-8 rounded-3xl border border-slate-800 bg-slate-900/70 p-6 backdrop-blur-xl shadow-xl">

  <div className="flex items-center gap-4">

    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-indigo-500 text-xl font-bold">
      G
    </div>

    <div className="flex-1">

      <h2 className="text-xl font-bold">
        Create a Post
      </h2>

      <p className="text-sm text-slate-400">
        Share updates with your campus community
      </p>

    </div>

  </div>

  <textarea
    placeholder="✨ What's happening on campus today?"
    className="mt-6 h-32 w-full rounded-2xl border border-slate-700 bg-slate-950/80 p-4 outline-none transition focus:border-cyan-500"
  />

  <div className="mt-6 flex items-center justify-between">

    <button className="flex items-center gap-2 rounded-xl border border-slate-700 px-5 py-3 transition hover:border-cyan-400 hover:bg-slate-800">
      <ImagePlus size={20} />
      Add Image
    </button>

    <button className="rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-500 px-8 py-3 font-bold transition hover:scale-105">
      🚀 Post
    </button>

  </div>

</div>

          {/* Dummy Post */}
         <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 backdrop-blur-xl shadow-xl">

  <div className="flex items-center justify-between">

    <div className="flex items-center gap-4">

      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-indigo-500 text-lg font-bold">
        G
      </div>

      <div>
        <h3 className="font-bold text-lg">
          Gaurav
        </h3>

        <p className="text-sm text-slate-400">
          2 minutes ago
        </p>
      </div>

    </div>

    <span className="rounded-full bg-cyan-500/20 px-4 py-1 text-sm text-cyan-400">
      Student
    </span>

  </div>

  <p className="mt-6 text-slate-300">
    🎉 Welcome to CampusMind AI Feed! Share your college moments,
    events and achievements with everyone.
  </p>

  <div className="mt-6 flex h-72 items-center justify-center rounded-2xl border border-dashed border-slate-700 bg-slate-800 text-slate-500">
    Campus Image Preview
  </div>

  <div className="mt-6 flex items-center justify-between border-t border-slate-800 pt-5">

    <button className="flex items-center gap-2 rounded-xl px-5 py-2 transition hover:bg-red-500/10 hover:text-red-400">
      <Heart size={20} />
      25 Likes
    </button>

    <button className="flex items-center gap-2 rounded-xl px-5 py-2 transition hover:bg-cyan-500/10 hover:text-cyan-400">
      <MessageCircle size={20} />
      8 Comments
    </button>

  </div>

</div>
</div>
</div>
    </main>
  );
}