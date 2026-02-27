"use client";

import { useState } from "react";
import SiteLayout from "@/components/SiteLayout";
import Image from "next/image";
import Link from "next/link";
import { subsidiaries, getSubsidiariesBySector } from "@/data/subsidiaries";
import type { Subsidiary } from "@/data/subsidiaries";

const sectorFilters = [
  { key: "all", label: "All Holdings", count: subsidiaries.length },
  {
    key: "infrastructure",
    label: "Infrastructure",
    count: subsidiaries.filter((s) => s.sector === "infrastructure").length,
  },
  {
    key: "technology",
    label: "Technology",
    count: subsidiaries.filter((s) => s.sector === "technology").length,
  },
  {
    key: "energy",
    label: "Energy",
    count: subsidiaries.filter((s) => s.sector === "energy").length,
  },
  {
    key: "logistics",
    label: "Logistics",
    count: subsidiaries.filter((s) => s.sector === "logistics").length,
  },
];

/**
 * SparklineChart: displays a micro bar chart from trend values.
 */
function SparklineChart({ trend }: { trend: number[] }) {
  return (

    <div className="w-16 h-4 flex items-end gap-[2px]" aria-hidden="true">
      {trend.map((val, i) => {
        const heightMap: Record<number, string> = {
          1: "h-1",
          2: "h-2",
          3: "h-3",
          4: "h-4",
        };
        const isRecent = i >= 3;
        return (
          <div
            key={i}
            className={`w-2 ${heightMap[val] || "h-2"} ${isRecent ? "bg-accent-gold" : "bg-slate-200"
              }`}
          />
        );
      })}
    </div>
  );
}

/**
 * SubsidiaryCard: renders a single portfolio card.
 */
