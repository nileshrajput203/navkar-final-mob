
"use client";

import { ProjectDetails } from "@/components/project/ProjectDetails";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { PopupEnquiry } from "@/components/landing/PopupEnquiry";
import type { projects } from "@/lib/data";

type Project = (typeof projects)[0];

interface ProjectPageClientProps {
  project: Project;
}

export default function ProjectPageClient({ project }: ProjectPageClientProps) {

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <ProjectDetails project={project} />
      </main>
      <Footer />
      <PopupEnquiry />
    </div>
  );
}
