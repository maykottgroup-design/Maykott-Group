import type { Metadata } from "next";
import SiteLayout from "@/components/SiteLayout";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ethical Standards | Maykott Holdings",
  description: "The Maykott Holdings code of ethical business conduct, supply chain integrity, and corporate governance.",
};

export default function EthicsPage() {
  return (
    <SiteLayout>
      <section className="pt-32 pb-24 bg-white min-h-[70vh]">
        <div className="w-container max-w-4xl mx-auto px-4 md:px-0 text-primary">
          <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-accent-gold mb-6 block">
            Corporate Governance
          </span>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase mb-8 leading-none">
            Ethical Standards
          </h1>
          <div className="w-20 h-1 bg-accent-gold mb-12" />
          
          <div className="text-neutral-600 prose prose-lg prose-neutral">
            <p className="text-xl mb-8 leading-relaxed">
              Maykott Holdings is constructed entirely upon a bedrock of unyielding ethical standards. Our global operations prioritize human capital, environmental stewardship, and absolute market integrity.
            </p>
            <p className="mb-6 leading-relaxed">
              We enforce a rigorous zero-tolerance policy regarding bribery, anti-competitive market manipulation, and supply chain exploitation. Every portfolio company inducted into the Maykott collective is subjected to an exhaustive ethical audit before acquisition, and continuous monitoring thereafter.
            </p>
            <p className="mb-12 leading-relaxed">
              Our comprehensive Corporate Code of Conduct and Anti-Corruption Handbooks are currently being updated to reflect newly established global jurisdictions. For detailed information regarding our operational ethics policies or to report a compliance matter, please engage our governance team.
            </p>
            <Link
              href="/inquiry"
              className="px-8 py-4 text-[10px] font-bold uppercase tracking-[0.15em] hover:bg-accent-gold transition-colors bg-black text-white inline-block"
            >
              Contact Governance Team
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
