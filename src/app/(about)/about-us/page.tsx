import React from "react";
import { Metadata } from "next";
import AboutUsMain from "@/page-views/about/about-us";

export const metadata: Metadata = {
  title: "Prime Creative - Jigjiga's First Full-Service Creative Agency",
  description: "Learn about Prime Creative, Jigjiga's first full-service creative agency.",
};

const AboutUsPage = () => {
  return (
    <AboutUsMain/>
  );
};

export default AboutUsPage;
