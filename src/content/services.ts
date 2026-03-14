import type { StaticImageData } from "next/image";

import serviceIconOne from "@/assets/img/home-01/service/service-icon-1.png";
import serviceIconTwo from "@/assets/img/home-01/service/service-icon-2.png";
import serviceIconThree from "@/assets/img/home-01/service/service-icon-3.png";
import serviceIconFour from "@/assets/img/home-01/service/service-icon-4.png";

import serviceImageOne from "@/assets/img/inner-service/service/service-1.jpg";
import serviceImageTwo from "@/assets/img/inner-service/service/service-2.jpg";
import serviceImageThree from "@/assets/img/inner-service/service/service-3.jpg";
import serviceImageFour from "@/assets/img/inner-service/service/service-4.jpg";
import serviceHeroImage from "@/assets/img/inner-service/hero/hero-1.jpg";

export type ServiceItem = {
  id: number;
  slug: string;
  title: string;
  subtitle: string;
  homeDescription: string;
  pageDescription: string;
  overview: string[];
  lead: string;
  closing: string;
  contactPrompt: string;
  capabilities: string[];
  icon: StaticImageData;
  image: StaticImageData;
};

export const serviceItems = [
  {
    id: 1,
    slug: "production",
    title: "PRODUCTION",
    subtitle: "Content Production",
    homeDescription:
      "We produce visual content for brands, campaigns, and events, covering concept development, filming, and post-production.",
    pageDescription:
      "End-to-end visual production for campaigns, corporate storytelling, social content, and live events.",
    overview: [
      "We produce visual content for brands, campaigns, and events. From concept development to filming and post-production, our team handles the full process.",
      "Our production work is built to move across channels, from commercial campaigns and corporate communications to social-first edits and event recaps.",
    ],
    lead:
      "Production at Prime Creative means a single team managing planning, capture, editing, and delivery so the final output stays consistent from first idea to final cut.",
    closing:
      "Whether the goal is a flagship brand film, a fast-moving campaign rollout, or complete event coverage, we structure the production process around clarity, speed, and polished delivery.",
    contactPrompt:
      "Need high-quality production that makes your campaign or event look credible and polished? Let's plan the right creative and execution for it.",
    capabilities: [
      "Commercial video production",
      "Corporate films",
      "Social media videos",
      "Motion graphics & animation",
      "Photography",
      "Campaign visuals",
      "Event coverage",
    ],
    icon: serviceIconOne,
    image: serviceImageOne,
  },
  {
    id: 2,
    slug: "digital-platforms",
    title: "DIGITAL PLATFORMS",
    subtitle: "Digital Solutions",
    homeDescription:
      "We build the digital systems businesses and enterprises rely on, from websites and online stores to custom applications, Retail solutions and enterprise platforms.",
    pageDescription:
      "Web, mobile, and business systems designed to support growth, operations, and automation.",
    overview: [
      "We build the digital systems businesses rely on. Our work ranges from websites and online stores to custom applications and enterprise platforms.",
      "Every platform is planned around usability, performance, and operational fit so teams can manage content, customers, and internal workflows with less friction.",
    ],
    lead:
      "Digital platforms are not treated as standalone launches. We build them as working business infrastructure that supports sales, operations, and long-term scale.",
    closing:
      "From customer-facing experiences to internal business tools, we help organizations move from manual processes to dependable digital systems.",
    contactPrompt:
      "Need a website or custom platform that helps the business run better and grow faster? Let's scope the right solution for your team.",
    capabilities: [
      "Web design and development",
      "E-commerce platforms",
      "Web applications",
      "Mobile applications",
      "POS systems",
      "ERP platforms",
      "Automation systems",
      "Custom software solutions",
    ],
    icon: serviceIconThree,
    image: serviceImageTwo,
  },
  {
    id: 3,
    slug: "brand-design",
    title: "BRAND & DESIGN",
    subtitle: "Brand Identity",
    homeDescription:
      "We develop brand identity and visual communication systems used across marketing and business materials.",
    pageDescription:
      "Identity systems and design assets that keep brands clear, consistent, and usable across channels.",
    overview: [
      "Development of brand identity and visual communication used across marketing and business materials.",
      "We create practical identity systems that guide how a brand looks, speaks, and shows up across digital, print, packaging, and internal collateral.",
    ],
    lead:
      "Brand and design work succeeds when it is both recognizable and usable. We focus on systems that help teams apply the brand consistently, not just one-off visuals.",
    closing:
      "The result is a visual language that supports campaigns, strengthens recognition, and gives teams a clearer foundation for everyday communication.",
    contactPrompt:
      "Need a stronger brand presence that people recognize and trust? Let's shape an identity that fits your business and stands out clearly.",
    capabilities: [
      "Logo design",
      "Brand identity systems",
      "Brand guidelines",
      "Packaging design",
      "Marketing materials",
      "Social media graphics",
      "Print design",
      "Corporate collateral",
    ],
    icon: serviceIconTwo,
    image: serviceImageThree,
  },
  {
    id: 4,
    slug: "marketing",
    title: "MARKETING",
    subtitle: "Growth Marketing",
    homeDescription:
      "We build strategies and campaigns that help businesses reach the right audience and grow visibility.",
    pageDescription:
      "Performance-focused marketing strategy, paid campaigns, and reporting for measurable growth.",
    overview: [
      "Strategies and campaigns that help businesses reach the right audience and grow their visibility.",
      "Our marketing work connects planning, creative execution, distribution, and reporting so businesses can make decisions based on performance instead of guesswork.",
    ],
    lead:
      "Marketing needs more than reach. We structure campaigns around the audience, channel mix, and reporting needed to understand what is actually driving results.",
    closing:
      "From search and paid media to email and analytics, we help brands build campaigns that stay measurable, adaptable, and aligned with business goals.",
    contactPrompt:
      "Need marketing that brings in the right audience and turns attention into results? Let's build a smarter growth plan around your goals.",
    capabilities: [
      "Search engine optimization (SEO)",
      "Google Ads campaigns",
      "Social media advertising",
      "Email marketing",
      "Campaign strategy",
      "Marketing analytics and reporting",
    ],
    icon: serviceIconFour,
    image: serviceImageFour,
  },
  {
    id: 5,
    slug: "event-management",
    title: "EVENT MANAGEMENT",
    subtitle: "Event Production",
    homeDescription:
      "We plan and produce professional events for companies, organizations, and campaigns, including setup and media coverage.",
    pageDescription:
      "Event planning, setup, branded environments, and media coverage managed as one coordinated production.",
    overview: [
      "We plan and produce professional events for companies, organizations, and campaigns. Our team manages both the physical setup and the media coverage.",
      "By handling logistics, staging, branding elements, and post-event media under one workflow, we help events run smoothly on-site and continue delivering value after they end.",
    ],
    lead:
      "Event management works best when execution and media are coordinated together. We manage both sides so the live experience and the resulting content support the same objective.",
    closing:
      "That allows clients to run launches, corporate gatherings, and campaign events with tighter coordination, clearer branding, and stronger post-event assets.",
    contactPrompt:
      "Need an event that feels organized, on-brand, and professionally delivered from start to finish? Let's coordinate it with one reliable team.",
    capabilities: [
      "Event planning and coordination",
      "Stage design and setup",
      "Banner and signage production",
      "Live event coverage",
      "Post-event media content",
    ],
    icon: serviceIconOne,
    image: serviceHeroImage,
  },
] satisfies ServiceItem[];

export function getServiceBySlug(slug: string) {
  return serviceItems.find((service) => service.slug === slug);
}
