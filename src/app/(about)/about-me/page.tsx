import React from "react";
import { Metadata } from "next";
import AboutMeMain from "@/page-views/about/about-me";

export const metadata: Metadata = {
  title: "Prime Creative - About us page",
};

const AboutMePage = () => {
  return (
    <AboutMeMain/>
  );
};

export default AboutMePage;
