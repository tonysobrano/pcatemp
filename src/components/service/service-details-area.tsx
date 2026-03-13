import React from "react";
import Image from "next/image";
import Link from "next/link";
import { serviceItems, type ServiceItem } from "@/data/service-data";

// images
import sv_2 from "@/assets/img/inner-service/sercive-details/sv-details-2.jpg";
import sv_3 from "@/assets/img/inner-service/sercive-details/sv-details-3.jpg";

type ServiceDetailsAreaProps = {
  service: ServiceItem;
};

export default function ServiceDetailsArea({ service }: ServiceDetailsAreaProps) {
  return (
    <div className="service-details__area service-details__space pt-200 pb-120">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="service-details__title-box mb-40">
              <span className="service-details__subtitle tp-char-animation">
                {service.subtitle}
              </span>
              <h4 className="sv-hero-title tp-char-animation">
                {service.title}
              </h4>
            </div>
          </div>
          <div className="row">
            <div className="offset-xl-4 col-xl-5">
              <div className="service-details__banner-text mb-80">
                {service.overview.map((paragraph, index) => (
                  <p
                    key={paragraph}
                    className={index === 0 ? "mb-30 tp_title_anim" : "tp_title_anim"}
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-12">
            <div className="service-details__tab-wrapper text-center mb-120">
              <div className="service-details__tab-thumb">
                <Image
                  data-speed="0.4"
                  src={service.image}
                  alt="service-img"
                  style={{ height: "auto" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-xl-7 col-lg-7">
            <div className="service-details__left-wrap">
              <div className="service-details__left-text pb-20">
                <p className="text-1 tp_title_anim">
                  {service.lead}
                </p>
                <p>{service.pageDescription}</p>
              </div>
              <div className="service-details__fea-list">
                <ul>
                  {service.capabilities.map((capability) => (
                    <li key={capability}>{capability}</li>
                  ))}
                </ul>
              </div>
              <div className="service-details__sm-thumb-wrap mb-60">
                <div className="row">
                  <div className="col-xl-6 col-lg-6 col-md-6 mb-20">
                    <div className="service-details__sm-thumb">
                      <Image
                        src={sv_2}
                        alt="service-img"
                        style={{ height: "auto" }}
                      />
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 mb-20">
                    <div className="service-details__sm-thumb">
                      <Image
                        src={sv_3}
                        alt="service-img"
                        style={{ height: "auto" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="service-details__left-text">
                <p>{service.closing}</p>
              </div>
            </div>
          </div>
          <div className="col-xl-5 col-lg-5">
            <div className="service-details__right-wrap fix p-relative">
              <div className="service-details__rotate-text">
                <span>Full list of services</span>
              </div>
              <div className="service-details__right-category">
                {serviceItems.map((item) => (
                  <Link
                    key={item.slug}
                    className={item.slug === service.slug ? "active" : ""}
                    href={`/service/${item.slug}`}
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
              <div className="service-details__right-text-box">
                <h4>{service.title}</h4>
                <p className="mb-20">
                  {service.contactPrompt}
                </p>
                <Link
                  className="tp-btn-white background-black"
                  href="/contact"
                >
                  Let’s Talk
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
