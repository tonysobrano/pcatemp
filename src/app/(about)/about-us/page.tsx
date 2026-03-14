import React from "react";
import { Metadata } from "next";
import AboutUsMain from "@/page-views/about/about-us";
import { siteSettings } from "@/content/site-settings";

export const metadata: Metadata = {
  title: siteSettings.metadata.about.title,
  description: siteSettings.metadata.about.description,
};

const AboutUsPage = () => {
  return (
    <AboutUsMain/>
  );
};

export default AboutUsPage;
