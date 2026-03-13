import React from "react";
import { Metadata } from "next";
import ParallaxSliderMain from "@/pages/portfolio/parallax-slider-main";

export const metadata: Metadata = {
  title: "Prime Creative - Parallax Slider page",
};

const ParallaxSliderPage = () => {
  return <ParallaxSliderMain />;
};

export default ParallaxSliderPage;
