"use client";

import React from "react";
import { gsap } from "gsap";
import { ScrollSmoother, ScrollTrigger, SplitText } from "@/plugins";
import { useGSAP } from "@gsap/react";
import useScrollSmooth from "@/hooks/use-scroll-smooth";
import Wrapper from "@/layouts/wrapper";
import HeaderOne from "@/layouts/headers/header-one";
import HeroBannerThree from "@/components/hero-banner/hero-banner-three";
import ServiceThree from "@/components/service/service-three";
import ProjectThree from "@/components/project/project-three";
import BrandTwo from "@/components/brand/brand-two";
import TestimonialOne from "@/components/testimonial/testimonial-one";
import ContactTwo from "@/components/contact/contact-two";
import FooterFive from "@/layouts/footers/footer-five";
import { bounceAnimation, charAnimation, fadeAnimation, revelAnimationTwo } from "@/utils/title-animation";
import { hoverBtn } from "@/utils/hover-btn";
import { serviceMarqueAnim } from "@/utils/scroll-marque";

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother, SplitText);

const HomeTwoMain = () => {
  useScrollSmooth();

  useGSAP(() => {
    const timer = setTimeout(() => {
      charAnimation();
      fadeAnimation();
      revelAnimationTwo();
      serviceMarqueAnim();
      hoverBtn();
      bounceAnimation();
    }, 100);
    return () => clearTimeout(timer);
  });

  return (
    <Wrapper>
      <HeaderOne />

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <div
              className="tp-overlay-bg black-bg-2"
              style={{
                backgroundImage: "url(/assets/img/home-04/hero/overly.png)",
              }}
            >
              <HeroBannerThree />
            </div>

            <ServiceThree />
            <ProjectThree />
            <BrandTwo />
            <TestimonialOne />
            <ContactTwo />
          </main>

          <FooterFive />
        </div>
      </div>
    </Wrapper>
  );
};

export default HomeTwoMain;
