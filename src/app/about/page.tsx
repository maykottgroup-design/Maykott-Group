import type { Metadata } from "next";
import SiteLayout from "@/components/SiteLayout";
import Image from "next/image";
import Link from "next/link";
import { getAllLeaders } from "@/data/leadership";

export const metadata: Metadata = {
  title: "About | Maykott Group",
  description:
    "Discover the Maykott Group story — a decade of architectural excellence, strategic acquisitions, and global industrial leadership across critical B2B sectors.",
};

const milestones = [
  {
    year: "2014",
    title: "Genesis",
    description:
      "Founding of Maykott Group in Zurich with a mission to stabilize European supply chains through precision M&A.",
  },
  {
    year: "2017",
    title: "Portfolio Expansion",
    description:
      "First major acquisition wave — entering logistics, energy, and financial services across 8 European markets.",
  },
  {
    year: "2020",
    title: "The Titan Pivot",
    description:
      "Restructuring of the Group portfolio to focus exclusively on heavy infrastructure and industrial logistics.",
  },
  {
    year: "2022",
    title: "APAC Breakthrough",
    description:
      "Strategic expansion into Southeast Asia with terminal acquisitions in Singapore and Jakarta.",
  },
  {
    year: "2024",
    title: "Global Expansion",
    description:
      "Surpassing $12B AUM milestone with operations across 32 global hubs and 48 portfolio companies.",
  },
];

const titanFramework = [
  {
    icon: "architecture",
    title: "Build",
    description:
      "Internal growth fueled by our commitment to engineering excellence and cutting-edge industrial R&D.",
    items: ["Infrastructure Ops", "Internal Logistics", "Proprietary Tech"],
  },
  {
    icon: "account_balance",
    title: "Acquire",
    description:
      "Strategic M&A is in our DNA. We identify undervalued industrial assets and integrate them into our ecosystem.",
    items: [
      "Vertical Integration",
      "Asset Optimization",
      "Strategic Partnerships",
    ],
  },
  {
    icon: "rocket_launch",
    title: "Scale",
    description:
      "Efficiency at volume. We leverage global networks and automated systems to achieve market penetration.",
    items: ["Market Dominance", "Global Distribution", "Cost Efficiency"],
  },
];

