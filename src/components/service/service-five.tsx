import React from "react";
import Image from "next/image";
import Link from "next/link";
import { serviceItems } from "@/data/service-data";

// service items
export function ServiceItems() {
  return (
    <div className="row">
      {serviceItems.map((item) => (
        <div key={item.id} className="col-xxl-4 col-xl-4 col-lg-6 col-md-6">
          <div className="tp-service-5-item tp_fade_bottom space-1">
            <div className="tp-service-4-icon">
              <Image style={{ width: "auto", height: "auto" }} src={item.icon} alt="icon" />
            </div>
            <div className="tp-service-4-content">
              <h4 className="tp-service-4-title-sm tp-text-black">
                <Link href={`/service/${item.slug}`}>{item.title}</Link>
              </h4>
              <p>{item.pageDescription}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

// service five area
export default function ServiceFive() {
  return (
    <div className="tp-service-5-area pt-120 pb-70">
      <div className="container container-1775">
        <div className="row">
          <div className="col-xl-12">
            <div className="tp-service-5-title-box mb-90">
              <h4 className="tp-service-5-title p-relative tp_fade_right">
                <span className="tp-service-5-subtitle tp_fade_left">
                  SERVICES
                </span>
                <span className="text-space"></span>
                Prime Creative delivers production, digital platforms, branding,
                marketing, and event execution under one team.
              </h4>
            </div>
          </div>
        </div>
        <div className="tp-service-5-wrap">
          <ServiceItems/>
        </div>
      </div>
    </div>
  );
}
