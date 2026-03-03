"use client";
import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";

// brand images
import b_1 from "@/assets/brand/client-logo-1.png";
import b_2 from "@/assets/brand/client-logo-2.png";
import b_3 from "@/assets/brand/client-logo-3.png";
import b_4 from "@/assets/brand/client-logo-4.png";
import b_5 from "@/assets/brand/client-logo-5.png";
import b_6 from "@/assets/brand/client-logo-7.png";
import b_7 from "@/assets/brand/client-logo-8.png";
import b_8 from "@/assets/brand/client-logo-9.png";


const brand_images = [
  { src: b_1, width: 71, height: 60 },
  { src: b_2, width: 65, height: 60 },
  { src: b_3, width: 73, height: 60 },
  { src: b_4, width: 83, height: 73 },
  { src: b_5, width: 70, height: 60 },
  { src: b_6, width: 120, height: 34 },
  { src: b_7, width: 60, height: 60 },
  { src: b_8, width: 65, height: 60 },
  { src: b_1, width: 71, height: 60 },
  { src: b_2, width: 65, height: 60 },
  { src: b_3, width: 73, height: 60 },
  { src: b_4, width: 83, height: 73 },
  { src: b_5, width: 70, height: 60 },
  { src: b_6, width: 120, height: 34 },
  { src: b_7, width: 60, height: 60 },
  { src: b_8, width: 65, height: 60 },
];

export default function BrandSlider() {
  return (
    <div className="tp-brand-slider-active fix">
      <Marquee
        speed={100}
        loop={0}
        className="brand-wrapper"
      >
        {brand_images.map((b, i) => (
          <div key={i} className="tp-brand-item" style={{ height: "auto",width: "200px" }}>
            <Image
              src={b.src}
              alt=""
              width={b.width}
              height={b.height}
              style={{ width: b.width, height: b.height, objectFit: "cover" }}
            />
          </div>
        ))}
      </Marquee>
      {/* <Swiper
        {...slider_setting}
        modules={[Autoplay, FreeMode]}
        className="brand-wrapper"
      >
        {brand_images.map((b, i) => (
          <SwiperSlide key={i}>
            <div className="tp-brand-item">
              <Image src={b} alt="" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper> */}
    </div>
  );
}
