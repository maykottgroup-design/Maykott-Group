"use client";

import { useState, FormEvent } from "react";

const intentOptions = [
    {
        key: "Sovereign Mandate",
        label: "Sovereign Mandate",
        sub: "State & Public Interests",
    },
    {
        key: "Private Capital",
        label: "Private Capital",
        sub: "UHNW & Direct Investment",
    },
    {
        key: "Institutional",
        label: "Institutional",
        sub: "M&A / Structured Finance",
    },
];

export default function InquiryForm() {
    const [formData, setFormData] = useState({
        fullName: "",
        organization: "",
        email: "",
        phone: "",
        intent: "",
        region: "",
        summary: "",
    });
    const [intentError, setIntentError] = useState(false);

    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [referenceId] = useState(() => Math.floor(Math.random() * 90000) + 10000);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleIntentSelect = (intent: string) => {
        setFormData((prev) => ({ ...prev, intent }));
        setIntentError(false);
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!formData.intent) {
            setIntentError(true);
            return;
        }

        setIsLoading(true);
        try {
            const response = await fetch("https://formsubmit.co/ajax/inquiry@maykott.com", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    _subject: `New Institutional Inquiry: ${formData.organization}`,
                    "Full Name": formData.fullName,
                    "Organization": formData.organization,
                    "Email": formData.email,
                    "Contact Number": formData.phone || "Not provided",
                    "Strategic Intent": formData.intent,
                    "Regional Focus": formData.region,
                    "Inquiry Summary": formData.summary,
                    "_template": "table"
                }),
            });

            if (response.ok) {
                setIsSubmitted(true);
                window.scrollTo({ top: document.getElementById('inquiry-form-section')?.offsetTop || 0, behavior: 'smooth' });
            } else {
                alert("Failed to initiate protocol. Please try again or contact us directly.");
            }
        } catch (error) {
            console.error("Submission error", error);
            alert("A network error occurred. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

    if (isSubmitted) {
        return (
            <div id="inquiry-form-section" className="flex flex-col items-center justify-center py-24 text-center">
                <div className="size-20 bg-primary rounded-full flex items-center justify-center mb-8">
                    <span className="material-symbols-outlined text-accent-gold text-4xl">
                        check
                    </span>
                </div>
                <h2 className="text-3xl font-black uppercase tracking-tight mb-4">
                    Protocol Initiated
                </h2>
                <p className="text-primary/60 text-lg mb-8 max-w-md">
                    Your inquiry has been received securely. A member of
                    our acquisitions desk will respond within 24 hours.
                </p>
                <p className="text-[10px] font-bold uppercase tracking-widest text-primary/30">
                    Reference: MK-{referenceId}-G
                </p>
            </div>
        );
    }

    return (
        <section id="inquiry-form-section" aria-label="Strategic Inquiry Form">
            <div className="flex items-center justify-between mb-10 pb-4 border-b border-primary/10">
                <h2 className="text-sm font-bold uppercase tracking-[0.2em] transition-all">
                    Consultative Intake
                </h2>
                <div className="flex items-center gap-2 text-primary/40">
                    <span className="material-symbols-outlined text-sm" aria-hidden="true">lock</span>
                    <span className="text-[9px] font-bold uppercase tracking-widest">AES-256 Secured</span>
                </div>
            </div>

            <form
                className="flex flex-col gap-6 md:gap-9"
                onSubmit={handleSubmit}
                noValidate
            >
                {/* Principal Fields */}
                <fieldset className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 border-0 p-0">
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
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleInputChange}
                            type="text"
                            required
                            placeholder="Principal or Authorized Representative"
                            className="form-input-underline bg-transparent border-0 border-b border-primary/20 focus:border-primary py-4 px-0 text-base md:text-sm outline-none w-full transition-colors"
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
                            name="organization"
                            value={formData.organization}
                            onChange={handleInputChange}
                            type="text"
                            required
                            placeholder="Institution / Family Office"
                            className="form-input-underline bg-transparent border-0 border-b border-primary/20 focus:border-primary py-4 px-0 text-base md:text-sm outline-none w-full transition-colors"
                            aria-required="true"
                        />
                    </div>
                </fieldset>

                {/* Email & Phone */}
                <fieldset className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 border-0 p-0">
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
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            type="email"
                            required
                            placeholder="name@institution.com"
                            className="form-input-underline bg-transparent border-0 border-b border-primary/20 focus:border-primary py-4 px-0 text-base md:text-sm outline-none w-full transition-colors"
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
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            type="tel"
                            placeholder="+1 212 555 0198"
                            className="form-input-underline bg-transparent border-0 border-b border-primary/20 focus:border-primary py-4 px-0 text-base md:text-sm outline-none w-full transition-colors"
                        />
                    </div>
                </fieldset>

                {/* Intent Selection */}
                <fieldset className="flex flex-col gap-8 border-0 p-0">
                    <legend className="text-[10px] font-bold uppercase tracking-widest text-primary/50 mb-6 block">
                        Select Primary Mandate
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
                                aria-checked={formData.intent === option.key}
                                onClick={() => handleIntentSelect(option.key)}
                                className={`border p-6 text-left transition-all duration-300 ${formData.intent === option.key
                                    ? "border-primary bg-primary text-white scale-[1.02] shadow-xl"
                                    : "border-primary/10 hover:border-primary/50 hover:bg-primary/5"
                                    }`}
                            >
                                <span className="block text-[11px] font-bold uppercase tracking-tighter">
                                    {option.label}
                                </span>
                                <span className={`block text-[9px] mt-2 uppercase ${formData.intent === option.key ? 'opacity-90 text-white' : 'opacity-60 text-inherit'}`}>
                                    {option.sub}
                                </span>
                            </button>
                        ))}
                    </div>
                    {intentError && (
                        <p className="text-red-500 text-xs font-semibold animate-pulse uppercase tracking-widest mt-2">
                            Please select a strategic intent to continue.
                        </p>
                    )}
                </fieldset>

                {/* Regional Focus */}
                <div className="space-y-4">
                    <label
                        htmlFor="region"
                        className="text-[10px] font-bold uppercase tracking-widest text-primary/50 block"
                    >
                        Asset Class / Regional Focus
                    </label>
                    <select
                        id="region"
                        name="region"
                        value={formData.region}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-transparent border-0 border-b border-primary/20 focus:border-primary py-4 px-0 text-base md:text-sm text-primary appearance-none cursor-pointer outline-none transition-colors"
                    >
                        <option value="" disabled>Select Operational Region...</option>
                        <option value="EMEA">EMEA - Eurozone Focus</option>
                        <option value="APAC">APAC - Maritime Southeast Asia</option>
                        <option value="Americas">Americas - North American Markets</option>
                        <option value="Global">Global / Multi-Region</option>
                    </select>
                </div>

                {/* Inquiry Summary */}
                <div className="space-y-4">
                    <label
                        htmlFor="inquiry-summary"
                        className="text-[10px] font-bold uppercase tracking-widest text-primary/50 block"
                    >
                        Summary of Inquiry
                    </label>
                    <textarea
                        id="inquiry-summary"
                        name="summary"
                        value={formData.summary}
                        onChange={handleInputChange}
                        rows={6}
                        placeholder="Briefly outline the objective of the mandate, capital allocation targets, and requested timeline..."
                        className="w-full bg-transparent border-0 border-b border-primary/20 focus:border-primary py-4 px-0 text-base md:text-sm placeholder:text-primary/30 outline-none transition-colors"
                        required
                        aria-required="true"
                    />
                </div>

                {/* Submit */}
                <div className="pt-8 mt-4 flex items-center justify-between border-t border-primary/10">
                    <div className="flex items-center gap-2 text-primary/40">
                        <span className="material-symbols-outlined text-sm" aria-hidden="true">verified_user</span>
                        <span className="text-[9px] font-bold uppercase tracking-widest hidden md:inline">Protocol Ready</span>
                    </div>
                    <button
                        type="submit"
                        disabled={isLoading}
                        className="flex items-center gap-4 group transition-all duration-300 disabled:opacity-50 rounded-sm bg-black text-white px-8 py-3.5 text-xs font-bold uppercase tracking-[0.15em] hover:bg-accent-gold hover:text-black hover:shadow-lg"
                        aria-label="Submit inquiry"
                    >
                        <span className="text-[11px] font-bold uppercase tracking-[0.2em] group-hover:tracking-[0.3em] transition-all">
                            {isLoading ? "Initiating..." : "Initiate Protocol"}
                        </span>
                        <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform" aria-hidden="true">
                            {isLoading ? "hourglass_empty" : "trending_flat"}
                        </span>
                    </button>
                </div>
            </form>
        </section>
    );
}
