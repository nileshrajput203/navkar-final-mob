
"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { projects, TABS, type Tab } from "@/lib/data";
import { cn } from "@/lib/utils";
import { Info, Download, MapPin, Building, Ruler, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

// New Component for the standard card view
function ProjectCard({ project }: { project: (typeof projects)[0] }) {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.3 });

  const cardVariants = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      ref={cardRef}
      variants={cardVariants}
      initial="initial"
      animate={isInView ? "animate" : "initial"}
      transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
    >
      <Link href={`/projects/${project.id}`} className="block group">
        <div className="bg-white rounded-2xl overflow-hidden shadow-lg transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-2 h-full flex flex-col">
          <div className="relative aspect-[16/10] overflow-hidden">
            <Image
              src={project.image}
              alt={project.name}
              fill
              className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
            />
             <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"/>
             <div className="absolute top-4 right-4">
                <span className="px-3.5 py-2 rounded-full text-xs font-bold tracking-wider uppercase bg-white/90 backdrop-blur-sm text-primary shadow-sm">
                    {project.status}
                </span>
            </div>
             <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-2xl font-bold text-white tracking-tight leading-tight">
                    {project.name}
                </h3>
                <p className="mt-1 flex items-center gap-2 text-white/90">
                    <MapPin className="h-5 w-5 flex-shrink-0" />
                    <span className="font-medium">{project.location}</span>
                </p>
            </div>
          </div>
          <div className="p-6 flex flex-col flex-grow bg-gray-50">
              <div className="flex justify-between items-center">
                <p className="text-sm text-gray-500 font-medium">{project.type}</p>
                {project.reraNo && (
                    <span className="px-3 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase bg-green-100 text-green-800">
                        RERA Verified
                    </span>
                )}
            </div>
            <div className="mt-auto pt-6 flex justify-end">
              <Button className="bg-primary text-white rounded-full px-6 py-3 font-semibold group-hover:bg-primary/90 transition-colors duration-300 shadow-md">
                Explore Now
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
              </Button>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

// New Component for the detailed list view
function ProjectListItem({ project, index }: { project: (typeof projects)[0]; index: number }) {
  const itemRef = useRef(null);
  const isInView = useInView(itemRef, { once: true, amount: 0.3 });

  const projectVariants = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      ref={itemRef}
      className={cn(
        "featured-project-item flex flex-col lg:flex-row items-center gap-8 lg:gap-12",
        index % 2 !== 0 && "lg:flex-row-reverse"
      )}
      variants={projectVariants}
      initial="initial"
      animate={isInView ? "animate" : "initial"}
      transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
    >
      <div className="w-full lg:w-1/2 relative project-image-container overflow-hidden rounded-lg shadow-xl">
        <Image
          src={project.image}
          alt={project.name}
          width={800}
          height={600}
          className="w-full h-full object-cover project-image"
        />
        <div className="absolute top-4 left-4 flex flex-col gap-3 project-actions">
          <button className="p-3 bg-black/50 text-white rounded-full hover:bg-black/80 transition-all">
            <Info className="h-5 w-5" />
          </button>
          <button className="p-3 bg-black/50 text-white rounded-full hover:bg-black/80 transition-all">
            <Download className="h-5 w-5" />
          </button>
        </div>
      </div>
      <div className="w-full lg:w-1/2 flex items-start gap-4">
        <div className="project-number-container">
          <span className="project-number">{(index + 1).toString().padStart(2, "0")}</span>
        </div>
        <div className="flex-1 project-details">
          <h4 className="text-2xl md:text-3xl font-bold text-gray-900">{project.name}</h4>
          <div className="mt-4 space-y-3 text-gray-600">
            <div className="flex items-center gap-3">
              <MapPin className="h-5 w-5 text-primary" />
              <span>{project.location}</span>
            </div>
            <div className="flex items-center gap-3">
              <Ruler className="h-5 w-5 text-primary" />
              <span>{project.area}</span>
            </div>
            <div className="flex items-center gap-3">
              <Building className="h-5 w-5 text-primary" />
              <span>{project.type}</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function Projects() {
  const [filter, setFilter] = useState<Tab>("All");

  const filteredProjects = projects.filter((p) => {
    if (filter === "All") return true;
    return p.type.includes(filter);
  });

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  return (
    <section id="projects" className="featured-projects" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col md:flex-row justify-between items-center mb-12 md:mb-20 gap-6"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">Featured Projects</h2>
          <div className="flex items-center justify-center gap-2 p-1.5 bg-gray-200/60 rounded-full shadow-sm">
            {TABS.map((tab) => (
              <button
                key={tab}
                onClick={() => setFilter(tab)}
                suppressHydrationWarning
                className={cn(
                  "px-5 py-2.5 rounded-full text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
                  filter === tab
                    ? "bg-primary text-white shadow-md"
                    : "text-gray-600 hover:bg-white/80"
                )}
              >
                {tab}
              </button>
            ))}
          </div>
        </motion.div>

        {filter === "All" ? (
          <div className="space-y-20 md:space-y-28">
            {filteredProjects.map((p, index) => (
              <ProjectListItem key={p.id} project={p} index={index} />
            ))}
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredProjects.map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
