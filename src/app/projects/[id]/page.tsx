
import { notFound } from "next/navigation";
import { projects } from "@/lib/data";
import ProjectPageClient from "./ProjectPageClient";

interface ProjectPageProps {
  params: { id: string };
}

export function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id.toString(),
  }));
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const projectId = params.id;
  const project = projects.find((p) => p.id.toString() === projectId);

  if (!project) {
    notFound();
  }

  return <ProjectPageClient project={project} />;
}
