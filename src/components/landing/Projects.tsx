
"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { projects, TABS, type Tab } from "@/lib/data";
import { Button } from "@/components/ui/button";

export function Projects() {
  const [filter, setFilter] = useState<Tab>("All");

  const filteredProjects = projects.filter((p) => {
    if (filter === "All") return true;
    return p.type.includes(filter);
  });

  const fadeInAnimation = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.5, ease: "easeInOut" },
  };

  return (
    <motion.section 
      id="projects" 
      className="py-16 md:py-24 bg-background"
      initial={fadeInAnimation.initial}
      whileInView={fadeInAnimation.whileInView}
      transition={fadeInAnimation.transition}
    >
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 text-center md:text-left">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Featured Projects</h2>
            <p className="mt-2 text-lg text-muted-foreground">
              Handpicked developments in Palghar.
            </p>
          </div>

          <div className="flex items-center gap-2 p-1 bg-secondary rounded-full mx-auto md:mx-0">
            {TABS.map((tab) => (
              <button
                key={tab}
                onClick={() => setFilter(tab)}
                suppressHydrationWarning
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                  filter === tab
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((p) => (
            <Link key={p.id} href={`/projects/${p.id}`} className="block group">
              <Card className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
                <div className="relative h-60 overflow-hidden">
                  <Image
                    src={p.image}
                    alt={p.name}
                    data-ai-hint={p.aiHint}
                    fill
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white">
                    <MapPin className="h-5 w-5" /> {p.location}
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-primary text-primary-foreground">{p.status}</span>
                  </div>
                </div>

                <div className="flex flex-col flex-grow">
                  <CardHeader>
                    <CardTitle className="text-2xl tracking-tight group-hover:text-primary transition-colors">{p.name}</CardTitle>
                    <div className="text-muted-foreground pt-1">
                        Type: <span className="font-medium text-foreground">{p.type}</span>
                      </div>
                  </CardHeader>

                  <CardContent className="pt-0 flex-grow">
                    <div className="flex flex-wrap gap-2 text-sm">
                      {p.highlights.slice(0, 3).map((h) => (
                        <span
                          key={h}
                          className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground"
                        >
                          {h}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                  
                  <CardFooter>
                      <Button variant="ghost" className="w-full text-primary group-hover:bg-primary/10">
                        View Details
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                  </CardFooter>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
