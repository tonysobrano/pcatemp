import React from "react";
import { Metadata } from "next";
import ServiceMain from "@/page-views/service/service";

export const metadata: Metadata = {
  title: "Services | Prime Creative",
  description:
    "Explore Prime Creative services across production, digital platforms, branding, marketing, and event management.",
};

const ServicePage = () => {
  return (
    <ServiceMain/>
  );
};

export default ServicePage;
