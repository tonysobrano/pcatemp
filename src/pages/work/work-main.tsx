"use client";

import React, { useEffect } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import useScrollSmooth from "@/hooks/use-scroll-smooth";
import {
  ScrollSmoother,
  ScrollTrigger,
  SplitText,
  cursorAnimation,
} from "@/plugins";
import Wrapper from "@/layouts/wrapper";
import HeaderEleven from "@/layouts/headers/header-eleven";
import WorkGrid from "@/components/work/work-grid";
import BigText from "@/components/big-text";
import FooterTwo from "@/layouts/footers/footer-two";
import {
  charAnimation,
  fadeAnimation,
  titleAnimation,
  zoomAnimation,
} from "@/utils/title-animation";
import { hoverBtn } from "@/utils/hover-btn";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

export default function WorkMain() {
  useScrollSmooth();

  useEffect(() => {
    document.body.classList.add("tp-magic-cursor");
    return () => {
      document.body.classList.remove("tp-magic-cursor");
    };
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined" && document.querySelector(".tp-magic-cursor")) {
      cursorAnimation();
    }
  }, []);

  useGSAP(() => {
    const timer = setTimeout(() => {
      charAnimation();
      titleAnimation();
      hoverBtn();
      zoomAnimation();
      fadeAnimation();
    }, 100);

    return () => clearTimeout(timer);
  });

  return (
    <Wrapper>
      <div id="magic-cursor">
        <div id="ball"></div>
      </div>

      <HeaderEleven />

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <div className="tm-hero-area tm-hero-ptb">
              <div className="container">
                <div className="row">
                  <div className="col-xl-12">
                    <div className="tm-hero-content">
                      <span className="tm-hero-subtitle">Prime Creative</span>
                      <h4 className="tm-hero-title fs-220 tp-char-animation">
                        Selected Work
                      </h4>
                    </div>
                    <div className="tm-hero-text tp_title_anim">
                      <p>
                        A shared work archive for production, digital platforms,
                        brand systems, marketing campaigns, and event execution.
                        Replace these entries with your own case studies as your
                        content pack is finalized.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <WorkGrid />

            <BigText />
          </main>

          <FooterTwo topCls="" />
        </div>
      </div>
    </Wrapper>
  );
}
