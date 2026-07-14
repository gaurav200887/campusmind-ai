import Sidebar from "@/components/layout/Sidebar";
import Topbar from "@/components/layout/Topbar";
import DashboardCard from "@/components/layout/Dashboardcard";

import {
  Bot,
  FileText,
  MapPinned,
  User,
} from "lucide-react";

export default function DashboardPage() {
  return (
    <main className="flex bg-slate-950 text-white min-h-screen">

      <Sidebar />

      <div className="flex-1">

        <Topbar />

        <div className="p-8">

          <div className="grid gap-6 md:grid-cols-2">

            <DashboardCard
              title="AI Chat"
              description="Ask AI anything about your college."
              icon={<Bot size={40} />}
            />

            <DashboardCard
              title="Complaint Portal"
              description="Register and track complaints."
              icon={<FileText size={40} />}
            />

            <DashboardCard
              title="Campus Map"
              description="Navigate your campus easily."
              icon={<MapPinned size={40} />}
            />

            <DashboardCard
              title="Student Profile"
              description="View and edit your profile."
              icon={<User size={40} />}
            />

          </div>

        </div>

      </div>

    </main>
  );
}