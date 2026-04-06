"use client"

import { useState } from "react"
import { Sparkles, Loader2 } from "lucide-react"
import { FadeIn } from "@/components/ui/fade-in"
import { generateProjectConcept } from "@/app/actions"

export const VisionaryLab = () => {
  const [idea, setIdea] = useState("")
  const [result, setResult] = useState<{ title: string; values: string; strategy: string } | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const handleGenerate = async () => {
    if (!idea.trim()) return
    setLoading(true)
    setError("")
    setResult(null)

    try {
      const data = await generateProjectConcept(idea)
      setResult(data)
    } catch (err) {
      console.error(err)
      setError("Our visionary tool is currently recalibrating. Please try again later.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="visionary-lab" className="py-24 px-6 bg-gray-100 relative border-y border-black/5 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60vw] h-[60vw] bg-purple-200/30 rounded-full blur-[150px] pointer-events-none" />
      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <FadeIn>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/30 bg-purple-100 text-purple-600 text-xs tracking-widest uppercase mb-6">
            <Sparkles size={12} />
            Ujima Intelligence™
          </div>
          <h2 className="text-3xl md:text-5xl font-serif mb-6 text-black">The Visionary Lab</h2>
          <p className="text-gray-600 max-w-xl mx-auto mb-10 font-light text-lg">
            Experience our commitment to Innovation. Describe a community need, and watch our proprietary model draft a
            regenerative concept.
          </p>
        </FadeIn>
        <FadeIn delay={200}>
          <div className="relative max-w-2xl mx-auto mb-12 group">
            <input
              type="text"
              value={idea}
              onChange={(e) => setIdea(e.target.value)}
              placeholder="e.g., A multi-generational housing complex in a flood-prone coastal area..."
              className="w-full bg-transparent border-b border-black/20 py-4 text-xl text-center text-black placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors font-serif"
              onKeyDown={(e) => e.key === "Enter" && handleGenerate()}
            />
            <button
              onClick={handleGenerate}
              disabled={loading || !idea}
              className="mt-8 flex items-center gap-2 mx-auto px-8 py-3 bg-black text-white hover:bg-purple-600 disabled:opacity-50 transition-all uppercase tracking-widest text-xs font-bold cursor-pointer"
            >
              {loading ? <Loader2 className="animate-spin" size={14} /> : <Sparkles size={14} />}
              {loading ? "Analyzing..." : "Generate Vision"}
            </button>
            {error && <p className="text-red-500 text-sm mt-4">{error}</p>}
          </div>
        </FadeIn>
        {result && (
          <FadeIn className="text-left mt-12 bg-white border border-black/10 p-8 md:p-12 relative overflow-hidden shadow-sm">
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-purple-500 to-transparent" />
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              <div className="md:col-span-4 md:border-r border-black/10 pr-6">
                <h3 className="text-xs text-purple-600 uppercase tracking-widest mb-2">Project Concept</h3>
                <div className="text-3xl font-serif text-black leading-tight">{result.title}</div>
              </div>
              <div className="md:col-span-8 space-y-6 pl-4">
                <div>
                  <h4 className="text-xs text-gray-500 uppercase tracking-widest mb-2">Strategic Approach</h4>
                  <p className="text-gray-700 font-light leading-relaxed">{result.strategy}</p>
                </div>
                <div>
                  <h4 className="text-xs text-gray-500 uppercase tracking-widest mb-2">Values Alignment</h4>
                  <p className="text-gray-700 font-light leading-relaxed italic text-purple-700">{result.values}</p>
                </div>
              </div>
            </div>
          </FadeIn>
        )}
      </div>
    </section>
  )
}
