import React from "react";
import { Metadata } from "next";
import PortfolioDetailsOneMain from "@/page-views/portfolio/details/portfolio-details-1-main";


export const metadata: Metadata = {
  title: "Prime Creative - Portfolio Details 1 page",
};

const PortfolioDetailsOnePage = () => {
  return (
    <PortfolioDetailsOneMain/>
  );
};

export default PortfolioDetailsOnePage;
