"use client"

import { useState, useEffect } from "react"
import { Menu, X, ArrowRight, ChevronDown, ArrowUpRight, Mail, MapPin, Linkedin } from "lucide-react"
import { CustomCursor } from "@/components/ui/custom-cursor"
import { FadeIn } from "@/components/ui/fade-in"
import { AnimatedCounter } from "@/components/ui/animated-counter"
import { VisionaryLab } from "@/components/visionary-lab"

const UjimaWebsite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.querySelector(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMenuOpen(false)
    }
  }

  const navLinks = [
    { name: "Vision", href: "#vision" },
    { name: "Projects", href: "#projects" },
    { name: "Approach", href: "#approach" },
    { name: "Services", href: "#services" },
    { name: "AI Lab", href: "#visionary-lab" },
    { name: "Team", href: "#team" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-purple-200 selection:text-black overflow-x-hidden cursor-none">
      <CustomCursor />

      {/* Navigation */}
      <nav
        className={`fixed w-full z-50 transition-all duration-700 ease-in-out ${scrolled ? "bg-white/90 backdrop-blur-md py-4 border-b border-black/5" : "bg-transparent py-8"}`}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex justify-between items-center">
          <div
            className="text-xl font-serif tracking-widest flex items-center gap-3 z-50 cursor-pointer text-black"
            onClick={() => scrollToSection("#vision")}
          >
            <span className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></span>
            UJIMA STX
          </div>
          <div className="hidden md:flex gap-12 items-center">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="text-xs text-gray-600 hover:text-black transition-colors uppercase tracking-[0.2em] font-medium cursor-pointer"
              >
                {link.name}
              </button>
            ))}
          </div>
          <button className="md:hidden z-50 text-black cursor-pointer" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <header id="vision" className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center grayscale opacity-20 mix-blend-multiply animate-ken-burns transform scale-105 transition-transform duration-[20s]"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/20 to-white"></div>
        </div>

        <div className="relative z-10 text-center max-w-6xl mx-auto mt-20">
          <FadeIn delay={200}>
            <p className="text-purple-600 text-xs md:text-sm tracking-[0.3em] uppercase mb-8 font-medium">
              Est. 2025 • St. Croix
            </p>
          </FadeIn>
          <FadeIn delay={400}>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif font-light leading-[1] mb-12 text-black tracking-tight">
              Rooted in Place. <br />
              <span className="italic font-light text-gray-500">Focused on Future.</span>
            </h1>
          </FadeIn>
          <FadeIn delay={600}>
            <div className="flex flex-col md:flex-row justify-center items-center gap-12 text-left max-w-3xl mx-auto mt-12">
              <div className="h-px w-24 bg-purple-500 hidden md:block"></div>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-light">
                We design and develop regenerative, resilient, and community-forward housing projects that serve people
                first.
              </p>
            </div>
          </FadeIn>
        </div>
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce text-gray-400 font-light">
          <ChevronDown size={20} />
        </div>
      </header>

      {/* Impact Numbers Bar */}
      <section className="py-12 border-y border-black/5 bg-gray-50">
        <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { number: 250, suffix: "+", label: "Planned Units" },
            { number: 20, suffix: "+", label: "Years Experience" },
            { number: 4, suffix: "", label: "Signature Projects" },
            { number: 100, suffix: "%", label: "Mission Aligned" },
          ].map((stat, i) => (
            <div key={i}>
              <div className="text-4xl md:text-5xl font-serif font-light text-black mb-2">
                <AnimatedCounter end={stat.number} suffix={stat.suffix} />
              </div>
              <div className="text-xs uppercase tracking-widest text-gray-500">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Approach Section */}
      <section id="approach" className="bg-white overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Image Side with Parallax feel */}
          <div className="relative min-h-[60vh] lg:min-h-screen overflow-hidden group">
            <div className="absolute inset-0 bg-gray-100 transition-transform duration-[2s] ease-out scale-110 group-hover:scale-100">
              <img
                src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2700&auto=format&fit=crop"
                alt="Architecture"
                className="w-full h-full object-cover opacity-80 grayscale hover:grayscale-0 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-white/50 to-transparent"></div>
            </div>
            <div className="absolute bottom-12 left-12 right-12 z-10">
              <h2 className="text-5xl md:text-7xl font-serif text-black mb-4 leading-none drop-shadow-2xl">
                Beyond <br />
                Buildings.
              </h2>
              <div className="h-1 w-20 bg-purple-500 shadow-lg"></div>
            </div>
          </div>

          {/* Text Side */}
          <div className="px-8 py-24 md:px-24 md:py-32 flex flex-col justify-center relative bg-white">
            <FadeIn>
              <span className="text-purple-600 tracking-[0.2em] text-xs uppercase mb-8 block font-bold">
                Our Philosophy
              </span>
              <p className="text-2xl md:text-4xl font-serif leading-tight mb-16 text-gray-700">
                &quot;We don&apos;t just build structures; we architect ecosystems where community, equity, and
                resilience thrive together.&quot;
              </p>
            </FadeIn>

            <div className="space-y-12">
              {[
                { title: "Equity", desc: "Development that serves the people who have historically been left behind." },
                { title: "Resilience", desc: "Building for climate, cultural continuity, and long-term impact." },
                { title: "Innovation", desc: "We embrace future-forward, design-driven approaches." },
                {
                  title: "Integrity",
                  desc: "Our word and work are grounded in care, transparency, and accountability.",
                },
              ].map((item, i) => (
                <FadeIn key={i} delay={i * 100}>
                  <div className="group border-b border-black/10 pb-8 hover:border-purple-500 transition-colors duration-500 cursor-pointer">
                    <div className="flex justify-between items-center">
                      <h3 className="text-xl font-serif text-black group-hover:text-purple-600 transition-colors">
                        {item.title}
                      </h3>
                      <ArrowRight
                        size={16}
                        className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-purple-600"
                      />
                    </div>
                    <p className="text-gray-500 font-light leading-relaxed mt-2 text-sm max-w-md">{item.desc}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects - Horizontal / Gallery Style */}
      <section id="projects" className="py-32 px-6 md:px-12 bg-gray-50">
        <div className="max-w-[1400px] mx-auto">
          <FadeIn>
            <div className="flex flex-col md:flex-row justify-between items-end mb-24 border-b border-black/10 pb-8">
              <h2 className="text-4xl md:text-6xl font-serif text-black">Selected Works</h2>
              <p className="text-gray-500 mt-4 md:mt-0 text-right max-w-sm">
                Regenerative futures projected through architecture, planning, and capital.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-24">
            {[
              {
                title: "Vitality Senior Living",
                type: "Wellness Campus",
                imgUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
              },
              {
                title: "Thrive Village",
                type: "Cultural Development",
                imgUrl: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?q=80&w=2070&auto=format&fit=crop",
              },
              {
                title: "STEAMIE Hub",
                type: "Innovation Node",
                imgUrl: "https://images.unsplash.com/photo-1506097425191-7ad538b29cef?q=80&w=2070&auto=format&fit=crop",
              },
              {
                title: "Age-Friendly Village",
                type: "Accessible Housing",
                imgUrl: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop",
              },
            ].map((project, i) => (
              <FadeIn key={i} delay={i % 2 === 0 ? 0 : 200}>
                <div className="group cursor-pointer">
                  <div className="relative aspect-[4/3] overflow-hidden mb-8 bg-gray-100">
                    <img
                      src={project.imgUrl || "/placeholder.svg"}
                      alt={project.title}
                      className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[1.5s] ease-[cubic-bezier(0.25,1,0.5,1)] opacity-80 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-50"></div>
                    <div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <span className="inline-flex items-center gap-2 px-4 py-2 bg-black text-white text-xs font-bold uppercase tracking-widest">
                        View Project <ArrowUpRight size={12} />
                      </span>
                    </div>
                  </div>
                  <div className="flex justify-between items-start border-t border-black/10 pt-6">
                    <div>
                      <h3 className="text-2xl font-serif mb-2 text-black group-hover:text-purple-600 transition-colors duration-500">
                        {project.title}
                      </h3>
                      <p className="text-gray-500 text-sm tracking-widest uppercase">{project.type}</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Services List */}
      <section id="services" className="py-32 px-6 bg-white">
        <div className="max-w-[1000px] mx-auto">
          <FadeIn>
            <h2 className="text-xs text-purple-600 tracking-[0.3em] uppercase mb-16 text-center">Our Expertise</h2>
          </FadeIn>
          <div className="divide-y divide-black/10">
            {[
              "Full-Scope Development",
              "Design Strategy + Feasibility",
              "Capital & Partnership Structuring",
              "Cultural & Community Planning",
            ].map((service, i) => (
              <FadeIn key={i} delay={i * 50}>
                <div className="py-12 group flex flex-col md:flex-row justify-between items-baseline hover:bg-gray-50 transition-colors px-4 cursor-pointer">
                  <h3 className="text-3xl md:text-5xl font-serif font-light text-gray-500 group-hover:text-black transition-colors duration-500">
                    {service}
                  </h3>
                  <ArrowRight className="text-purple-500 opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-x-4 group-hover:translate-x-0" />
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* GEMINI API INTEGRATION */}
      <VisionaryLab />

      {/* Partners Marquee */}
      <section className="py-12 bg-gray-100 border-y border-black/5 overflow-hidden">
        <p className="text-center text-xs text-gray-500 uppercase tracking-widest mb-8">Strategic Collaborators</p>
        <div className="flex gap-12 animate-marquee whitespace-nowrap opacity-60 grayscale hover:grayscale-0 transition-all duration-500 justify-center">
          {[
            "Urban Land Institute",
            "Enterprise",
            "NeighborWorks",
            "Local Initiatives Support Corp",
            "US Green Building Council",
          ].map((partner, i) => (
            <span key={i} className="text-2xl font-serif text-gray-600 mx-8">
              {partner}
            </span>
          ))}
        </div>
      </section>

      {/* Team */}
      <section id="team" className="py-20 bg-gray-50">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
            <FadeIn className="flex flex-col md:flex-row gap-8 md:gap-12 items-start group">
              <div className="w-full md:w-1/3 aspect-[3/4] bg-gray-200 relative grayscale group-hover:grayscale-0 transition-all duration-700 overflow-hidden">
                <img src="/images/leon-caldwell.webp" alt="Leon Caldwell" className="w-full h-full object-cover" />
              </div>
              <div className="flex-1 pt-2">
                <h3 className="text-3xl font-serif mb-2 text-black">Leon Caldwell, Ph.D.</h3>
                <p className="text-purple-600 text-xs tracking-widest uppercase mb-4">Founder, Ujima Developers</p>
                <p className="text-gray-600 leading-relaxed font-light text-lg">
                  Social impact strategist and equity-centered developer with 20+ years of experience designing and
                  funding mission-aligned housing.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={200} className="flex flex-col md:flex-row gap-8 md:gap-12 items-start group">
              <div className="w-full md:w-1/3 aspect-[3/4] bg-gray-200 relative grayscale group-hover:grayscale-0 transition-all duration-700 overflow-hidden">
                <img src="/images/akeema-edwards.avif" alt="Akeema Edwards" className="w-full h-full object-cover" />
              </div>
              <div className="flex-1 pt-2">
                <h3 className="text-3xl font-serif mb-2 text-black">Akeema Edwards</h3>
                <p className="text-purple-600 text-xs tracking-widest uppercase mb-4">Founder, XE Aesthetic</p>
                <p className="text-gray-600 leading-relaxed font-light text-lg">
                  Architectural designer and cultural futurist blending high-performance design with climate and
                  cultural context.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-white pt-24 pb-12 px-6 border-t border-black/10">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
            <div className="lg:col-span-8">
              <FadeIn>
                <h2 className="text-5xl md:text-8xl font-serif leading-none tracking-tight mb-8 text-black">
                  Let&apos;s Build <br />
                  <span className="italic text-purple-300">Enduringly.</span>
                </h2>
              </FadeIn>
              <div className="flex flex-col sm:flex-row gap-6">
                <button className="px-10 py-5 bg-black text-white text-sm tracking-widest uppercase hover:bg-purple-600 transition-colors duration-300 font-bold cursor-pointer">
                  Start a Project
                </button>
                <button className="px-10 py-5 border border-black/20 text-black text-sm tracking-widest uppercase hover:border-purple-500 hover:text-purple-600 transition-colors duration-300 cursor-pointer">
                  Investor Relations
                </button>
              </div>
            </div>
            <div className="lg:col-span-4 flex flex-col justify-end">
              <div className="space-y-6 text-right">
                <div className="flex items-center justify-end gap-3 text-gray-500 hover:text-black transition-colors cursor-pointer">
                  <span className="text-sm tracking-widest uppercase">info@ujimastx.com</span>
                  <Mail size={16} />
                </div>
                <div className="flex items-center justify-end gap-3 text-gray-500 hover:text-black transition-colors cursor-pointer">
                  <span className="text-sm tracking-widest uppercase">St. Croix, USVI</span>
                  <MapPin size={16} />
                </div>
                <div className="flex items-center justify-end gap-3 text-gray-500 hover:text-black transition-colors cursor-pointer">
                  <span className="text-sm tracking-widest uppercase">LinkedIn</span>
                  <Linkedin size={16} />
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-black/5 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 uppercase tracking-widest">
            <p>&copy; 2025 Ujima STX</p>
            <div className="flex gap-8 mt-4 md:mt-0">
              <a href="#" className="hover:text-black transition-colors">
                Privacy
              </a>
              <a href="#" className="hover:text-black transition-colors">
                Terms
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default UjimaWebsite
