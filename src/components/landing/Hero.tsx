
"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { stats, heroImages } from "@/lib/data";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Counter } from "./Counter";
import { motion } from "framer-motion";

export default function Hero() {
  const statVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <section id="home" className="bg-background">
      <div className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4">
          {/* Media Carousel */}
          <Carousel
            className="w-full rounded-2xl overflow-hidden shadow-2xl"
            opts={{ loop: true }}
            plugins={[
              Autoplay({
                delay: 3000,
                stopOnInteraction: true,
              }),
            ]}
          >
            <CarouselContent>
              {heroImages.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="relative aspect-video w-full overflow-hidden bg-background">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      data-ai-hint={image.aiHint}
                      fill
                      className="object-cover"
                      priority={index === 0}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-4 text-primary-foreground bg-primary/50 hover:bg-primary" />
            <CarouselNext className="absolute right-4 text-primary-foreground bg-primary/50 hover:bg-primary" />
          </Carousel>
        </div>
      </div>

      {/* Stats Section */}
      <div className="pb-16 md:pb-24">
        <div className="mx-auto max-w-7xl px-4 grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
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
      </div>
    </section>
  );
}

