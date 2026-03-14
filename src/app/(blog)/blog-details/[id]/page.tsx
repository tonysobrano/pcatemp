import { notFound, permanentRedirect } from "next/navigation";
import { getBlogPostById } from "@/content/blog";

type BlogLegacyPageProps = {
  params: Promise<{ id: string }>;
};

export default async function BlogLegacyPage(props: BlogLegacyPageProps) {
  const { id } = await props.params;
  const post = getBlogPostById(Number(id));

  if (!post) {
    notFound();
  }

  permanentRedirect(`/blog/${post.slug}`);
}
