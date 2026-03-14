import React from "react";
import { Metadata } from "next";
import HomeMain from "@/page-views/homes/home-1";
import { siteSettings } from "@/content/site-settings";

export const metadata: Metadata = {
  title: siteSettings.metadata.home.title,
  description: siteSettings.metadata.home.description,
};


const Home = () => {
  return (
    <HomeMain/>
  );
};

export default Home;
