import type { Metadata } from "next";
import SiteLayout from "@/components/SiteLayout";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Press Portal | Maykott Holdings",
  description: "Official press portal for Maykott Holdings global communications, executive interviews, and media kits.",
};

export default function PressPage() {
  return (
    <SiteLayout>
      <section className="pt-32 pb-24 bg-white min-h-[70vh]">
        <div className="w-container max-w-4xl mx-auto px-4 md:px-0 text-primary">
          <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-accent-gold mb-6 block">
            Media Relations
          </span>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase mb-8 leading-none">
            Press Portal
          </h1>
          <div className="w-20 h-1 bg-accent-gold mb-12" />
          
          <div className="text-neutral-600 prose prose-lg prose-neutral">
            <p className="text-xl mb-8 leading-relaxed">
              Welcome to the official Maykott Holdings communications portal, dedicated to serving global journalists, industry analysts, and media partners.
            </p>
            <p className="mb-6 leading-relaxed">
              This hub will host official press releases, M&A announcements, media assets, and corporate milestones shaping the trajectory of the modern industrial era. We maintain a steadfast commitment to transparent and timely communication regarding our global operational footprint.
            </p>
            <p className="mb-12 leading-relaxed">
              The full digital newsroom repository is currently under deployment. For immediate press inquiries, specialized interview requests with our executive board, or to receive our corporate media kit, please directly contact our global communications director.
            </p>
            <Link
              href="/inquiry"
              className="px-8 py-4 text-[10px] font-bold uppercase tracking-[0.15em] hover:bg-accent-gold transition-colors bg-black text-white inline-block"
            >
              Contact Media Relations
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
