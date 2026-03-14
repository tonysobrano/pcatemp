'use client';
import React from "react";
import { ArrowBg, RightArrowTwo } from "../svg";
import Link from "next/link";
import { homePageContent } from "@/content/home";

export default function HeroBannerFour() {
  const { hero } = homePageContent;

  return (
    <div className="tp-hero-3-area tp-hero-3-ptb fix">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="tp-hero-3-content-box text-center p-relative">
              <div className="tp-hero-3-circle-shape">
                <span></span>
              </div>
              <h4 className="tp-hero-3-title tp_reveal_anim">
                {hero.titleLines.map((line) => (
                  <span key={line} className="tp-reveal-line">
                    {line}
                  </span>
                ))}
              </h4>
              <span className="tp-hero-3-category tp_reveal_anim">
                {hero.categoryLine}
              </span>
              <Link className="tp-btn-black-2" href={hero.ctaHref}>
                {hero.ctaLabel}{" "}
                <span className="p-relative">
                  <RightArrowTwo />
                  <ArrowBg />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
