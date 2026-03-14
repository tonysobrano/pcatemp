import type { StaticImageData } from "next/image";

import coverOne from "@/assets/img/inner-blog/blog-standard/blog-1.jpg";
import coverTwo from "@/assets/img/inner-blog/blog-standard/blog-2.jpg";
import coverThree from "@/assets/img/inner-blog/blog-standard/blog-3.jpg";
import coverFour from "@/assets/img/inner-blog/blog-standard/blog-4.jpg";
import coverFive from "@/assets/img/inner-blog/blog-standard/blog-5.jpg";
import coverSix from "@/assets/img/inner-blog/blog-standard/blog-6.jpg";
import coverSeven from "@/assets/img/inner-blog/blog-standard/blog-7.jpg";
import detailsOne from "@/assets/img/inner-blog/blog-details/blog-details-2.jpg";
import detailsTwo from "@/assets/img/inner-blog/blog-details/blog-details-3.jpg";
import detailsThree from "@/assets/img/inner-blog/blog-details/blog-details-4.jpg";
import authorAvatar from "@/assets/img/inner-blog/blog-details/avatar/avatar-1.jpg";

export type BlogAuthor = {
  name: string;
  role: string;
  avatar: StaticImageData;
  bio: string;
};

export type BlogParagraphBlock = {
  type: "paragraph";
  content: string;
};

export type BlogHeadingBlock = {
  type: "heading";
  content: string;
};

export type BlogQuoteBlock = {
  type: "quote";
  content: string;
  attribution: string;
};

export type BlogImageRowBlock = {
  type: "image-row";
  images: [
    { src: StaticImageData; alt: string },
    { src: StaticImageData; alt: string },
  ];
};

export type BlogImageBlock = {
  type: "image";
  image: { src: StaticImageData; alt: string };
};

export type BlogContentBlock =
  | BlogParagraphBlock
  | BlogHeadingBlock
  | BlogQuoteBlock
  | BlogImageRowBlock
  | BlogImageBlock;

export type BlogPost = {
  id: number;
  slug: string;
  title: string;
  category: string;
  publishedAt: string;
  excerpt: string;
  author: BlogAuthor;
  readTime: string;
  coverImage: StaticImageData;
  tags: string[];
  relatedSlugs: string[];
  content: BlogContentBlock[];
};

const primeCreativeAuthor = {
  name: "Prime Creative Team",
  role: "Creative Strategy & Production",
  avatar: authorAvatar,
  bio:
    "Practical ideas on branding, communication, production, and digital growth from the Prime Creative team.",
} satisfies BlogAuthor;

