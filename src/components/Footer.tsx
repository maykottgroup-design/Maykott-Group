/**
 * @fileoverview Footer component for Maykott Group website.
 * Consistent footer across all pages with navigation links.
 */

import Link from "next/link";

const portfolioLinks = [
  { href: "/portfolio", label: "Portfolio Holdings" },
  { href: "/investment", label: "Investment Strategy" },
  { href: "/about", label: "Operational Model" },
  { href: "/insights", label: "News & Insights" },
];

const legalLinks = [
  { href: "/privacy", label: "Privacy Charter" },
  { href: "/regulatory", label: "Regulatory Filings" },
  { href: "/ethics", label: "Ethical Standards" },
  { href: "/press", label: "Press Portal" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white pt-24 pb-12" role="contentinfo">
      <div className="w-container max-w-none mx-auto px-0">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-16 mb-24">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-2 md:gap-3 mb-8 group">
              <div className="size-6 md:size-8 bg-accent-gold flex items-center justify-center rounded-sm">

                <svg
                  className="text-primary size-4"
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
              <span className="text-xl md:text-2xl font-black tracking-tighter uppercase">
                Maykott <span className="text-accent-gold">Group</span>
              </span>
            </Link>

            <div className="text-white/70 max-w-sm text-xs md:text-sm leading-relaxed mb-6 font-medium tracking-wide">
              <p className="mb-4">
                2800 OAKVILLE HIGHWAY, SUITE 4200, CENTERVILLE, OAK.
              </p>
              <p className="mb-2">
                EXACT PROPRIETARY MATRIX OF THE &quot;NEXT&quot; INDUSTRIAL ERA.
              </p>
            </div>
            <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest">
              Firm ID: MK-00192-G
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h6 className="text-accent-gold text-[10px] font-bold uppercase tracking-widest mb-8">
              Navigation
            </h6>
            <ul className="space-y-4 text-xs font-bold uppercase tracking-widest text-white/60">
              {portfolioLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h6 className="text-accent-gold text-[10px] font-bold uppercase tracking-widest mb-8">
              Legal
            </h6>
            <ul className="space-y-4 text-xs font-bold uppercase tracking-widest text-white/60">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-white/30 text-center md:text-left">
            © {currentYear} MAYKOTT INDUSTRIAL HOLDING GROUP INC. ALL RIGHTS
            RESERVED.
          </span>
          <div className="flex gap-6 text-white/40">
            <a
              href="https://www.linkedin.com/company/maykott-group"
              aria-label="LinkedIn"
              className="hover:text-accent-gold transition-colors"
            >
              <span className="material-symbols-outlined text-sm">public</span>
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
}
