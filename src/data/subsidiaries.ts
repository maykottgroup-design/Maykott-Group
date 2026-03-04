/**
 * @fileoverview Portfolio subsidiaries data.
 *
 * SCALING GUIDE:
 * To add a new subsidiary, simply append a new object to the `subsidiaries` array
 * following the existing schema. The portfolio page will automatically render it.
 *
 * Required fields: id, name, sector, sectorLabel, description, assetsUnderManagement,
 *                  annualGrowth, badge, icon, imageUrl, imageAlt, trend, featured
 */

export interface Subsidiary {
  id: string;
  name: string;
  sector:
  | "infrastructure"
  | "technology"
  | "energy"
  | "logistics"
  | "finance"
  | "environmental";
  sectorLabel: string;
  description: string;
  assetsUnderManagement: string;
  annualGrowth: string;
  badge?: string; // e.g. "Top Performer", "New Acquisition"
  badgeVariant?: "gold" | "dark"; // gold = accent-gold, dark = primary
  icon: string; // Material Symbols icon name
  imageUrl: string;
  imageAlt: string;
  trend: number[]; // 5 values for sparkline chart (1-4 scale)
  featured: boolean;
  yearAcquired?: number;
  headquarters?: string;
  employees?: string;
}

export const subsidiaries: Subsidiary[] = [
  {
    id: "maykott-systems",
    name: "Maykott Systems",
    sector: "technology",
    sectorLabel: "Enterprise Technology",
    description:
      "Leading provider of enterprise-grade software infrastructure for industrial verticals. Specializing in operational technology (OT) and digital transformation for heavy industry.",
    assetsUnderManagement: "$2.8B",
    annualGrowth: "+18.4%",
    badge: "Top Performer",
    badgeVariant: "gold",
    icon: "terminal",
    imageUrl:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop",
    imageAlt: "High-tech circuit board close up",
    trend: [1, 2, 2, 3, 4],
    featured: true,
    yearAcquired: 2018,
    headquarters: "Singapore",
    employees: "3,200+",
  },
  {
    id: "atlas-logistics",
    name: "Atlas Logistics",
    sector: "logistics",
    sectorLabel: "Global Infrastructure",
    description:
      "Critical infrastructure for global trade routes. Operating 14 deepwater terminals across three continents with proprietary logistics automation technology.",
    assetsUnderManagement: "$4.1B",
    annualGrowth: "+11.7%",
    icon: "conveyor_belt",
    imageUrl:
      "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?q=80&w=2070&auto=format&fit=crop",
    imageAlt: "Industrial shipping containers aerial view",
    trend: [2, 2, 3, 3, 4],
    featured: true,
    yearAcquired: 2016,
    headquarters: "Rotterdam",
    employees: "8,500+",
  },
  {
    id: "nova-grid",
    name: "Nova Grid",
    sector: "energy",
    sectorLabel: "Energy Systems",
    description:
      "Next-generation power transmission and distribution asset group. Managing 32 GW of capacity across Western Europe and Southeast Asia.",
    assetsUnderManagement: "$5.2B",
    annualGrowth: "+9.3%",
    icon: "bolt",
    imageUrl:
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2070&auto=format&fit=crop",
    imageAlt: "Electrical power transmission towers",
    trend: [1, 2, 3, 3, 4],
    featured: true,
    yearAcquired: 2019,
    headquarters: "Frankfurt",
    employees: "5,100+",
  },
  {
    id: "beta-infrastructure",
    name: "Beta Infrastructure",
    sector: "infrastructure",
    sectorLabel: "Global Logistics & Power",
    description:
      "A diversified infrastructure holding with operations in port logistics and distributed power. Positioned as the backbone of emerging market supply chains.",
    assetsUnderManagement: "$1.24B",
    annualGrowth: "+14.2%",
    badge: "Top Performer",
    badgeVariant: "gold",
    icon: "corporate_fare",
    imageUrl:
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2070&auto=format&fit=crop",
    imageAlt: "Abstract data visualization with infrastructure",
    trend: [1, 2, 2, 3, 4],
    featured: false,
    yearAcquired: 2020,
    headquarters: "Dubai",
    employees: "1,800+",
  },
  {
    id: "gamma-ventures",
    name: "Gamma Ventures",
    sector: "technology",
    sectorLabel: "Deep Tech & Semiconductors",
    description:
      "Strategic intellectual property and semiconductor IP licensing portfolio. Operating in the intersection of defense-grade and commercial technology.",
    assetsUnderManagement: "$842M",
    annualGrowth: "+28.7%",
    icon: "memory",
    imageUrl:
      "https://images.unsplash.com/photo-1591696205602-2f950c417cb9?q=80&w=2070&auto=format&fit=crop",
    imageAlt: "Modern semiconductor circuit board",
    trend: [1, 2, 3, 4, 4],
    featured: false,
    yearAcquired: 2021,
    headquarters: "Tokyo",
    employees: "650+",
  },
  {
    id: "delta-sustain",
    name: "Delta Sustain",
    sector: "environmental",
    sectorLabel: "Environmental Assets",
    description:
      "Carbon credit origination and sustainable forestry asset management. A platform for institutional-grade environmental investment with verified carbon standards.",
    assetsUnderManagement: "$2.1B",
    annualGrowth: "+6.4%",
    badge: "New Acquisition",
    badgeVariant: "dark",
    icon: "eco",
    imageUrl:
      "https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&w=2070&auto=format&fit=crop",
    imageAlt: "Aerial view of sustainable forest",
    trend: [2, 2, 3, 3, 3],
    featured: false,
    yearAcquired: 2023,
    headquarters: "Oslo",
    employees: "420+",
  },
  {
    id: "epsilon-capital",
    name: "Epsilon Capital",
    sector: "finance",
    sectorLabel: "Merchant Banking",
    description:
      "Specialist M&A advisory and structured finance platform for mid-market industrials. Acting as a strategic bridge between operational companies and institutional capital.",
    assetsUnderManagement: "$3.5B",
    annualGrowth: "+11.9%",
    icon: "account_balance",
    imageUrl:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=2070&auto=format&fit=crop",
    imageAlt: "Corporate banking and finance environment",
    trend: [2, 2, 3, 4, 4],
    featured: false,
    yearAcquired: 2017,
    headquarters: "London",
    employees: "980+",
  },
  {
    id: "zeta-robotics",
    name: "Zeta Robotics",
    sector: "technology",
    sectorLabel: "Automation Systems",
    description:
      "Industrial robotics integration and autonomous manufacturing systems. Deployed across 18 production facilities in the Maykott Holdings ecosystem.",
    assetsUnderManagement: "$410M",
    annualGrowth: "+34.1%",
    icon: "precision_manufacturing",
    imageUrl:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2070&auto=format&fit=crop",
    imageAlt: "Industrial robot arm in factory",
    trend: [1, 2, 3, 4, 4],
    featured: false,
    yearAcquired: 2022,
    headquarters: "Stuttgart",
    employees: "720+",
  },
];

/**
 * Get subsidiaries by sector filter.
 * Pass "all" to get all subsidiaries.
 */
export function getSubsidiariesBySector(sector: string): Subsidiary[] {
  if (sector === "all") return subsidiaries;
  return subsidiaries.filter((s) => s.sector === sector);
}

/**
 * Get featured subsidiaries for homepage showcase (max 3).
 */
export function getFeaturedSubsidiaries(): Subsidiary[] {
  return subsidiaries.filter((s) => s.featured).slice(0, 3);
}

/**
 * Get a single subsidiary by ID.
 */
export function getSubsidiaryById(id: string): Subsidiary | undefined {
  return subsidiaries.find((s) => s.id === id);
}
