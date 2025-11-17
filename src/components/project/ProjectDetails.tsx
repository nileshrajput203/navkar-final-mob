
"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  CheckCircle2,
  Building,
  MapPin,
  GalleryVertical,
  ClipboardList,
  Send,
} from "lucide-react";
import type { projects } from "@/lib/data";
import Autoplay from "embla-carousel-autoplay";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useEnquiryStore } from "@/hooks/use-enquiry-store";

type Project = (typeof projects)[0];

interface ProjectDetailsProps {
    project: Project;
}

export function ProjectDetails({ project }: ProjectDetailsProps) {
  const { open: openEnquiryPopup } = useEnquiryStore();

  return (
    <div>
      <div className="relative h-64 md:h-96">
        <Image
          src={project.gallery[0].src}
          alt={project.gallery[0].alt}
          data-ai-hint={project.gallery[0].aiHint}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/20" />
        <div className="absolute inset-0 flex items-end text-white">
          <div className="mx-auto max-w-7xl px-4 w-full pb-8">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              {project.name}
            </h1>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-16 md:py-24">
        <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
            
            <Link href="/#projects">
                <Button variant="outline">
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Back to All Projects
                </Button>
            </Link>

            {/* About Section */}
            <section id="about">
                <h2 className="text-3xl font-bold tracking-tight flex items-center gap-3">
                <Building className="h-8 w-8 text-primary" />
                About {project.name}
                </h2>
                <div className="mt-4 text-lg text-muted-foreground space-y-4">
                    <p>{project.description}</p>
                </div>
                <div className="mt-6 grid sm:grid-cols-2 gap-4 text-lg">
                    <div className="flex items-center gap-3">
                        <MapPin className="h-6 w-6 text-primary" />
                        <div><strong>Location:</strong> {project.location}</div>
                    </div>
                    <div className="flex items-center gap-3">
                        <Building className="h-6 w-6 text-primary" />
                        <div><strong>Type:</strong> {project.type}</div>
                    </div>
                </div>
            </section>

            {/* Highlights Section */}
            <section id="highlights">
                <h2 className="text-3xl font-bold tracking-tight flex items-center gap-3">
                <CheckCircle2 className="h-8 w-8 text-primary" />
                Project Highlights
                </h2>
                <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {project.highlights.map((highlight) => (
                    <Card key={highlight} className="bg-secondary">
                    <CardContent className="p-4 flex items-center gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                        <span className="font-medium">{highlight}</span>
                    </CardContent>
                    </Card>
                ))}
                </div>
            </section>

            {/* Gallery Section */}
            <section id="gallery">
                <h2 className="text-3xl font-bold tracking-tight flex items-center gap-3">
                <GalleryVertical className="h-8 w-8 text-primary" />
                Gallery
                </h2>
                <div className="mt-6">
                <Carousel 
                    className="w-full" 
                    opts={{ loop: true }}
                    plugins={[
                        Autoplay({
                            delay: 3000,
                            stopOnInteraction: true,
                        }),
                    ]}
                >
                    <CarouselContent>
                    {project.gallery.map((image, index) => (
                        <CarouselItem key={index}>
                        <div className="aspect-[4/3] relative overflow-hidden rounded-2xl shadow-lg">
                            <Image
                            src={image.src}
                            alt={image.alt}
                            data-ai-hint={image.aiHint}
                            fill
                            className="object-cover"
                            />
                        </div>
                        </CarouselItem>
                    ))}
                    </CarouselContent>
                    <CarouselPrevious className="left-4" />
                    <CarouselNext className="right-4" />
                </Carousel>
                </div>
            </section>
            </div>

            {/* Sticky Enquire Card */}
            <aside className="lg:col-span-1">
            <div className="sticky top-24">
                <Card className="shadow-xl">
                <CardHeader>
                    <CardTitle className="text-2xl">Interested in this project?</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground mb-6">
                    Get the brochure, floor plans, and pricing details directly in your inbox.
                    </p>
                    <Button size="lg" className="w-full" onClick={openEnquiryPopup}>
                        <Send className="mr-2 h-4 w-4" />
                        Enquire Now
                    </Button>
                </CardContent>
                </Card>
            </div>
            </aside>
        </div>
      </div>
    </div>
  );
}