export default function AboutPage() {
  const leaders = getAllLeaders();

  return (
    <SiteLayout>
      {/* ═══════════════════════════════════ HERO ═══════════════════════════════════ */}
      <section
        className="pt-16 pb-16 px-6 bg-primary"
        aria-label="About Maykott Group"
      >
        <div className="w-container max-w-none mx-auto px-0 md:px-0">
          <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-accent-gold mb-8 block">
            Established Excellence
          </span>
          <div className="flex flex-col md:flex-row justify-between items-end gap-12 mb-16">
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-none uppercase max-w-4xl text-white">
              Shaping the
              <br />
              Architectural
              <br />
              Future.
            </h1>
            <p className="text-white/50 text-lg font-light leading-relaxed max-w-md pb-4">
              A premium legacy built on institutional stability, prestige, and
              the pursuit of structural perfection across global industrial
              ecosystems.
            </p>
          </div>
          <div className="flex gap-4 mb-20">
            <Link
              href="/portfolio"
              className="bg-off-white text-primary px-8 py-3 text-[10px] font-bold uppercase tracking-widest hover:bg-accent-gold transition-colors"
            >
              Explore Portfolio
            </Link>
            <Link
              href="/contact"
              className="border border-white/20 px-8 py-3 text-[10px] font-bold uppercase tracking-widest text-white hover:bg-white/10 transition-colors"
            >
              Direct Inquiry
            </Link>
          </div>
          <div className="w-full aspect-[21/7] overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
              alt="Maykott Group Global Headquarters — modern architectural interior"
              width={2069}
              height={888}
              className="w-full h-full object-cover"

              priority
            />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════ 10-YEAR AMBITION ════════════════════════════ */}
      <section
        className="py-32 px-6 bg-white"
        aria-label="10-Year Strategic Ambition"
      >
        <div className="w-container max-w-none mx-auto px-0 md:px-0">
          <div className="grid md:grid-cols-12 gap-16 items-center">
            <div className="md:col-span-6">
              <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-accent-gold mb-6 block">
                Strategic Roadmap
              </span>
              <h2 className="text-5xl md:text-6xl font-bold tracking-tighter uppercase mb-8 leading-none text-primary">
                Our 10-Year Ambition
              </h2>
              <div className="w-20 h-1 bg-accent-gold mb-8" />
              <p className="text-base leading-relaxed mb-10 text-neutral-700">
                By 2034, Maykott Group will redefine the global infrastructure
                landscape. Our target is a{" "}
                <span className="text-primary font-bold">$50B valuation</span>,
                driven by strategic market dominance in emerging sectors.
              </p>
              <ul className="space-y-6 mb-12" role="list">
                {[
                  {
                    title: "Global Industrial Leadership",
                    desc: "Expanding our operational footprint to 45 countries across 4 continents.",
                  },
                  {
                    title: "Sustainable Innovation",
                    desc: "Net-zero carbon output across all newly constructed facilities by 2030.",
                  },
                  {
                    title: "Technology Integration",
                    desc: "AI-powered operations management deployed across 100% of portfolio companies.",
                  },
                ].map((item) => (
                  <li key={item.title} className="flex gap-4">
                    <span
                      className="material-symbols-outlined text-accent-gold flex-shrink-0"
                      aria-hidden="true"
                    >
                      check_circle
                    </span>
                    <div>
                      <h4 className="font-bold uppercase text-xs tracking-widest mb-1 text-primary">
                        {item.title}
                      </h4>
                      <p className="text-xs text-neutral-600">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <Link
                href="/investment"
                className="px-8 py-4 text-[10px] font-bold uppercase tracking-[0.15em] hover:bg-accent-gold transition-colors bg-black text-white inline-block"
              >
                Read the Manifesto
              </Link>
            </div>

            <div className="md:col-span-6 relative">
              <Image
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
                alt="Maykott Group - Strategic corporate headquarters interior"
                width={800}
                height={800}
                className="w-full aspect-square object-cover"

              />
              <div className="absolute -bottom-8 -left-8 bg-primary p-10 border border-white/10 shadow-2xl">
                <h3 className="text-4xl font-bold text-accent-gold">$50B</h3>
                <p className="text-[10px] font-bold uppercase tracking-widest text-white/60">
                  Target Valuation 2034
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════ TITAN FRAMEWORK ═════════════════════════════ */}
      <section
        className="py-40 px-6 bg-primary border-t border-white/5"
        aria-label="The Titan Framework — Operational Philosophy"
      >
        <div className="w-container max-w-none mx-auto px-0 md:px-0">
          <div className="text-center mb-24">
            <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-accent-gold mb-4 block">
              Operational Philosophy
            </span>
            <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter text-white">
              The Titan Framework
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-0 border border-white/5">
            {titanFramework.map((item, i) => (
              <article
                key={item.title}
                className={`p-12 border-r border-white/5 last:border-r-0 ${i === 1 ? "bg-background-dark" : "bg-[#1A1A1A]"
                  }`}
              >
                <span
                  className="material-symbols-outlined text-accent-gold text-4xl mb-8 block"
                  aria-hidden="true"
                >
                  {item.icon}
                </span>
                <h4 className="text-xl font-bold uppercase tracking-widest mb-6 text-white">
                  {item.title}
                </h4>
                <p className="text-white/50 leading-relaxed text-sm mb-8">
                  {item.description}
                </p>
                <ul className="space-y-3 text-[10px] font-bold uppercase tracking-widest text-white/40">
                  {item.items.map((point) => (
                    <li key={point} className="flex items-center gap-2">
                      <span
                        className="w-1.5 h-1.5 bg-accent-gold flex-shrink-0"
                        aria-hidden="true"
                      />
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════ TIMELINE ════════════════════════════════════ */}
      <section
        className="py-40 px-6 bg-off-white"
        aria-label="Company Evolution Timeline"
      >
        <div className="w-container max-w-none mx-auto px-0 md:px-0">
          <div className="text-center mb-24">
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-primary">
              The Evolution
            </h2>
            <div className="w-24 h-1 bg-accent-gold mx-auto mt-6" />
          </div>

          <div className="relative">
            {/* Center Line (desktop) */}
            <div
              className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-primary/10 hidden md:block"
              aria-hidden="true"
            />

            <div className="space-y-12">
              {milestones.map((milestone, i) => (
                <div
                  key={milestone.year}
                  className={`flex flex-col md:flex-row items-center ${i % 2 === 0 ? "" : "md:flex-row-reverse"
                    }`}
                >
                  <div
                    className={`flex-1 ${i % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16"
                      } mb-8 md:mb-0`}
                  >
                    <div className="bg-white p-8 md:p-10 border border-black/5 shadow-sm hover:shadow-md transition-shadow">
                      <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-accent-gold mb-2 block">
                        {milestone.year}
                      </span>
                      <h4 className="font-bold uppercase text-2xl text-primary tracking-tighter mb-4">
                        {milestone.title}
                      </h4>
                      <p className="text-neutral-500 text-sm leading-relaxed max-w-sm md:ml-auto italic">
                        {milestone.description}
                      </p>
                    </div>
                  </div>

                  {/* Center dot */}
                  <div
                    className="z-10 w-4 h-4 rounded-full bg-primary ring-8 ring-off-white flex-shrink-0"
                    aria-hidden="true"
                  />

                  <div
                    className={`flex-1 ${i % 2 === 0 ? "md:pl-16" : "md:pr-16"
                      } hidden md:flex items-center ${i % 2 === 0 ? "" : "justify-end"
                      }`}
                  >
                    <span className="text-9xl font-black text-primary/5 select-none">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════ FULL LEADERSHIP ═════════════════════════════ */}
      <section
        className="py-32 px-6 bg-primary"
        id="leadership"
        aria-label="Executive Leadership Board"
      >
        <div className="w-container max-w-none mx-auto px-0 md:px-0">
          <span className="text-[10px] font-bold uppercase tracking-widest text-accent-gold mb-4 block">
            Architects of Scale
          </span>
          <h2 className="text-6xl font-bold uppercase tracking-tighter mb-24 text-white">
            The Executive Board
          </h2>

          <div className="grid md:grid-cols-2 gap-16">
            {leaders.map((leader) => (
              <article
                key={leader.id}
                className="flex flex-col md:flex-row gap-8 items-start"
              >
                <Image
                  src={leader.imageUrl}
                  alt={leader.imageAlt}
                  width={200}
                  height={250}
                  className="w-44 h-56 object-cover hover:scale-105 transition-all flex-shrink-0"

                />
                <div>
                  <h3 className="text-2xl font-bold uppercase text-white">
                    {leader.name}
                  </h3>
                  <p className="text-accent-gold text-xs font-bold uppercase tracking-widest mb-4">
                    {leader.title}
                  </p>
                  <p className="text-white/50 text-sm leading-relaxed">
                    {leader.bio}
                  </p>
                  {leader.linkedIn && (
                    <a
                      href={leader.linkedIn}
                      className="mt-4 text-[10px] font-bold uppercase tracking-widest text-white/30 hover:text-accent-gold transition-colors flex items-center gap-2 inline-flex"
                      aria-label={`${leader.name} LinkedIn profile`}
                    >
                      <span className="material-symbols-outlined text-sm">
                        link
                      </span>
                      LinkedIn
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════ CTA ═════════════════════════════════════════ */}
      <section
        className="relative py-32 md:py-48 px-6 bg-white overflow-hidden flex items-center justify-center"
        aria-label="Call to Action"
      >
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none select-none opacity-[0.03]"
          aria-hidden="true"
        >
          <span className="text-[20vw] font-black tracking-tighter text-black leading-none">
            MAYKOTT
          </span>
        </div>
        <div className="w-container max-w-none mx-auto px-0 md:px-0 text-center relative z-10 w-full">
          <h2 className="text-5xl md:text-8xl font-black tracking-tighter uppercase text-black leading-[0.9] mb-16">
            LET&apos;S BUILD THE
            <br />
            FUTURE TOGETHER.
          </h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12">
            <Link
              href="/contact"
              className="bg-black text-white px-10 py-5 text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-accent-gold transition-all min-w-[280px] text-center"
            >
              PARTNER WITH MAYKOTT
            </Link>
            <a
              href="mailto:inquiry@maykott.com"
              className="text-black text-[10px] font-bold uppercase tracking-[0.2em] relative group py-2 border-b border-black hover:border-accent-gold hover:text-accent-gold transition-colors"
            >
              DIRECT INQUIRY
            </a>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
