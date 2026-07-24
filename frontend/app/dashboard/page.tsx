import Sidebar from "@/components/layout/Sidebar";
import Topbar from "@/components/layout/Topbar";
import DashboardCard from "@/components/layout/DashboardCard";

import {
  Bot,
  FileText,
  MapPinned,
  User,
  Newspaper,
  Bell,
} from "lucide-react";

export default function DashboardPage() {
  return (
    <main className="relative flex min-h-screen overflow-hidden bg-slate-950 text-white">
      {/* Background Glow */}
      <div className="absolute -left-40 top-0 h-96 w-96 rounded-full bg-cyan-500/20 blur-[140px]" />
      <div className="absolute right-0 top-60 h-96 w-96 rounded-full bg-indigo-500/20 blur-[140px]" />
      <div className="absolute bottom-0 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-purple-500/20 blur-[120px]" />

      <div className="relative z-10 flex w-full">
        <Sidebar />

        <div className="flex-1">
          <Topbar />

          {/* Hero Section */}
          <div className="mx-8 mt-8 rounded-3xl border border-cyan-500/20 bg-gradient-to-r from-cyan-500/10 via-slate-900/60 to-indigo-500/10 p-10 backdrop-blur-xl">
            <h1 className="text-5xl font-extrabold">
              👋 Welcome Back
            </h1>

            <p className="mt-4 max-w-2xl text-lg text-slate-300">
              Your AI-powered college assistant is ready to help you with
              academics, complaints, campus updates and much more.
            </p>

            <div className="mt-8 flex gap-4">
              <button className="rounded-xl bg-cyan-500 px-6 py-3 font-semibold transition hover:bg-cyan-400">
                🤖 Open AI Chat
              </button>

              <button className="rounded-xl border border-slate-700 bg-slate-900/60 px-6 py-3 font-semibold hover:border-cyan-400">
                📰 Campus Feed
              </button>
            </div>
          </div>

          {/* Dashboard Cards */}
          <div className="p-8">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <DashboardCard
                title="AI Chat"
                description="Ask AI anything about your college."
                icon={<Bot size={40} />}
                href="/ai-chat"
              />

              <DashboardCard
                title="Complaint Portal"
                description="Register and track complaints."
                icon={<FileText size={40} />}
                href="/complaint"
              />

              <DashboardCard
                title="Campus Feed"
                description="See student posts and updates."
                icon={<Newspaper size={40} />}
                href="/campus-feed"
              />

              <DashboardCard
                title="Announcements"
                description="Latest college notices."
                icon={<Bell size={40} />}
                href="/announcements"
              />

              <DashboardCard
                title="Campus Map"
                description="Navigate your campus."
                icon={<MapPinned size={40} />}
                href="/campus-map"
              />

              <DashboardCard
                title="Student Profile"
                description="Manage your profile."
                icon={<User size={40} />}
                href="/profile"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}