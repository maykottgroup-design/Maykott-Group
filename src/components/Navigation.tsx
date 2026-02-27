/**
 * @fileoverview Navigation component for Maykott Group website.
 * Provides sticky, transparent-to-solid animated navigation with mobile support.
 */

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "/portfolio", label: "Portfolio" },
  { href: "/about", label: "About" },
  { href: "/investment", label: "Investment" },
  { href: "/insights", label: "Insights" },
  { href: "/contact", label: "Contact" },
];

export default function Navigation() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    const timer = setTimeout(() => setIsMenuOpen(false), 0);
    return () => clearTimeout(timer);
  }, [pathname, setIsMenuOpen]);



  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled
          ? "bg-white/95 backdrop-blur-md border-b border-primary/10 shadow-sm"
          : "bg-background-light/90 backdrop-blur-sm border-b border-primary/5"
          }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="w-container max-w-none mx-auto px-0 h-16 md:h-20 flex items-center justify-between">

          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 group"
            aria-label="Maykott Group - Home"
          >
            <div className="size-8 bg-primary flex items-center justify-center rounded-sm group-hover:bg-accent-gold transition-colors duration-300">
              <svg
                className="text-white size-4"
                fill="none"
                viewBox="0 0 48 48"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M24 4C25.7818 14.2173 33.7827 22.2182 44 24C33.7827 25.7818 25.7818 33.7827 24 44C22.2182 33.7827 14.2173 25.7818 4 24C14.2173 22.2182 22.2182 14.2173 24 4Z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <span className="text-lg md:text-xl font-black tracking-tighter uppercase text-primary">
              Maykott <span className="text-accent-gold">Group</span>
            </span>
          </Link>


          {/* Desktop Navigation */}
          <div
            className="hidden md:flex items-center gap-8 text-[11px] font-bold uppercase tracking-[0.15em]"
            role="menubar"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                role="menuitem"
                className={`transition-colors duration-200 hover:text-accent-gold relative pb-1 ${pathname === link.href
                  ? "text-accent-gold font-black"
                  : "text-primary"
                  }`}


              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              href="/contact"
              className="bg-black text-white px-8 py-3.5 text-xs font-bold uppercase tracking-[0.15em] hover:bg-accent-gold transition-all duration-300 inline-block"
            >
              Partner With Us
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden flex flex-col items-center justify-center p-2 w-10 h-10 gap-1.5 focus:outline-none group"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            <div className="relative w-6 h-5">
              <span
                className={`absolute left-0 top-0 block h-0.5 bg-primary transition-all duration-300 transform origin-left ${isMenuOpen ? "w-7 rotate-45 translate-y-[-2px] translate-x-[2px]" : "w-6"
                  }`}
              />
              <span
                className={`absolute left-0 top-1/2 -translate-y-1/2 block h-0.5 bg-primary transition-all duration-300 ${isMenuOpen ? "w-0 opacity-0" : "w-4 opacity-100"
                  }`}
              />
              <span
                className={`absolute left-0 bottom-0 block h-0.5 bg-primary transition-all duration-300 transform origin-left ${isMenuOpen ? "w-7 -rotate-45 translate-y-[2px] translate-x-[2px]" : "w-6"
                  }`}
              />
            </div>
          </button>


        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div
            id="mobile-menu"
            className="md:hidden bg-white border-t border-primary/10 shadow-lg"
            role="menu"
          >
            <div className="w-container max-w-none mx-auto px-0 py-8 flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  role="menuitem"
                  className={`text-sm font-bold uppercase tracking-widest transition-colors duration-200 ${pathname === link.href
                    ? "text-accent-gold"
                    : "text-primary hover:text-accent-gold"
                    }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                className="bg-black text-white px-8 py-3.5 text-xs font-bold uppercase tracking-[0.15em] hover:bg-accent-gold transition-all duration-300 text-center mt-2 inline-block"
              >
                Partner With Us
              </Link>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
