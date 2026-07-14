export default function Stats() {
  const stats = [
    { number: "10K+", title: "Students" },
    { number: "24/7", title: "AI Support" },
    { number: "50+", title: "Departments" },
    { number: "99%", title: "Accuracy" },
  ];

  return (
    <section className="bg-slate-950 py-20">
      <div className="max-w-6xl mx-auto px-6">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-slate-900 rounded-2xl p-8 text-center border border-slate-800 hover:border-cyan-400 transition"
            >
              <h2 className="text-5xl font-bold text-cyan-400">
                {item.number}
              </h2>

              <p className="mt-4 text-gray-300">
                {item.title}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}