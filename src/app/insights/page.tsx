"use client";

import { useState } from "react";
import SiteLayout from "@/components/SiteLayout";
import Image from "next/image";
import Link from "next/link";
import {
  insights,
  getFeaturedInsight,
  getInsightsBySector,
} from "@/data/insights";

const sectorFilters = [
  { key: "all", label: "All Sectors" },
  { key: "energy", label: "Energy & Power" },
  { key: "logistics", label: "Logistics" },
  { key: "decarbonization", label: "Decarbonization" },
  { key: "finance", label: "Finance" },
  { key: "technology", label: "Technology" },
];

export default function InsightsPage() {
  const [activeFilter, setActiveFilter] = useState("all");
  const featuredInsight = getFeaturedInsight();
  const filteredInsights = getInsightsBySector(activeFilter).filter(
    (i) => !i.featured,
  );

  return (
    <SiteLayout>
      {/* ═══════════════════════════ HERO FEATURE ═══════════════════════════════ */}
      {featuredInsight && (
        <section
          className="w-container max-w-none mx-auto px-0 md:px-0 px-6 py-12"
          aria-label="Featured Insight"
        >
          {/* Breadcrumb */}
          <nav
            className="flex items-center gap-2 mb-12"
            aria-label="Breadcrumb"
          >
            <Link
              href="/"
              className="text-[10px] font-bold uppercase tracking-widest text-primary/40 hover:text-primary transition-colors"
            >
              Archive
            </Link>
            <span
              className="material-symbols-outlined text-[10px] text-primary/20"
              aria-hidden="true"
            >
              chevron_right
            </span>
            <span className="text-[10px] font-bold uppercase tracking-widest text-primary">
              Strategic Perspectives
            </span>
          </nav>

          <article className="grid grid-cols-1 lg:grid-cols-12 gap-0 border border-primary/10 overflow-hidden bg-white shadow-sm">
            {/* Feature Image */}
            <div className="lg:col-span-7 relative aspect-[16/10] order-2 lg:order-1">
              <Image
                src={featuredInsight.imageUrl}
                alt={featuredInsight.imageAlt}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 58vw"
              />
            </div>

            {/* Content */}
            <div className="lg:col-span-5 p-12 flex flex-col justify-center order-1 lg:order-2 bg-white border-l border-primary/10">
              <div className="mb-4">
                <span className="inline-block px-2 py-1 bg-primary text-[10px] font-bold text-white uppercase tracking-tighter">
                  Research Report 2025
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-black leading-[1.1] mb-6 tracking-tight">
                {featuredInsight.title}
              </h1>
              <p className="text-lg text-primary/60 font-light mb-10 leading-relaxed italic">
                {featuredInsight.excerpt}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href={`/insights/${featuredInsight.id}`}
                  className="bg-black text-white px-8 py-4 font-bold text-sm flex items-center justify-between group hover:bg-accent-gold transition-all"
                >
                  <span className="uppercase tracking-widest">
                    Access Report
                  </span>
                  <span
                    className="material-symbols-outlined text-sm ml-4 group-hover:translate-x-1 transition-transform"
                    aria-hidden="true"
                  >
                    arrow_forward
                  </span>
                </Link>
                <Link
                  href={`/insights/${featuredInsight.id}`}
                  className="border border-primary/20 hover:border-primary px-8 py-4 font-bold text-sm uppercase tracking-widest transition-colors text-center"
                >
                  Executive Summary
                </Link>
              </div>
            </div>
          </article>
        </section>
      )}

      {/* ═══════════════════════════ FILTERS & REPOSITORY ════════════════════════ */}
      <div className="w-container max-w-none mx-auto px-0 md:px-0 px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-primary pb-4 mb-12">
          <div>
            <h2 className="text-3xl font-black uppercase tracking-tighter">
              Intelligence Repository
            </h2>
            <p className="text-sm font-medium text-primary/40 mt-1 uppercase tracking-widest">
              Curated data &amp; analysis for sovereign funds
            </p>
          </div>
          <div
            className="flex items-center gap-4 overflow-x-auto hide-scrollbar"
            role="tablist"
            aria-label="Filter insights by sector"
          >
            {sectorFilters.map((filter) => (
              <button
                key={filter.key}
                role="tab"
                aria-selected={activeFilter === filter.key}
                onClick={() => setActiveFilter(filter.key)}
                className={`whitespace-nowrap text-[11px] font-extrabold uppercase tracking-widest px-1 pb-1 transition-colors ${activeFilter === filter.key
                    ? "border-b-2 border-primary text-primary"
                    : "text-primary/30 hover:text-primary"
                  }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* ═══════════════════ INSIGHTS GRID ═══════════════════ */}
        <section
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16 mb-24"
          aria-label="Intelligence Feed"
        >
          {filteredInsights.length > 0 ? (
            filteredInsights.map((insight) => (
              <Link
                href={`/insights/${insight.id}`}
                key={insight.id}
                className="group cursor-pointer block"
              >
                <div className="aspect-[16/9] bg-primary/5 overflow-hidden border border-primary/5 mb-6 relative">
                  <Image
                    src={insight.imageUrl}
                    alt={insight.imageAlt}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-[10px] font-black uppercase tracking-widest text-accent-gold">
                    {insight.sectorLabel}
                  </span>
                  <span className="w-1 h-1 bg-primary/20 rounded-full"></span>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-primary/30">
                    {insight.readTime}
                  </span>
                </div>
                <h3 className="text-xl font-black uppercase tracking-tight leading-tight group-hover:text-accent-gold transition-colors mb-4">
                  {insight.title}
                </h3>
                <p className="text-sm text-primary/60 leading-relaxed line-clamp-2 italic mb-6">
                  {insight.excerpt}
                </p>
                <div className="flex items-center justify-between pt-6 border-t border-primary/5">
                  <div className="flex items-center gap-2">
                    <div className="size-6 bg-primary rounded-full flex items-center justify-center text-white text-[10px] font-black">
                      {insight.author.charAt(0)}
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-primary/60">
                      {insight.author}
                    </span>
                  </div>
                  <span className="material-symbols-outlined text-primary/20 group-hover:text-accent-gold group-hover:translate-x-1 transition-all">
                    trending_flat
                  </span>
                </div>
              </Link>
            ))
          ) : (
            <div className="col-span-3 text-center py-16">
              <p className="text-slate-400 font-bold uppercase tracking-widest text-sm">
                No articles in this sector yet.
              </p>
            </div>
          )}
        </section>
      </div>

      {/* ═══════════════════════════ STRATEGIST VOICES ══════════════════════════ */}
      <section
        className="bg-primary text-white p-12 lg:p-20 mb-0"
        aria-label="Expert Commentary"
      >
        <div className="max-w-4xl mx-auto">
          <span className="text-[10px] font-extrabold uppercase tracking-[0.3em] opacity-40 block mb-12">
            Expert Commentary
          </span>
          <div className="relative">
            <span
              className="material-symbols-outlined absolute -top-12 -left-12 text-6xl opacity-10"
              aria-hidden="true"
            >
              format_quote
            </span>
            <blockquote className="text-3xl md:text-4xl font-light italic leading-snug mb-12">
              &ldquo;The fragmentation of global trade routes is not a temporary
              disruption—it is the birth of a new structural reality. Our focus
              must shift from &lsquo;just-in-time&rsquo; efficiency to
              &lsquo;just-in-case&rsquo; institutional resilience.&rdquo;
            </blockquote>
            <div className="flex items-center gap-6">
              <Image
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop"
                alt="Arthur Maykott - Managing Director"
                width={64}
                height={64}
                className="grayscale border border-white/20 object-cover size-16"
              />
              <div>
                <p className="font-bold text-lg leading-none uppercase tracking-tighter">
                  Arthur Maykott
                </p>
                <p className="text-xs font-bold uppercase tracking-widest opacity-40 mt-1">
                  Managing Director
                </p>
              </div>
            </div>
          </div>

          {/* Additional Commentaries */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-20 pt-20 border-t border-white/10">
            {[
              {
                title:
                  "The Geopolitics of Semiconductors: A New Gold Standard?",
                author: "Elena Vostakova",
                role: "Head of Emerging Markets Intelligence",
              },
              {
                title:
                  "Sovereign Wealth Trends: The Pivot to Sustainable Forestry",
                author: "Marcus Thorne",
                role: "Principal Economist",
              },
            ].map((item) => (
              <article key={item.title} className="group cursor-pointer">
                <p className="text-[10px] font-bold uppercase tracking-widest opacity-40 mb-3">
                  Recent Commentary
                </p>
                <h4 className="text-xl font-bold mb-4 group-hover:text-primary transition-all p-4 -ml-4 hover:bg-white group-hover:text-black">
                  {item.title}
                </h4>
                <p className="text-sm opacity-60 leading-relaxed italic">
                  By {item.author}, {item.role}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════ NEWSLETTER ══════════════════════════════════ */}
      <section
        className="max-w-2xl mx-auto text-center py-20 px-6 border-t border-primary/10"
        aria-label="Newsletter Subscription"
      >
        <h2 className="text-2xl font-black uppercase tracking-tighter mb-4">
          The Maykott Briefing.
        </h2>
        <p className="text-sm text-primary/60 font-medium mb-10 tracking-wide uppercase">
          Institutional grade insights, delivered monthly.
        </p>
        <form
          className="flex flex-col sm:flex-row gap-0 border border-primary overflow-hidden"
          onSubmit={(e) => e.preventDefault()}
          aria-label="Newsletter signup form"
        >
          <label htmlFor="newsletter-email" className="sr-only">
            Professional Email Address
          </label>
          <input
            id="newsletter-email"
            type="email"
            placeholder="Professional Email Address"
            className="flex-1 px-6 py-4 bg-transparent border-none text-sm focus:ring-0 placeholder:text-primary/30 uppercase tracking-widest font-bold outline-none"
            required
          />
          <button
            type="submit"
            className="bg-black text-white px-10 py-4 font-black uppercase tracking-[0.15em] text-xs hover:bg-accent-gold transition-all border-l border-primary"
          >
            Subscribe
          </button>
        </form>
        <p className="text-[10px] text-primary/30 mt-6 uppercase tracking-widest font-bold">
          Confidentiality guaranteed. One-click unsubscribe anytime.
        </p>
      </section>
    </SiteLayout>
  );
}
