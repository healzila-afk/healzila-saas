import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white flex flex-col items-center justify-center p-6">

      <h1 className="text-5xl font-bold text-center">
        Healzila AI Health Assistant
      </h1>

      <p className="mt-4 text-lg text-gray-300 text-center max-w-xl">
        AI-powered healthcare assistant for symptoms, health tracking, and smart medical guidance.
      </p>

      <div className="mt-8 flex gap-4">
        
        <Link href="/dashboard">
          <button className="px-6 py-3 bg-green-500 rounded-xl font-semibold">
            Go to Dashboard
          </button>
        </Link>

        <Link href="/auth/login">
          <button className="px-6 py-3 border border-white rounded-xl">
            Login
          </button>
        </Link>

      </div>

      <p className="mt-10 text-sm text-gray-500">
        ⚠️ Not a medical diagnosis tool. Always consult professionals.
      </p>

    </div>
  );
}
