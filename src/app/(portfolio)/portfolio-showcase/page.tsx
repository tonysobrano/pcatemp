import React from "react";
import { Metadata } from "next";
import PortfolioShowcaseMain from "@/page-views/portfolio/portfolio-showcase-main";

export const metadata: Metadata = {
  title: "Prime Creative - Portfolio Showcase page",
};

const PortfolioShowcasePage = () => {
  return (
    <PortfolioShowcaseMain/>
  );
};

export default PortfolioShowcasePage;
