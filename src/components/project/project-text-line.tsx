"use client";
import React from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "@/plugins";
import Image from "next/image";
import shape from "@/assets/img/home-01/project/project-shape-1-1.png";

const ProjectTextLine = () => {
  const textLineRef = React.useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      if (!textLineRef.current) {
        return;
      }

      gsap.set(textLineRef.current, {
        xPercent: 20,
        willChange: "transform",
      });

      gsap.to(textLineRef.current, {
        xPercent: -80,
        ease: "none",
        scrollTrigger: {
          trigger: textLineRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });
    },
    { scope: textLineRef }
  );

  return (
    <div
      ref={textLineRef}
      className="tp-project-textline tp-project-effect mb-115"
      data-scrub="0.0001"
    >
      <span className="textline-1">
        Co
        <span>
          <Image src={shape} alt="shape" />
        </span>
        lest
      </span>
      <span className="textline-2">Project</span>
      <span className="textline-1">
        Co
        <span>
          <Image src={shape} alt="shape" />
        </span>
        lest
      </span>
      <span className="textline-2">Project</span>
      <span className="textline-1">
        Co
        <span>
          <Image src={shape} alt="shape" />
        </span>
        lest
      </span>
      <span className="textline-2">Project</span>
      <span className="textline-1">
        Co
        <span>
          <Image src={shape} alt="shape" />
        </span>
        lest
      </span>
      <span className="textline-2">Project</span>
    </div>
  );
};

export default ProjectTextLine;
