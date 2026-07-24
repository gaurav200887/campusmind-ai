"use client";

import { useState } from "react";

import Sidebar from "@/components/layout/Sidebar";
import Topbar from "@/components/layout/Topbar";

import ChatHeader from "@/components/chat/ChatHeader";
import ChatMessages from "@/components/chat/ChatMessages";
import ChatInput from "@/components/chat/ChatInput";

type Message = {
  text: string;
  sender: "user" | "ai";
};

export default function AIChatPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      text: "👋 Hello! I am CampusMind AI. Ask me anything about your college.",
      sender: "ai",
    },
  ]);

  const sendMessage = async (message: string) => {
    const userMessage: Message = {
      text: message,
      sender: "user",
    };

    setMessages((prev) => [...prev, userMessage]);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message,
        }),
      });

      const data = await response.json();

      setMessages((prev) => [
        ...prev,
        {
          text: data.reply,
          sender: "ai",
        },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          text: "❌ Unable to connect with AI.",
          sender: "ai",
        },
      ]);
    }
  };

  return (
    <main className="relative flex min-h-screen overflow-hidden bg-slate-950 text-white">

      {/* Background Glow */}
      <div className="absolute -left-40 top-0 h-96 w-96 rounded-full bg-cyan-500/20 blur-[140px]" />
      <div className="absolute right-0 top-60 h-96 w-96 rounded-full bg-indigo-500/20 blur-[140px]" />

      <div className="relative z-10 flex w-full">

        <Sidebar />

        <div className="flex flex-1 flex-col">

          <Topbar />

          <ChatHeader />

          <ChatMessages messages={messages} />

          <ChatInput onSend={sendMessage} />

        </div>

      </div>
    </main>
  );
}