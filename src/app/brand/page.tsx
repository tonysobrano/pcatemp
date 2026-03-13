import React from "react";
import { Metadata } from "next";
import BrandMain from "@/page-views/brand/brand-main";

export const metadata: Metadata = {
  title: "Prime Creative - Brand page",
};

const BrandPage = () => {
  return (
    <BrandMain/>
  );
};

export default BrandPage;
