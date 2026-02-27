/**
 * @fileoverview Insights / Press articles data.
 *
 * SCALING GUIDE:
 * To add a new insight article, append to the `insights` array.
 * Future enhancement: Replace with CMS/API integration (contentful, sanity, etc.)
 */

export interface Insight {
  id: string;
  title: string;
  excerpt: string;
  sector:
  | "energy"
  | "logistics"
  | "finance"
  | "technology"
  | "infrastructure"
  | "decarbonization";
  sectorLabel: string;
  readTime: string; // e.g. "12 MIN READ"
  publishedAt: string; // ISO date string
  imageUrl: string;
  imageAlt: string;
  author: string;
  authorTitle: string;
  featured: boolean;
  slug: string;
}

export const insights: Insight[] = [
  {
    id: "global-infrastructure-outlook-2025",
    title: "Global Infrastructure Outlook 2025",
    excerpt:
      "A comprehensive whitepaper on the structural shifts defining the next decade of institutional capital allocation across emerging and developed markets.",
    sector: "infrastructure",
    sectorLabel: "Infrastructure",
    readTime: "20 MIN READ",
    publishedAt: "2025-01-15",
    imageUrl:
      "https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=2070&auto=format&fit=crop",
    imageAlt: "Modern glass office building facade",
    author: "Dr. Alistair Maykott",
    authorTitle: "Chief Global Strategist",
    featured: true,
    slug: "global-infrastructure-outlook-2025",
  },
  {
    id: "hydrogen-paradox-frontier-markets",
    title: "The Hydrogen Paradox: Financing Transition in Frontier Markets",
    excerpt:
      "Evaluating the gap between capital commitments and physical deployment in sub-Saharan energy corridors.",
    sector: "energy",
    sectorLabel: "Energy",
    readTime: "12 MIN READ",
    publishedAt: "2025-02-10",
    imageUrl:
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2070&auto=format&fit=crop",
    imageAlt: "Power transmission towers at golden hour",
    author: "Marcus Thorne",
    authorTitle: "Principal Economist",
    featured: false,
    slug: "hydrogen-paradox-frontier-markets",
  },
  {
    id: "decarbonizing-supply-chains",
    title: "Decarbonizing Global Supply Chains: The Next Decade",
    excerpt:
      "Structural transformations in maritime logistics and the emergence of green shipping hubs.",
    sector: "logistics",
    sectorLabel: "Logistics",
    readTime: "08 MIN READ",
    publishedAt: "2025-01-28",
    imageUrl:
      "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?q=80&w=2070&auto=format&fit=crop",
    imageAlt: "Aerial view of shipping containers at cargo port",
    author: "Elena Vostakova",
    authorTitle: "Head of Emerging Markets Intelligence",
    featured: false,
    slug: "decarbonizing-supply-chains",
  },
  {
    id: "private-equity-high-inflation",
    title: "Asset Class Resilience: Private Equity in High-Inflation Eras",
    excerpt:
      "Historical analysis of institutional performance benchmarks during prolonged inflationary cycles.",
    sector: "finance",
    sectorLabel: "Finance",
    readTime: "15 MIN READ",
    publishedAt: "2025-01-05",
    imageUrl:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=2070&auto=format&fit=crop",
    imageAlt: "Financial markets data and currency",
    author: "James Holbrook",
    authorTitle: "Chief Investment Officer",
    featured: false,
    slug: "private-equity-high-inflation",
  },
  {
    id: "semiconductor-geopolitics",
    title: "The Geopolitics of Semiconductors: A New Gold Standard?",
    excerpt:
      "How semiconductor supply chains are reshaping global power dynamics and institutional investment strategies.",
    sector: "technology",
    sectorLabel: "Technology",
    readTime: "10 MIN READ",
    publishedAt: "2024-12-15",
    imageUrl:
      "https://images.unsplash.com/photo-1591696205602-2f950c417cb9?q=80&w=2070&auto=format&fit=crop",
    imageAlt: "Semiconductor chip microscopy",
    author: "Elena Vostakova",
    authorTitle: "Head of Emerging Markets Intelligence",
    featured: false,
    slug: "semiconductor-geopolitics",
  },
  {
    id: "sovereign-wealth-sustainable-forestry",
    title: "Sovereign Wealth Trends: The Pivot to Sustainable Forestry",
    excerpt:
      "Sovereign wealth funds are increasingly allocating to certified forest carbon assets as climate mandates intensify.",
    sector: "decarbonization",
    sectorLabel: "Decarbonization",
    readTime: "09 MIN READ",
    publishedAt: "2024-11-20",
    imageUrl:
      "https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&w=2070&auto=format&fit=crop",
    imageAlt: "Aerial view of sustainable green forest",
    author: "Marcus Thorne",
    authorTitle: "Principal Economist",
    featured: false,
    slug: "sovereign-wealth-sustainable-forestry",
  },
];

/**
 * Get the featured/hero insight.
 */
export function getFeaturedInsight(): Insight | undefined {
  return insights.find((i) => i.featured);
}

/**
 * Get non-featured insights.
 */
export function getInsightsList(): Insight[] {
  return insights.filter((i) => !i.featured);
}

/**
 * Get insights by sector.
 */
export function getInsightsBySector(sector: string): Insight[] {
  if (sector === "all") return insights;
  return insights.filter((i) => i.sector === sector);
}
/**
 * Get insight by ID.
 */
export function getInsightById(id: string): Insight | undefined {
  return insights.find((i) => i.id === id);
}
