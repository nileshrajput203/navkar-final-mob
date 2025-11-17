
"use client";

import React, { useState, useEffect, useCallback } from "react";
import { Sparkles, Menu, X, ArrowRight } from "lucide-react";
import { usePathname } from "next/navigation";
import { NavkarLogo } from "./NavkarLogo";
import { useEnquiryStore } from "@/hooks/use-enquiry-store";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/#projects" },
  { label: "About", href: "/#about" },
  { label: "Testimonials", href: "/#testimonials" },
  { label: "Contact", href: "/#contact" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("/");
  const pathname = usePathname();
  const { open: openEnquiryPopup } = useEnquiryStore();

  const handleNavClick = (href: string) => {
    setActiveLink(href);
    if (menuOpen) {
      setMenuOpen(false);
    }
  };

  const handleScroll = useCallback(() => {
    const scrollPosition = window.scrollY + 100; // Adjusted offset for better accuracy
    let currentSectionId = "";

    // Find the current section by iterating from bottom to top
    for (let i = navLinks.length - 1; i >= 0; i--) {
      const link = navLinks[i];
      if (!link.href.startsWith("/#")) continue;
      
      const sectionId = link.href.substring(link.href.indexOf('#') + 1);
      const section = document.getElementById(sectionId);

      if (section && section.offsetTop <= scrollPosition) {
        currentSectionId = link.href;
        break;
      }
    }

    if (currentSectionId) {
      setActiveLink(currentSectionId);
    } else if (window.scrollY < 200) {
      setActiveLink('/');
    }
  }, []);

  useEffect(() => {
    if (pathname === '/') {
      window.addEventListener('scroll', handleScroll, { passive: true });
      handleScroll(); // Initial check
      setActiveLink('/');
    } else {
      setActiveLink(pathname);
    }
    
    return () => {
      if (pathname === '/') {
        window.removeEventListener('scroll', handleScroll);
      }
    };
  }, [pathname, handleScroll]);


  return (
    <>
      <div
        className="w-full text-sm font-medium text-center text-primary-foreground bg-primary"
      >
        <div className="mx-auto max-w-7xl px-4 py-2 flex flex-wrap items-center justify-center gap-2 sm:gap-4">
          <div className="flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-yellow-400" />
            <span>New Launch: Navkar Meadows</span>
          </div>
          <a
            href="/#contact"
            onClick={(e) => {
              e.preventDefault();
              openEnquiryPopup();
            }}
            className="inline-flex items-center gap-1.5 group cursor-pointer"
          >
            <span className="group-hover:underline underline-offset-4">Enquire Now</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>

      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex items-center justify-between h-20">
            <a href="/" className="flex items-center gap-2 font-bold text-xl">
              <NavkarLogo className="h-10 w-10 text-foreground" />
              <span className="tracking-tight">Navkar Group</span>
            </a>

            <nav className="hidden md:flex items-center gap-2 p-1 bg-secondary rounded-full">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                    activeLink === link.href || (link.href.startsWith('/#') && activeLink.includes(link.href))
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <button
              className="md:hidden p-2 rounded-lg border -mr-2"
              onClick={() => setMenuOpen((s) => !s)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden border-t bg-background">
            <div className="mx-auto max-w-7xl px-4 py-4 grid gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="py-2 text-lg text-muted-foreground"
                  onClick={() => handleNavClick(link.href)}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>
    </>
  );
}
