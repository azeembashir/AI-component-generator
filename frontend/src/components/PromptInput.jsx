export default function PromptInput() {
  return (
    <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
      <h2 className="text-xl font-semibold mb-4">Prompt</h2>

      <textarea
        placeholder="e.g. Create a responsive login form with Tailwind CSS"
        className="w-full h-40 bg-black/40 text-white border border-white/10 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
      />

      <button className="mt-4 w-full bg-indigo-600 hover:bg-indigo-700 transition rounded-xl py-3 font-semibold">
        Generate Component
      </button>
    </div>
  );
}
