export type AboutPageContent = {
  hero: {
    subtitleLines: [string, string];
    title: string;
    tagline: string;
    intro: string;
    ctaLabel: string;
    ctaHref: string;
  };
  story: {
    greeting: string;
    lines: [string, string];
  };
  services: {
    title: string;
    accent: string;
    columns: [string[], string[]];
    ctaLabel: string;
    ctaHref: string;
  };
};

export const aboutPageContent = {
  hero: {
    subtitleLines: ["Digital", "creative agency"],
    title: "Building your Presence",
    tagline: "Jigjiga's First Full-Service Creative Agency",
    intro:
      "We don't just make things look good, We make businesses work better.",
    ctaLabel: "Our Story",
    ctaHref: "#our-story",
  },
  story: {
    greeting: "Hi!",
    lines: [
      "We are a team of creatives, strategists, and builders who are deeply rooted in our city and culture.",
      "We understand the market because we live in it. We know what resonates here because this is home.",
    ],
  },
  services: {
    title: "Stuff",
    accent: "we do",
    columns: [
      [
        "Branding & Identity",
        "Graphic Design",
        "Video Production",
        "Web Design & Development",
        "Business Systems",
      ],
      [
        "Photography",
        "Social Media Management",
        "Digital Marketing",
        "Event Production",
      ],
    ],
    ctaLabel: "View All Services",
    ctaHref: "/service",
  },
} satisfies AboutPageContent;
