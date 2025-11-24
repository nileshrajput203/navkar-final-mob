"use client";

import React, { useState, useEffect, useCallback } from "react";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useEnquiryStore } from "@/hooks/use-enquiry-store";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/#projects" },
  { label: "About", href: "/#about" },
  { label: "Testimonials", href: "/#testimonials" },
  { label: "Contact", href: "/#contact" },
  { label: "ENQUIRY NOW", href: "#enquiry" },
];

const leftNavLinks = navLinks.slice(0, 3);
const rightNavLinks = navLinks.slice(3);

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("/");
  const pathname = usePathname();
  const { open: openEnquiryPopup } = useEnquiryStore();

  const isProjectPage = pathname.startsWith('/projects');

  const handleNavClick = (href: string) => {
    if (href === '#enquiry') {
      openEnquiryPopup();
      if (menuOpen) setMenuOpen(false);
      return;
    }
    setActiveLink(href);
    if (menuOpen) {
      setMenuOpen(false);
    }
  };

  const handleScroll = useCallback(() => {
    const scrollPosition = window.scrollY + 100;
    let currentSectionId = "";

    for (let i = navLinks.length - 1; i >= 0; i--) {
      const link = navLinks[i];
      if (!link.href.startsWith("/#") || link.href === '#enquiry') continue;
      
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
      handleScroll();
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

  const inactiveLinkClasses = isProjectPage ? "text-white hover:text-gray-200" : "text-gray-300 hover:text-white";

  return (
    <>
      <style>{`
        .header--project {
          background: rgba(31, 33, 33, 0.95);
          backdrop-filter: blur(10px);
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }
      `}</style>
      <header className={`absolute top-0 left-0 right-0 z-50 transition-colors duration-300 ${isProjectPage ? 'header--project' : ''}`}>
        <div className="mx-auto max-w-7xl px-4">
          <div className="relative flex items-center justify-between h-20">
            <nav className="hidden md:flex flex-1 items-center gap-[45px]">
              {leftNavLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                    activeLink.includes(link.href) && link.href !== '/'
                      ? "text-white font-bold"
                      : inactiveLinkClasses
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <a href="/" className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-2 font-bold text-xl">
              <Image src="/navkarlogo.png" alt="Navkar Logo" width={100} height={100} />
            </a>

            <div className="flex flex-1 items-center justify-end gap-2">
                <nav className="hidden md:flex items-center gap-[45px]">
                  {rightNavLinks.map((link) => {
                    if (link.label === 'ENQUIRY NOW') {
                      return (
                        <button
                          key={link.label}
                          onClick={openEnquiryPopup}
                          className="bg-transparent border-2 border-white rounded-full py-2 px-5 text-white text-sm font-semibold uppercase tracking-wide whitespace-nowrap transition-all duration-300 ease-in-out hover:bg-white/10 hover:-translate-y-0.5"
                        >
                          {link.label}
                        </button>
                      );
                    }
                    return (
                      <a
                        key={link.href}
                        href={link.href}
                        onClick={() => handleNavClick(link.href)}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                          activeLink.includes(link.href)
                            ? "text-white font-bold"
                            : inactiveLinkClasses
                        }`}
                      >
                        {link.label}
                      </a>
                    );
                  })}
                </nav>

                <button
                  className={`md:hidden p-2 rounded-lg border -mr-2 ${isProjectPage ? 'text-white' : 'text-white'}`}
                  onClick={() => setMenuOpen((s) => !s)}
                  aria-label="Toggle menu"
                >
                  {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
            </div>
          </div>
        </div>

        {menuOpen && (
          <div className={`md:hidden ${isProjectPage ? 'header--project' : 'bg-black bg-opacity-80'}`}>
            <div className="mx-auto max-w-7xl px-4 py-4 grid gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`py-2 text-lg ${isProjectPage ? 'text-white' : 'text-gray-300'} hover:text-white`}
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
