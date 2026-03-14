import React from "react";
import Image from "next/image";
import Link from "next/link";
import { serviceItems } from "@/data/service-data";

const ServiceOne = () => {
  return (
    <div className="tp-service-area pt-180 pb-80 tp-btn-trigger">
      <div className="container container-1630">
        <div className="ab-sticky-header-align">
          <div className="row">
            <div className="col-xl-6 col-lg-6">
              <div className="tp-service-title-box p-relative">
                <span className="tp-section-subtitle subtitle-position tp-char-animation"></span>
                <h4 className="tp-section-title tp-char-animation">
                  <span>Services <br /> for  Modern  Brands</span>
                </h4>
              </div>

              <div className="tp-service-left-btn tp-btn-bounce">
                <Link className="tp-btn-border" href="/service">
                  <span className="tp-btn-border-wrap">
                    <span className="text-1">See All Services</span>
                    <span className="text-2">See All Services</span>
                  </span>
                </Link>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="tp-service-right-wrap">
                {serviceItems.map((service) => (
                  <div
                    key={service.id}
                    className="tp-service-item d-flex align-items-start mb-75 tp_fade_bottom"
                  >
                    <div className="tp-service-icon">
                      <Image src={service.icon} alt="icon" style={{ height: "auto" }} />
                    </div>
                    <div className="tp-service-content">
                      <h4 className="tp-service-title-sm order-0">
                        <Link href={`/service/${service.slug}`}>{service.title}</Link>
                      </h4>
                      <p className="order-1">{service.homeDescription}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceOne;