function SubsidiaryCard({ subsidiary }: { subsidiary: Subsidiary }) {
  return (
    <article
      id={subsidiary.id}
      className="group bg-white border border-primary/5 overflow-hidden titan-shadow hover:border-accent-gold transition-all duration-500"
    >
      <Link href={`/portfolio/${subsidiary.id}`} className="relative h-48 overflow-hidden bg-primary block">
        <Image
          src={subsidiary.imageUrl}
          alt={subsidiary.imageAlt}
          fill
          className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 opacity-80"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {subsidiary.badge && (
          <div
            className={`absolute top-4 right-4 text-[9px] font-black uppercase px-2 py-1 tracking-tighter ${subsidiary.badgeVariant === "gold"
              ? "bg-accent-gold text-primary"
              : "bg-black text-white"
              }`}
          >
            {subsidiary.badge}
          </div>
        )}
      </Link>

      <div className="p-8">
        <div className="flex justify-between items-start mb-6">
          <Link href={`/portfolio/${subsidiary.id}`}>
            <h3 className="text-xl font-black uppercase tracking-tight group-hover:text-accent-gold transition-colors">
              {subsidiary.name}
            </h3>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">
              {subsidiary.sectorLabel}
            </p>
          </Link>
          <span
            className="material-symbols-outlined text-slate-300 group-hover:text-accent-gold transition-colors"
            aria-hidden="true"
          >
            {subsidiary.icon}
          </span>
        </div>

        <p className="text-sm text-slate-500 leading-relaxed mb-6 line-clamp-2">
          {subsidiary.description}
        </p>

        <div className="grid grid-cols-2 gap-4 py-6 border-y border-slate-100">
          <div className="flex flex-col gap-1">
            <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">
              Assets Under Mgmt
            </span>
            <span className="text-lg font-black tracking-tight text-primary">
              {subsidiary.assetsUnderManagement}
            </span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">
              Annual Growth
            </span>
            <span className="text-lg font-black tracking-tight text-accent-gold">
              {subsidiary.annualGrowth}
            </span>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <SparklineChart trend={subsidiary.trend} />
            <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">
              5Y Trend
            </span>
          </div>
          <Link
            href={`/portfolio/${subsidiary.id}`}
            className="text-[10px] font-black uppercase tracking-[0.2em] border-b border-primary/20 pb-0.5 hover:border-accent-gold hover:text-accent-gold transition-colors"
          >
            Details
          </Link>
        </div>

        {/* Additional metadata */}
        {subsidiary.headquarters && (
          <div className="mt-4 pt-4 border-t border-slate-50 flex gap-4 text-[9px] text-slate-300 uppercase tracking-widest font-bold">
            {subsidiary.headquarters && (
              <span className="flex items-center gap-1">
                <span
                  className="material-symbols-outlined text-xs"
                  aria-hidden="true"
                >
                  location_on
                </span>
                {subsidiary.headquarters}
              </span>
            )}
            {subsidiary.employees && (
              <span className="flex items-center gap-1">
                <span
                  className="material-symbols-outlined text-xs"
                  aria-hidden="true"
                >
                  group
                </span>
                {subsidiary.employees}
              </span>
            )}
            {subsidiary.yearAcquired && (
              <span className="flex items-center gap-1">
                <span
                  className="material-symbols-outlined text-xs"
                  aria-hidden="true"
                >
                  calendar_today
                </span>
                Acq. {subsidiary.yearAcquired}
              </span>
            )}
          </div>
        )}
      </div>
    </article>
  );
}

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredSubsidiaries = getSubsidiariesBySector(activeFilter).filter(
    (s) =>
      s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.sectorLabel.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <SiteLayout>
      {/* ═══════════════════ PORTFOLIO HERO ═══════════════════ */}
      <section
        className="relative pb-20 bg-background-light pt-12"
        aria-label="Portfolio Holdings Hero"
      >
        <div className="w-container max-w-none mx-auto px-0">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-4 pb-4 order-2 lg:order-1">
              <p className="text-slate-600 text-sm leading-relaxed font-light border-l border-accent-gold pl-6">
                A premium legacy built on institutional stability, prestige, and
                the pursuit of structural perfection across global industrial
                ecosystems.
              </p>
            </div>
            <div className="lg:col-span-8 order-1 lg:order-2 lg:text-right">
              <span className="text-accent-gold text-[10px] font-black uppercase tracking-[0.4em] mb-6 block">
                Established Excellence
              </span>
              <h1 className="text-4xl md:text-8xl font-black text-primary tracking-tighter leading-[0.9] mb-8 uppercase">
                SHAPING THE <br /> ARCHITECTURAL <br /> FUTURE.
              </h1>

              <div className="flex flex-wrap gap-4 lg:justify-end">
                <button
                  onClick={() => {
                    document
                      .getElementById("portfolio-grid")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="bg-black text-white px-8 py-4 text-[10px] font-black uppercase tracking-[0.2em] hover:bg-accent-gold transition-all"
                >
                  Explore Portfolio
                </button>
                <Link
                  href="/contact"
                  className="border border-primary/20 text-primary px-8 py-4 text-[10px] font-black uppercase tracking-[0.2em] hover:bg-primary hover:text-white transition-all"
                >
                  Partner With Us
                </Link>
              </div>
            </div>

          </div>

          {/* Hero Banner Image */}
          <div className="mt-16 relative w-full overflow-hidden aspect-[21/6]">
            <Image
              src="https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=2070&auto=format&fit=crop"
              alt="Maykott Group portfolio companies — global industrial architecture"
              fill
              className="object-cover grayscale"
              priority
              sizes="100vw"
            />
          </div>

          {/* Portfolio Stats Bar */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-0 border border-primary/10">
            {[
              { value: "$12B+", label: "Total AUM" },
              { value: "48", label: "Holdings" },
              { value: "18", label: "Countries" },
              { value: "25K+", label: "Employees" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="p-8 border-r border-primary/10 last:border-r-0 text-center"
              >
                <p className="text-2xl md:text-3xl font-black tracking-tighter text-primary mb-1">
                  {stat.value}
                </p>
                <p className="text-[8px] md:text-[9px] font-bold uppercase tracking-widest text-primary/40">
                  {stat.label}
                </p>

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ HOLDINGS SECTION (WITH STICKY FILTER) ═══════════════════ */}
      <div className="relative">
        {/* ═══════════════════ FILTER BAR ═══════════════════ */}
        <div className="sticky top-20 z-40 bg-white/90 backdrop-blur-md border-b border-primary/5 shadow-sm">
          <div className="w-container max-w-none mx-auto px-0 md:px-0 px-6 h-20 flex items-center justify-between gap-4">
            {/* Sector Filters */}
            <div
              className="flex items-center gap-4 md:gap-8 overflow-x-auto hide-scrollbar"
              role="tablist"
              aria-label="Filter portfolio by sector"
            >
              {sectorFilters.map((filter) => (
                <button
                  key={filter.key}
                  role="tab"
                  aria-selected={activeFilter === filter.key}
                  onClick={() => setActiveFilter(filter.key)}
                  className={`flex items-center gap-2 whitespace-nowrap text-[11px] font-bold uppercase tracking-widest transition-colors pb-1 ${activeFilter === filter.key
                    ? "border-b-2 border-primary text-primary"
                    : "text-slate-400 hover:text-primary"
                    }`}
                >
                  {filter.label}
                  <span
                    className={`text-[10px] px-1.5 py-0.5 ${activeFilter === filter.key
                      ? "bg-black text-white"
                      : "bg-slate-100 text-slate-500"
                      }`}
                  >
                    {filter.count}
                  </span>
                </button>
              ))}
            </div>

            {/* Search */}
            <div className="hidden md:flex items-center bg-slate-100 px-4 py-2 w-64 gap-2">
              <span
                className="material-symbols-outlined text-slate-400 text-sm"
                aria-hidden="true"
              >
                search
              </span>
              <input
                type="text"
                placeholder="SEARCH SUBSIDIARIES..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-transparent border-none focus:ring-0 text-[10px] font-bold tracking-widest placeholder:text-slate-400 w-full outline-none"
                aria-label="Search portfolio subsidiaries"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  aria-label="Clear search"
                  className="text-slate-400 hover:text-primary"
                >
                  <span className="material-symbols-outlined text-sm">close</span>
                </button>
              )}
            </div>
          </div>
        </div>


        {/* ═══════════════════ PORTFOLIO GRID ═══════════════════ */}
        <section
          id="portfolio-grid"
          className="w-container max-w-none mx-auto px-0 md:px-0 px-6 py-16"
          aria-label="Portfolio Holdings Grid"
        >
          {filteredSubsidiaries.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredSubsidiaries.map((subsidiary) => (
                <SubsidiaryCard key={subsidiary.id} subsidiary={subsidiary} />
              ))}
            </div>
          ) : (
            <div className="text-center py-24">
              <span
                className="material-symbols-outlined text-6xl text-slate-200 mb-4 block"
                aria-hidden="true"
              >
                search_off
              </span>
              <p className="text-slate-400 font-bold uppercase tracking-widest text-sm">
                No holdings found matching your search.
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setActiveFilter("all");
                }}
                className="mt-4 text-xs font-bold uppercase tracking-widest text-accent-gold hover:underline"
              >
                Clear Filters
              </button>
            </div>
          )}
        </section>
      </div>

      {/* ═══════════════════ STRATEGIC INQUIRY CTA ═══════════════════ */}
      <section className="bg-background-dark py-24 border-t border-white/5">
        <div className="w-container max-w-none mx-auto px-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <span className="text-accent-gold text-[10px] font-black uppercase tracking-[0.4em] mb-6 block">
                Institutional Access
              </span>
              <h2 className="text-3xl md:text-6xl font-black text-white tracking-tighter leading-tight mb-8 uppercase">
                Strategic <br /> Inquiry.
              </h2>

              <p className="text-white/40 text-sm leading-relaxed font-light max-w-lg mb-10">
                We invite institutional investors and potential strategic
                partners to explore co-investment opportunities across our
                industrial portfolio.
              </p>
              <div className="flex flex-wrap gap-6">
                <Link
                  href="/investment"
                  className="gold-gradient-border px-10 py-4 text-[11px] font-black uppercase tracking-[0.3em] text-white hover:bg-accent-gold hover:text-primary transition-all"
                >
                  Investment Prospectus
                </Link>
                <Link
                  href="/contact"
                  className="border-b border-white/20 text-white/60 px-4 py-4 text-[11px] font-black uppercase tracking-[0.3em] hover:text-accent-gold hover:border-accent-gold transition-all"
                >
                  Partner Registry
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  icon: "hub",
                  title: "Subsidiary Network",
                  desc: "Explore direct operational synergies within our ecosystem.",
                },
                {
                  icon: "monitoring",
                  title: "Growth Capital",
                  desc: "Institutional-grade asset management and scaling strategies.",
                },
                {
                  icon: "public",
                  title: "Global Reach",
                  desc: "Operations spanning 18 countries across 4 continents.",
                },
                {
                  icon: "verified",
                  title: "ISO Certified",
                  desc: "ISO 27001 and quality-management frameworks across all entities.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-primary/40 border border-white/5 p-8"
                >
                  <span
                    className="text-accent-gold material-symbols-outlined mb-4 block"
                    aria-hidden="true"
                  >
                    {item.icon}
                  </span>
                  <h4 className="text-white text-xs font-black uppercase tracking-widest mb-2">
                    {item.title}
                  </h4>
                  <p className="text-white/30 text-[10px] leading-relaxed uppercase">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
