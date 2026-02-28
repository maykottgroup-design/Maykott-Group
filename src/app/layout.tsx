import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.maykott.com"),
  title: {
    default: "Maykott Group | Global B2B Industrial Holding Company",
    template: "%s | Maykott Group",
  },
  description:
    "Maykott Group is a global B2B industrial holding company deploying capital with architectural precision across infrastructure, technology, energy, and logistics sectors worldwide.",
  keywords: [
    "Maykott Group",
    "holding company",
    "B2B industrial",
    "global investment",
    "private equity",
    "infrastructure",
    "institutional investor",
    "portfolio management",
  ],
  authors: [{ name: "Maykott Group" }],
  creator: "Maykott Group",
  publisher: "Maykott Group",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.maykott.com",
    siteName: "Maykott Group",
    title: "Maykott Group | Global B2B Industrial Holding Company",
    description:
      "Architectural rigor in global B2B expansion. We build the frameworks of the next industrial era.",
    images: [
      {
        url: "/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "Maykott Group",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Maykott Group | Global B2B Industrial Holding Company",
    description:
      "Architectural rigor in global B2B expansion. We build the frameworks of the next industrial era.",
    images: ["/opengraph-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: "https://www.maykott.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" data-scroll-behavior="smooth">

      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
        />
        {/* Structured Data - Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Maykott Group",
              alternateName: "Maykott Industrial Holding Group",
              url: "https://www.maykott.com",
              logo: "https://www.maykott.com/logo.png",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+1-212-555-0198",
                contactType: "corporate",
                areaServed: "Worldwide",
                availableLanguage: "English",
              },
              sameAs: ["https://www.linkedin.com/company/maykott-group"],
              description:
                "Maykott Group is a global B2B industrial holding company with a portfolio spanning enterprise technology, infrastructure, energy systems, and logistics.",
              address: {
                "@type": "PostalAddress",
                streetAddress: "28 Liberty St",
                addressLocality: "New York",
                addressRegion: "NY",
                postalCode: "10005",
                addressCountry: "US",
              },
              foundingDate: "2014",
              numberOfEmployees: {
                "@type": "QuantitativeValue",
                value: "5000+",
              },
            }),
          }}
        />
      </head>
      <body
        className={`${inter.variable} font-display antialiased bg-background-light text-primary`}
      >
        {children}
      </body>
    </html>
  );
}
