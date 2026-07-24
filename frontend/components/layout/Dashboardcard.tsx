"use client";

import Link from "next/link";
import { motion } from "framer-motion";


type Props = {
  title: string;
  description: string;
  icon: React.ReactNode;
  href: string;
};

export default function DashboardCard({
  title,
  description,
  icon,
  href,
}: Props) {
  return (
  <Link href={href}>
    <motion.div
      whileHover={{
        scale: 1.04,
        y: -8,
      }}
      whileTap={{
        scale: 0.98,
      }}
      transition={{
        duration: 0.25,
      }}
      className="group relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/60 p-8 backdrop-blur-xl shadow-lg transition-all hover:border-cyan-400 hover:shadow-cyan-500/20"
    >
      {/* Glow Effect */}
      <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-cyan-500/10 blur-3xl group-hover:bg-cyan-500/20 transition-all" />

      {/* Icon */}
      <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-400 transition-all group-hover:rotate-6 group-hover:bg-cyan-500 group-hover:text-white">
        {icon}
      </div>

      {/* Title */}
      <h2 className="relative mt-6 text-2xl font-bold">
        {title}
      </h2>

      {/* Description */}
      <p className="relative mt-3 text-slate-400">
        {description}
      </p>
    </motion.div>
  </Link>
);
}