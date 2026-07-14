import Link from "next/link";
import { Bot, MapPinned, FileText, User, LayoutDashboard } from "lucide-react";

const menu = [
  { title: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { title: "AI Chat", href: "/ai-chat", icon: Bot },
  { title: "Complaint", href: "/complaint", icon: FileText },
  { title: "Campus Map", href: "/campus-map", icon: MapPinned },
  { title: "Profile", href: "/profile", icon: User },
];

export default function Sidebar() {
  return (
    <aside className="w-72 bg-slate-900 border-r border-slate-800 min-h-screen p-6">
      <h1 className="text-3xl font-bold text-cyan-400 mb-10">
        CampusMind AI
      </h1>

      <nav className="space-y-3">
        {menu.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.title}
              href={item.href}
              className="flex items-center gap-3 rounded-xl p-4 hover:bg-slate-800 transition"
            >
              <Icon size={22} />
              {item.title}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}