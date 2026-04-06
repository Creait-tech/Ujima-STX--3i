"use server"

import { z } from "zod"

const ProjectConceptSchema = z.object({
  title: z.string(),
  values: z.string(),
  strategy: z.string(),
})

export async function generateProjectConcept(idea: string) {
  const apiKey = process.env.GOOGLE_GENERATIVE_AI_API_KEY

  // Return mock data if no API key is present
  if (!apiKey) {
    // Simulate delay
    await new Promise((resolve) => setTimeout(resolve, 2000))
    return {
      title: "Eco-Resilient Coastal Haven",
      values: "Community-led stewardship, regenerative ecosystems, and adaptive resilience.",
      strategy:
        "Integrating elevated modular housing with restored mangrove buffers to create a flood-resistant, self-sustaining community hub.",
    }
  }

  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: `As a senior architectural strategist for Ujima STX, generate a conceptual project brief based on this user input: "${idea}". Format JSON: {"title": "string", "values": "string", "strategy": "string"}.`,
                },
              ],
            },
          ],
          generationConfig: { responseMimeType: "application/json" },
        }),
      },
    )

    const data = await response.json()

    if (data.error) {
      throw new Error(data.error.message)
    }

    const textPart = data.candidates?.[0]?.content?.parts?.[0]?.text
    if (!textPart) throw new Error("No content generated")

    return JSON.parse(textPart)
  } catch (error) {
    console.error("Error generating concept:", error)
    throw new Error("Our visionary tool is currently recalibrating. Please try again later.")
  }
}
