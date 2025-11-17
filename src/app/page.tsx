
"use client";

import { useEffect } from "react";
import { Header } from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import { Projects } from "@/components/landing/Projects";
import { About } from "@/components/landing/About";
import { WhyNavkar } from "@/components/landing/WhyNavkar";
import { Enquiry } from "@/components/landing/Enquiry";
import { Footer } from "@/components/landing/Footer";
import { PopupEnquiry } from "@/components/landing/PopupEnquiry";
import { Separator } from "@/components/ui/separator";
import { Testimonials } from "@/components/landing/Testimonials";
import { useEnquiryStore } from "@/hooks/use-enquiry-store";

export default function Home() {
  const { open } = useEnquiryStore();

  useEffect(() => {
    const timer = setTimeout(() => {
      open();
    }, 120000); // 2 minutes

    return () => clearTimeout(timer);
  }, [open]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <Separator />
        <Projects />
        <Separator />
        <About />
        <Separator />
        <WhyNavkar />
        <Testimonials />
        <Separator />
        <Enquiry />
      </main>
      <Footer />
      <PopupEnquiry />
    </div>
  );
}
