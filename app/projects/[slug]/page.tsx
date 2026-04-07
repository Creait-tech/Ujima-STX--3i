import { notFound } from "next/navigation"
import { getProjectBySlug, getAllProjectSlugs } from "@/lib/projects"
import { ProjectPage } from "@/components/project-page"
import type { Metadata } from "next"

export async function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const project = getProjectBySlug(slug)
  if (!project) return {}

  return {
    title: `${project.title} | Ujima STX`,
    description: project.description,
    openGraph: {
      title: `${project.title} — ${project.type} | Ujima STX`,
      description: project.description,
      images: [project.heroImage],
    },
  }
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const project = getProjectBySlug(slug)
  if (!project) notFound()

  return <ProjectPage project={project} />
}
