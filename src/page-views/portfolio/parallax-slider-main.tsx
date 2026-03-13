"use client";

import React from "react";
import Wrapper from "@/layouts/wrapper";
import HeaderEleven from "@/layouts/headers/header-eleven";
import FooterTwo from "@/layouts/footers/footer-two";
import PortfolioSliderHomeTwelve from "@/components/portfolio/slider/portfolio-slider-home-twelve";

const ParallaxSliderMain = () => {
  return (
    <Wrapper>
      <HeaderEleven transparent={true} />

      <main>
        <section className="parallax-scroll-track">
          <PortfolioSliderHomeTwelve />
        </section>
      </main>

      <FooterTwo topCls="" />
    </Wrapper>
  );
};

export default ParallaxSliderMain;
