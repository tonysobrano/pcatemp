export type HomePageContent = {
  hero: {
    titleLines: [string, string];
    categoryLine: string;
    ctaLabel: string;
    ctaHref: string;
  };
  mission: {
    eyebrow: string;
    titleLines: [string, string, string];
    body: string;
    ctaLabel: string;
    ctaHref: string;
  };
};

export const homePageContent = {
  hero: {
    titleLines: ["We're a high-end", "Creative agency"],
    categoryLine: "Production - Marketing - Branding - Development",
    ctaLabel: "Say Hello",
    ctaHref: "/contact",
  },
  mission: {
    eyebrow: "What we do",
    titleLines: [
      "We Help Businesses",
      "and Organizations Communicate Better",
      "Operate Smarter and Stand Out.",
    ],
    body:
      "Founded in 2023, Prime Creative Agency was built on a simple belief: businesses and organizations in Jigjiga deserve world-class branding, production, marketing, and digital systems that help them communicate clearly, operate smarter, and grow with structure.",
    ctaLabel: "About us",
    ctaHref: "/about-us",
  },
} satisfies HomePageContent;
