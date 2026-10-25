
import OpenAI from "openai";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

const models = [
  "deepseek/deepseek-r1-0528:free",
  "google/gemma-3-27b-it:free",
  "mistralai/mistral-7b-instruct:free",
  "meta-llama/llama-3.3-70b-instruct",
];

export async function POST(req: Request) {
  // Check API key
  const apiKey = process.env.OPENROUTER_API_KEY;

  if (!apiKey) {
    console.error("OPENROUTER_API_KEY is missing");

    return NextResponse.json(
      { error: "AI service is not configured. Please try again later." },
      { status: 500 }
    );
  }

  // Validate request
  let body: { message?: unknown };

  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid request body." },
      { status: 400 }
    );
  }

  if (
    typeof body.message !== "string" ||
    !body.message.trim() ||
    body.message.length > 10000
  ) {
    return NextResponse.json(
      { error: "Enter a message under 10,000 characters." },
      { status: 400 }
    );
  }

  const client = new OpenAI({
    apiKey,
    baseURL: "https://openrouter.ai/api/v1",
    timeout: 20000,
    maxRetries: 0,
  });

  // Try each model until one responds
  for (const model of models) {
    try {
      const completion = await client.chat.completions.create({
        model,
        messages: [
          {
            role: "system",
            content:
              "You are CampusMind AI, a helpful college assistant. Answer clearly, politely, and accurately. If you are unsure, say so.",
          },
          {
            role: "user",
            content: body.message.trim(),
          },
        ],
      });

      const reply = completion.choices[0]?.message?.content;

      if (typeof reply !== "string" || !reply.trim()) {
        console.error(`Empty response from model: ${model}`);
        continue;
      }

      return NextResponse.json({ reply, model });
    } catch (error: unknown) {
      const err = error as {
        status?: number;
        code?: string;
        message?: string;
      };

      // Log the actual failure in Vercel Runtime Logs.
      console.error("OpenRouter model failed", {
        model,
        status: err.status,
        code: err.code,
        message: err.message,
      });
    }
  }

  return NextResponse.json(
    {
      error:
        "AI is temporarily unavailable. Please try again shortly.",
    },
    { status: 503 }
  );
}
