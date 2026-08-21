type Message = {
  text: string;
  sender: "user" | "ai";
};

type ChatMessagesProps = {
  messages: Message[];
};

export default function ChatMessages({
  messages,
}: ChatMessagesProps) {
  return (
    <div className="flex-1 overflow-y-auto p-6 space-y-4">
      {messages.map((msg, index) => (
        <div
          key={index}
          className={`max-w-md rounded-xl p-4 ${
            msg.sender === "user"
              ? "ml-auto bg-cyan-500 text-black"
              : "bg-slate-800 text-white"
          }`}
        >
          {msg.text}
        </div>
      ))}
    </div>
  );
}