export default function Features() {
  const features = [
    {
      icon: "🤖",
      title: "AI Chat",
      description:
        "Ask questions about your college, exams, rules and departments instantly.",
    },
    {
      icon: "📝",
      title: "Complaint Portal",
      description:
        "Report complaints against students or faculty with optional proof.",
    },
    {
      icon: "🗺️",
      title: "Campus Map",
      description:
        "Navigate classrooms, laboratories, offices and departments easily.",
    },
    {
      icon: "📚",
      title: "College Information",
      description:
        "Access notices, syllabus, exam rules and important announcements.",
    },
  ];

  return (
    <section className="bg-slate-900 py-24">

      <div className="mx-auto max-w-7xl px-6">

        <h2 className="text-center text-4xl font-bold text-white">
          Everything You Need
        </h2>

        <p className="mt-4 text-center text-gray-400">
          One platform for every student.
        </p>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {features.map((feature, index) => (

            <div
              key={index}
              className="rounded-2xl border border-slate-700 bg-slate-800 p-8 transition duration-300 hover:-translate-y-2 hover:border-cyan-400"
            >

              <div className="text-5xl">
                {feature.icon}
              </div>

              <h3 className="mt-6 text-2xl font-bold text-white">
                {feature.title}
              </h3>

              <p className="mt-4 text-gray-400">
                {feature.description}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}