import type { StaticImageData } from "next/image";

import coverOne from "@/assets/img/home-01/project/project-1-1.jpg";
import coverTwo from "@/assets/img/home-01/project/project-1-2.jpg";
import coverThree from "@/assets/img/home-01/project/project-1-3.jpg";
import coverFour from "@/assets/img/home-01/project/project-1-4.jpg";
import coverFive from "@/assets/img/home-01/project/project-1-5.jpg";
import coverSix from "@/assets/img/home-01/project/project-1-6.jpg";

import detailOne from "@/assets/img/inner-project/portfolio-details/port-details-1.jpg";
import detailTwo from "@/assets/img/inner-project/portfolio-details/port-details-2.jpg";
import detailThree from "@/assets/img/inner-project/portfolio-details/port-details-3.jpg";
import detailFour from "@/assets/img/inner-project/portfolio-details/port-details-4.jpg";
import detailAltOne from "@/assets/img/inner-project/portfolio-details-2/slide-1.jpg";
import detailAltTwo from "@/assets/img/inner-project/portfolio-details-2/slide-2.jpg";
import detailAltThree from "@/assets/img/inner-project/portfolio-details-2/slide-3.jpg";
import detailAltFour from "@/assets/img/inner-project/portfolio-details-2/slide-4.jpg";

export type WorkItem = {
  id: number;
  slug: string;
  title: string;
  category: string;
  year: string;
  client: string;
  location: string;
  featured: boolean;
  summary: string;
  excerpt: string;
  serviceSlugs: string[];
  deliverables: string[];
  outcomes: string[];
  challenge: string;
  solution: string[];
  coverImage: StaticImageData;
  gallery: StaticImageData[];
};

