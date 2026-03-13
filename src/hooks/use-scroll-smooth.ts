"use client";
import { ScrollTrigger, ScrollSmoother } from "@/plugins";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

export default function useScrollSmooth() {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

    const smoothWrapper = document.getElementById("smooth-wrapper");
    const smoothContent = document.getElementById("smooth-content");

    if (!smoothWrapper || !smoothContent) {
      return;
    }

    gsap.config({
      nullTargetWarn: false,
    });

    // Prevent duplicate smoothers during rerenders and route transitions.
    const existingSmoother = ScrollSmoother.get();
    if (existingSmoother) {
      existingSmoother.kill();
    }

    const smoother = ScrollSmoother.create({
      wrapper: smoothWrapper,
      content: smoothContent,
      smooth: 1.2,
      effects: true,
      smoothTouch: 0.1,
      normalizeScroll: false,
      ignoreMobileResize: true,
    });

    ScrollTrigger.refresh();

    return () => {
      smoother.kill();
    };
  });
}
