"use client";

import { useParams, notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import SiteLayout from "@/components/SiteLayout";
import { getSubsidiaryById } from "@/data/subsidiaries";

export default function SubsidiaryDetailPage() {
    const params = useParams();
    const id = params.id as string;
    const subsidiary = getSubsidiaryById(id);

    if (!subsidiary) {
        notFound();
    }

    return (
        <SiteLayout>
            <article className="bg-background-light min-h-screen">
                {/* ═══════════════════════════════════ HERO ═══════════════════════════════════ */}
                <section className="relative h-[60vh] md:h-[70vh] w-full overflow-hidden bg-primary">
                    <Image
                        src={subsidiary.imageUrl}
                        alt={subsidiary.imageAlt}
                        fill
                        className="object-cover opacity-60 transition-all duration-1000"

                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/20 to-transparent" />

                    <div className="absolute bottom-0 left-0 w-full mb-12">
                        <div className="w-container mx-auto">
                            <Link
                                href="/portfolio"
                                className="flex items-center gap-2 text-white/50 text-[10px] font-black uppercase tracking-[0.3em] mb-8 hover:text-accent-gold transition-colors"
                            >
                                <span className="material-symbols-outlined text-sm">arrow_back</span>
                                Back to Portfolio
                            </Link>
                            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
                                <div>
                                    <span className="inline-block px-3 py-1 bg-accent-gold text-primary text-[10px] font-black uppercase tracking-tighter mb-4">
                                        {subsidiary.sectorLabel}
                                    </span>
                                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-white tracking-tighter uppercase leading-[0.85]">
                                        {subsidiary.name}
                                    </h1>
                                </div>
                                <div className="bg-white/10 backdrop-blur-md border border-white/10 p-8 md:min-w-[300px]">
                                    <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest mb-1">
                                        Assets Under Management
                                    </p>
                                    <p className="text-4xl font-black text-accent-gold tracking-tighter">
                                        {subsidiary.assetsUnderManagement}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ═══════════════════════════════════ CONTENT ═══════════════════════════════════ */}
                <section className="py-24">
                    <div className="w-container mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
                            {/* Left Column: Description & Strategy */}
                            <div className="lg:col-span-8 space-y-16">
                                <div>
                                    <h2 className="text-xs font-black uppercase tracking-[0.4em] text-accent-gold mb-8">
                                        Corporate Overview
                                    </h2>
                                    <p className="text-2xl md:text-3xl text-primary font-medium leading-snug">
                                        {subsidiary.description}
                                    </p>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-16 border-t border-primary/5">
                                    <div>
                                        <h3 className="text-[11px] font-black uppercase tracking-widest mb-6 flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 bg-accent-gold"></span>
                                            Strategic Mandate
                                        </h3>
                                        <p className="text-primary/70 leading-relaxed italic">
                                            As a core pillar of the Maykott Holdings ecosystem, {subsidiary.name} focuses
                                            on operational excellence and long-term structural resilience within the {subsidiary.sector} landscape.
                                        </p>
                                    </div>
                                    <div>
                                        <h3 className="text-[11px] font-black uppercase tracking-widest mb-6 flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 bg-accent-gold"></span>
                                            Operational Alpha
                                        </h3>
                                        <p className="text-primary/70 leading-relaxed italic">
                                            Leveraging the Titan Framework to drive vertical integration and optimize supply chain
                                            efficiency across global markets.
                                        </p>
                                    </div>
                                </div>

                                {/* Placeholder for complex charts/visuals */}
                                <div className="aspect-[21/9] bg-primary/5 border border-primary/10 relative overflow-hidden flex items-center justify-center">
                                    <div className="titan-grid opacity-20 absolute inset-0"></div>
                                    <div className="relative text-center">
                                        <span className="material-symbols-outlined text-4xl text-primary/20 mb-4 block">monitoring</span>
                                        <p className="text-[10px] font-black uppercase tracking-[0.3em] text-primary/40">Growth Performance Visualization: {subsidiary.annualGrowth}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Right Column: Meta Info */}
                            <div className="lg:col-span-4">
                                <div className="sticky top-32 space-y-12">
                                    <div className="bg-white border border-primary/5 p-10 titan-shadow">
                                        <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-primary mb-10 border-b border-primary/5 pb-4">
                                            Intelligence Node
                                        </h3>

                                        <div className="space-y-8">
                                            {[
                                                { label: "Headquarters", value: subsidiary.headquarters || "Singapore Hub" },
                                                { label: "Year Acquired", value: subsidiary.yearAcquired || "2018" },
                                                { label: "Employment Base", value: subsidiary.employees || "3,500+" },
                                                { label: "Global Presence", value: "Multi-Region Ops" },
                                            ].map((item) => (
                                                <div key={item.label}>
                                                    <p className="text-[9px] font-bold uppercase tracking-widest text-primary/30 mb-1">{item.label}</p>
                                                    <p className="text-sm font-black uppercase tracking-tight text-primary">{item.value}</p>
                                                </div>
                                            ))}
                                        </div>

                                        <Link
                                            href="/inquiry"
                                            className="mt-12 block w-full bg-black text-white py-5 text-center text-[10px] font-black uppercase tracking-[0.2em] hover:bg-accent-gold transition-all"
                                        >
                                            Institutional Inquiry
                                        </Link>
                                    </div>

                                    <div className="px-10">
                                        <p className="text-[9px] font-bold uppercase tracking-widest text-primary/30 leading-relaxed">
                                            PROPRIETARY DATA. ALL TRANSMISSIONS ARE LOGGED AND ENCRYPTED UNDER MAYKOTT SECURITY STANDARDS.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ═══════════════════════════════════ FINAL CTA ═══════════════════════════════════ */}
                <section className="bg-primary py-24 border-t border-white/5">
                    <div className="w-container mx-auto text-center">
                        <h2 className="text-white text-4xl md:text-5xl font-black uppercase tracking-tighter mb-12">
                            Partner with {subsidiary.name}
                        </h2>
                        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
                            <Link
                                href="/inquiry"
                                className="bg-accent-gold text-primary px-10 py-5 text-[10px] font-black uppercase tracking-[0.2em] hover:bg-white transition-all min-w-[280px]"
                            >
                                Direct Inquiry
                            </Link>
                            <Link
                                href="/investment"
                                className="text-white/60 text-[10px] font-black uppercase tracking-[0.2em] border-b border-white/20 pb-2 hover:text-accent-gold hover:border-accent-gold transition-all"
                            >
                                Download Prospectus
                            </Link>
                        </div>
                    </div>
                </section>
            </article>
        </SiteLayout>
    );
}
