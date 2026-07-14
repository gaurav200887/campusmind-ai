type Props = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

export default function DashboardCard({
  title,
  description,
  icon,
}: Props) {
  return (
    <div className="rounded-2xl bg-slate-900 border border-slate-800 p-8 hover:border-cyan-400 transition">

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
  );
}