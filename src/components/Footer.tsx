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
            <h6 className="text-accent-gold text-[10px] font-bold uppercase tracking-wider mb-8">
              Navigation
            </h6>
            <ul className="space-y-4 text-xs font-bold uppercase tracking-wider text-white/60">
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
            <h6 className="text-accent-gold text-[10px] font-bold uppercase tracking-wider mb-8">
              Legal
            </h6>
            <ul className="space-y-4 text-xs font-bold uppercase tracking-wider text-white/60">
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
          <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-wider text-white/30 text-center md:text-left">
            © {currentYear} MAYKOTT INDUSTRIAL HOLDING GROUP INC. ALL RIGHTS
            RESERVED.
          </span>
          <div className="flex gap-4 text-white/40">
            <a
              href="https://www.linkedin.com/company/maykott-group"
              aria-label="LinkedIn"
              className="hover:text-accent-gold transition-colors flex items-center justify-center p-1"
            >
              <svg fill="currentColor" viewBox="0 0 24 24" className="w-4 h-4" aria-hidden="true"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
            </a>
            <a
              href="https://x.com/maykottgroup"
              aria-label="X (Twitter)"
              className="hover:text-accent-gold transition-colors flex items-center justify-center p-1"
            >
              <svg fill="currentColor" viewBox="0 0 24 24" className="w-4 h-4" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.004 3.974H5.078z" /></svg>
            </a>
            <a
              href="https://instagram.com/maykottgroup"
              aria-label="Instagram"
              className="hover:text-accent-gold transition-colors flex items-center justify-center p-1"
            >
              <svg fill="currentColor" viewBox="0 0 24 24" className="w-4 h-4" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" /></svg>
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
}
