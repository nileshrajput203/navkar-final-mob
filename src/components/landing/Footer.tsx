
"use client";

import { useState, useEffect } from 'react';
import { Phone } from "lucide-react";
import { FaWhatsapp, FaInstagram } from 'react-icons/fa';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { footerLinks } from '@/lib/data';

const socialLinks = [
  { icon: FaInstagram, href: "https://www.instagram.com/navkargroupofficial?igsh=MTk0cDZmdWdhMWZ6cg==", name: "Instagram" },
];

export function Footer() {
  const [year, setYear] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setYear(new Date().getFullYear());

    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    
    window.addEventListener("scroll", toggleVisibility);
    toggleVisibility();

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <>
      <footer className="py-12 border-t bg-secondary">
        <div className="mx-auto max-w-7xl px-4 grid md:grid-cols-3 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 font-bold text-xl">
              <Image src="/logo.png" alt="Navkar Logo" width={80} height={80} />
            </Link>
            <p className="text-muted-foreground">
              Crafting landmarks with integrity and innovation for over a decade.
            </p>
          </div>

          {/* Quick Links Section */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Social & Legal Section */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Follow Us</h4>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a 
                  key={social.name} 
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label={`Follow us on ${social.name}`}
                  className="text-muted-foreground p-2 -m-2 rounded-full transition-all duration-300 hover:text-primary hover:scale-110 hover:-translate-y-1"
                >
                  <social.icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-border/50">
          <div className="mx-auto max-w-7xl px-4 text-center text-sm text-muted-foreground">
            <p>
              © {year ?? new Date().getFullYear()} Navkar Group. All rights reserved. | Designed by{' '}
              <a href="https://blinkbeyond.co.in/" target="_blank" rel="noopener noreferrer" className="font-semibold text-primary hover:underline">
                BlinkBeyond
              </a>
            </p>
          </div>
        </div>
      </footer>
      
      {/* Floating Action Buttons */}
      <div className={cn(
        "fixed bottom-4 right-4 z-50 transition-opacity duration-300 space-y-3",
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      )}>
        <a
          href="https://wa.me/917888022788"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="relative flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition-transform hover:scale-110 ring-wave"
        >
          <FaWhatsapp className="h-8 w-8" />
        </a>
      </div>
       <div className={cn(
        "fixed bottom-4 left-4 z-50 transition-opacity duration-300",
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      )}>
        <a
          href="tel:+917888022788"
          aria-label="Call Us"
          className="relative flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-transform hover:scale-110"
        >
          <Phone className="h-7 w-7" />
        </a>
      </div>
    </>
  );
}
