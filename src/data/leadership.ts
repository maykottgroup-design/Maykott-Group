/**
 * @fileoverview Leadership team data.
 *
 * SCALING GUIDE:
 * To add or edit a leadership profile, update the `leadershipTeam` array.
 * Each profile will automatically appear on both the Homepage and the About page.
 */

export interface LeadershipProfile {
  id: string;
  name: string;
  title: string;
  bio: string;
  imageUrl: string;
  imageAlt: string;
  linkedIn?: string;
  featured: boolean; // Show on homepage (max 4)
  order: number; // Sort order
}

export const leadershipTeam: LeadershipProfile[] = [
  {
    id: "S.-maykott",
    name: "S. Maykott",
    title: "Founder & Principal Architect",
    bio: "Leading the vision and strategic direction of the group with over 25 years in private equity and industrial turnarounds. Previously Managing Partner at Thorne Capital Group and Head of M&A at Deutsche Industriebank.",
    imageUrl:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop",
    imageAlt: "S. Maykott - Managing Director, Maykott Holdings",
    linkedIn: "#",
    featured: true,
    order: 1,
  },
  {
    id: "evelyn-chen",
    name: "Evelyn Chen",
    title: "Chief Strategy Officer",
    bio: "Orchestrating complex global acquisitions and cross-border integrations across the portfolio. Former Senior Partner at McKinsey & Company's Paris office focused on industrial M&A.",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop",
    imageAlt: "Evelyn Chen - Chief Strategy Officer, Maykott Holdings",
    linkedIn: "#",
    featured: true,
    order: 2,
  },
  {
    id: "marcus-thorne",
    name: "Marcus Thorne",
    title: "Head of Operations",
    bio: "Implementing industrial-grade operational frameworks across all subsidiaries. 20+ years scaling heavy industry operations across EMEA and APAC markets.",
    imageUrl:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1970&auto=format&fit=crop",
    imageAlt: "Marcus Thorne - Head of Operations, Maykott Holdings",
    linkedIn: "#",
    featured: true,
    order: 3,
  },
  {
    id: "sarah-miller",
    name: "Sarah Miller",
    title: "General Counsel",
    bio: "Overseeing the legal framework, regulatory compliance, and governance structure of the Holdings across 12 jurisdictions. Previously Global Head of Legal at Barclays Industrial Finance.",
    imageUrl:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop",
    imageAlt: "Sarah Miller - General Counsel, Maykott Holdings",
    linkedIn: "#",
    featured: true,
    order: 4,
  },
  {
    id: "james-holbrook",
    name: "James Holbrook",
    title: "Chief Investment Officer",
    bio: "Deploying capital with surgical precision across the Holdings' global portfolio. Former Head of Infrastructure at Blackstone.",
    imageUrl:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop",
    imageAlt: "James Holbrook - Chief Investment Officer, Maykott Holdings",
    linkedIn: "#",
    featured: false,
    order: 5,
  },
  {
    id: "elena-vostakova",
    name: "Elena Vostakova",
    title: "Head of Emerging Markets Intelligence",
    bio: "Leading the Holdings' research and intelligence function with a focus on frontier markets, geopolitical risk, and emerging industrial sectors.",
    imageUrl:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop",
    imageAlt:
      "Elena Vostakova - Head of Emerging Markets Intelligence, Maykott Holdings",
    linkedIn: "#",
    featured: false,
    order: 6,
  },
];

/**
 * Get featured leadership profiles for homepage (max 4).
 */
export function getFeaturedLeaders(): LeadershipProfile[] {
  return leadershipTeam
    .filter((l) => l.featured)
    .sort((a, b) => a.order - b.order)
    .slice(0, 4);
}

/**
 * Get all leadership profiles sorted by order.
 */
export function getAllLeaders(): LeadershipProfile[] {
  return leadershipTeam.sort((a, b) => a.order - b.order);
}
