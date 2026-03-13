import React from "react";
import { Metadata } from "next";
import PortfolioDetailsShowcaseMain from "@/page-views/portfolio/details/portfolio-showcase-details-main";


export const metadata: Metadata = {
  title: "Prime Creative - Portfolio Details Showcase page",
};

const PortfolioDetailsShowcasePage = () => {
  return (
    <PortfolioDetailsShowcaseMain/>
  );
};

export default PortfolioDetailsShowcasePage;
