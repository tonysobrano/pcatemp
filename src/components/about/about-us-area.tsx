import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Hand } from "../svg";

// images
import shape from "@/assets/img/inner-about/about/shape-1.png";
import ab_1 from "@/assets/img/inner-about/about/about-1.jpg";
import ab_2 from "@/assets/img/inner-about/about/about-3.jpg";
import ab_3 from "@/assets/img/inner-about/about/about-2.jpg";

export default function AboutUsArea() {
  return (
    <div className="ab-about-area ab-about-mt pb-90 z-index-5">
      <div className="container container-1480">
        <div className="ab-about-thumb-wrap mb-180">
          <div className="row align-items-end">
            <div className="col-xl-6 col-lg-6 col-md-6">
              <div className="ab-about-left-thumb">
                <Image
                  data-speed=".7"
                  src={ab_1}
                  alt="about-img"
                  style={{ height: "auto" }}
                />
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6">
              <div className="ab-about-right-thumb p-relative">
                <Image
                  data-speed="1.1"
                  className="inner-img z-index-5"
                  src={ab_2}
                  alt="about-img"
                  style={{ height: "auto" }}
                />
                <Image
                  data-speed="0.9"
                  src={ab_3}
                  alt="about-img"
                  style={{ height: "auto" }}
                />
              </div>
            </div>
          </div>
        </div>
        <div id="about-info" className="row">
          <div className="col-xxl-10">
            <div id="our-story" className="ab-about-content p-relative">
              <span>
                <Hand />
                Hi!
              </span>
              <p className="tp-dropcap tp_fade_bottom">
                We are a team of five creatives, strategists, and builders who are deeply rooted in our city and culture. We understand the market because we live in it. We know what resonates here because this is home.
              </p>
              <div className="pt-40 tp_fade_bottom">
                <h4 className="ab-brand-title mb-30">Prime Creative Agency</h4>
                <p className="mb-20">
                  Prime Creative Agency was established to meet the evolving needs of Ethiopia&apos;s business landscape where brands require both strong creative expression and reliable digital execution.
                </p>
                <p className="mb-20">
                  Our multidisciplinary team brings experience across creative production, development, marketing, and communications, enabling us to deliver integrated solutions that align strategy, technology, and storytelling.
                </p>
                <p className="mb-0">
                  As we grow, our focus remains on building meaningful partnerships and delivering work that is relevant locally and competitive globally.
                </p>
              </div>
              <p className="tp_fade_bottom mt-40 mb-0">
                Born in Ethiopia. Inspired by Africa. Connected to the world.
              </p>
            </div>
          </div>
        </div>
        <div className="row pt-70">
          <div className="col-xl-4 col-lg-4 col-md-6 mb-40">
            <div className="ab-about-category-list tp_fade_bottom">
              <h5 className="mb-20">Our Vision</h5>
              <p className="mb-0">
                To be Ethiopia&apos;s most innovative and trusted creative and communications agency, recognized globally for quality, integrity, and impact.
              </p>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6 mb-40">
            <div className="ab-about-category-list tp_fade_bottom">
              <h5 className="mb-20">Our Mission</h5>
              <p className="mb-0">
                To empower brands and organizations through creative storytelling, strategic communications, and technology-driven solutions that create lasting value.
              </p>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-12 mb-40">
            <div className="ab-about-category-list tp_fade_bottom">
              <h5 className="mb-20">Our Values</h5>
              <ul>
                <li>Trust</li>
                <li>Accountability</li>
                <li>Innovation</li>
                <li>Passion</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-9">
            <div className="row">
              <div className="col-xl-5 col-lg-5 col-md-4 mb-40">
                <div className="ab-about-category-title-box p-relative">
                  <h4 className="ab-about-category-title">
                    Stuff <br />
                    <span>we do</span>
                  </h4>
                  <Image
                    className="ab-about-shape-1 d-none d-md-block"
                    src={shape}
                    alt="shape"
                  />
                </div>
              </div>
              <div className="col-xl-7 col-lg-7 col-md-8">
                <div className="row">
                  <div className="col-xl-6 col-lg-6 col-md-6 mb-40">
                    <div className="ab-about-category-list category-space-1 tp_fade_bottom">
                      <ul>
                        <li>Branding &amp; Identity</li>
                        <li>Graphic Design</li>
                        <li>Video Production</li>
                        <li>Web Design &amp; Development</li>
                        <li>Business Systems</li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 mb-40">
                    <div className="ab-about-category-list category-space-2 tp_fade_bottom">
                      <ul>
                        <li>Photography</li>
                        <li>Social Media Management</li>
                        <li>Digital Marketing</li>
                        <li>Event Production</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <Link className="tp-btn-white-sm border-style" href="/service">
                      View All Services
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
