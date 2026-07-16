"use client";

import { useState } from "react";

export default function ComplaintPage() {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Academic");
  const [priority, setPriority] = useState("Medium");
  const [description, setDescription] = useState("");

  const handleSubmit = () => {
    alert("Complaint Submitted Successfully ✅");

    setTitle("");
    setCategory("Academic");
    setPriority("Medium");
    setDescription("");
  };

  return (
    <main className="min-h-screen bg-slate-950 text-white p-10">

      <div className="mx-auto max-w-3xl rounded-2xl bg-slate-900 p-8">

        <h1 className="text-4xl font-bold text-cyan-400">
          Complaint Portal
        </h1>

        <p className="mt-2 text-gray-400">
          Raise your issue to the administration.
        </p>

        <input
          className="mt-8 w-full rounded-lg bg-slate-800 p-3"
          placeholder="Complaint Title"
          value={title}
          onChange={(e)=>setTitle(e.target.value)}
        />

        <select
          className="mt-5 w-full rounded-lg bg-slate-800 p-3"
          value={category}
          onChange={(e)=>setCategory(e.target.value)}
        >
          <option>Academic</option>
          <option>Hostel</option>
          <option>Library</option>
          <option>Transport</option>
          <option>Infrastructure</option>
          <option>Faculty</option>
          <option>Others</option>
        </select>

        <select
          className="mt-5 w-full rounded-lg bg-slate-800 p-3"
          value={priority}
          onChange={(e)=>setPriority(e.target.value)}
        >
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
        </select>

        <textarea
          rows={6}
          className="mt-5 w-full rounded-lg bg-slate-800 p-3"
          placeholder="Describe your issue..."
          value={description}
          onChange={(e)=>setDescription(e.target.value)}
        />

        <button
          onClick={handleSubmit}
          className="mt-6 rounded-lg bg-cyan-500 px-8 py-3 font-bold hover:bg-cyan-600"
        >
          Submit Complaint
        </button>

      </div>

    </main>
  );
}