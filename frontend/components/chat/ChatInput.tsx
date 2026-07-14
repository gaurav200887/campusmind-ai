export default function ChatInput() {
  return (
    <div className="border-t border-slate-800 p-5 flex gap-3">

      <input
        type="text"
        placeholder="Type your message..."
        className="flex-1 rounded-xl border border-slate-700 bg-slate-900 p-3 outline-none"
      />

      <button className="rounded-xl bg-cyan-500 px-6 font-bold hover:bg-cyan-600">
        Send
      </button>

    </div>
  );
}