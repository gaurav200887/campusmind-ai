import OpenAI from "openai";
import { NextResponse } from "next/server";

const client = new OpenAI({
  apiKey: process.env.OPENROUTER_API_KEY,
  baseURL: "https://openrouter.ai/api/v1",
});

const models = [
  "deepseek/deepseek-r1-0528:free",
  "google/gemma-3-27b-it:free",
  "mistralai/mistral-7b-instruct:free",
  "meta-llama/llama-3.3-70b-instruct:free",
];

export async function POST(req: Request) {
  const { message } = await req.json();

  for (const model of models) {
    try {
      const completion = await client.chat.completions.create({
        model,
        messages: [
          {
            role: "system",
            content:
              "You are CampusMind AI, a helpful college assistant. Answer clearly and politely.",
          },
          {
            role: "user",
            content: message,
          },
        ],
      });

      return NextResponse.json({
        reply: completion.choices[0].message.content,
        model,
      });
    } catch (error) {
      console.log(`Model failed: ${model}`);
      console.error(error);
    }
  }

  return NextResponse.json(
    {
      reply:
        "⚠️ All free AI models are currently busy. Please try again in a minute.",
    },
    {
      status: 503,
    }
  );
}