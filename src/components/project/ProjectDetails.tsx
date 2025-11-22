
"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  CheckCircle2,
  Building,
  MapPin,
  GalleryVertical,
  Download,
  Send,
  Award,
} from "lucide-react";
import type { projects } from "@/lib/data";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useEnquiryStore } from "@/hooks/use-enquiry-store";
import { Separator } from "@/components/ui/separator";

type Project = (typeof projects)[0];

interface ProjectDetailsProps {
  project: Project;
}

export function ProjectDetails({ project }: ProjectDetailsProps) {
  const { open: openEnquiryPopup } = useEnquiryStore();

  const reraInfo = project.reraNo && project.reraNo !== "Not Mentioned" ? project.reraNo : null;

  return (
    <div className="bg-background">
      {/* 1. Hero/Banner */}
      <div className="relative h-64 md:h-96">
        <Image
          src={project.image}
          alt={`Hero image for ${project.name}`}
          data-ai-hint={project.aiHint}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="absolute inset-0 flex items-end text-white">
          <div className="mx-auto max-w-7xl px-4 w-full pb-8">
            <motion.h1 
              className="text-4xl md:text-6xl font-bold tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              {project.name}
            </motion.h1>
            <motion.p 
              className="mt-2 text-lg md:text-xl font-medium text-primary-foreground/90"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              {project.status}
            </motion.p>
          </div>
        </div>
      </div>

      {/* 2. Quick Action Buttons */}
      <div className="border-b bg-secondary/50">
          <div className="mx-auto max-w-7xl px-4 py-3 flex flex-wrap items-center justify-start gap-2 md:gap-4">
            <Button variant="ghost" size="sm" onClick={openEnquiryPopup}>
              <Send className="mr-2 h-4 w-4" /> Quick Inquiry
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <a href="#gallery">
                <GalleryVertical className="mr-2 h-4 w-4" /> View Gallery
              </a>
            </Button>
            <Button variant="ghost" size="sm" disabled> 
              <Download className="mr-2 h-4 w-4" /> Download Brochure
            </Button>
             <Link href="/#projects" className="ml-auto">
                <Button variant="outline" size="sm">
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Back to Projects
                </Button>
            </Link>
          </div>
      </div>

      <main className="mx-auto max-w-7xl px-4 py-12 md:py-16">
        <div className="grid lg:grid-cols-3 gap-8 md:gap-12">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-12 md:space-y-16">
            
            {/* 3. Overview/Description Block */}
            <section id="overview">
                <div className="grid md:grid-cols-2 gap-8 items-start">
                    <div className="aspect-[4/3] relative overflow-hidden rounded-lg shadow-md">
                        <Image 
                            src={project.gallery[1]?.src ?? project.image} 
                            alt={project.gallery[1]?.alt ?? project.name}
                            data-ai-hint={project.gallery[1]?.aiHint ?? project.aiHint}
                            fill 
                            className="object-cover"
                        />
                    </div>
                    <div className="flex flex-col h-full">
                        <h2 className="text-3xl font-bold tracking-tight">Project Overview</h2>
                        <p className="mt-4 text-muted-foreground flex-grow">{project.description}</p>
                        {reraInfo && (
                            <div className="mt-4 rounded-md border border-green-300 bg-green-50 p-3">
                                <div className="flex items-center gap-3">
                                    <Award className="h-6 w-6 text-green-700" />
                                    <div>
                                        <h3 className="font-semibold text-green-800">RERA Registered</h3>
                                        <p className="text-sm text-green-700/80">{reraInfo}</p>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* 5. Amenities/Features Row */}
            <section id="amenities">
                <h2 className="text-3xl font-bold tracking-tight">Amenities & Features</h2>
                <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {(project.amenities ?? []).map((amenity) => (
                    <div key={amenity} className="flex items-center gap-3 p-3 rounded-lg bg-secondary/70">
                        <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                        <span className="font-medium text-sm">{amenity}</span>
                    </div>
                ))}
                </div>
            </section>

            {/* 4. Floor Plans/Gallery Section */}
            <section id="gallery">
                <h2 className="text-3xl font-bold tracking-tight">Gallery</h2>
                <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-4">
                    {project.gallery.map((image, index) => (
                        <div key={index} className="aspect-[4/3] relative overflow-hidden rounded-lg shadow-md transition-transform hover:scale-105">
                             <Image
                                src={image.src}
                                alt={image.alt}
                                data-ai-hint={image.aiHint}
                                fill
                                className="object-cover"
                            />
                        </div>
                    ))}
                </div>
            </section>
            
            {/* 7. Location & Contact Section */}
            <section id="location">
                <h2 className="text-3xl font-bold tracking-tight">Location</h2>
                <div className="mt-6 grid md:grid-cols-2 gap-8 items-start rounded-lg border bg-secondary/50 p-6">
                    <div>
                        <h3 className="text-lg font-semibold">Site Address</h3>
                        <p className="mt-2 text-muted-foreground">
                            <MapPin className="inline-block h-4 w-4 mr-2 text-primary"/>
                            {project.location}
                        </p>
                        <Button asChild className="mt-4"> 
                            <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(project.location)}`} target="_blank">View on Google Maps</a>
                        </Button>
                    </div>
                    <div className="aspect-[4/3] w-full bg-muted rounded-md overflow-hidden">
                         {/* Placeholder for map iframe */}
                         <div className="w-full h-full flex items-center justify-center text-muted-foreground/50">
                             <p>Google Map Preview</p>
                         </div>
                    </div>
                </div>
            </section>

          </div>

          {/* Right Column (Sticky) */}
          <aside className="lg:col-span-1">
            <div className="sticky top-24">
                <Card className="shadow-lg border-primary/20">
                    <CardHeader>
                        <CardTitle className="text-2xl flex items-center gap-2"><Send className="h-6 w-6 text-primary"/> Interested?</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground mb-4">
                            Get the brochure, floor plans, and pricing details directly in your inbox.
                        </p>
                        <Button size="lg" className="w-full" onClick={openEnquiryPopup}>
                            Enquire Now
                        </Button>
                    </CardContent>
                </Card>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
