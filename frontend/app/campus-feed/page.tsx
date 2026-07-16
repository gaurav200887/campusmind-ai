export default function CampusFeedPage() {
  const posts = [
    {
      id: 1,
      name: "Rahul Sharma",
      department: "Computer Science",
      event: "Tech Fest 2026",
      caption: "Amazing experience at the AI Workshop! 🚀",
      image: "https://picsum.photos/600/350?random=1",
      likes: 125,
      comments: 18,
    },
    {
      id: 2,
      name: "Priya Singh",
      department: "MBA",
      event: "Cultural Fest",
      caption: "Enjoyed today's cultural performances 🎉",
      image: "https://picsum.photos/600/350?random=2",
      likes: 96,
      comments: 12,
    },
  ];

  return (
    <main className="min-h-screen bg-slate-950 p-8 text-white">
      <h1 className="mb-8 text-4xl font-bold text-cyan-400">
        Campus Feed
      </h1>

      <div className="mx-auto max-w-3xl space-y-8">
        {posts.map((post) => (
          <div
            key={post.id}
            className="overflow-hidden rounded-2xl border border-slate-700 bg-slate-900"
          >
            <img
              src={post.image}
              alt={post.event}
              className="h-72 w-full object-cover"
            />

            <div className="p-6">
              <h2 className="text-xl font-bold">{post.name}</h2>

              <p className="text-gray-400">
                {post.department} • {post.event}
              </p>

              <p className="mt-4">{post.caption}</p>

              <div className="mt-6 flex justify-between text-cyan-400">
                <span>❤️ {post.likes}</span>
                <span>💬 {post.comments}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}