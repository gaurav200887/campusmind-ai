export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center min-h-[85vh] px-6">

      <span className="mb-6 rounded-full border border-cyan-500 px-4 py-2 text-sm text-cyan-400">
        🚀 AI Powered College Helpdesk
      </span>

      <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
        Welcome to{" "}
        <span className="text-cyan-400">
          CampusMind AI
        </span>
      </h1>

      <p className="mt-8 max-w-3xl text-lg text-gray-300">
        One platform for AI assistance, student complaints,
        campus navigation, announcements, exam rules,
        faculty information and everything a student needs.
      </p>

      <div className="mt-10 flex gap-5">

        <button className="rounded-xl bg-cyan-500 px-8 py-4 font-semibold hover:bg-cyan-600 transition">
          Start AI Chat
        </button>

        <button className="rounded-xl border border-cyan-500 px-8 py-4 font-semibold hover:bg-cyan-500 hover:text-white transition">
          Explore Campus
        </button>

      </div>

    </section>
  );
}