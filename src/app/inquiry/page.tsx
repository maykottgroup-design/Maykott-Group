import SiteLayout from "@/components/SiteLayout";
import InquiryForm from "./InquiryForm";

export const metadata = {
  title: "Inquiry | Maykott Group",
  description:
    "Formal engagement for sovereign, institutional, and private capital interests. All transmissions are encrypted under Tier-1 security protocols.",
};

const regionalHQs = [
  {
    region: "Americas",
    name: "Maykott Wall Street",
    address: "28 Liberty St, New York, NY 10005",
    phone: "+1 212 555 0198",
  },
  {
    region: "EMEA",
    name: "Maykott Mayfair",
    address: "15 Berkeley St, London W1J 8DY",
    phone: "+44 20 7946 0143",
  },
  {
    region: "APAC",
    name: "Maykott Marina Bay",
    address: "10 Marina Blvd, Singapore 018983",
    phone: "+65 6713 0192",
  },
  {
    region: "Switzerland",
    name: "Maykott Private Wealth",
    address: "Bahnhofstrasse 45, 8001 Zürich",
    phone: "+41 44 211 0122",
  },
];

export default function ContactPage() {
  return (
    <SiteLayout>
      <main className="pt-16 pb-20">

        <div className="w-container max-w-none mx-auto px-0 md:px-0">
          {/* ═══════════════════════════════════ HERO ═══════════════════════════════════ */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24 items-end">
            <div className="lg:col-span-8">
              <div className="flex items-center gap-2 mb-4">
                <span className="h-[1px] w-8 bg-primary" aria-hidden="true" />
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary/60">
                  Confidential Protocol
                </span>
              </div>
              <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] uppercase">
                Strategic <br />{" "}
                <span className="text-primary/20">Inquiry</span> Portal
              </h1>
            </div>
            <div className="lg:col-span-4 pb-2">
              <p className="text-lg text-primary/60 leading-relaxed font-light">
                Formal engagement for sovereign, institutional, and private
                capital interests. All transmissions are encrypted under Tier-1
                security protocols.
              </p>
            </div>
          </div>

          {/* ═════════════════════ MAIN INTERFACE GRID ═══════════════════════════ */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 border-t border-primary/10 pt-16">
            {/* ══════════ INQUIRY FORM ══════════ */}
            <div className="lg:col-span-7">
              <InquiryForm />
            </div>

            {/* ══════════ RIGHT SIDEBAR ══════════ */}
            <div className="lg:col-span-5 space-y-16">
              {/* Global Footprint Map */}
              <div className="bg-white border border-primary/5 p-8 dot-grid relative overflow-hidden h-[380px]">
                <div className="relative z-10 flex flex-col h-full justify-between">
                  <div className="space-y-1">
                    <h3 className="text-xs font-bold uppercase tracking-[0.2em]">
                      Global Footprint
                    </h3>
                    <p className="text-[10px] text-primary/50 uppercase tracking-widest">
                      Real-time Operational Status:{" "}
                      <span className="text-green-500 font-bold">Active</span>
                    </p>
                  </div>

                  {/* Simulated Map Dots */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=800&auto=format&fit=crop')] bg-cover bg-center" />
                  </div>

                  {[
                    {
                      top: "33%",
                      left: "24%",
                      label: "New York HQ",
                      active: true,
                    },
                    {
                      top: "26%",
                      left: "50%",
                      label: "London HQ",
                      active: true,
                    },
                    {
                      top: "60%",
                      left: "74%",
                      label: "Singapore HQ",
                      active: true,
                    },
                    {
                      top: "25%",
                      left: "55%",
                      label: "Dubai HQ",
                      active: false,
                    },
                  ].map((hub) => (
                    <div
                      key={hub.label}
                      className="absolute flex items-center justify-center size-3"
                      style={{ top: hub.top, left: hub.left }}
                      title={hub.label}
                      aria-label={hub.label}
                    >
                      {hub.active && (
                        <span className="absolute inline-flex h-8 w-8 rounded-full bg-accent-gold opacity-30 animate-ping pointer-events-none" />
                      )}
                      <div
                        className={`relative inline-flex size-3 rounded-full ${hub.active ? "bg-primary" : "bg-primary/50"
                          } border-2 border-white shadow`}
                      />
                    </div>

                  ))}

                  <div className="flex justify-between items-end">
                    <div className="space-y-2 bg-white/80 backdrop-blur-sm p-3">
                      {[
                        { city: "London Node", active: true },
                        { city: "Singapore Node", active: true },
                        { city: "New York Node", active: true },
                      ].map((node) => (
                        <div
                          key={node.city}
                          className="flex items-center gap-2"
                        >
                          <div
                            className={`w-2 h-2 rounded-full ${node.active ? "bg-green-500" : "bg-yellow-500"
                              }`}
                            aria-hidden="true"
                          />
                          <span className="text-[9px] font-bold uppercase tracking-widest">
                            {node.city}: Open
                          </span>
                        </div>
                      ))}
                    </div>
                    <span className="text-[8px] font-mono opacity-40">
                      LAT: 51.5074 N
                    </span>
                  </div>
                </div>
              </div>

              {/* Regional HQ Directory */}
              <div className="space-y-8">
                <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary/40 border-b border-primary/10 pb-4">
                  Regional HQs
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                  {regionalHQs.map((hq) => (
                    <address key={hq.region} className="not-italic space-y-3">
                      <p className="text-[10px] font-bold uppercase tracking-widest">
                        {hq.region}
                      </p>
                      <div className="text-[11px] leading-relaxed space-y-1">
                        <p className="font-bold">{hq.name}</p>
                        <p className="text-primary/60">{hq.address}</p>
                        <a
                          href={`tel:${hq.phone.replace(/\s/g, "")}`}
                          className="text-primary/60 hover:text-accent-gold transition-colors"
                        >
                          {hq.phone}
                        </a>
                      </div>
                    </address>
                  ))}
                </div>

                {/* Direct Email */}
                <div className="pt-8 border-t border-primary/10">
                  <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary/40 mb-4">
                    Direct Email
                  </p>
                  <a
                    href="mailto:inquiry@maykott.com"
                    className="text-sm font-bold text-primary hover:text-accent-gold transition-colors block mb-2"
                  >
                    inquiry@maykott.com
                  </a>
                  <a
                    href="mailto:press@maykott.com"
                    className="text-sm font-bold text-primary/40 hover:text-accent-gold transition-colors block"
                  >
                    press@maykott.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </SiteLayout>
  );
}
