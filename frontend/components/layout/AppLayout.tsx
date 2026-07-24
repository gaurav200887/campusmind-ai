import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

type Props = {
  children: React.ReactNode;
};

export default function AppLayout({ children }: Props) {
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

          <div className="p-8">
            {children}
          </div>
        </div>
      </div>
    </main>
  );
}