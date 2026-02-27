import SiteLayout from "@/components/SiteLayout";
import Link from "next/link";

export default function NotFound() {
  return (
    <SiteLayout>
      <section className="min-h-[70vh] flex items-center justify-center px-6 relative overflow-hidden">
        {/* Watermark */}
        <div
          className="absolute inset-0 flex items-center justify-center opacity-[0.03] select-none pointer-events-none"
          aria-hidden="true"
        >
          <span className="text-[30vw] font-black tracking-tighter text-primary leading-none">
            404
          </span>
        </div>

        <div className="text-center relative z-10 max-w-2xl">
          <p className="text-[10px] font-bold uppercase tracking-[0.5em] text-accent-gold mb-6">
            Navigation Error
          </p>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter uppercase mb-8 leading-none">
            Page Not Found
          </h1>
          <p className="text-primary/60 text-lg mb-12 leading-relaxed">
            The page you are looking for does not exist or has been moved.
            Please navigate using the links below.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link
              href="/"
              className="bg-black text-white px-10 py-4 text-xs font-bold uppercase tracking-[0.15em] hover:bg-accent-gold transition-all duration-300"
            >
              Return to Home
            </Link>
            <Link
              href="/inquiry"
              className="text-xs font-bold uppercase tracking-widest border-b-2 border-primary pb-1 hover:border-accent-gold hover:text-accent-gold transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
