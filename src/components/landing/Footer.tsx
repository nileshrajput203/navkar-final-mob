
"use client";

import { useState, useEffect } from 'react';
import { MessageCircle, Phone } from "lucide-react";
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { NavkarLogo } from './NavkarLogo';
import { footerLinks } from '@/lib/data';

const XIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    aria-hidden="true"
    {...props}
    fill="currentColor"
  >
    <g>
      <path
        d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
      ></path>
    </g>
  </svg>
);

const FacebookIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg 
        viewBox="0 0 24 24"
        aria-hidden="true"
        {...props} 
        fill="currentColor"
    >
        <path d="M9.19795 21.5H13.198V13.4901H16.8021L17.198 9.50977H13.198V7.51172C13.198 6.94687 13.6458 6.5 14.198 6.5H17.198V2.5H14.198C11.437 2.5 9.19795 4.73899 9.19795 7.5V9.50977H7.19795L6.80206 13.4901H9.19795V21.5Z" />
    </svg>
);

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg 
        aria-hidden="true"
        viewBox="0 0 24 24"
        {...props}
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
);


const socialLinks = [
  { icon: FacebookIcon, href: "#", name: "Facebook" },
  { icon: InstagramIcon, href: "#", name: "Instagram" },
  { icon: XIcon, href: "#", name: "X" },
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
              <NavkarLogo className="h-10 w-10 text-foreground" />
              <span className="tracking-tight">Navkar Group</span>
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
                  aria-label={social.name} 
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
          <MessageCircle className="h-8 w-8" />
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
