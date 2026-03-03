import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";

// images
import b_1 from "@/assets/brand/client-logo-1.png";
import b_2 from "@/assets/brand/client-logo-2.png";
import b_3 from "@/assets/brand/client-logo-3.png";
import b_4 from "@/assets/brand/client-logo-4.png";
import b_5 from "@/assets/brand/client-logo-5.png";
import b_6 from "@/assets/brand/client-logo-7.png";

// brand images
const brand_images = [
  { src: b_1, width: 131, height: 34 },
  { src: b_2, width: 110, height: 22 },
  { src: b_3, width: 99, height: 44 },
  { src: b_4, width: 93, height: 34 },
  { src: b_5, width: 92, height: 50 },
  { src: b_6, width: 110, height: 22 },
];

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
                  {brand_images.map((b, i) => (
                    <div
                      key={i}
                      className="ab-brand-item"
                    >
                      <Image
                        src={b.src}
                        alt="brand"
                        width={b.width}
                        height={b.height}
                        style={{ width: b.width, height: b.height, objectFit: "cover" }}
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
              <span>More about us</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
