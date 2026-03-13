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
import MissionOne from "@/components/mission/mission-one";
import ServiceOne from "@/components/service/service-one";
import ProjectOne from "@/components/project/project-one";
import BrandTwo from "@/components/brand/brand-two";
import TeamOne from "@/components/team/team-one";
import FooterFive from "@/layouts/footers/footer-five";
import { charAnimation, fadeAnimation, revelAnimationOne } from "@/utils/title-animation";
import { footerTwoAnimation } from "@/utils/footer-anim";
import { hoverBtn } from "@/utils/hover-btn";
import { teamMarqueAnim } from "@/utils/scroll-marque";
import { textInvert } from "@/utils/text-invert";

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother, SplitText);

const HomeMain = () => {
  useScrollSmooth();

  useGSAP(() => {
    const timer = setTimeout(() => {
      charAnimation();
      fadeAnimation();
      textInvert();
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
            <MissionOne />
            <ServiceOne />
            <ProjectOne />
            <BrandTwo />
            <TeamOne spacing="pt-120" />
          </main>

          <FooterFive />
        </div>
      </div>
    </Wrapper>
  );
};

export default HomeMain;
