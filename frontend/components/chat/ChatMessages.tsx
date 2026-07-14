export default function ChatMessages() {
  return (
    <div className="flex-1 overflow-y-auto p-6 space-y-5">

      <div className="max-w-md rounded-xl bg-slate-800 p-4">
        👋 Hello Gaurav! How can I help you today?
      </div>

      <div className="ml-auto max-w-md rounded-xl bg-cyan-500 p-4 text-black">
        What is today's timetable?
      </div>

      <div className="max-w-md rounded-xl bg-slate-800 p-4">
        Today's timetable will be available after connecting the AI API.
      </div>

    </div>
  );
}