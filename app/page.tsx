export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white flex flex-col items-center justify-center p-6">
      
      <h1 className="text-5xl font-bold text-center">
        Healzila AI Health Assistant
      </h1>

      <p className="mt-4 text-lg text-gray-300 text-center max-w-xl">
        Your intelligent AI-powered healthcare companion for symptom checking, health tracking, and medical guidance.
      </p>

      <div className="mt-8 flex gap-4">
        <button className="px-6 py-3 bg-green-500 rounded-xl font-semibold">
          Get Started
        </button>

        <button className="px-6 py-3 border border-white rounded-xl">
          Learn More
        </button>
      </div>

      <p className="mt-10 text-sm text-gray-500">
        ⚠️ Not a replacement for professional medical advice.
      </p>

    </div>
  );
}
