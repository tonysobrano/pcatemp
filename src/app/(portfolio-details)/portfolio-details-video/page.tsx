import React from "react";
import { Metadata } from "next";
import PortfolioDetailsVideoMain from "@/page-views/portfolio/details/portfolio-details-video-main";


export const metadata: Metadata = {
  title: "Prime Creative - Portfolio Details video page",
};

const PortfolioDetailsVideoPage = () => {
  return (
    <PortfolioDetailsVideoMain/>
  );
};

export default PortfolioDetailsVideoPage;
