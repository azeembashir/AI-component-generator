import PromptInput from "./components/PromptInput";
import OutputPanel from "./components/OutputPanel";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white px-6 py-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <h1 className="text-4xl font-bold mb-2">
          AI Component Generator
        </h1>
        <p className="text-gray-400 mb-8">
          Generate modern React + Tailwind UI components using AI
        </p>

        {/* Main Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <PromptInput />
          <OutputPanel />
        </div>
      </div>
    </div>
  );
}
