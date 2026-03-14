import React from "react";
import { scroller } from "react-scroll";
import { ScrollDown } from "../svg";
import Link from "next/link";

export default function AboutUsHero() {
  const scrollTo = () => {
    scroller.scrollTo('about-info', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
    });
  };
  return (
    <div
      className="ab-inner-hero-area ab-inner-hero-bg p-relative"
      style={{backgroundImage: "url(/assets/img/inner-about/hero/hero-1.jpg)"}}
    >
      <div className="breadcurmb-site d-none">
        <h6>About Us</h6>
      </div>
      <div className="ab-inner-hero-scroll smooth">
        <a className="pointer" onClick={scrollTo}>
          <span>
            Scroll to explore
            <ScrollDown />
          </span>
        </a>
      </div>
      <div className="container container-1480">
        <div className="container">
          <div className="row">
            <div className="col-xl-8">
              <div
                className="ab-inner-hero-title-box ab-inner-hero-title-box-logo"
                data-lag="0.2"
                data-stagger="0.08"
              >
                <span className="ab-inner-hero-subtitle">
                  Digital <br /> creative agency
                </span>
                <h1 className="ab-inner-hero-title tp-char-animation">
                  Building your Presence
                </h1>
                <p>Jigjiga&apos;s First Full-Service Creative Agency</p>
              </div>
            </div>
          </div>
          <div className="row justify-content-end">
            <div className="col-xl-5 col-lg-8">
              <div
                className="ab-inner-hero-content"
                data-lag="0.2"
                data-stagger="0.08"
              >
                <p>
                  We don&apos;t just make things look <br /> good, We make businesses work better.
                </p>
                <Link className="tp-btn-white-sm border-style mt-30" href="#our-story">
                  Our Story
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
