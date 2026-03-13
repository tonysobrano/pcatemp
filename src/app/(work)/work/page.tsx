import type { Metadata } from "next";
import WorkMain from "@/page-views/work/work-main";

export const metadata: Metadata = {
  title: "Work | Prime Creative",
  description:
    "Selected work across production, digital platforms, brand systems, marketing, and event management.",
};

export default function WorkPage() {
  return <WorkMain />;
}