export const blogPosts = [
  {
    id: 1,
    slug: "building-a-brand-people-remember",
    title: "Building a Brand People Remember",
    category: "Branding",
    publishedAt: "2024-10-01",
    excerpt:
      "Strong brands become easier to trust when positioning, design, and execution keep reinforcing the same message.",
    author: primeCreativeAuthor,
    readTime: "7 min",
    coverImage: coverOne,
    tags: ["Branding", "Strategy", "Creative"],
    relatedSlugs: [
      "how-consistent-messaging-speeds-up-marketing",
      "turning-case-studies-into-sales-assets",
      "when-to-rebuild-a-website",
    ],
    content: [
      {
        type: "paragraph",
        content:
          "Strong brands are easier to trust because people can quickly understand who they are, what they offer, and why they matter. That clarity improves every campaign, platform, and customer interaction that follows.",
      },
      {
        type: "heading",
        content: "Why positioning matters",
      },
      {
        type: "paragraph",
        content:
          "Positioning is the foundation that tells people how to understand a business. Before design systems, campaigns, or content calendars, teams need a clear point of view about their audience, value, and message.",
      },
      {
        type: "paragraph",
        content:
          "When that foundation is missing, even polished creative work can feel inconsistent. When it is present, the brand becomes easier to remember and easier to trust.",
      },
      {
        type: "image-row",
        images: [
          { src: detailsOne, alt: "Brand planning notes" },
          { src: detailsTwo, alt: "Creative direction references" },
        ],
      },
      {
        type: "heading",
        content: "Relationship and communication",
      },
      {
        type: "paragraph",
        content:
          "Brands grow through repetition and relationship. That means the language, visuals, and customer experience all need to reinforce the same message across touchpoints instead of competing with each other.",
      },
      {
        type: "quote",
        content:
          "Strong creative work becomes more valuable when it is supported by clear positioning and consistent delivery.",
        attribution: "Prime Creative, Creative Direction",
      },
      {
        type: "paragraph",
        content:
          "Execution matters just as much as direction. Strategy should make delivery faster by helping teams decide what belongs in the work, what can be simplified, and what should stay consistent from start to finish.",
      },
      {
        type: "image",
        image: { src: detailsThree, alt: "Brand rollout presentation" },
      },
      {
        type: "heading",
        content: "Consistency builds recall",
      },
      {
        type: "paragraph",
        content:
          "A recognizable brand is rarely the result of one dramatic asset. It usually comes from repeated decisions that align voice, visuals, offers, and user experience over time.",
      },
      {
        type: "paragraph",
        content:
          "That is why the strongest identities are not just attractive. They are usable, repeatable, and clear enough for teams to apply them everywhere the business shows up.",
      },
    ],
  },
  {
    id: 2,
    slug: "how-production-systems-reduce-campaign-chaos",
    title: "How Production Systems Reduce Campaign Chaos",
    category: "Production",
    publishedAt: "2024-08-14",
    excerpt:
      "Campaign production moves faster when pre-production, asset planning, and post workflows are built as one system.",
    author: primeCreativeAuthor,
    readTime: "6 min",
    coverImage: coverTwo,
    tags: ["Production", "Campaigns", "Operations"],
    relatedSlugs: [
      "what-event-coverage-should-actually-deliver",
      "how-consistent-messaging-speeds-up-marketing",
      "turning-case-studies-into-sales-assets",
    ],
    content: [
      {
        type: "paragraph",
        content:
          "Production problems are rarely caused by cameras or editors alone. They usually start earlier, when teams have not agreed on deliverables, priorities, or how one shoot should serve multiple channels.",
      },
      {
        type: "heading",
        content: "Plan outputs before the shoot",
      },
      {
        type: "paragraph",
        content:
          "A production system should begin with outcomes: hero films, cutdowns, stills, launch assets, event recap edits, and paid-media variations. That makes it easier to capture the right material once.",
      },
      {
        type: "paragraph",
        content:
          "Without that structure, teams end up revisiting the same footage repeatedly and trying to solve distribution problems during post-production.",
      },
      {
        type: "image-row",
        images: [
          { src: detailsTwo, alt: "Campaign storyboard wall" },
          { src: coverFive, alt: "Production setup on location" },
        ],
      },
      {
        type: "heading",
        content: "Build one workflow for many formats",
      },
      {
        type: "paragraph",
        content:
          "The strongest production teams think about long-form, short-form, stills, and channel variations as one delivery system. That is what creates consistency without slowing the team down.",
      },
      {
        type: "quote",
        content:
          "A useful production system does not just create better footage. It removes avoidable decisions later in the campaign.",
        attribution: "Prime Creative, Production Team",
      },
      {
        type: "paragraph",
        content:
          "When production is organized this way, creative quality improves because the team can focus on execution instead of recovering from preventable gaps.",
      },
    ],
  },
  {
    id: 3,
    slug: "why-clear-offers-convert-better-online",
    title: "Why Clear Offers Convert Better Online",
    category: "Digital Platforms",
    publishedAt: "2024-07-04",
    excerpt:
      "Many websites underperform because the offer is vague, not because the interface lacks polish.",
    author: primeCreativeAuthor,
    readTime: "5 min",
    coverImage: coverThree,
    tags: ["Websites", "Conversion", "Messaging"],
    relatedSlugs: [
      "when-to-rebuild-a-website",
      "building-a-brand-people-remember",
      "how-consistent-messaging-speeds-up-marketing",
    ],
    content: [
      {
        type: "paragraph",
        content:
          "A website can look expensive and still fail if visitors cannot understand the offer quickly. The real question is whether people know what the business does, who it is for, and what to do next.",
      },
      {
        type: "heading",
        content: "Clarity beats complexity",
      },
      {
        type: "paragraph",
        content:
          "Most conversion issues start with unclear messaging. If a homepage tries to say everything at once, people leave before they understand the value of staying.",
      },
      {
        type: "paragraph",
        content:
          "That means the job of the interface is not just visual polish. It is to organize trust, hierarchy, and momentum.",
      },
      {
        type: "image",
        image: { src: detailsOne, alt: "Website strategy worksheet" },
      },
      {
        type: "heading",
        content: "Design the next step clearly",
      },
      {
        type: "paragraph",
        content:
          "When page sections are built around clear decisions, calls to action become easier to place and easier to understand. Visitors should not have to guess what a click is for.",
      },
      {
        type: "paragraph",
        content:
          "The result is a customer journey that feels more direct, more credible, and easier to manage internally.",
      },
    ],
  },
  {
    id: 4,
    slug: "what-event-coverage-should-actually-deliver",
    title: "What Event Coverage Should Actually Deliver",
    category: "Event Management",
    publishedAt: "2024-05-20",
    excerpt:
      "Good event coverage should create assets that remain useful after the stage lights are gone.",
    author: primeCreativeAuthor,
    readTime: "6 min",
    coverImage: coverFour,
    tags: ["Events", "Production", "Content"],
    relatedSlugs: [
      "how-production-systems-reduce-campaign-chaos",
      "turning-case-studies-into-sales-assets",
      "building-a-brand-people-remember",
    ],
    content: [
      {
        type: "paragraph",
        content:
          "Event coverage is often treated as documentation, but the real value comes from planning what the footage and photography should do afterward.",
      },
      {
        type: "heading",
        content: "Capture for post-event use",
      },
      {
        type: "paragraph",
        content:
          "The best event teams define the future use of the material before the event starts: recap edits, sponsor reports, media releases, social cutdowns, website updates, and next-launch promotion.",
      },
      {
        type: "image-row",
        images: [
          { src: coverFive, alt: "Event stage and audience" },
          { src: coverSix, alt: "Production team at event" },
        ],
      },
      {
        type: "paragraph",
        content:
          "That planning changes how the team shoots, what interviews matter, and what supporting coverage is worth prioritizing.",
      },
      {
        type: "quote",
        content:
          "Coverage becomes more valuable when it is designed to support the next campaign, not only to remember the last event.",
        attribution: "Prime Creative, Event Production",
      },
      {
        type: "heading",
        content: "Brand the live experience clearly",
      },
      {
        type: "paragraph",
        content:
          "On-site branding, stage composition, and camera framing should all reinforce the same identity. That is what makes the resulting assets feel intentional instead of generic.",
      },
    ],
  },
  {
    id: 5,
    slug: "when-to-rebuild-a-website",
    title: "When to Rebuild a Website Instead of Patching It",
    category: "Digital Platforms",
    publishedAt: "2024-04-02",
    excerpt:
      "Sometimes the right move is not another page update. It is a cleaner structure that fixes the content model underneath.",
    author: primeCreativeAuthor,
    readTime: "5 min",
    coverImage: coverFive,
    tags: ["Websites", "Content", "Operations"],
    relatedSlugs: [
      "why-clear-offers-convert-better-online",
      "building-a-brand-people-remember",
      "turning-case-studies-into-sales-assets",
    ],
    content: [
      {
        type: "paragraph",
        content:
          "Websites usually become difficult to manage long before they look obviously broken. The warning signs are repeated copy, scattered updates, and pages that require code edits for basic changes.",
      },
      {
        type: "heading",
        content: "Look at the content system, not only the UI",
      },
      {
        type: "paragraph",
        content:
          "If the structure behind the site is inconsistent, redesigning the front end alone will not solve the maintenance problem. Teams need a content model that matches how they actually publish.",
      },
      {
        type: "paragraph",
        content:
          "That is why the right rebuild often starts with content architecture: what changes often, what should be reusable, and what needs one source of truth.",
      },
      {
        type: "image",
        image: { src: coverSix, alt: "Site architecture planning board" },
      },
      {
        type: "paragraph",
        content:
          "Once that model is in place, design and development become easier to maintain and much easier to scale later.",
      },
    ],
  },
  {
    id: 6,
    slug: "how-consistent-messaging-speeds-up-marketing",
    title: "How Consistent Messaging Speeds Up Marketing",
    category: "Marketing",
    publishedAt: "2024-02-18",
    excerpt:
      "Teams move faster when campaigns start from a stable message instead of inventing the story from scratch every time.",
    author: primeCreativeAuthor,
    readTime: "4 min",
    coverImage: coverSix,
    tags: ["Marketing", "Messaging", "Strategy"],
    relatedSlugs: [
      "building-a-brand-people-remember",
      "why-clear-offers-convert-better-online",
      "how-production-systems-reduce-campaign-chaos",
    ],
    content: [
      {
        type: "paragraph",
        content:
          "A lot of marketing delays happen because teams are rewriting the same message in every campaign, ad, landing page, and email instead of working from one clear narrative.",
      },
      {
        type: "heading",
        content: "Consistency reduces revision loops",
      },
      {
        type: "paragraph",
        content:
          "When positioning and messaging are stable, campaigns become easier to brief, design, approve, and distribute. Creative work can move faster because the foundation is already agreed.",
      },
      {
        type: "paragraph",
        content:
          "That consistency does not make marketing boring. It gives creative teams a stronger base to vary format and execution without confusing the brand.",
      },
      {
        type: "quote",
        content:
          "Speed in marketing often comes from fewer arguments about the message, not from rushing the production.",
        attribution: "Prime Creative, Marketing Strategy",
      },
      {
        type: "paragraph",
        content:
          "The more repeatable the message becomes, the more energy the team can spend on timing, audience fit, and performance.",
      },
    ],
  },
  {
    id: 7,
    slug: "turning-case-studies-into-sales-assets",
    title: "Turning Case Studies Into Sales Assets",
    category: "Communication",
    publishedAt: "2023-12-11",
    excerpt:
      "Case studies should do more than archive finished work. They should help future clients understand outcomes, process, and credibility.",
    author: primeCreativeAuthor,
    readTime: "5 min",
    coverImage: coverSeven,
    tags: ["Case Studies", "Sales", "Content"],
    relatedSlugs: [
      "building-a-brand-people-remember",
      "what-event-coverage-should-actually-deliver",
      "when-to-rebuild-a-website",
    ],
    content: [
      {
        type: "paragraph",
        content:
          "Many teams treat case studies as portfolio decoration, but they are far more useful when they help a client understand the challenge, the approach, and the business value of the work.",
      },
      {
        type: "heading",
        content: "Structure the proof clearly",
      },
      {
        type: "paragraph",
        content:
          "A useful case study shows what changed, why it mattered, and how the solution was shaped. That gives prospects a reason to believe the team can solve similar problems for them.",
      },
      {
        type: "image-row",
        images: [
          { src: coverOne, alt: "Campaign delivery highlights" },
          { src: coverThree, alt: "Website and content rollout" },
        ],
      },
      {
        type: "paragraph",
        content:
          "This is especially important for service businesses where trust needs to be built before a buyer ever reaches out.",
      },
      {
        type: "heading",
        content: "Write for the next client",
      },
      {
        type: "paragraph",
        content:
          "The strongest case studies are not written only for internal celebration. They are written to help the next buyer recognize their own problem in the story and see why the approach worked.",
      },
      {
        type: "paragraph",
        content:
          "That turns a portfolio from a gallery into a sales tool.",
      },
    ],
  },
] satisfies BlogPost[];

