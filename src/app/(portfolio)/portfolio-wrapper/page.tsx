import React from "react";
import { Metadata } from "next";
import PortfolioWrapperMain from "@/page-views/portfolio/portfolio-wrapper-main";

export const metadata: Metadata = {
  title: "Prime Creative - Portfolio Wrapper page",
};

const PortfolioWrapperPage = () => {
  return (
    <PortfolioWrapperMain/>
  );
};

export default PortfolioWrapperPage;
