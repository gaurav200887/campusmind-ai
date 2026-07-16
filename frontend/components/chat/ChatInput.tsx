"use client";

import { useState } from "react";

type ChatInputProps = {
  onSend: (message: string) => void;
};

export default function ChatInput({ onSend }: ChatInputProps) {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (!message.trim()) return;

    onSend(message);
    setMessage("");
  };

  return (
    <div className="border-t border-slate-800 p-5 flex gap-3">

      <input
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") handleSend();
        }}
        placeholder="Type your message..."
        className="flex-1 rounded-xl border border-slate-700 bg-slate-900 p-3 outline-none"
      />

      <button
        onClick={handleSend}
        className="rounded-xl bg-cyan-500 px-6 font-bold hover:bg-cyan-600"
      >
        Send
      </button>

    </div>
  );
}