function sortByPublishedAt(posts: BlogPost[]) {
  return [...posts].sort(
    (left, right) =>
      new Date(right.publishedAt).getTime() - new Date(left.publishedAt).getTime()
  );
}

export const orderedBlogPosts = sortByPublishedAt(blogPosts);
export const homeBlogPosts = orderedBlogPosts.slice(0, 4);
export const blogModernPosts = orderedBlogPosts;
export const featuredModernBlogPost = blogModernPosts[0];
export const blogClassicHeroPosts = orderedBlogPosts.slice(0, 2);
export const blogClassicPosts = orderedBlogPosts.slice(2);
export const blogListPosts = orderedBlogPosts;
export const recentBlogPosts = orderedBlogPosts.slice(0, 3);
export const blogCategories = Array.from(
  new Set(orderedBlogPosts.map((post) => post.category))
);
export const blogTags = Array.from(
  new Set(orderedBlogPosts.flatMap((post) => post.tags))
).slice(0, 6);

export function getBlogPostBySlug(slug: string) {
  return orderedBlogPosts.find((post) => post.slug === slug);
}

export function getBlogPostById(id: number) {
  return orderedBlogPosts.find((post) => post.id === id);
}

export function getRelatedBlogPosts(post: BlogPost, limit = 3) {
  const explicitlyRelated = post.relatedSlugs
    .map((slug) => getBlogPostBySlug(slug))
    .filter((candidate): candidate is BlogPost => Boolean(candidate))
    .slice(0, limit);

  if (explicitlyRelated.length >= limit) {
    return explicitlyRelated;
  }

  const fallback = orderedBlogPosts.filter(
    (candidate) =>
      candidate.slug !== post.slug &&
      candidate.category === post.category &&
      !explicitlyRelated.some((related) => related.slug === candidate.slug)
  );

  return [...explicitlyRelated, ...fallback].slice(0, limit);
}

export function getAdjacentBlogPosts(slug: string) {
  const currentIndex = orderedBlogPosts.findIndex((post) => post.slug === slug);

  return {
    previous:
      currentIndex > 0 ? orderedBlogPosts[currentIndex - 1] : null,
    next:
      currentIndex >= 0 && currentIndex < orderedBlogPosts.length - 1
        ? orderedBlogPosts[currentIndex + 1]
        : null,
  };
}

function asDate(date: string) {
  return new Date(`${date}T00:00:00`);
}

export function formatBlogDate(date: string) {
  return new Intl.DateTimeFormat("en-US", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(asDate(date));
}

export function formatBlogDateLong(date: string) {
  return new Intl.DateTimeFormat("en-US", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(asDate(date));
}

export function formatBlogDateParts(date: string) {
  return {
    day: new Intl.DateTimeFormat("en-US", {
      day: "2-digit",
    }).format(asDate(date)),
    month: new Intl.DateTimeFormat("en-US", {
      month: "short",
    }).format(asDate(date)),
  };
}
