import type { Metadata } from "next";
import SiteLayout from "@/components/SiteLayout";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Investment Strategy | Maykott Group",
  description:
    "Explore Maykott Group's institutional investment mandate — our acquisition criteria, 4-step lifecycle process, and strategic framework for deploying capital with precision.",
};

const acquisitionCriteria = [
  {
    icon: "payments",
    title: "Financial Threshold",
    description:
      "Minimum $50M+ annual revenue with EBITDA margins exceeding 15% and demonstrable historical consistency.",
    highlighted: false,
  },
  {
    icon: "groups",
    title: "Operational Excellence",
    description:
      "Strong, existing management teams with a desire to scale. We partner with leaders, not just assets.",
    highlighted: true,
  },
  {
    icon: "architecture",
    title: "Sector Agnostic",
    description:
      "Focus on scalable infrastructure, tech-enabled services, and essential service-based economic models.",
    highlighted: false,
  },
];

const processSteps = [
  {
    step: "01",
    title: "Identification",
    description:
      "Data-driven sourcing utilizing proprietary algorithms to identify undervalued opportunities in fragmented markets.",
  },
  {
    step: "02",
    title: "Validation",
    description:
      "Rigorous due diligence, forensic accounting, and multi-scenario stress testing to ensure downside protection.",
  },
  {
    step: "03",
    title: "Optimization",
    description:
      "Strategic capital injection combined with structural and operational refinement to unlock hidden value.",
  },
  {
    step: "04",
    title: "Expansion",
    description:
      "Scaling through market dominance, M&A rollups, and technological transformation for ultimate exit positioning.",
  },
];

const sectorFocusAreas = [
  {
    icon: "corporate_fare",
    sector: "Critical Infrastructure",
    examples: "Ports, terminals, rail, utilities",
  },
  {
    icon: "precision_manufacturing",
    sector: "Industrial Automation",
    examples: "Robotics, smart manufacturing, IIoT",
  },
  {
    icon: "bolt",
    sector: "Energy Transition",
    examples: "Grid modernization, renewables, hydrogen",
  },
  {
    icon: "conveyor_belt",
    sector: "Logistics Tech",
    examples: "Supply chain software, freight, warehousing",
  },
  {
    icon: "memory",
    sector: "Deep Technology",
    examples: "Semiconductors, defense tech, materials science",
  },
  {
    icon: "eco",
    sector: "Environmental Assets",
    examples: "Carbon credits, sustainable forestry, waste-to-energy",
  },
];

