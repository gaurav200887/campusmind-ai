export default function Topbar() {
  return (
    <div className="flex justify-between items-center border-b border-slate-800 p-6">

      <div>
        <h2 className="text-3xl font-bold">
          Dashboard
        </h2>

        <p className="text-gray-400">
          Welcome back 👋
        </p>
      </div>

      <div className="flex items-center gap-4">

        <div className="w-12 h-12 rounded-full bg-cyan-500 flex items-center justify-center font-bold">
          G
        </div>

      </div>

    </div>
  );
}