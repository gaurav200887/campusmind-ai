import ChatHeader from "@/components/chat/ChatHeader";
import ChatMessages from "@/components/chat/ChatMessages";
import ChatInput from "@/components/chat/ChatInput";

export default function AIChatPage() {
  return (
    <main className="flex h-screen flex-col bg-slate-950 text-white">

      <ChatHeader />

      <ChatMessages />

      <ChatInput />

    </main>
  );
}