import React from "react";
import { Metadata } from "next";
import FaqMain from "@/page-views/faq/faq-main";

export const metadata: Metadata = {
  title: "Prime Creative - Faq page",
};

const FaqPage = () => {
  return (
    <FaqMain/>
  );
};

export default FaqPage;
