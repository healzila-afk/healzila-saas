export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-950 text-white p-6">
      
      <h1 className="text-3xl font-bold">
        Healzila Dashboard
      </h1>

      <p className="text-gray-400 mt-2">
        Welcome to your AI Health Control Center
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">

        <div className="p-6 bg-gray-900 rounded-xl">
          AI Health Assistant
        </div>

        <div className="p-6 bg-gray-900 rounded-xl">
          Symptom Checker
        </div>

        <div className="p-6 bg-gray-900 rounded-xl">
          Health Timeline
        </div>

      </div>

    </div>
  );
}
