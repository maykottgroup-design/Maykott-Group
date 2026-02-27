"use client";

import { useState, FormEvent } from "react";

const intentOptions = [
    {
        key: "sovereign",
        label: "Sovereign Mandate",
        sub: "State & Public Interests",
    },
    {
        key: "private",
        label: "Private Capital",
        sub: "UHNW & Direct Investment",
    },
    {
        key: "institutional",
        label: "Institutional",
        sub: "M&A / Structured Finance",
    },
];

export default function InquiryForm() {
    const [selectedIntent, setSelectedIntent] = useState<string | null>(null);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [referenceId] = useState(() => Math.floor(Math.random() * 90000) + 10000);


    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        // Simulate form submission
        setTimeout(() => {
            setIsLoading(false);
            setIsSubmitted(true);
        }, 1500);
    };

    if (isSubmitted) {
        return (
            <div className="flex flex-col items-center justify-center py-24 text-center">
                <div className="size-20 bg-primary rounded-full flex items-center justify-center mb-8">
                    <span className="material-symbols-outlined text-accent-gold text-4xl">
                        check
                    </span>
                </div>
                <h2 className="text-3xl font-black uppercase tracking-tight mb-4">
                    Protocol Initiated
                </h2>
                <p className="text-primary/60 text-lg mb-8 max-w-md">
                    Your inquiry has been received and encrypted. A member of
                    our acquisitions desk will respond within 24 hours.
                </p>
                <p className="text-[10px] font-bold uppercase tracking-widest text-primary/30">
                    Reference: MK-{referenceId}-G
                </p>

            </div>
        );
    }

    return (
        <section aria-label="Strategic Inquiry Form">
            <div className="flex items-center justify-between mb-10">
                <h2 className="text-sm font-bold uppercase tracking-[0.2em]">
                    Consultative Intake
                </h2>
                <span className="text-[10px] font-medium text-primary/40 uppercase">
                    Step 01 / 04
                </span>
            </div>

            <form
                className="space-y-32"
                onSubmit={handleSubmit}
                noValidate
            >
                {/* Principal Fields */}
                <fieldset className="grid grid-cols-1 md:grid-cols-2 gap-20 border-0 p-0 m-0">
                    <legend className="sr-only">Principal Information</legend>
                    <div className="space-y-2">
                        <label
                            htmlFor="full-name"
                            className="text-[10px] font-bold uppercase tracking-widest text-primary/50 block"
                        >
                            Full Legal Name
                        </label>
                        <input
                            id="full-name"
                            type="text"
                            required
                            placeholder="Principal or Authorized Representative"
                            className="form-input-underline bg-transparent border-0 border-b border-primary/20 focus:border-primary py-4 px-0 text-base md:text-sm outline-none w-full"
                            aria-required="true"
                        />
                    </div>
                    <div className="space-y-2">
                        <label
                            htmlFor="organization"
                            className="text-[10px] font-bold uppercase tracking-widest text-primary/50 block"
                        >
                            Organization
                        </label>
                        <input
                            id="organization"
                            type="text"
                            required
                            placeholder="Institution / Family Office"
                            className="form-input-underline bg-transparent border-0 border-b border-primary/20 focus:border-primary py-4 px-0 text-base md:text-sm outline-none w-full"
                            aria-required="true"
                        />
                    </div>
                </fieldset>

                {/* Email & Phone */}
                <fieldset className="grid grid-cols-1 md:grid-cols-2 gap-20 border-0 p-0 m-0">
                    <legend className="sr-only">Contact Information</legend>
                    <div className="space-y-2">
                        <label
                            htmlFor="email"
                            className="text-[10px] font-bold uppercase tracking-widest text-primary/50 block"
                        >
                            Professional Email
                        </label>
                        <input
                            id="email"
                            type="email"
                            required
                            placeholder="name@institution.com"
                            className="form-input-underline bg-transparent border-0 border-b border-primary/20 focus:border-primary py-4 px-0 text-base md:text-sm outline-none w-full"
                            aria-required="true"
                        />
                    </div>
                    <div className="space-y-2">
                        <label
                            htmlFor="phone"
                            className="text-[10px] font-bold uppercase tracking-widest text-primary/50 block"
                        >
                            Contact Number
                        </label>
                        <input
                            id="phone"
                            type="tel"
                            placeholder="+1 212 555 0198"
                            className="form-input-underline bg-transparent border-0 border-b border-primary/20 focus:border-primary py-4 px-0 text-base md:text-sm outline-none w-full"
                        />
                    </div>
                </fieldset>

                {/* Intent Selection */}
                <fieldset className="space-y-8 border-0 p-0 m-0">
                    <legend className="text-[10px] font-bold uppercase tracking-widest text-primary/50">
                        Nature of Strategic Intent
                    </legend>
                    <div
                        className="grid grid-cols-1 md:grid-cols-3 gap-8"
                        role="radiogroup"
                        aria-label="Select engagement type"
                    >
                        {intentOptions.map((option) => (
                            <button
                                key={option.key}
                                type="button"
                                role="radio"
                                aria-checked={selectedIntent === option.key}
                                onClick={() => setSelectedIntent(option.key)}
                                className={`border p-6 text-left transition-all ${selectedIntent === option.key
                                    ? "border-primary bg-primary text-white"
                                    : "border-primary/10 hover:border-primary"
                                    }`}
                            >
                                <span className="block text-[11px] font-bold uppercase tracking-tighter">
                                    {option.label}
                                </span>
                                <span className="block text-[9px] opacity-60 mt-2 uppercase">
                                    {option.sub}
                                </span>
                            </button>
                        ))}
                    </div>
                </fieldset>

                {/* Regional Focus */}
                <div className="space-y-2">
                    <label
                        htmlFor="region"
                        className="text-[10px] font-bold uppercase tracking-widest text-primary/50 block"
                    >
                        Asset Class / Regional Focus
                    </label>
                    <select
                        id="region"
                        className="w-full bg-transparent border-0 border-b border-primary/20 focus:border-primary py-4 px-0 text-base md:text-sm text-primary appearance-none cursor-pointer outline-none"
                    >
                        <option value="">Select Operational Region</option>
                        <option value="emea">EMEA - Eurozone Focus</option>
                        <option value="apac">
                            APAC - Maritime Southeast Asia
                        </option>
                        <option value="americas">
                            Americas - North American Markets
                        </option>
                        <option value="global">Global / Multi-Region</option>
                    </select>
                </div>

                {/* Inquiry Summary */}
                <div className="space-y-2">
                    <label
                        htmlFor="inquiry-summary"
                        className="text-[10px] font-bold uppercase tracking-widest text-primary/50 block"
                    >
                        Summary of Inquiry
                    </label>
                    <textarea
                        id="inquiry-summary"
                        rows={5}
                        placeholder="Briefly outline the objective of the mandate..."
                        className="w-full bg-transparent border-0 border-b border-primary/20 focus:border-primary py-4 px-0 text-base md:text-sm placeholder:text-primary/20 resize-none outline-none transition-colors"
                        required
                        aria-required="true"
                    />
                </div>

                {/* Submit */}
                <div className="pt-6 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-primary/40">
                        <span
                            className="material-symbols-outlined text-sm"
                            aria-hidden="true"
                        >
                            lock
                        </span>
                        <span className="text-[9px] font-bold uppercase tracking-widest">
                            AES-256 Encrypted Session
                        </span>
                    </div>
                    <button
                        type="submit"
                        disabled={isLoading}
                        className="flex items-center gap-4 group hover:text-accent-gold transition-colors disabled:opacity-50"
                        aria-label="Submit inquiry"
                    >
                        <span className="text-[11px] font-bold uppercase tracking-[0.3em] group-hover:mr-2 transition-all">
                            {isLoading ? "Initiating..." : "Initiate Protocol"}
                        </span>
                        <span
                            className="material-symbols-outlined"
                            aria-hidden="true"
                        >
                            {isLoading ? "hourglass_empty" : "trending_flat"}
                        </span>
                    </button>
                </div>
            </form>
        </section>
    );
}