export const workItems = [
  {
    id: 1,
    slug: "campaign-production-system",
    title: "Campaign Production System",
    category: "Production",
    year: "2025",
    client: "Client Partnership",
    location: "East Africa",
    featured: true,
    summary:
      "A production framework for campaign shoots, short-form edits, and event coverage that could move quickly across multiple channels.",
    excerpt:
      "A sample case-study structure for production-led campaigns, built to be replaced with your own project details.",
    serviceSlugs: ["production", "marketing"],
    deliverables: [
      "Campaign video production",
      "Photography direction",
      "Short-form social edits",
      "Post-production workflow",
    ],
    outcomes: [
      "Clear cross-channel asset plan",
      "Consistent visual delivery across formats",
      "Faster turnaround for campaign drops",
    ],
    challenge:
      "The brief needed one production system that could support launch assets, social cutdowns, and event coverage without fragmenting the visual language.",
    solution: [
      "Built a unified pre-production plan covering concept, shot lists, and edit variations.",
      "Captured hero footage and supporting stills in the same production window to keep delivery efficient.",
      "Structured output formats so campaign assets could be reused across paid, organic, and event recap channels.",
    ],
    coverImage: coverOne,
    gallery: [detailOne, detailTwo, detailThree, detailFour],
  },
  {
    id: 2,
    slug: "brand-system-refresh",
    title: "Brand System Refresh",
    category: "Brand & Design",
    year: "2025",
    client: "Growing Business",
    location: "Somali Region",
    featured: true,
    summary:
      "A practical identity refresh covering logo usage, layout direction, and communication assets for a business preparing to scale.",
    excerpt:
      "Use this entry for brand identity, packaging, collateral, or visual-system case studies.",
    serviceSlugs: ["brand-design"],
    deliverables: [
      "Visual identity direction",
      "Logo application system",
      "Brand guidelines",
      "Marketing collateral",
    ],
    outcomes: [
      "More consistent brand presentation",
      "Reusable templates for internal teams",
      "Stronger recognition across channels",
    ],
    challenge:
      "The business needed a brand system that looked more established while staying simple enough for day-to-day marketing use.",
    solution: [
      "Defined a visual language that could stretch across print, digital, and campaign assets.",
      "Created core rules for typography, color, layout balance, and logo behavior.",
      "Turned one-off visuals into reusable templates that non-design teams could still apply consistently.",
    ],
    coverImage: coverTwo,
    gallery: [detailAltOne, detailAltTwo, detailAltThree, detailAltFour],
  },
  {
    id: 3,
    slug: "commerce-platform-rollout",
    title: "Commerce Platform Rollout",
    category: "Digital Platforms",
    year: "2025",
    client: "Retail Team",
    location: "Remote Delivery",
    featured: true,
    summary:
      "A commerce-focused website structure designed to support product discovery, conversion, and internal content management.",
    excerpt:
      "Use this pattern for websites, e-commerce builds, business portals, or internal systems.",
    serviceSlugs: ["digital-platforms"],
    deliverables: [
      "UX planning",
      "Frontend implementation",
      "Content structure",
      "Operational handoff",
    ],
    outcomes: [
      "Cleaner customer journey",
      "Better internal control over content updates",
      "More dependable digital sales flow",
    ],
    challenge:
      "The team needed a platform that felt credible to customers while being simple for internal staff to manage after launch.",
    solution: [
      "Mapped the site around conversion paths and operational needs instead of static brochure pages.",
      "Structured content modules so products, offers, and updates could be maintained without redesign work.",
      "Built the experience to support future integrations, automation, and scale.",
    ],
    coverImage: coverThree,
    gallery: [detailThree, detailFour, detailAltOne, detailAltTwo],
  },
  {
    id: 4,
    slug: "growth-launch-campaign",
    title: "Growth Launch Campaign",
    category: "Marketing",
    year: "2024",
    client: "Regional Brand",
    location: "East Africa",
    featured: true,
    summary:
      "An integrated launch campaign that connected creative assets, channel planning, and reporting into one measurable rollout.",
    excerpt:
      "Use this for paid campaigns, launch strategies, channel mix, and reporting-driven marketing work.",
    serviceSlugs: ["marketing", "production"],
    deliverables: [
      "Campaign strategy",
      "Paid media assets",
      "Landing-page support",
      "Performance reporting",
    ],
    outcomes: [
      "Clearer audience targeting",
      "Better campaign readiness across channels",
      "More useful reporting after launch",
    ],
    challenge:
      "The launch needed both creative reach and measurable follow-through, but the existing workflow separated strategy from execution.",
    solution: [
      "Connected campaign planning, asset production, and channel deployment under one schedule.",
      "Prepared creative variations for different ad placements and audience segments.",
      "Tracked the rollout with a reporting structure that made optimization decisions easier after launch.",
    ],
    coverImage: coverFour,
    gallery: [detailAltThree, detailAltFour, detailOne, detailTwo],
  },
  {
    id: 5,
    slug: "event-experience-design",
    title: "Event Experience Design",
    category: "Event Management",
    year: "2024",
    client: "Public Program",
    location: "Jigjiga",
    featured: true,
    summary:
      "A coordinated event workflow covering setup, branded visuals, production support, and post-event media output.",
    excerpt:
      "Use this for launches, conferences, branded activations, and end-to-end event execution.",
    serviceSlugs: ["event-management", "production", "brand-design"],
    deliverables: [
      "Event planning",
      "Stage and environment design",
      "Branded signage",
      "Live and post-event media",
    ],
    outcomes: [
      "More coordinated on-site execution",
      "Stronger event branding",
      "Useful content captured beyond event day",
    ],
    challenge:
      "The event needed to feel organized on-site while also generating strong media assets that would remain useful after the live experience ended.",
    solution: [
      "Aligned staging, signage, and coverage planning under one production timeline.",
      "Designed the live environment so physical branding and captured media would reinforce each other.",
      "Planned post-event asset delivery alongside the event itself rather than treating it as a separate step.",
    ],
    coverImage: coverFive,
    gallery: [detailTwo, detailThree, detailAltTwo, detailAltThree],
  },
  {
    id: 6,
    slug: "operations-portal",
    title: "Operations Portal",
    category: "Digital Platforms",
    year: "2024",
    client: "Enterprise Team",
    location: "Remote Delivery",
    featured: true,
    summary:
      "A business-facing platform concept for managing internal workflows, reporting visibility, and service operations more efficiently.",
    excerpt:
      "Use this entry for ERP, POS, internal dashboards, automation, or custom software projects.",
    serviceSlugs: ["digital-platforms", "marketing"],
    deliverables: [
      "System planning",
      "Workflow design",
      "Reporting views",
      "Operational documentation",
    ],
    outcomes: [
      "Less manual coordination",
      "Clearer internal visibility",
      "Stronger foundation for automation",
    ],
    challenge:
      "The organization relied on fragmented manual processes and needed a clearer digital system for daily operations and reporting.",
    solution: [
      "Mapped the most critical workflows first so the platform solved operational pain before adding extra features.",
      "Designed the structure around visibility, accountability, and day-to-day usability.",
      "Prepared the system for future automation and customer-facing extensions where needed.",
    ],
    coverImage: coverSix,
    gallery: [detailFour, detailOne, detailAltThree, detailAltFour],
  },
] satisfies WorkItem[];

export const featuredWorkItems = workItems.filter((item) => item.featured);

export function getWorkBySlug(slug: string) {
  return workItems.find((item) => item.slug === slug);
}
