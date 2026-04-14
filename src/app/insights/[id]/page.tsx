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

    // Format date string to readable format
    const formattedDate = new Date(insight.publishedAt).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    return (
        <SiteLayout>
            <article className="bg-background-light min-h-screen">
                {/* ═══════════════════════════════════ HEADER ═══════════════════════════════════ */}
                <section className="pt-32 pb-16 bg-white border-b border-primary/10">
                    <div className="w-container mx-auto">
                        <Link
                            href="/insights"
                            className="flex items-center gap-2 text-primary/40 text-[10px] font-black uppercase tracking-[0.3em] mb-12 hover:text-primary transition-colors inline-flex"
                        >
                            <span className="material-symbols-outlined text-sm">arrow_back</span>
                            Back to Repository
                        </Link>

                        <div className="max-w-4xl">
                            <div className="flex items-center gap-4 mb-6">
                                <span className="inline-block px-3 py-1 bg-primary text-white text-[10px] font-black uppercase tracking-tighter">
                                    {insight.sectorLabel}
                                </span>
                                <span className="text-[10px] font-bold uppercase tracking-widest text-primary/40">
                                    {insight.readTime}
                                </span>
                            </div>
                            
                            <h1 className="text-4xl md:text-6xl font-black text-primary tracking-tight leading-[1.1] mb-8">
                                {insight.title}
                            </h1>
                            
                            <p className="text-xl md:text-2xl text-primary/60 font-light leading-relaxed italic mb-12">
                                {insight.excerpt}
                            </p>

                            <div className="flex items-center gap-4 pt-8 border-t border-primary/10">
                                <div className="h-12 w-12 bg-primary flex items-center justify-center text-white font-black text-lg">
                                    {insight.author.charAt(0)}
                                </div>
                                <div>
                                    <p className="font-bold text-primary uppercase tracking-tight text-sm">
                                        {insight.author}
                                    </p>
                                    <p className="text-[10px] font-bold uppercase tracking-widest text-primary/50 mt-1">
                                        {insight.authorTitle} • {formattedDate}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ═══════════════════════════════════ FEATURE IMAGE ═══════════════════════════════════ */}
                <section className="w-full relative h-[40vh] md:h-[60vh] bg-primary">
                    <Image
                        src={insight.imageUrl}
                        alt={insight.imageAlt}
                        fill
                        className="object-cover opacity-90"
                        priority
                    />
                </section>

                {/* ═══════════════════════════════════ CONTENT ═══════════════════════════════════ */}
                <section className="py-24 bg-white relative">
                    {/* Abstract watermarks */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-bl-full pointer-events-none"></div>

                    <div className="w-container mx-auto">
                        <div className="max-w-3xl mx-auto prose prose-lg prose-neutral">
                            <p className="lead text-xl mb-8 font-medium text-primary">
                                The global landscape is undergoing a systemic transformation. In the context of {insight.sectorLabel.toLowerCase()}, operational frameworks must shift from reactive management to proactive structural resilience. This is no longer optional; it is the prerequisite for definitive institutional growth.
                            </p>
                            
                            <h2 className="text-3xl font-black tracking-tight text-primary mt-12 mb-6">Executive Summary</h2>
                            <p className="text-primary/70 leading-relaxed mb-6">
                                Institutional investors and sovereign wealth funds are urgently recalibrating their portfolios to address the compounding effects of macroeconomic volatility, accelerated supply chain fragmentation, and the unavoidable transition toward localized, sustainable infrastructure. This briefing outlines the critical disruption vectors and the strategic imperatives required for market dominance over the coming decade.
                            </p>
                            
                            <h2 className="text-3xl font-black tracking-tight text-primary mt-12 mb-6">Key Strategic Vectors</h2>
                            <ul className="space-y-4 text-primary/70 mb-10 list-disc pl-5">
                                <li>The irreversible uncoupling of legacy supply chains and the rapid capitalization of newly formed regionalized hubs.</li>
                                <li>Aggressive capital concentration in hard assets, logistics nodes, and physical infrastructure as a fortified hedge against sustained systemic inflation.</li>
                                <li>The expanding premium placed on verifiable <em>operational alpha</em>—capabilities that demand deep industrial expertise—over purely theoretical financial engineering.</li>
                            </ul>
                            
                            <h2 className="text-3xl font-black tracking-tight text-primary mt-12 mb-6">Long-term Implications</h2>
                            <p className="text-primary/70 leading-relaxed mb-6">
                                Identifying deep structural value in the current cycle requires an intimate synthesis of regulatory tailwinds, technological maturation curves, and macro-geopolitical risk factors. As noted by our intelligence unit, "The margin of error for capital allocators has never been thinner; the requirement for precision has never been absolute." 
                            </p>
                            <p className="text-primary/70 leading-relaxed mb-6">
                                This paradigm necessitates an uncompromising pivot toward operators and holding platforms that can demonstrate genuine operational mastery and end-to-end integration capabilities globally.
                            </p>
                            
                            <div className="mt-16 p-8 bg-primary/5 border-l-4 border-accent-gold relative">
                                <span className="material-symbols-outlined text-4xl text-accent-gold/20 absolute right-4 bottom-4 pointer-events-none">policy</span>
                                <p className="text-[10px] font-black uppercase tracking-widest text-primary/40 mb-2">Security & Access Note</p>
                                <p className="italic text-primary/80 text-sm leading-relaxed">
                                    This insight publication is an executive excerpt from a proprietary Maykott Holdings intelligence report. For accredited institutional partners requiring the unredacted analysis—inclusive of quantitative forecasting models, M&A target criteria, and granular risk scoring—please initiate a secure data request via your designated relationship conduit.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ═══════════════════════════════════ FINAL CTA ═══════════════════════════════════ */}
                <section className="bg-primary py-24 border-t border-white/5 relative overflow-hidden">
                    {/* Background embellishments */}
                    <div className="absolute inset-0 opacity-5 pointer-events-none flex items-center justify-center">
                        <span className="text-[20rem] font-black uppercase tracking-tighter mix-blend-overlay">MK</span>
                    </div>

                    <div className="w-container mx-auto text-center relative z-10">
                        <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-accent-gold block mb-6">
                            Institutional Access
                        </span>
                        <h2 className="text-white text-3xl md:text-5xl font-black uppercase tracking-tighter mb-12 max-w-2xl mx-auto">
                            Unlock Comprehensive Sector Analytics
                        </h2>
                        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
                            <Link
                                href="/inquiry"
                                className="bg-white text-primary px-10 py-5 text-[10px] font-black uppercase tracking-[0.2em] hover:bg-accent-gold transition-all min-w-[280px]"
                            >
                                Initiate Inquiry
                            </Link>
                            <Link
                                href="/portfolio"
                                className="text-white/60 text-[10px] font-black uppercase tracking-[0.2em] border-b border-white/20 pb-2 hover:text-accent-gold hover:border-accent-gold transition-all"
                            >
                                View Portfolio Holdings
                            </Link>
                        </div>
                    </div>
                </section>
            </article>
        </SiteLayout>
    );
}
