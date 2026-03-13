import React from "react";
import { Metadata } from "next";
import PortfolioGridColTwoMain from "@/page-views/portfolio/portfolio-grid-col-2-main";

export const metadata: Metadata = {
  title: "Prime Creative - Portfolio Grid Col 2 page",
};

const PortfolioGridColTwoPage = () => {
  return (
    <PortfolioGridColTwoMain/>
  );
};

export default PortfolioGridColTwoPage;
