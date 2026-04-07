export interface ProjectImage {
  src: string
  alt: string
  category: "render" | "floorplan" | "siteplan" | "detail"
}

export interface ProjectSpec {
  label: string
  value: string
}

export interface Project {
  slug: string
  title: string
  type: string
  location: string
  heroImage: string
  description: string
  overview: string
  specs: ProjectSpec[]
  highlights: string[]
  gallery: ProjectImage[]
}

export const projects: Project[] = [
  {
    slug: "vitality-senior-living",
    title: "Vitality Senior Living",
    type: "Wellness Campus",
    location: "St. Croix, USVI",
    heroImage: "/projects/vitality-11-0.png",
    description:
      "264-unit integrated senior living community addressing a critical supply gap. Features independent living, assisted living, and memory care units with on-site healthcare partnerships.",
    overview:
      "Vitality Senior Living is a proposed comprehensive senior housing and healthcare development designed to serve the aging population of St. Croix, U.S. Virgin Islands. Market analysis from the USVI Bureau of Economic Research demonstrates a severe imbalance between supply and demand, with only 161 senior housing units available to serve a demand of 425 units — a critical supply gap of 264 units. The name \"Vitality\" embodies the core mission: fostering life, energy, and resilience for St. Croix's senior community through vibrant, engaged living.",
    specs: [
      { label: "Total Units", value: "264" },
      { label: "Site Area", value: "~8 Acres" },
      { label: "Independent Living", value: "180 Units" },
      { label: "Assisted Living", value: "70 Units" },
      { label: "Memory Care", value: "14 Units" },
      { label: "Buildings", value: "3 (A, B, C)" },
      { label: "Building A", value: "95,000 sq ft" },
      { label: "Buildings B & C", value: "70,000 sq ft each" },
      { label: "Zoning", value: "R-4 Medium-High Density" },
      { label: "Design", value: "Caribbean Modernist" },
    ],
    highlights: [
      "Strategic location near Juan F. Luis Hospital and Sunny Isle Shopping Center",
      "Contemporary Caribbean modernist architecture with solar panel arrays",
      "Central lobby, healthcare center, commercial kitchen, and activity spaces in Building A",
      "Deep-set windows and large roof overhangs for tropical climate response",
      "Comprehensive care continuum from independent to memory care",
      "Integrated healthcare services with direct external access",
    ],
    gallery: [
      { src: "/projects/vitality-11-0.png", alt: "Vitality campus aerial render", category: "render" },
      { src: "/projects/vitality-12-0.png", alt: "Vitality campus aerial — alternate angle", category: "render" },
      { src: "/projects/vitality-10-0.png", alt: "Vitality street-level building exterior", category: "render" },
      { src: "/projects/vitality-13-0.png", alt: "Vitality courtyard walkway with water feature", category: "render" },
      { src: "/projects/vitality-17-0.png", alt: "Vitality courtyard with clock tower and benches", category: "render" },
      { src: "/projects/vitality-18-0.png", alt: "St. Croix neighborhood context", category: "render" },
    ],
  },
  {
    slug: "thrive-village",
    title: "Thrive Village",
    type: "Mixed-Use Cultural Hub",
    location: "Philadelphia, PA",
    heroImage: "/projects/thrive-fam-2-0.png",
    description:
      "A community-forward development at W Girard Ave featuring the Food as Medicine Park, shipping container markets, commercial space, and residential units anchored by cultural programming.",
    overview:
      "Thrive Village is a mixed-use development on W Girard Avenue in Philadelphia that reimagines community infrastructure through the lens of food security, cultural anchoring, and economic empowerment. The centerpiece is the Food as Medicine (FAM) Park — a public green space integrating community gardens, nutrition education, and wellness programming. The development also features shipping container markets for local entrepreneurs, ground-floor commercial space, and upper-floor residential units designed to serve the surrounding neighborhood.",
    specs: [
      { label: "Program", value: "Mixed-Use" },
      { label: "Location", value: "W Girard Ave, Philadelphia" },
      { label: "Centerpiece", value: "Food as Medicine Park" },
      { label: "Commercial", value: "Ground-Floor Retail" },
      { label: "Markets", value: "Shipping Container Stalls" },
      { label: "Residential", value: "Upper-Floor Units" },
      { label: "Cultural", value: "Community Programming" },
      { label: "Green Space", value: "Public Park + Gardens" },
    ],
    highlights: [
      "Food as Medicine Park — nutrition, wellness, and community gathering",
      "Shipping container markets supporting local entrepreneurs",
      "Ground-floor commercial space activating the streetscape",
      "Residential units integrated above commercial program",
      "Cultural programming anchor for West Girard corridor",
      "Designed to address food insecurity through built environment",
    ],
    gallery: [
      { src: "/projects/thrive-fam-2-0.png", alt: "Thrive Village street view render", category: "render" },
      { src: "/projects/thrive-fam-page-2.png", alt: "FAM Park exterior at dusk and covered gathering space", category: "render" },
      { src: "/projects/thrive-fam-page-1.png", alt: "Food as Medicine Park site plan", category: "siteplan" },
    ],
  },
  {
    slug: "workforce-housing",
    title: "Workforce Housing",
    type: "Essential Worker Housing",
    location: "St. Croix, USVI",
    heroImage: "/projects/bird-view.png",
    description:
      "Climate-resilient workforce housing adjacent to Gov. Juan F. Luis Hospital. Phase one delivers 50 units with rooftop solar, stormwater infrastructure, and a connector road linking healthcare to community.",
    overview:
      "The Workforce Housing Development is a multi-phase, mixed-income residential community situated adjacent to Governor Juan F. Luis Hospital in Christiansted, St. Croix. The 4- to 5-acre site is master-planned for up to 250 units under R-4 zoning. The development prioritizes essential workers, young professionals, small families, and elderly residents. Phase one delivers a three-story, 50-unit building with studios, one-bedroom, and two-bedroom units, anchored by rooftop solar, stormwater infrastructure, and a new connector road linking the hospital to the community.",
    specs: [
      { label: "Total Site", value: "~5 Acres" },
      { label: "Master Plan", value: "Up to 250 Units" },
      { label: "Phase One", value: "50 Units" },
      { label: "Stories", value: "3" },
      { label: "Unit Mix", value: "Studios, 1BR, 2BR" },
      { label: "Zoning", value: "R-4 Medium-High Density" },
      { label: "Max Density", value: "120 persons/acre" },
      { label: "Buildable Area", value: "108,900 sq ft" },
      { label: "Energy", value: "Rooftop Solar Array" },
      { label: "Infrastructure", value: "Connector Road to JFL" },
    ],
    highlights: [
      "Adjacent to Gov. Juan F. Luis Hospital — walkable healthcare access",
      "New two-way connector road linking hospital to municipal roads",
      "Open-air exterior corridors for cross-ventilation in tropical climate",
      "Rooftop solar arrays and stormwater management infrastructure",
      "Modular layout with perforated blockwork stair towers",
      "Replicable model for community-based workforce housing across USVI",
    ],
    gallery: [
      { src: "/projects/bird-view.png", alt: "Workforce Housing aerial render", category: "render" },
      { src: "/projects/workforce-5-0.png", alt: "Workforce Housing street-level view", category: "render" },
      { src: "/projects/workforce-8-0.png", alt: "Workforce Housing facade close-up", category: "render" },
      { src: "/projects/workforce-10-0.png", alt: "Bioswale and stormwater garden landscape", category: "render" },
      { src: "/projects/workforce-7-0.png", alt: "Workforce Housing site plan overlay", category: "siteplan" },
    ],
  },
  {
    slug: "age-friendly-village",
    title: "Age-Friendly Village",
    type: "Accessible Housing",
    location: "Philadelphia, PA",
    heroImage: "/projects/age-friendly-3-0.png",
    description:
      "Three-story accessible housing development on Leidy Ave designed with WRT for aging-in-place. Features picnic groves, accessible ramps, community gardens, and porch-front living.",
    overview:
      "Age-Friendly Village is a three-story accessible housing development located at 4123-4137 Leidy Avenue in Philadelphia, designed in partnership with Wallace Roberts & Todd (WRT). The project is purpose-built for aging-in-place, featuring universal design principles throughout. The landscape architecture includes picnic groves with chess tables, seating walls, planters, community gardens, and native plantings including Pagoda Dogwood and Marginal Wood Fern. Accessible ramps and porch-front living create a welcoming, connected community.",
    specs: [
      { label: "Address", value: "4123-4137 Leidy Ave" },
      { label: "Stories", value: "3" },
      { label: "Design Partner", value: "WRT (Wallace Roberts & Todd)" },
      { label: "Design Approach", value: "Universal / Aging-in-Place" },
      { label: "Landscape", value: "Picnic Groves + Gardens" },
      { label: "Amenities", value: "Chess Tables, Seating Walls" },
      { label: "Accessibility", value: "Full ADA + Universal Design" },
      { label: "Native Plants", value: "Dogwood, Fern, Perennials" },
    ],
    highlights: [
      "Designed with WRT — one of Philadelphia's premier architecture firms",
      "Universal design for aging-in-place at every scale",
      "Picnic groves, chess tables, and seating walls for outdoor gathering",
      "Community gardens with native plantings and accessible raised beds",
      "Porch-front living fostering neighbor connections",
      "Accessible ramps integrated into site design, not afterthoughts",
    ],
    gallery: [
      { src: "/projects/age-friendly-3-0.png", alt: "Age-Friendly Village street view", category: "render" },
      { src: "/projects/age-friendly-4-0.png", alt: "Age-Friendly Village courtyard view", category: "render" },
      { src: "/projects/age-friendly-page-1.png", alt: "Age-Friendly Village site plan", category: "siteplan" },
      { src: "/projects/age-friendly-page-2.png", alt: "Age-Friendly Village landscape plan", category: "siteplan" },
      { src: "/projects/age-friendly-page-5.png", alt: "Building 1 south street facade elevation", category: "floorplan" },
      { src: "/projects/age-friendly-page-6.png", alt: "Building 1 north backyard facade elevation", category: "floorplan" },
      { src: "/projects/age-friendly-page-7.png", alt: "Building 2 north street facade elevation", category: "floorplan" },
      { src: "/projects/age-friendly-page-8.png", alt: "Building 2 south backyard facade elevation", category: "floorplan" },
    ],
  },
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}

export function getAllProjectSlugs(): string[] {
  return projects.map((p) => p.slug)
}
