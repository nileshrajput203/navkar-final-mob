"use client";

import { ShieldCheck, Landmark, Building2, Leaf } from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const whyFeatures = [
  {
    icon: ShieldCheck,
    title: "Quality & Trust",
    desc: "Stringent quality control and ISO-backed processes ensure excellence and reliability at every stage of development.",
  },
  {
    icon: Landmark,
    title: "Prime Locations",
    desc: "Our projects are situated in well-connected, prime addresses close to business hubs, transit, and lifestyle amenities.",
  },
  {
    icon: Building2,
    title: "Design-led Living",
    desc: "We focus on efficient space planning, superior ventilation, abundant natural light, and beautiful green views for a better life.",
  },
   {
    icon: Leaf,
    title: "Sustainable Future",
    desc: "Committed to green building practices, including rainwater harvesting, solar power, and waste management.",
  },
];

export function WhyNavkar() {
  const fadeInAnimation = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.5, ease: "easeInOut" },
  };

  return (
    <motion.section 
      id="why" 
      className="py-16 md:py-24 bg-secondary/40"
      initial={fadeInAnimation.initial}
      whileInView={fadeInAnimation.whileInView}
      transition={fadeInAnimation.transition}
    >
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Why Choose Navkar</h2>
          <p className="mt-2 text-lg text-muted-foreground max-w-3xl mx-auto">
            Trusted delivery, sustainable design, and enduring value across Palghar.
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {whyFeatures.map((f, index) => (
            <motion.div
              key={f.title}
              custom={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.4, ease: "easeInOut" }}
            >
              <Card className="text-center rounded-lg shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 h-full bg-secondary/50">
                <CardHeader className="items-center">
                  <div className="p-4 rounded-full inline-flex bg-primary text-primary-foreground">
                    <f.icon className="h-8 w-8" />
                  </div>
                </CardHeader>
                <CardContent>
                  <CardTitle className="text-xl">{f.title}</CardTitle>
                  <p className="mt-2 text-muted-foreground">{f.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
