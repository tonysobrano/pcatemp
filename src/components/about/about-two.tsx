import React from "react";
import Link from "next/link";
import Image from "next/image";
import shape from '@/assets/img/home-04/about/about-shape-2.png'
import shape_2 from '@/assets/img/home-04/about/about-shape-1.png'

export default function AboutTwo() {
  return (
    <div className="tp-about-4-area pt-100 pb-110 p-relative">
      <div className="tp-about-4-shape-2">
        <Image
          className="tp-zoom-in-out"
          src={shape}
          alt="shape"
        />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-xl-10 col-md-10">
            <div className="tp-about-4-title-box tp_fade_bottom">
              <h4 className="tp-about-4-title">
                Meet the team building strategy, content, design, and digital
                systems for businesses that want to grow with clarity.
              </h4>
            </div>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-xl-3 col-lg-2 col-md-3">
            <div className="tp-about-4-shape-1">
              <Image src={shape_2} alt="shape-2" />
            </div>
          </div>
          <div className="col-xl-9 col-lg-10 col-md-9">
            <div className="tp-about-4-content-wrap">
              <div className="row">
                <div className="col-xl-6 col-lg-6">
                  <div className="tp-about-4-content item-1 tp_fade_bottom">
                    <p>
                      Prime Creative brings together communications, design,
                      production, and technology so brands can move from idea to
                      execution with one coordinated team.
                    </p>
                    <Link href="/about-us">Read more about us</Link>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6">
                  <div className="tp-about-4-content item-2 tp_fade_bottom">
                    <p>
                      From campaigns and events to websites and brand systems,
                      we focus on work that is practical, polished, and built to
                      support real business goals.
                    </p>
                    <Link href="/contact">Get in touch</Link>
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
