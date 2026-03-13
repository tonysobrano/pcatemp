import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServiceDetailsMain from "@/components/service/service-details-main";
import { getServiceBySlug, serviceItems } from "@/data/service-data";

type ServicePageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return serviceItems.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata(
  props: ServicePageProps
): Promise<Metadata> {
  const { slug } = await props.params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: "Service Not Found | Prime Creative",
    };
  }

  return {
    title: `${service.title} | Prime Creative`,
    description: service.overview[0],
  };
}

export default async function ServiceDetailPage(props: ServicePageProps) {
  const { slug } = await props.params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return <ServiceDetailsMain service={service} />;
}
