
"use client";

import { Card, CardContent } from "@/components/ui/card";
import { stats } from "@/lib/data";
import { Counter } from "./Counter";
import { motion } from "framer-motion";

export default function Stats() {
  const statVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <section className="relative z-10 pt-16 md:pt-24 pb-16 md:pb-24">
      <div className="mx-auto max-w-7xl px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {stats.map((s, index) => (
          <motion.div
            key={s.label}
            variants={statVariants}
            initial="initial"
            whileInView="animate"
            transition={{
              delay: index * 0.1,
              duration: 0.5,
              ease: "easeInOut",
            }}
            viewport={{ once: true }}
          >
            <Card className="bg-secondary h-full">
              <CardContent className="p-4 md:p-6 text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary">
                  <Counter value={s.value} suffix={s.suffix} />
                </div>
                <div className="text-sm md:text-base text-muted-foreground mt-1">
                  {s.label}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
