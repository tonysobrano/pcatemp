"use client";

import React from "react";
import { gsap } from "gsap";
import { ScrollSmoother, ScrollTrigger, SplitText } from "@/plugins";
import { useGSAP } from "@gsap/react";
import useScrollSmooth from "@/hooks/use-scroll-smooth";
import Wrapper from "@/layouts/wrapper";
import HeaderOne from "@/layouts/headers/header-one";
import HeroBannerFour from "@/components/hero-banner/hero-banner-four";
import VideoThree from "@/components/video/video-three";
import AboutThree from "@/components/about/about-three";
import ServiceOne from "@/components/service/service-one";
import ProjectOne from "@/components/project/project-one";
import BrandTwo from "@/components/brand/brand-two";
import TeamOne from "@/components/team/team-one";
import FooterFive from "@/layouts/footers/footer-five";
import { charAnimation, fadeAnimation, revelAnimationOne } from "@/utils/title-animation";
import { footerTwoAnimation } from "@/utils/footer-anim";
import { hoverBtn } from "@/utils/hover-btn";
import { teamMarqueAnim } from "@/utils/scroll-marque";

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother, SplitText);

const HomeMain = () => {
  useScrollSmooth();

  useGSAP(() => {
    const timer = setTimeout(() => {
      charAnimation();
      fadeAnimation();
      revelAnimationOne();
      teamMarqueAnim();
      hoverBtn();
      footerTwoAnimation();

      gsap.timeline({
        scrollTrigger: {
          trigger: ".tp-project-full-img-wrap",
          start: "top 65",
          end: "bottom 0%",
          pin: ".tp-project-full-img",
          pinSpacing: false,
        },
      });
    }, 100);

    return () => clearTimeout(timer);
  });

  return (
    <Wrapper>
      <HeaderOne />

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <HeroBannerFour />
            <VideoThree />
            <AboutThree />
            <ServiceOne />
            <ProjectOne />
            <BrandTwo />
            <TeamOne />
          </main>

          <FooterFive />
        </div>
      </div>
    </Wrapper>
  );
};

export default HomeMain;
