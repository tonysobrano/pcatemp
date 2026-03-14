import React from "react";
import Image from "next/image";
import { Leaf } from "../svg";
// images
import b_1 from "@/assets/brand/client-logo-1.png";
import b_2 from "@/assets/brand/client-logo-2.png";
import b_3 from "@/assets/brand/client-logo-3.png";
import b_4 from "@/assets/brand/client-logo-4.png";
import b_5 from "@/assets/brand/client-logo-5.png";
import b_6 from "@/assets/brand/client-logo-7.png";
import b_7 from "@/assets/brand/client-logo-8.png";
import b_8 from "@/assets/brand/client-logo-9.png";

// brand_data
export const brandData = [
  {
    id: 1,
    brand: b_1,
    width: 99,
    height: 44,
    texts: [
      "Prosperity Party",
      "Prosperity Party",
      "Prosperity Party",
      "Prosperity Party",
      "Prosperity Party",
      "Prosperity Party",
    ],
  },
  {
    id: 2,
    brand: b_2,
    width: 93,
    height: 34,
    texts: [
      "Bureau of Finance",
      "Bureau of Finance",
      "Bureau of Finance",
      "Bureau of Finance",
      "Bureau of Finance",
      "Bureau of Finance",
    ],
  },
  {
    id: 3,
    brand: b_3,
    width: 131,
    height: 34,
    texts: [
      "Kabridahar College",
      "Kabridahar College",
      "Kabridahar College",
      "Kabridahar College",
      "Kabridahar College",
      "Kabridahar College",
    ],
  },
  {
    id: 4,
    brand: b_4,
    width: 92,
    height: 50,
    texts: [
      "Partner",
      "Partner",
      "Partner",
      "Partner",
      "Partner",
      "Partner",
    ],
  },
  {
    id: 5,
    brand: b_5,
    width: 107,
    height: 34,
    texts: [
      "Partner",
      "Partner",
      "Partner",
      "Partner",
      "Partner",
      "Partner",
    ],
  },
  {
    id: 6,
    brand: b_6,
    width: 110,
    height: 22,
    texts: [
      "Degahbur Public Library",
      "Degahbur Public Library",
      "Degahbur Public Library",
      "Degahbur Public Library",
      "Degahbur Public Library",
      "Degahbur Public Library",
    ],
  },
  {
    id: 7,
    brand: b_7,
    width: 109,
    height: 34,
    texts: [
      "SRS Livestock Development",
      "SRS Livestock Development",
      "SRS Livestock Development",
      "SRS Livestock Development",
      "SRS Livestock Development",
      "SRS Livestock Development",
    ],
  },
  {
    id: 8,
    brand: b_8,
    width: 70,
    height: 38,
    texts: [
      "Hiraad",
      "Hiraad",
      "Hiraad",
      "Hiraad",
      "Hiraad",
      "Hiraad",
    ],
  },
];

// brand items
export function BrandItems() {
  return (
    <>
      {brandData.map((item) => (
        <div key={item.id} className="col-xl-3 col-lg-3 col-md-6">
          <div className="tp-brand-4-item p-relative">
            <Image
              src={item.brand}
              alt="brand"
              width={item.width}
              height={item.height}
              style={{
                width: item.width,
                height: item.height,
                objectFit: "contain",
              }}
            />
            <div className="tp-brand-4-line-text d-flex align-items-center">
              {item.texts.map((text, index) => (
                <span key={index}>{text}</span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

const BrandTwo = () => {
  return (
    <div
      className="tp-brand-4-area mt-20 pt-120 pb-120 grey-bg-3"
      style={{ backgroundImage: "url(/assets/img/home-04/brand/overly.png)" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-xl-8">
            <div className="tp-service-4-title-box tp_fade_bottom mb-65">
              <span className="tp-section-subtitle-3">
                <span>
                  <Leaf />
                </span>
                Our Clients
              </span>
              <h4 className="tp-section-title-40 font-style-2">
                We partner with clients across production, branding,
                campaigns, events, and digital systems.
              </h4>
            </div>
          </div>
        </div>
        <div className="row gx-0">
          <BrandItems />
        </div>
      </div>
    </div>
  );
};

export default BrandTwo;
