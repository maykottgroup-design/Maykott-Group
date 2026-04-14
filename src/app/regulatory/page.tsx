import type { Metadata } from "next";
import SiteLayout from "@/components/SiteLayout";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Regulatory Filings | Maykott Holdings",
  description: "Access Maykott Holdings regulatory filings, quarterly reports, and institutional disclosures.",
};

export default function RegulatoryPage() {
  return (
    <SiteLayout>
      <section className="pt-32 pb-24 bg-white min-h-[70vh]">
        <div className="w-container max-w-4xl mx-auto px-4 md:px-0 text-primary">
          <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-accent-gold mb-6 block">
            Investor Relations
          </span>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase mb-8 leading-none">
            Regulatory Filings
          </h1>
          <div className="w-20 h-1 bg-accent-gold mb-12" />
          
          <div className="text-neutral-600 prose prose-lg prose-neutral">
            <p className="text-xl mb-8 leading-relaxed">
              Transparency and rigorous adherence to fiscal governance are foundational to the Maykott Holdings growth strategy. We maintain complete compliance with global securities and exchange regulations.
            </p>
            <p className="mb-6 leading-relaxed">
              This section provides institutional access to our public financial disclosures, annual audits, quarterly earnings reports, and relevant SEC/international equivalent documentation. 
            </p>
            <p className="mb-12 leading-relaxed">
              We are currently finalizing the migration of our historical and current fiscal year documents to this secure digital portal. In the interim, authorized institutional partners, analysts, and stakeholders may request immediate access to necessary SEC and international filings via our direct inquiry channel.
            </p>
            <Link
              href="/inquiry"
              className="px-8 py-4 text-[10px] font-bold uppercase tracking-[0.15em] hover:bg-accent-gold transition-colors bg-black text-white inline-block"
            >
              Request Filings Archive
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
