import type { Metadata } from "next";
import SiteLayout from "@/components/SiteLayout";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Charter | Maykott Holdings",
  description: "Maykott Holdings Privacy Charter and global data protection guidelines.",
};

export default function PrivacyPage() {
  return (
    <SiteLayout>
      <section className="pt-32 pb-24 bg-white min-h-[70vh]">
        <div className="w-container max-w-4xl mx-auto px-4 md:px-0 text-primary">
          <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-accent-gold mb-6 block">
            Legal & Compliance
          </span>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase mb-8 leading-none">
            Privacy Charter
          </h1>
          <div className="w-20 h-1 bg-accent-gold mb-12" />
          
          <div className="text-neutral-600 prose prose-lg prose-neutral">
            <p className="text-xl mb-8 leading-relaxed">
              At Maykott Holdings, we prioritize the absolute confidentiality and structural integrity of all operational and personal data entrusted to us by our institutional partners, stakeholders, and portfolio companies.
            </p>
            <p className="mb-6 leading-relaxed">
              This Privacy Charter outlines our comprehensive framework for global data protection, operating strictly within international regulatory standards including GDPR, CCPA, and regional fiscal privacy mandates. Our digital infrastructure is fortified with proprietary security matrices designed to prevent unauthorized access.
            </p>
            <p className="mb-12 leading-relaxed">
              The full detailing of our updated corporate privacy frameworks is presently being digitized for this portal. For any immediate inquiries regarding our data handling procedures or compliance posture, please direct communications to our corporate compliance office.
            </p>
            <Link
              href="/inquiry"
              className="px-8 py-4 text-[10px] font-bold uppercase tracking-[0.15em] hover:bg-accent-gold transition-colors bg-black text-white inline-block"
            >
              Contact Compliance Office
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
