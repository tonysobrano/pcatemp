import type { Metadata } from "next";
import WorkMain from "@/page-views/work/work-main";
import { siteSettings } from "@/content/site-settings";

export const metadata: Metadata = {
  title: siteSettings.metadata.work.title,
  description: siteSettings.metadata.work.description,
};

export default function WorkPage() {
  return <WorkMain />;
}
