import type { Metadata } from "next";
import { notFound } from "next/navigation";
import WorkDetailsMain from "@/components/work/work-details-main";
import { getWorkBySlug, workItems } from "@/data/work-data";

type WorkPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return workItems.map((work) => ({
    slug: work.slug,
  }));
}

export async function generateMetadata(
  props: WorkPageProps
): Promise<Metadata> {
  const { slug } = await props.params;
  const work = getWorkBySlug(slug);

  if (!work) {
    return {
      title: "Work Not Found | Prime Creative",
    };
  }

  return {
    title: `${work.title} | Prime Creative`,
    description: work.summary,
  };
}

export default async function WorkDetailPage(props: WorkPageProps) {
  const { slug } = await props.params;
  const work = getWorkBySlug(slug);

  if (!work) {
    notFound();
  }

  return <WorkDetailsMain work={work} />;
}
