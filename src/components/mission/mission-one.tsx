import React from "react";
import Image from "next/image";
import Link from "next/link";
import { UpArrow } from "../svg";
// images
import m_img_1 from "@/assets/img/home-05/mission/mission-1.jpg";
import m_img_2 from "@/assets/img/home-05/mission/mission-2.jpg";

export default function MissionOne() {
  return (
    <div className="tp-mission-area pt-120 pb-120 mb-110 black-bg p-relative">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="tp-mission-title-box text-center">
              <div className="tp-mission-title-inner">
                <span className="tp-mission-subtitle tp_fade_left">
                  What we do
                </span>
                <h4 className="tp-about-5-title tp_fade_bottom">
                  We Help Businesses <br /> and Organizations Communicate Better{" "}
                  <br /> Operate Smarter <br /> and Stand Out.
                </h4>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-6 col-lg-6 col-md-6">
            <div className="tp-mission-thumb">
              <Image
                data-speed=".8"
                src={m_img_1}
                alt="thumb-img"
                style={{ height: "auto" }}
              />
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-6">
            <div className="tp-mission-content">
              <p className="tp_fade_bottom">
                Founded in 2023, Prime Creative Agency was built on a simple
                belief: businesses and organizations in Jigjiga deserve
                world-class branding, production, marketing, and digital
                systems that help them communicate clearly, operate smarter,
                and grow with structure.
              </p>
              <div className="tp-hover-btn-wrapper tp_fade_bottom">
                <Link
                  className="tp-btn-circle-2 tp-hover-btn-item tp-hover-btn"
                  href="/about-us"
                >
                  <span>
                    <UpArrow />
                    <br />
                    About us
                  </span>
                  <i className="tp-btn-circle-dot"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="tp-mission-right-thumb">
        <Image
          data-speed=".9"
          src={m_img_2}
          alt="thumb-img"
          style={{ height: "auto" }}
        />
      </div>
    </div>
  );
}
