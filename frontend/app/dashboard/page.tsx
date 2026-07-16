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
    <main className="flex min-h-screen bg-slate-950 text-white">
      <Sidebar />

      <div className="flex-1">
        <Topbar />

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
    </main>
  );
}