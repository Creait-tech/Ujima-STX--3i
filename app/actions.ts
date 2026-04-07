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
                  text: `You are a senior architectural strategist for Ujima STX, a regenerative community development firm based in St. Croix, USVI. Ujima STX specializes in equity-centered, climate-resilient housing that integrates healthcare, cultural programming, and community infrastructure. Their portfolio includes senior living campuses, workforce housing with solar micro-grids, mixed-use cultural hubs with Food as Medicine parks, and accessible aging-in-place communities.

Based on this community need: "${idea}"

Generate a conceptual project brief as JSON with these fields:
- "title": A compelling 3-5 word project name
- "values": One sentence on how this aligns with Ujima STX's core values of equity, resilience, innovation, and integrity
- "strategy": 2-3 sentences describing the regenerative development approach, including specific design strategies, community infrastructure, and climate considerations

Be specific and grounded — reference real design strategies like solar micro-grids, stormwater infrastructure, universal design, mixed-use programming, healthcare integration, or cultural anchoring where relevant.

Format: {"title": "string", "values": "string", "strategy": "string"}`,
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
      if (data.error.code === 429) {
        // Rate limited — wait and retry once
        await new Promise((resolve) => setTimeout(resolve, 30000))
        const retryResponse = await fetch(
          `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              contents: [
                {
                  parts: [
                    {
                      text: `You are a senior architectural strategist for Ujima STX, a regenerative community development firm based in St. Croix, USVI. Ujima STX specializes in equity-centered, climate-resilient housing that integrates healthcare, cultural programming, and community infrastructure. Their portfolio includes senior living campuses, workforce housing with solar micro-grids, mixed-use cultural hubs with Food as Medicine parks, and accessible aging-in-place communities.

Based on this community need: "${idea}"

Generate a conceptual project brief as JSON with these fields:
- "title": A compelling 3-5 word project name
- "values": One sentence on how this aligns with Ujima STX's core values of equity, resilience, innovation, and integrity
- "strategy": 2-3 sentences describing the regenerative development approach, including specific design strategies, community infrastructure, and climate considerations

Be specific and grounded — reference real design strategies like solar micro-grids, stormwater infrastructure, universal design, mixed-use programming, healthcare integration, or cultural anchoring where relevant.

Format: {"title": "string", "values": "string", "strategy": "string"}`,
                    },
                  ],
                },
              ],
              generationConfig: { responseMimeType: "application/json" },
            }),
          },
        )
        const retryData = await retryResponse.json()
        if (retryData.error) throw new Error(retryData.error.message)
        const retryText = retryData.candidates?.[0]?.content?.parts?.[0]?.text
        if (!retryText) throw new Error("No content generated")
        return JSON.parse(retryText)
      }
      throw new Error(data.error.message)
    }

    const textPart = data.candidates?.[0]?.content?.parts?.[0]?.text
    if (!textPart) throw new Error("No content generated")

    return JSON.parse(textPart)
  } catch (error) {
    console.error("Error generating concept:", error)
    throw new Error("Our visionary engine is warming up. Please wait a moment and try again.")
  }
}
