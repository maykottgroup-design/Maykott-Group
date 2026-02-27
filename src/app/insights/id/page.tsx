"use client";

import { useParams, notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import SiteLayout from "@/components/SiteLayout";
import { getInsightById } from "@/data/insights";

export default function InsightDetailPage() {
    const params = useParams();
    const id = params.id as string;
    const insight = getInsightById(id);

    if (!insight) {
        notFound();
    }

    const formattedDate = new Date(insight.publishedAt).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });

    return (
        <SiteLayout>
            <article className="bg-[#FAFAFA] min-h-screen pt-20">
                {/* ═══════════════════════════════════ HEADER ═══════════════════════════════════ */}
                <header className="py-20 px-6">
                    <div className="max-w-3xl mx-auto">
                        <Link
                            href="/insights"
                            className="flex items-center gap-2 text-primary/40 text-[10px] font-black uppercase tracking-[0.3em] mb-12 hover:text-accent-gold transition-colors"
                        >
                            <span className="material-symbols-outlined text-sm">arrow_back</span>
                            Back to Intelligence
                        </Link>

                        <span className="inline-block text-accent-gold text-[10px] font-black uppercase tracking-[0.3em] mb-6">
                            {insight.sectorLabel} Intelligence
                        </span>

                        <h1 className="text-4xl md:text-6xl font-black text-primary tracking-tighter uppercase leading-[1.1] mb-8">
                            {insight.title}
                        </h1>

                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 pt-8 border-t border-primary/10">
                            <div className="flex items-center gap-4">
                                <div className="size-12 bg-primary rounded-full flex items-center justify-center text-white font-black text-lg">
                                    {insight.author.charAt(0)}
                                </div>
                                <div>
                                    <p className="text-xs font-black uppercase tracking-tight text-primary">{insight.author}</p>
                                    <p className="text-[10px] font-bold uppercase tracking-widest text-primary/40">{insight.authorTitle}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-6 text-[10px] font-bold uppercase tracking-widest text-primary/40">
                                <span>{formattedDate}</span>
                                <span className="w-1 h-1 bg-primary/20 rounded-full"></span>
                                <span>{insight.readTime}</span>
                            </div>
                        </div>
                    </div>
                </header>

                {/* ═══════════════════════════════════ HERO IMAGE ═══════════════════════════════════ */}
                <figure className="w-container mx-auto aspect-[21/9] relative overflow-hidden shadow-2xl">
                    <Image
                        src={insight.imageUrl}
                        alt={insight.imageAlt}
                        fill
                        className="object-cover grayscale"
                        priority
                    />
                </figure>

                {/* ═══════════════════════════════════ CONTENT ═══════════════════════════════════ */}
                <section className="py-24 px-6">
                    <div className="max-w-3xl mx-auto">
                        <div className="prose prose-lg prose-primary max-w-none">
                            <p className="text-xl text-primary/80 leading-relaxed font-medium mb-12 italic border-l-4 border-accent-gold pl-8">
                                {insight.excerpt}
                            </p>

                            <div className="space-y-8 text-primary/70 leading-relaxed text-lg">
                                <p>
                                    The shifting landscape of global industrial capital requires a new framework for evaluation.
                                    As we navigate the complexities of "The Next Era," the traditional benchmarks of institutional
                                    growth are being rewritten by technological convergence and geopolitical realignments.
                                </p>
                                <h3 className="text-2xl font-black uppercase tracking-tighter text-primary pt-8">The Structural Foundation</h3>
                                <p>
                                    Our internal intelligence nodes suggest that the primary driver of alpha in {insight.sectorLabel}
                                    will not be capital volume, but the precision of operational integration. The Titan Framework,
                                    developed over a decade of high-stakes M&A, provides the necessary rigor to identify these
                                    pivot points before they become visible to the broader market.
                                </p>
                                <div className="my-12 p-10 bg-primary text-white relative overflow-hidden">
                                    <div className="titan-grid opacity-10 absolute inset-0"></div>
                                    <p className="relative text-3xl font-black italic tracking-tighter leading-tight">
                                        "In an era of noise, structural precision is the only signal that matters for long-term capital preservation."
                                    </p>
                                    <cite className="relative block mt-6 text-accent-gold text-[10px] font-bold uppercase tracking-widest not-italic">
                                        — {insight.author}, Maykott Group
                                    </cite>
                                </div>
                                <p>
                                    As we continue to monitor these developments, the mandate remains clear: build, scale, and
                                    stabilize. The future is not found; it is architected with institutional intent.
                                </p>
                            </div>
                        </div>

                        {/* Tags/Footer */}
                        <div className="mt-20 pt-12 border-t border-primary/10 flex flex-wrap gap-4">
                            {["STRATEGY", insight.sector.toUpperCase(), "GLOBAL MACRO", "MAYKOTT INSIGHTS"].map(tag => (
                                <span key={tag} className="text-[9px] font-black uppercase tracking-widest bg-primary/5 px-4 py-2 text-primary/40">
                                    #{tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ═══════════════════════════════════ RELATED ═══════════════════════════════════ */}
                <section className="bg-white py-24 border-t border-primary/5">
                    <div className="w-container mx-auto">
                        <div className="flex justify-between items-end mb-16">
                            <h2 className="text-4xl font-black uppercase tracking-tighter text-primary">Related <span className="text-primary/20">Readings</span></h2>
                            <Link href="/insights" className="text-[10px] font-black uppercase tracking-widest border-b border-primary pb-1 hover:text-accent-gold hover:border-accent-gold transition-colors">
                                View All Reports
                            </Link>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                            {[1, 2, 3].map((_, i) => (
                                <div key={i} className="group cursor-pointer">
                                    <div className="h-48 bg-primary/5 mb-6 overflow-hidden relative">
                                        <div className="titan-grid opacity-10 absolute inset-0"></div>
                                        <div className="absolute inset-0 flex items-center justify-center p-8 opacity-20 group-hover:opacity-40 transition-opacity">
                                            <span className="material-symbols-outlined text-6xl">newspaper</span>
                                        </div>
                                    </div>
                                    <span className="text-[9px] font-black uppercase tracking-widest text-accent-gold mb-2 block">Intelligence Hub</span>
                                    <h3 className="text-lg font-black uppercase tracking-tight text-primary group-hover:text-accent-gold transition-colors">
                                        The Next Industrial Era: 2026-2030 Projections
                                    </h3>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </article>
        </SiteLayout>
    );
}
