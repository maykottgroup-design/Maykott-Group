import type { Metadata } from "next";
import SiteLayout from "@/components/SiteLayout";
import Link from "next/link";
import Image from "next/image";
import { getFeaturedSubsidiaries } from "@/data/subsidiaries";
import { getFeaturedLeaders } from "@/data/leadership";

export const metadata: Metadata = {
  title: "Maykott Holdings | Global B2B Industrial Holding Company",
  description:
    "A global B2B industrial holding company deploying capital with architectural precision across infrastructure, technology, energy, and logistics. Partner with Maykott Holdings.",
};

const statsData = [
  { value: "$12B+", label: "Assets Under Management" },
  { value: "48", label: "Portfolio Holdings" },
  { value: "32", label: "Global Hubs" },
  { value: "10+", label: "Years of Excellence" },
];

export default function HomePage() {
  const featuredSubsidiaries = getFeaturedSubsidiaries();
  const featuredLeaders = getFeaturedLeaders();

  return (
    <SiteLayout>
      {/* ═══════════════════════════════════ HERO ═══════════════════════════════════ */}
      <section
        className="relative flex flex-col bg-background-light overflow-hidden pt-20"
        aria-label="Hero section"
      >
        <div className="w-container max-w-none mx-auto px-0 pb-20 pt-12">
          {/* Headline & Text */}
          <div className="mb-16 flex flex-col lg:flex-row lg:justify-between lg:items-end gap-12">
            <div className="max-w-4xl">
              <p className="text-[10px] font-bold uppercase tracking-[0.5em] text-accent-gold mb-8 animate-fade-in">
                Enduring Architecture
              </p>
              <h1 className="text-[10.5vw] sm:text-[8vw] md:text-8xl lg:text-9xl font-black tracking-tighter leading-[0.9] uppercase animate-slide-up flex flex-col">
                <span>Establishing</span>
                <span>Architectural</span>
                <span>Excellence</span>
              </h1>



            </div>

            <div className="lg:max-w-sm xl:max-w-md pb-6 animate-fade-in">
              <p className="text-primary/70 text-lg leading-relaxed font-medium border-l border-accent-gold/30 pl-8">
                Architecting the frameworks through which resilient enterprises are built, scaled, and sustained across industries.
              </p>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative w-full overflow-hidden aspect-[21/9] group mb-12 shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=2070&auto=format&fit=crop"
              alt="Maykott Holdings - Modern architectural structure representing precision and scale"
              fill
              className="object-cover transition-all duration-1000 group-hover:scale-105"
              priority
              sizes="(max-width: 1280px) 100vw, 1280px"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background-light/30 via-transparent to-transparent" />
          </div>

          {/* Hero Buttons */}
          <div className="flex flex-col sm:flex-row gap-6">
            <Link
              href="/portfolio"
              className="bg-black text-white px-10 py-5 text-xs font-black uppercase tracking-[0.2em] hover:bg-accent-gold hover:text-white transition-all duration-300 flex items-center justify-center gap-3 group"
            >
              Explore Portfolio
              <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
                north_east
              </span>
            </Link>
            <Link
              href="/inquiry"
              className="bg-transparent border border-black text-black px-10 py-5 text-xs font-black uppercase tracking-[0.2em] hover:bg-black hover:text-white transition-all duration-300 text-center"
            >
              Partner With Us
            </Link>
          </div>
        </div>

        {/* Stats ticker */}
        <div className="bg-primary text-white w-full py-0">
          <div className="w-container max-w-none mx-auto px-0">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-0 border-t border-white/5">
              {statsData.map((stat, i) => (
                <div
                  key={i}
                  className="p-6 md:p-10 border-b md:border-b-0 border-r border-white/5 last:border-r-0"
                >
                  <p className="text-2xl md:text-4xl font-black tracking-tighter text-accent-gold mb-1">
                    {stat.value}
                  </p>
                  <p className="text-[8px] md:text-[10px] font-bold uppercase tracking-widest text-white/50">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════ VISION ═══════════════════════════════════ */}
      <section
        className="bg-primary text-white py-24"
        aria-label="The Maykott Standard"
      >
        <div className="w-container max-w-none mx-auto px-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <h2 className="text-accent-gold text-xs font-bold uppercase tracking-[0.4em] mb-6">
                The Maykott Standard
              </h2>
              <h3 className="text-3xl md:text-6xl font-black uppercase leading-tight mb-8">
                Designed for Structural Coherence.
              </h3>
              <div className="h-1 w-24 bg-accent-gold mb-8 md:mb-12" />
            </div>

            <div className="space-y-8 text-white/90 text-lg leading-relaxed font-normal">
              <p>
                Maykott is built upon the principle that enduring enterprises are not assembled opportunistically but architected deliberately.
              </p>
              <p>
                This approach preserves continuity as new ventures emerge. Growth is approached methodically, with structure and long-term stewardship guiding every stage of development.
              </p>
            </div>
          </div>

          {/* Three Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0.5 mt-20 bg-white/10">
            {[
              {
                num: "01",
                title: "Strategic Rigor",
                desc: "Initiatives are evaluated through disciplined structural alignment and long-term enterprise viability.",
              },
              {
                num: "02",
                title: "Operational Clarity",
                desc: "Execution occurs within clearly defined initiatives supported by architectural oversight.",
              },
              {
                num: "03",
                title: "Compound Growth",
                desc: "Enterprises are developed to evolve methodically, reinforcing long-term continuity.",
              },
            ].map((pillar) => (
              <div
                key={pillar.num}
                className="bg-primary p-12 border-t border-white/10 group hover:bg-accent-gold/10 transition-colors"
              >
                <span className="text-accent-gold font-black text-4xl mb-6 block">
                  {pillar.num}
                </span>
                <h4 className="text-xl font-bold uppercase mb-4">
                  {pillar.title}
                </h4>
                <p className="text-sm text-white/50 leading-loose uppercase tracking-tighter">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════ PORTFOLIO SHOWCASE ═══════════════════════════════ */}
      <section
        className="bg-white py-24"
        aria-label="Portfolio Holdings Showcase"
      >
        <div className="w-container max-w-none mx-auto px-0">
          <div className="flex justify-between items-end mb-16">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">
              Portfolio
              <br />
              Holdings
            </h2>

            <Link
              href="/portfolio"
              className="hidden md:flex items-center gap-2 text-xs font-bold uppercase tracking-widest hover:text-accent-gold transition-colors"
            >
              View All Holdings
              <span className="material-symbols-outlined text-sm">
                north_east
              </span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredSubsidiaries.map((subsidiary) => (
              <Link
                key={subsidiary.id}
                href={`/portfolio/${subsidiary.id}`}
                className="group relative aspect-[3/4] overflow-hidden bg-primary block"
                aria-label={`${subsidiary.name} - ${subsidiary.sectorLabel}`}
              >
                <Image
                  src={subsidiary.imageUrl}
                  alt={subsidiary.imageAlt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />

                <div className="absolute bottom-0 p-10 w-full">
                  <span className="text-accent-gold text-[10px] font-bold uppercase tracking-widest mb-2 block">
                    {subsidiary.sectorLabel}
                  </span>
                  <h3 className="text-3xl font-black text-white uppercase mb-4">
                    {subsidiary.name}
                  </h3>
                  <div className="text-white text-[10px] font-bold uppercase tracking-[0.2em] flex items-center gap-2 group-hover:gap-4 transition-all">
                    View Case Study
                    <span className="material-symbols-outlined text-sm">
                      arrow_forward
                    </span>
                  </div>
                </div>
                <div className="absolute top-0 right-0 p-6">
                  <div className="size-12 border border-accent-gold/30 rounded-full flex items-center justify-center">
                    <span className="material-symbols-outlined text-accent-gold">
                      {subsidiary.icon}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-10 md:hidden">
            <Link
              href="/portfolio"
              className="bg-black text-white px-8 py-4 text-xs font-bold uppercase tracking-[0.15em] hover:bg-accent-gold transition-all duration-300 inline-flex items-center gap-3"
            >
              View All Holdings
              <span className="material-symbols-outlined text-sm">
                north_east
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════ STRATEGIC RIGOR / INVESTMENT ══════════════════════ */}
      <section
        className="bg-background-light py-24"
        aria-label="Investment Criteria"
      >
        <div className="w-container max-w-none mx-auto px-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
            {/* Left: Criteria */}
            <div>
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-8 leading-none">
                Strategic
                <br />
                Rigor.
              </h2>

              <p className="text-xl text-primary/60 mb-12">
                We acquire and scale mid-market B2B companies that are
                foundational to global industry.
              </p>
              <div className="space-y-6">
                {[
                  { label: "AVERAGE TICKET SIZE", value: "$50M - $150M" },
                  { label: "EBITDA Margin", value: "15% – 25%" },
                  { label: "Global Footprint", value: "Multi-Region" },
                ].map((criterion) => (
                  <div
                    key={criterion.label}
                    className="p-6 md:p-8 border border-primary/10 bg-white flex justify-between items-center hover:border-accent-gold transition-colors group"
                  >
                    <span className="text-[10px] md:text-sm font-bold uppercase tracking-widest">
                      {criterion.label}
                    </span>
                    <span className="text-xl md:text-2xl font-black text-primary group-hover:text-accent-gold transition-colors">
                      {criterion.value}
                    </span>
                  </div>

                ))}
              </div>
            </div>

            {/* Right: CTA Panel */}
            <div className="bg-primary p-12 flex flex-col justify-center">
              <h4 className="text-accent-gold text-[10px] font-bold uppercase tracking-[0.3em] mb-6">
                Acquisition Interest
              </h4>
              <p className="text-white text-3xl font-black leading-tight mb-10">
                Strategic collaboration is welcomed with partners aligned with disciplined enterprise development, technological innovation, and long-term structural thinking.
              </p>
              <Link
                href="/investment"
                className="inline-flex items-center gap-4 text-white font-bold uppercase tracking-widest text-xs hover:text-accent-gold transition-colors"
              >
                Review Investment Charter
                <span className="material-symbols-outlined p-2 bg-accent-gold text-primary rounded-full text-sm">
                  arrow_forward
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════ GLOBAL NETWORK ════════════════════════════════ */}
      <section className="bg-white py-24" aria-label="Global Network">
        <div className="w-container max-w-none mx-auto px-0">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-6xl font-black uppercase tracking-tighter mb-4">
              Global Network
            </h2>
            <div className="w-20 h-1 bg-accent-gold mx-auto" />
          </div>


          <div className="relative w-full aspect-[4/3] md:aspect-[2/1] bg-background-light overflow-hidden rounded-sm group titan-grid">

            {/* World Map placeholder with overlay */}
            <div className="absolute inset-0 flex items-center justify-center opacity-30">
              <div
                className="w-full h-full bg-contain bg-center bg-no-repeat"
                style={{
                  backgroundImage:
                    "url('https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg')",
                }}
              />
            </div>

            {/* Decorative grid lines */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-px h-full bg-primary/5 absolute left-1/4" />
              <div className="w-px h-full bg-primary/5 absolute left-1/2" />
              <div className="w-px h-full bg-primary/5 absolute left-3/4" />
              <div className="h-px w-full bg-primary/5 absolute top-1/3" />
              <div className="h-px w-full bg-primary/5 absolute top-2/3" />
            </div>

            {/* Pulse Points */}
            {[
              { top: "25%", left: "23%", label: "New York" },
              { top: "22%", left: "48%", label: "London" },
              { top: "30%", left: "58%", label: "Dubai" },
              { top: "50%", left: "73%", label: "Singapore" },
              { top: "28%", left: "80%", label: "Tokyo" },
            ].map((point) => (
              <div
                key={point.label}
                className="absolute group-hover:scale-125 transition-transform duration-500"
                style={{ top: point.top, left: point.left }}
                title={point.label}
                aria-label={`Hub location: ${point.label}`}
              >
                <div className="size-4 bg-accent-gold rounded-full animate-pulse-slow absolute opacity-75" />
                <div className="size-4 bg-accent-gold rounded-full relative border-2 border-white shadow-lg" />
              </div>
            ))}

            {/* Info Callout */}
            <div className="absolute bottom-4 left-4 right-4 md:bottom-10 md:left-10 md:right-auto bg-primary p-4 md:p-6 text-white max-w-sm shadow-2xl">
              <h5 className="font-black uppercase text-lg md:text-xl mb-2">
                50+ HUBS WORLDWIDE
              </h5>
              <p className="text-[8px] md:text-xs text-white/60 tracking-widest uppercase">
                5 CONTINENTS. 12 KEY CITIES. 1 CORE MISSION: UNIFIED INDUSTRIAL
                GROWTH.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════ LEADERSHIP TEASER ═══════════════════════════════ */}
      <section className="bg-primary py-24" aria-label="Leadership Team">
        <div className="w-container max-w-none mx-auto px-0">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
            <div>
              <p className="text-accent-gold text-xs font-bold uppercase tracking-[0.4em] mb-4">
                Architects of Scale
              </p>
              <h2 className="text-white text-3xl md:text-5xl font-black uppercase tracking-tighter">
                Leadership Team
              </h2>

            </div>
            <p className="text-white/50 max-w-sm uppercase text-xs tracking-widest leading-relaxed">
              Guiding the architectural development of the organization and overseeing long-term enterprise strategy.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">

            {featuredLeaders.map((leader) => (
              <article
                key={leader.id}
                className="group relative aspect-[4/5] overflow-hidden bg-white/5"
              >
                <Image
                  src={leader.imageUrl}
                  alt={leader.imageAlt}
                  fill
                  className="object-cover group-hover:scale-105 transition-all duration-700"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />

                <div className="absolute bottom-0 p-8 w-full">
                  <h3 className="text-white text-xl font-black uppercase tracking-tighter">
                    {leader.name}
                  </h3>
                  <p className="text-accent-gold text-[10px] font-bold uppercase tracking-widest">
                    {leader.title}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/about#leadership"
              className="border border-white/20 text-white px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-primary transition-all duration-300 inline-block"
            >
              View Full Leadership
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════ FINAL CTA ═════════════════════════════════ */}
      <section
        className="bg-white overflow-hidden relative py-32"
        aria-label="Call to action"
      >
        {/* Watermark */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] select-none pointer-events-none w-full text-center overflow-hidden flex justify-center items-center"
          aria-hidden="true"
        >
          <span className="text-[60px] sm:text-[120px] md:text-[250px] lg:text-[340px] font-black leading-none uppercase tracking-tighter whitespace-nowrap">
            MAYKOTT
          </span>
        </div>


        <div className="w-container max-w-none mx-auto px-0 text-center relative z-10">
          <h2 className="text-3xl sm:text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-12">
            Let&apos;s Build the Future Together.
          </h2>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link
              href="/inquiry"
              className="bg-black text-white px-16 py-6 text-sm font-bold uppercase tracking-[0.15em] hover:bg-accent-gold transition-all duration-500 w-full sm:w-auto text-center"
            >
              Partner With Maykott
            </Link>
            <a
              href="mailto:inquiry@maykott.com"
              className="text-xs font-bold uppercase tracking-[0.15em] border-b-2 border-primary pb-1 hover:border-accent-gold hover:text-accent-gold transition-colors"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
