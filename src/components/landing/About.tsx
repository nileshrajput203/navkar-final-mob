
"use client";

import Image from "next/image";
import { Home, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import { features } from "@/lib/data";
import { Card, CardContent } from "@/components/ui/card";

export function About() {
  const fadeInAnimation = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.5, ease: "easeInOut" },
  };

  return (
    <motion.section 
      id="about" 
      className="py-16 md:py-24 bg-secondary"
      initial={fadeInAnimation.initial}
      whileInView={fadeInAnimation.whileInView}
      transition={fadeInAnimation.transition}
    >
      <div className="mx-auto max-w-7xl px-4 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold">
            <Home className="h-5 w-5" /> About Navkar Group
          </div>
          <h3 className="mt-6 text-3xl md:text-4xl font-bold tracking-tight">
            Building with Integrity, Delivering with Excellence
          </h3>
          <p className="mt-4 text-lg text-muted-foreground">
            For over a decade, Navkar Group has shaped neighbourhoods with
            thoughtfully designed projects that prioritise liveability,
            sustainability and value creation. Our commitment spans the full
            lifecycle — from land acquisition to design, construction and
            customer care.
          </p>

          <div className="mt-8 grid sm:grid-cols-2 gap-6">
            {features.map((f) => (
              <div key={f.title} className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10 text-primary">
                  <f.icon className="h-6 w-6" />
                </div>
                <div>
                  <div className="font-semibold text-lg">{f.title}</div>
                  <div className="text-muted-foreground">{f.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl ring-1 ring-black/5">
            <Image
              src="https://i.postimg.cc/C1yFnRbZ/bldg-3-20x30.jpg"
              alt="Modern building by Navkar Group"
              data-ai-hint="modern building"
              fill
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </motion.section>
  );
}
