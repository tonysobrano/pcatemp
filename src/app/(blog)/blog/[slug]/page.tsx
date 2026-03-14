import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogDetailsMain from "@/components/blog/blog-details-main";
import { getBlogPostBySlug, orderedBlogPosts } from "@/content/blog";

type BlogPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return orderedBlogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata(
  props: BlogPageProps
): Promise<Metadata> {
  const { slug } = await props.params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: "Blog Post Not Found | Prime Creative",
    };
  }

  return {
    title: `${post.title} | Prime Creative`,
    description: post.excerpt,
  };
}

export default async function BlogPage(props: BlogPageProps) {
  const { slug } = await props.params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return <BlogDetailsMain post={post} />;
}
