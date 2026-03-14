import React from "react";
import { Metadata } from "next";
import ServiceMain from "@/page-views/service/service";
import { siteSettings } from "@/content/site-settings";

export const metadata: Metadata = {
  title: siteSettings.metadata.services.title,
  description: siteSettings.metadata.services.description,
};

const ServicePage = () => {
  return (
    <ServiceMain/>
  );
};

export default ServicePage;
