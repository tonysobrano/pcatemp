export type SiteSocialLink = {
  label: string;
  href: string;
};

export type PageMetadataCopy = {
  title: string;
  description: string;
};

export type SiteSettings = {
  name: string;
  shortName: string;
  footerTagline: string;
  locationTagline: string;
  email: string;
  newsletterHeading: string;
  footerSocialLinks: SiteSocialLink[];
  metadata: {
    default: PageMetadataCopy;
    home: PageMetadataCopy;
    about: PageMetadataCopy;
    contact: PageMetadataCopy;
    contactAlt: PageMetadataCopy;
    services: PageMetadataCopy;
    work: PageMetadataCopy;
    blog: PageMetadataCopy;
  };
};

export const siteSettings = {
  name: "Prime Creative",
  shortName: "Prime Creative",
  footerTagline: "Jigjiga's Leading Creative & Digital Agency",
  locationTagline: "Jigjiga's First Full-Service Creative Agency",
  email: "info@primecreative.agency",
  newsletterHeading:
    "Subscribe to our newsletter we might send you something cool",
  footerSocialLinks: [
    { label: "instagram", href: "https://www.instagram.com/" },
    { label: "tiktok", href: "https://www.tiktok.com/" },
    { label: "facebook", href: "https://www.facebook.com/" },
    { label: "linkedin", href: "https://www.linkedin.com/" },
  ],
  metadata: {
    default: {
      title: "Prime Creative | Jigjiga's First Full-Service Creative Agency",
      description:
        "Jigjiga's first full-service creative agency for strategy, production, branding, marketing, and digital systems.",
    },
    home: {
      title: "Prime Creative - Jigjiga's First Full-Service Creative Agency",
      description:
        "Integrated creative, development, and communications services for brands that want clearer growth.",
    },
    about: {
      title: "Prime Creative - Jigjiga's First Full-Service Creative Agency",
      description:
        "Learn about Prime Creative, Jigjiga's first full-service creative agency.",
    },
    contact: {
      title: "Prime Creative - Contact page",
      description:
        "Get in touch with Prime Creative about production, branding, marketing, digital platforms, and event work.",
    },
    contactAlt: {
      title: "Prime Creative - Contact 2 Page",
      description:
        "Contact Prime Creative and connect with the team behind campaigns, content, and digital systems.",
    },
    services: {
      title: "Services | Prime Creative",
      description:
        "Explore Prime Creative services across production, digital platforms, branding, marketing, and event management.",
    },
    work: {
      title: "Work | Prime Creative",
      description:
        "Selected work across production, digital platforms, brand systems, marketing, and event management.",
    },
    blog: {
      title: "Insights | Prime Creative",
      description:
        "Practical articles on branding, campaigns, communication, and digital growth from the Prime Creative team.",
    },
  },
} satisfies SiteSettings;
