import type { StaticImageData } from "next/image";

import cImg1 from "@/assets/img/inner-contact/contact/contact-1.jpg";
import cImg2 from "@/assets/img/inner-contact/contact/contact-2.jpg";
import cImg3 from "@/assets/img/inner-contact/contact/contact-3.jpg";
import cImg4 from "@/assets/img/inner-contact/contact/contact-4.jpg";
import cImg5 from "@/assets/img/inner-contact/contact/contact-5.jpg";
import cImg6 from "@/assets/img/inner-contact/contact/contact-6.jpg";
import location1 from "@/assets/img/inner-contact/contact/info-1.jpg";
import location2 from "@/assets/img/inner-contact/contact/info-2.jpg";
import location3 from "@/assets/img/inner-contact/contact/info-3.jpg";
import { siteSettings } from "@/content/site-settings";

export type ContactLocationCard = {
  id: number;
  image: StaticImageData;
  country: string;
  time: string;
  title: string;
  addressHtml: string;
  href: string;
  hrefLabel: string;
  email: string;
};

export type ContactStudioCard = {
  id: number;
  country: string;
  imageOne: StaticImageData;
  imageTwo: StaticImageData;
  href: string;
  address: string;
  email: string;
  phone?: string;
  note?: string;
};

export type ContactPageContent = {
  heroEyebrow: string;
  heroTitleLines: [string, string];
  formHeading: {
    title: string;
    accent: string;
  };
  secondaryFormTitle: string;
  supportText: string;
  mapEmbedUrl: string;
  locations: ContactLocationCard[];
  studios: ContactStudioCard[];
};

export const contactPageContent = {
  heroEyebrow: siteSettings.shortName,
  heroTitleLines: ["Get", "in touch"],
  formHeading: {
    title: "Send a Message",
    accent: "Contact Us",
  },
  secondaryFormTitle: "Send a Message",
  supportText:
    "Or, you can contact one of our studios directly below. We aim to respond within 24 hours.",
  mapEmbedUrl: "https://www.google.com/maps?q=Jigjiga,Ethiopia&output=embed",
  locations: [
    {
      id: 1,
      image: location1,
      country: "Jigjiga",
      time: "East Africa Time (UTC+3)",
      title: "Prime Creative HQ",
      addressHtml: "Jigjiga, Somali Region <br /> Ethiopia",
      href: "https://maps.google.com/?q=Jigjiga,Ethiopia",
      hrefLabel: "View location",
      email: siteSettings.email,
    },
    {
      id: 2,
      image: location2,
      country: "Remote Projects",
      time: "Available across East Africa and beyond",
      title: "Digital Delivery",
      addressHtml:
        "Remote collaboration for campaigns, <br /> systems, and content production",
      href: "/service",
      hrefLabel: "See services",
      email: siteSettings.email,
    },
    {
      id: 3,
      image: location3,
      country: "Partnerships",
      time: "Campaigns, events, and collaborations",
      title: "Business Inquiries",
      addressHtml:
        "For partnerships, media, and long-term <br /> collaborations, reach out directly",
      href: `mailto:${siteSettings.email}`,
      hrefLabel: "Contact by email",
      email: siteSettings.email,
    },
  ],
  studios: [
    {
      id: 1,
      country: "Jigjiga Studio",
      imageOne: cImg1,
      imageTwo: cImg2,
      href: "https://maps.google.com/?q=Jigjiga,Ethiopia",
      address: "Jigjiga, Somali Region, Ethiopia",
      email: siteSettings.email,
    },
    {
      id: 2,
      country: "Remote Projects",
      imageOne: cImg3,
      imageTwo: cImg4,
      href: "/service",
      address: "Working with clients across East Africa and beyond",
      email: siteSettings.email,
      note: "We usually respond within 24 hours.",
    },
    {
      id: 3,
      country: "Join the Team",
      imageOne: cImg5,
      imageTwo: cImg6,
      href: `mailto:${siteSettings.email}`,
      address:
        "Freelancers, collaborators, and future team members are welcome to reach out.",
      note: "Send portfolio links instead of large attachments.",
      email: siteSettings.email,
    },
  ],
} satisfies ContactPageContent;
