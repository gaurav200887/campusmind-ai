"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu } from "lucide-react";

import {
  LayoutDashboard,
  Bot,
  FileText,
  MapPinned,
  User,
  Newspaper,
  Bell,
} from "lucide-react";


const menu = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "AI Chat",
    href: "/ai-chat",
    icon: Bot,
  },
  {
    title: "Campus Feed",
    href: "/campus-feed",
    icon: Newspaper,
  },
  {
    title: "Announcements",
    href: "/announcements",
    icon: Bell,
  },
  {
    title: "Complaint",
    href: "/complaint",
    icon: FileText,
  },
  {
    title: "Campus Map",
    href: "/campus-map",
    icon: MapPinned,
  },
  {
    title: "Profile",
    href: "/profile",
    icon: User,
  },
];


export default function Sidebar() {

  const pathname = usePathname();

  const [collapsed, setCollapsed] = useState(false);


  return (
    <aside
      className={`
        min-h-screen
        border-r border-slate-800
        bg-slate-900/70
        backdrop-blur-xl
        transition-all duration-300
        ${collapsed ? "w-20" : "w-72"}
      `}
    >

      {/* Header */}

      <div className="p-6">


        <div className="flex justify-end mb-6">

          <button
            onClick={() => setCollapsed(!collapsed)}
            className="
              rounded-lg
              p-2
              text-slate-300
              hover:bg-slate-800
              transition
            "
          >

            <Menu size={22}/>

          </button>

        </div>



        {!collapsed && (

          <div>

            <h1
              className="
              text-3xl
              font-extrabold
              bg-gradient-to-r
              from-cyan-400
              to-indigo-400
              bg-clip-text
              text-transparent
              "
            >
              CampusMind AI
            </h1>


            <p className="mt-2 text-sm text-slate-400">
              AI Powered Student Platform
            </p>

          </div>

        )}


      </div>



      {/* Navigation */}

      <nav className="px-4 space-y-2">


        {menu.map((item)=>{


          const Icon = item.icon;

          const active = pathname === item.href;



          return (

            <Link

              key={item.title}

              href={item.href}

              className={`
                group
                flex
                items-center
                gap-4
                rounded-2xl
                px-4
                py-4
                transition-all
                duration-300

                ${
                  active

                  ? 
                  "bg-cyan-500 text-white shadow-lg shadow-cyan-500/30"

                  :

                  "text-slate-300 hover:bg-slate-800 hover:text-cyan-400"
                }

                ${
                  collapsed 
                  ? 
                  "justify-center"
                  :
                  ""
                }

              `}

            >


              <Icon

                size={22}

                className="
                  transition-transform
                  group-hover:scale-110
                "

              />



              {!collapsed && (

                <span className="font-medium">

                  {item.title}

                </span>

              )}



            </Link>

          );


        })}


      </nav>


    </aside>
  );
}