export default function InvestmentPage() {
  return (
    <SiteLayout>
      {/* ═══════════════════════════════════ HERO ═══════════════════════════════════ */}
      <section
        className="relative pt-20 pb-32 border-b border-primary/10 overflow-hidden"
        aria-label="Investment Strategy Hero"
      >
        <div
          className="absolute inset-0 titan-grid opacity-30 pointer-events-none"
          aria-hidden="true"
        />
        <div className="w-container max-w-none mx-auto px-0 md:px-0 px-6 relative">
          <div className="flex flex-wrap gap-2 mb-12">
            <Link
              href="/"
              className="text-primary/40 text-xs font-bold uppercase tracking-widest hover:text-primary transition-colors"
            >
              Home
            </Link>
            <span className="text-primary/40 text-xs font-bold uppercase tracking-widest">
              /
            </span>
            <span className="text-primary text-xs font-bold uppercase tracking-widest underline underline-offset-4">
              Investment Strategy
            </span>
          </div>
          <div className="grid lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-8">
              <h1 className="text-7xl md:text-9xl font-black leading-[0.85] tracking-tighter text-primary uppercase">
                The Standard <br /> of Capital
              </h1>
            </div>
            <div className="lg:col-span-4 pb-4">
              <p className="text-lg leading-relaxed text-slate-600 max-w-sm">
                Strategic rigor and financial power for long-term value
                creation. We deploy capital with institutional precision.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════ PHILOSOPHY ═════════════════════════════════ */}
      <section
        className="py-24 border-b border-primary/10 bg-neutral-50"
        aria-label="Investment Philosophy"
      >
        <div className="w-container max-w-none mx-auto px-0">
          <div className="grid lg:grid-cols-2 gap-20">
            <div>
              <span className="text-xs font-black uppercase tracking-[0.2em] text-primary/40 mb-6 block">
                Our Mandate
              </span>
              <h2 className="text-4xl md:text-5xl font-black leading-tight text-primary uppercase mb-8">
                The &ldquo;Maykott Edge&rdquo; in Risk Mitigation.
              </h2>
              <div className="w-24 h-2 bg-primary mb-8" />
            </div>
            <div className="flex flex-col gap-6">
              <p className="text-xl leading-relaxed font-medium text-slate-800">
                At Maykott Group, our philosophy is anchored in a disciplined
                approach to sustainable growth. We believe in the power of
                institutional precision and the compounding value of strategic
                alignment.
              </p>
              <p className="text-lg leading-relaxed text-slate-600">
                We operate where others hesitate—navigating complex market
                dynamics through a blend of analytical rigor and operational
                expertise. Our commitment is to the preservation and expansion
                of capital across generational cycles.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════ ACQUISITION CRITERIA ═══════════════════════ */}
      <section
        className="py-24 border-b border-primary/10"
        aria-label="Acquisition Criteria"
      >
        <div className="w-container max-w-none mx-auto px-0">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div>
              <span className="text-xs font-black uppercase tracking-[0.2em] text-primary/40 mb-4 block">
                Selection Framework
              </span>
              <h2 className="text-4xl font-black uppercase tracking-tight text-primary">
                Acquisition Criteria
              </h2>
            </div>
            <p className="text-slate-500 max-w-xs text-sm uppercase font-bold tracking-widest leading-relaxed">
              Rigid parameters ensuring quality and scalable dominance.
            </p>
          </div>

          <div className="grid md:grid-cols-3 border border-primary">
            {acquisitionCriteria.map((criteria) => (
              <div
                key={criteria.title}
                className={`p-10 border-b md:border-b-0 md:border-r border-primary flex flex-col gap-8 last:border-r-0 last:border-b-0 ${criteria.highlighted ? "bg-primary text-white" : ""
                  }`}
              >
                <span
                  className={`material-symbols-outlined text-5xl ${criteria.highlighted ? "text-white" : "text-primary"
                    }`}
                  aria-hidden="true"
                >
                  {criteria.icon}
                </span>
                <h3 className="text-2xl font-black uppercase tracking-tight">
                  {criteria.title}
                </h3>
                <p
                  className={
                    criteria.highlighted ? "text-slate-300" : "text-slate-600"
                  }
                >
                  {criteria.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════ SECTOR FOCUS ═══════════════════════════════ */}
      <section
        className="py-24 border-b border-primary/10 bg-neutral-50"
        aria-label="Sector Focus Areas"
      >
        <div className="w-container max-w-none mx-auto px-0">
          <div className="text-center mb-16">
            <span className="text-xs font-black uppercase tracking-[0.2em] text-primary/40 mb-4 block">
              Investment Universe
            </span>
            <h2 className="text-4xl font-black uppercase tracking-tight text-primary">
              Sector Focus Areas
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sectorFocusAreas.map((area) => (
              <div
                key={area.sector}
                className="bg-white p-8 border border-primary/5 hover:border-accent-gold transition-colors group"
              >
                <span
                  className="material-symbols-outlined text-3xl text-primary/30 group-hover:text-accent-gold transition-colors mb-4 block"
                  aria-hidden="true"
                >
                  {area.icon}
                </span>
                <h3 className="font-black uppercase text-lg tracking-tight mb-2">
                  {area.sector}
                </h3>
                <p className="text-sm text-slate-500 uppercase tracking-widest font-bold text-[10px]">
                  {area.examples}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════ 4-STEP PROCESS ═════════════════════════════ */}
      <section
        className="py-24 border-b border-primary/10 overflow-hidden"
        aria-label="4-Step Investment Process"
      >
        <div className="w-container max-w-none mx-auto px-0">
          <div className="mb-20 text-center">
            <span className="text-xs font-black uppercase tracking-[0.2em] text-primary/40 mb-4 block">
              Lifecycle of an Asset
            </span>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight text-primary">
              The 4-Step Process
            </h2>
          </div>

          <div className="relative">
            {/* Progress Line */}
            <div
              className="hidden lg:block absolute top-10 left-0 w-full h-px bg-primary/10"
              aria-hidden="true"
            />
            <div className="grid lg:grid-cols-4 gap-12 relative">
              {processSteps.map((step) => (
                <div key={step.step} className="flex flex-col items-start">
                  <div className="size-20 bg-primary text-white flex items-center justify-center text-3xl font-black mb-8 relative z-10 border-8 border-white">
                    {step.step}
                  </div>
                  <h4 className="text-xl font-black uppercase tracking-tight mb-4">
                    {step.title}
                  </h4>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════ VISUAL ANCHOR ═══════════════════════════════ */}
      <section
        className="h-[500px] relative bg-primary overflow-hidden"
        aria-hidden="true"
      >
        <div
          className="absolute inset-0 opacity-30 bg-cover bg-center"

          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=2070&auto=format&fit=crop')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/20 to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center p-6">
          <blockquote className="text-center max-w-4xl">
            <p className="text-white text-3xl md:text-5xl font-black uppercase tracking-tighter leading-tight italic">
              &ldquo;Precision is the precursor to power.&rdquo;
            </p>
            <cite className="mt-6 block text-accent-gold text-xs font-bold uppercase tracking-widest not-italic">
              — Maykott Group Investment Charter
            </cite>
          </blockquote>
        </div>
      </section>

      {/* ═══════════════════════════ INQUIRY CTA ═════════════════════════════════ */}
      <section className="py-32 bg-white" aria-label="Institutional Inquiry">
        <div className="max-w-4xl mx-auto px-6 border-t-4 border-primary pt-16">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-4xl font-black uppercase tracking-tight text-primary mb-6 leading-none">
                Institutional <br /> Inquiry
              </h2>
              <p className="text-slate-500 font-medium">
                Connect with our acquisitions desk for strategic opportunities.
              </p>
            </div>
            <div className="flex flex-col gap-8">
              <p className="text-lg leading-relaxed text-slate-800">
                We are actively reviewing opportunities that align with our
                criteria. For institutional partnerships or asset disposition,
                please engage our team directly.
              </p>
              <Link
                href="/contact"
                className="bg-black text-white text-xs font-black uppercase tracking-[0.2em] py-5 px-10 hover:bg-accent-gold transition-all flex items-center justify-center gap-4 group"
              >
                Submit Opportunity
                <span
                  className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform"
                  aria-hidden="true"
                >
                  arrow_forward
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
