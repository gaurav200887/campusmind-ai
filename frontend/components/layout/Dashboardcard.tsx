import Link from "next/link";

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
      <div className="cursor-pointer rounded-2xl border border-slate-800 bg-slate-900 p-8 transition hover:border-cyan-400 hover:scale-105">

        <div className="text-cyan-400">
          {icon}
        </div>

        <h2 className="mt-5 text-2xl font-bold">
          {title}
        </h2>

        <p className="mt-3 text-gray-400">
          {description}
        </p>

      </div>
    </Link>
  );
}