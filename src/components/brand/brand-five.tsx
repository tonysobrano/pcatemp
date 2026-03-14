import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import { brandData } from "./brand-two";

const brandImages = [...brandData, ...brandData];

export default function BrandFive() {
  return (
    <div
      className="ab-brand-area pt-120 pb-120 black-bg-2"
      style={{
        backgroundImage:
          "url(/assets/img/inner-about/brand/brand-bg-shape.png)",
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="ab-brand-title-box mb-100">
              <h4 className="ab-brand-title">Our clients</h4>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-12">
            <div className="ab-brand-wrapper mb-80">
              <div className="swiper-container ab-brand-slide-active">
                <Marquee speed={100} loop={0} className="ab-brand-slide-wrap">
                  {brandImages.map((brand, i) => (
                    <div key={i} className="ab-brand-item">
                      <Image
                        src={brand.brand}
                        alt={`${brand.texts[0]} logo`}
                        width={brand.width}
                        height={brand.height}
                        style={{
                          width: brand.width,
                          height: brand.height,
                          objectFit: "contain",
                          filter: "brightness(0) invert(1)",
                        }}
                      />
                    </div>
                  ))}
                </Marquee>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-7 col-lg-9">
            <div className="ab-brand-content tp_title_anim">
              <p>
                We belive in creating partnerships based on honesty and true
                connection. That is why some of the biggest companies stayed with
                us for years.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
