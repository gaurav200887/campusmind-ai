export default function ComplaintsPage() {
  const complaints = [
    {
      id: 1,
      title: "Library AC not working",
      category: "Infrastructure",
      status: "Pending",
    },
    {
      id: 2,
      title: "Attendance Issue",
      category: "Academic",
      status: "Resolved",
    },
    {
      id: 3,
      title: "WiFi Slow",
      category: "IT",
      status: "In Progress",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-white p-8">
      <h1 className="text-4xl font-bold text-cyan-400 mb-8">
        My Complaints
      </h1>

      <div className="space-y-5">
        {complaints.map((item) => (
          <div
            key={item.id}
            className="rounded-xl border border-slate-700 bg-slate-900 p-5"
          >
            <h2 className="text-2xl font-semibold">{item.title}</h2>

            <p className="mt-2 text-gray-400">
              Category: {item.category}
            </p>

            <span className="mt-4 inline-block rounded-full bg-cyan-500 px-4 py-1 text-sm font-bold">
              {item.status}
            </span>
          </div>
        ))}
      </div>
    </main>
  );
}