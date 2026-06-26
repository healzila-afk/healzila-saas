import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    if (!message) {
      return NextResponse.json(
        { reply: "Message is required" },
        { status: 400 }
      );
    }

    // SIMPLE MOCK AI (SAFE MVP VERSION)
    // Later we will connect OpenAI key

    const reply = `Healzila AI Response: I understand your concern about "${message}". 
Please monitor symptoms and stay hydrated. If symptoms worsen, consult a doctor.`;

    return NextResponse.json({ reply });
  } catch (error) {
    return NextResponse.json(
      { reply: "Server error occurred" },
      { status: 500 }
    );
  }
}
