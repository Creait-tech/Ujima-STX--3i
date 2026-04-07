"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ArrowUpRight, MapPin, ChevronDown } from "lucide-react"
import { FadeIn } from "@/components/ui/fade-in"
import type { Project, ProjectImage } from "@/lib/projects"

function GalleryModal({
  image,
  onClose,
}: {
  image: ProjectImage
  onClose: () => void
}) {
  return (
    <div
      className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 cursor-pointer"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-white/80 hover:text-white text-sm uppercase tracking-widest"
      >
        Close
      </button>
      <div className="relative w-full max-w-6xl aspect-[16/10]">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes="90vw"
          className="object-contain"
        />
      </div>
      <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60 text-xs tracking-widest uppercase">
        {image.alt}
      </p>
    </div>
  )
}

export function ProjectPage({ project }: { project: Project }) {
  const [selectedImage, setSelectedImage] = useState<ProjectImage | null>(null)

  const renders = project.gallery.filter((img) => img.category === "render")
  const plans = project.gallery.filter(
    (img) => img.category === "floorplan" || img.category === "siteplan"
  )

  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-purple-200 selection:text-black">
      {selectedImage && (
        <GalleryModal image={selectedImage} onClose={() => setSelectedImage(null)} />
      )}

      {/* Sticky Nav */}
      <nav className="fixed w-full z-40 bg-white/90 backdrop-blur-md py-4 border-b border-black/5">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex justify-between items-center">
          <Link
            href="/#projects"
            className="flex items-center gap-3 text-gray-500 hover:text-black transition-colors text-xs uppercase tracking-[0.2em]"
          >
            <ArrowLeft size={14} />
            All Projects
          </Link>
          <Link
            href="/"
            className="text-xl font-serif tracking-widest flex items-center gap-3 text-black"
          >
            <span className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></span>
            UJIMA STX
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <header className="relative h-[70vh] md:h-[80vh] overflow-hidden">
        <Image
          src={project.heroImage}
          alt={`${project.title} — ${project.type}`}
          fill
          sizes="100vw"
          className="object-cover grayscale opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-white/20" />
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 lg:p-24">
          <div className="max-w-[1400px] mx-auto">
            <FadeIn>
              <p className="text-purple-600 text-xs tracking-[0.3em] uppercase mb-4 font-medium flex items-center gap-2">
                <MapPin size={12} />
                {project.location}
              </p>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-light leading-[1] mb-6 text-black tracking-tight">
                {project.title}
              </h1>
              <p className="text-gray-500 text-lg md:text-xl font-light max-w-2xl">
                {project.type}
              </p>
            </FadeIn>
          </div>
        </div>
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce text-gray-400">
          <ChevronDown size={20} />
        </div>
      </header>

      {/* Overview */}
      <section className="py-24 px-6 md:px-12 border-b border-black/5">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-7">
            <FadeIn>
              <h2 className="text-xs text-purple-600 tracking-[0.3em] uppercase mb-8 font-bold">
                Project Overview
              </h2>
              <p className="text-xl md:text-2xl font-serif leading-relaxed text-gray-700 mb-8">
                {project.description}
              </p>
              <p className="text-gray-500 font-light leading-relaxed text-lg">
                {project.overview}
              </p>
            </FadeIn>
          </div>
          <div className="lg:col-span-5">
            <FadeIn delay={200}>
              <h3 className="text-xs text-purple-600 tracking-[0.3em] uppercase mb-8 font-bold">
                Project Specs
              </h3>
              <div className="space-y-0 divide-y divide-black/10">
                {project.specs.map((spec, i) => (
                  <div
                    key={i}
                    className="flex justify-between items-baseline py-4"
                  >
                    <span className="text-gray-500 text-sm font-light">
                      {spec.label}
                    </span>
                    <span className="text-black font-serif text-lg">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-24 px-6 md:px-12 bg-gray-50 border-b border-black/5">
        <div className="max-w-[1400px] mx-auto">
          <FadeIn>
            <h2 className="text-xs text-purple-600 tracking-[0.3em] uppercase mb-16 font-bold text-center">
              Key Highlights
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {project.highlights.map((highlight, i) => (
              <FadeIn key={i} delay={i * 100}>
                <div className="border-l-2 border-purple-500/30 pl-6 py-2">
                  <p className="text-gray-700 font-light leading-relaxed">
                    {highlight}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery - Renders */}
      {renders.length > 0 && (
        <section className="py-24 px-6 md:px-12 border-b border-black/5">
          <div className="max-w-[1400px] mx-auto">
            <FadeIn>
              <h2 className="text-xs text-purple-600 tracking-[0.3em] uppercase mb-16 font-bold">
                Architectural Renders
              </h2>
            </FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {renders.map((image, i) => (
                <FadeIn key={i} delay={i * 100}>
                  <div
                    className={`relative overflow-hidden bg-gray-100 cursor-pointer group ${
                      i === 0 ? "md:col-span-2 aspect-[21/9]" : "aspect-[4/3]"
                    }`}
                    onClick={() => setSelectedImage(image)}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes={i === 0 ? "100vw" : "50vw"}
                      className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[1.5s] ease-[cubic-bezier(0.25,1,0.5,1)] opacity-80 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <p className="text-white text-xs tracking-widest uppercase">
                        {image.alt}
                      </p>
                      <ArrowUpRight size={16} className="text-white" />
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Gallery - Plans */}
      {plans.length > 0 && (
        <section className="py-24 px-6 md:px-12 bg-gray-50 border-b border-black/5">
          <div className="max-w-[1400px] mx-auto">
            <FadeIn>
              <h2 className="text-xs text-purple-600 tracking-[0.3em] uppercase mb-16 font-bold">
                Floor Plans & Site Maps
              </h2>
            </FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {plans.map((image, i) => (
                <FadeIn key={i} delay={i * 100}>
                  <div
                    className="relative aspect-[4/3] overflow-hidden bg-white border border-black/10 cursor-pointer group"
                    onClick={() => setSelectedImage(image)}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="33vw"
                      className="object-contain p-2 group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-3 left-3 right-3">
                      <p className="text-gray-500 text-xs tracking-widest uppercase group-hover:text-black transition-colors">
                        {image.alt}
                      </p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-24 px-6 md:px-12 text-center">
        <FadeIn>
          <p className="text-gray-500 font-light text-lg mb-8">
            Interested in this project?
          </p>
          <a
            href={`mailto:info@ujimastx.com?subject=Inquiry%20about%20${encodeURIComponent(project.title)}`}
            className="inline-block px-10 py-5 bg-black text-white text-sm tracking-widest uppercase hover:bg-purple-600 transition-colors duration-300 font-bold"
          >
            Get In Touch
          </a>
        </FadeIn>
      </section>

      {/* Footer */}
      <footer className="border-t border-black/10 py-8 px-6">
        <div className="max-w-[1400px] mx-auto flex justify-between items-center text-xs text-gray-500 uppercase tracking-widest">
          <p>&copy; {new Date().getFullYear()} Ujima STX</p>
          <Link href="/" className="hover:text-black transition-colors">
            Back to Home
          </Link>
        </div>
      </footer>
    </div>
  )
}
