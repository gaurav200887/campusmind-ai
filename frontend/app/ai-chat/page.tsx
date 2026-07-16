"use client";

import { useState } from "react";
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

      const aiMessage: Message = {
        text: data.reply,
        sender: "ai",
      };

      setMessages((prev) => [...prev, aiMessage]);
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
    <main className="flex h-screen flex-col bg-slate-950 text-white">
      <ChatHeader />
      <ChatMessages messages={messages} />
      <ChatInput onSend={sendMessage} />
    </main>
  );
}