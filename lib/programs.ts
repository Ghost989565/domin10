export type Program = {
  slug: string
  title: string
  image: string
  description: string
  bullets: string[]
  cta: string
  details: {
    overview: string
    partner?: string
    focus: string[]
    outcomes: string[]
  }
}

export const programs: Program[] = [
  {
    slug: "welcome-home-outreach",
    title: "Welcome Home Outreach",
    image: "/images/bible-study.png",
    description:
      "A comprehensive support system designed to bridge the gap between incarceration and independence, delivered in collaboration with Luther Rice Memorial Baptist Church.",
    bullets: ["Holistic Case Management", "Strategic Mentorship", "Workforce Readiness"],
    cta: "Learn More",
    details: {
      overview:
        "Welcome Home Outreach is a relationship-first support program focused on helping individuals and families transition into stability with practical and spiritual support.",
      partner: "Luther Rice Memorial Baptist Church",
      focus: [
        "Reentry support and stabilization planning",
        "Mentorship, discipleship, and faith-centered accountability",
        "Workforce readiness and life-navigation resources",
      ],
      outcomes: [
        "Safer and smoother community transitions",
        "Stronger support networks for participants",
        "Improved readiness for long-term independence",
      ],
    },
  },
  {
    slug: "neighborhood-impact",
    title: "Neighborhood Impact",
    image: "/images/community-service.png",
    description: "The grassroots engine of Dominion, focused on immediate community needs and revitalization.",
    bullets: ["Outreach Mobiles", "Neighborhood Restoration", "Partner Alliances"],
    cta: "Learn More",
    details: {
      overview:
        "Neighborhood Impact mobilizes volunteers and partners to serve local communities through tangible service and Christ-centered care.",
      focus: [
        "Food and essentials distribution",
        "Park and neighborhood restoration projects",
        "Community relationship building through service",
      ],
      outcomes: [
        "Visible neighborhood care and improvement",
        "Increased local trust and engagement",
        "Practical demonstration of faith through action",
      ],
    },
  },
  {
    slug: "learning-track",
    title: "Learning Track",
    image: "/images/worship-night.png",
    description: "A structured educational framework built to equip the next generation of leadership.",
    bullets: ["Foundational Theology", "Leadership Certification", "Community Ethics"],
    cta: "Learn More",
    details: {
      overview:
        "Learning Track develops leaders through practical curriculum, faith foundations, and applied community leadership training.",
      focus: [
        "Foundational theology and biblical literacy",
        "Leadership development pathways",
        "Practical ethics for community impact",
      ],
      outcomes: [
        "Prepared and confident volunteer leaders",
        "Consistent program quality across teams",
        "Stronger culture of accountability and service",
      ],
    },
  },
  {
    slug: "kingdom-resource-network",
    title: "Kingdom Resource Network",
    image: "/images/mission-statements.png",
    description:
      "A trusted directory of faith-aligned businesses, professionals, and service providers for community support.",
    bullets: ["Resource Directory", "Discounted Services", "Partner Collaboration"],
    cta: "Learn More",
    details: {
      overview:
        "Kingdom Resource Network centralizes trusted resources and service providers to remove barriers and strengthen community connections.",
      focus: [
        "Faith-aligned provider directory",
        "Free and discounted service pathways",
        "Strategic partner coordination",
      ],
      outcomes: [
        "Reduced financial barriers to support",
        "Higher visibility for aligned businesses",
        "More effective referrals across the network",
      ],
    },
  },
  {
    slug: "exchange-expansion",
    title: "EXCHANGE Expansion",
    image: "/images/collage.png",
    description:
      "Young adult fellowship and resource-sharing experiences designed for connection, support, and Kingdom collaboration.",
    bullets: ["Young Adult Fellowship", "Resource Sharing", "Mentorship + Prayer"],
    cta: "Learn More",
    details: {
      overview:
        "EXCHANGE is a growing young-adult community where members intentionally exchange support, wisdom, love, and practical resources.",
      focus: [
        "Authentic fellowship and relationship building",
        "Prayer, accountability, and mentorship",
        "Career and business resource-sharing",
      ],
      outcomes: [
        "Stronger belonging among young adults",
        "Increased collaboration across callings",
        "Sustained support systems for growth",
      ],
    },
  },
]
