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
        <div className="ab-sticky-header-align">
          <div id="about-info" className="row">
            <div className="col-xxl-10">
              <div id="our-story" className="ab-about-content p-relative">
                <span>
                  <Hand />
                  Hi!
                </span>
                <p className="tp-dropcap tp_fade_bottom">
                  We are a team of creatives, strategists, and builders who are deeply rooted in our city and culture. We understand the market because we live in it. We know what resonates here because this is home.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-9">
              <div className="row">
                <div className="col-xl-5 col-lg-5 col-md-4 mb-40">
                  <div className="ab-about-category-title-box ab-about-category-services-title-box p-relative">
                    <h4 className="ab-about-category-title">
                      Stuff <br />
                      <span>we do</span>
                    </h4>
                    <Image
                      className="ab-about-shape-1 ab-about-category-services-shape d-none d-md-block"
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
    </div>
  );
}
