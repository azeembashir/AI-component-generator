export default function OutputPanel() {
  return (
    <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
      <h2 className="text-xl font-semibold mb-4">Generated Code</h2>

      <pre className="bg-black/50 rounded-xl p-4 text-sm text-green-400 h-40 overflow-auto">
{`// AI generated code will appear here`}
      </pre>

      <div className="mt-4">
        <h3 className="text-lg font-semibold mb-2">Live Preview</h3>
        <div className="bg-white rounded-xl h-40 flex items-center justify-center text-black">
          Preview Area
        </div>
      </div>
    </div>
  );
}
