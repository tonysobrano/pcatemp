import React from "react";
import { Metadata } from "next";
import PortfolioDetailsComparisonMain from "@/page-views/portfolio/details/portfolio-details-comparison-main";


export const metadata: Metadata = {
  title: "Prime Creative - Portfolio Details Comparison page",
};

const PortfolioDetailsComparisonPage = () => {
  return (
    <PortfolioDetailsComparisonMain/>
  );
};

export default PortfolioDetailsComparisonPage;
