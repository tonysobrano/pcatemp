import React from "react";
import Image from "next/image";

// brand images
import b_1 from "@/assets/brand/client-logo-1.png";
import b_2 from "@/assets/brand/client-logo-2.png";
import b_3 from "@/assets/brand/client-logo-3.png";
import b_4 from "@/assets/brand/client-logo-4.png";
import b_5 from "@/assets/brand/client-logo-5.png";
import b_6 from "@/assets/brand/client-logo-7.png";
import b_7 from "@/assets/brand/client-logo-8.png";
import b_8 from "@/assets/brand/client-logo-9.png";
import Link from "next/link";

// brand images
const brand_images = [
  { src: b_1, width: 60, height: 50 },
  { src: b_2, width: 66, height: 41 },
  { src: b_3, width: 84, height: 30 },
  { src: b_4, width: 82, height: 34 },
  { src: b_5, width: 74, height: 29 },
  { src: b_6, width: 60, height: 31 },
  { src: b_7, width: 60, height: 31 },
  { src: b_8, width: 76, height: 36 },
];

export default function ShopBrands() {
  return (
    <div className="tp-shop-widget mb-50">
      <h3 className="tp-shop-widget-title">Popular Brands</h3>
      <div className="tp-shop-widget-content ">
        <div className="tp-shop-widget-brand-list d-flex align-items-center justify-content-between flex-wrap">
          {brand_images.map((item, i) => (
            <div className="tp-shop-widget-brand-item" key={i}>
              <Link href="#">
                <Image
                  src={item.src}
                  alt="brand-img"
                  width={item.width}
                  height={item.height}
                  style={{ width: item.width, height: item.height, objectFit: "cover" }}
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
