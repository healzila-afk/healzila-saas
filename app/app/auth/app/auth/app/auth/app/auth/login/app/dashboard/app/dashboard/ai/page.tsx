"use client";

import { useState } from "react";

export default function AIPage() {
  const [messages, setMessages] = useState<{ role: string; content: string }[]>([]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    const res = await fetch("/api/ai/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: input }),
    });

    const data = await res.json();

    const aiMessage = { role: "ai", content: data.reply };

    setMessages((prev) => [...prev, aiMessage]);
  };

  return (
    <div className="min-h-screen bg-black text-white p-6 flex flex-col">
      
      <h1 className="text-2xl font-bold mb-4">
        Healzila AI Assistant
      </h1>

      <div className="flex-1 overflow-y-auto space-y-3 border border-gray-800 p-4 rounded-lg">
        {messages.map((msg, i) => (
          <div key={i} className={msg.role === "user" ? "text-right" : "text-left"}>
            <span className="inline-block bg-gray-800 px-4 py-2 rounded-xl">
              {msg.content}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-4 flex gap-2">
        <input
          className="flex-1 p-3 rounded-lg bg-gray-900 border border-gray-700"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask your health question..."
        />

        <button
          onClick={sendMessage}
          className="px-6 py-3 bg-green-500 rounded-lg font-semibold"
        >
          Send
        </button>
      </div>

    </div>
  );
}
