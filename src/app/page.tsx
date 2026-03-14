import { Metadata } from "next";
import HomeOnePage from "./(homes)/home-1/page";
import { siteSettings } from "@/content/site-settings";

export const metadata: Metadata = {
  title: siteSettings.metadata.home.title,
  description: siteSettings.metadata.home.description,
};

export default function Home() {
  return (
    <>
      <HomeOnePage />
    </>
  );
}
