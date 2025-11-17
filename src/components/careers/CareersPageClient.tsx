
"use client";

import { Briefcase, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { useApplicationStore } from "@/hooks/use-application-store";
import { PopupApplication } from "./PopupApplication";


type Opening = {
  title: string;
  location: string;
  type: string;
  department: string;
  description: string;
  responsibilities: string[];
};

interface CareersPageClientProps {
  openings: Opening[];
}

export default function CareersPageClient({ openings }: CareersPageClientProps) {
  const { open } = useApplicationStore();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Join Our Team
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
              We are always looking for passionate and talented individuals to help us build the future. Explore our current openings below.
            </p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            {openings.map((opening) => (
              <Card key={opening.title} className="shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="text-2xl">{opening.title}</CardTitle>
                  <CardDescription className="flex flex-wrap items-center gap-x-4 gap-y-2 pt-2">
                    <span className="inline-flex items-center gap-2">
                      <Briefcase className="h-4 w-4" /> {opening.department}
                    </span>
                    <span className="inline-flex items-center gap-2">
                      <MapPin className="h-4 w-4" /> {opening.location}
                    </span>
                    <span className="inline-flex items-center gap-2">
                      <Clock className="h-4 w-4" /> {opening.type}
                    </span>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{opening.description}</p>
                  <Button onClick={() => open(opening.title)}>Apply Now</Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {openings.length === 0 && (
            <div className="text-center py-16">
              <p className="text-lg text-muted-foreground">
                There are no open positions at the moment. Please check back later.
              </p>
            </div>
          )}
        </div>
      </main>
      <Footer />
      <PopupApplication />
    </div>
  );
}
