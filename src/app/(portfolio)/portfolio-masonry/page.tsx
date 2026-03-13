import React from "react";
import { Metadata } from "next";
import PortfolioMasonryMain from "@/page-views/portfolio/portfolio-masonry-main";

export const metadata: Metadata = {
  title: "Prime Creative - Portfolio Masonry page",
};

const PortfolioMasonryPage = () => {
  return (
    <PortfolioMasonryMain/>
  );
};

export default PortfolioMasonryPage;
