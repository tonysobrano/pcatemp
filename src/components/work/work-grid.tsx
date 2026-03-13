"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { UpArrow } from "@/components/svg";
import { useIsotop } from "@/hooks/use-isotop";
import { serviceItems } from "@/data/service-data";
import { workItems } from "@/data/work-data";

type WorkGridProps = {
  style_2?: boolean;
};

const usedServices = serviceItems.filter((service) =>
  workItems.some((item) => item.serviceSlugs.includes(service.slug))
);

export default function WorkGrid({ style_2 = false }: WorkGridProps) {
  const { initIsotop, isotopContainer } = useIsotop();

  useEffect(() => {
    initIsotop();
  }, [initIsotop]);

  return (
    <div className="tp-project-5-2-area tp-project-5-2-pt pb-130">
      <div className={`container container-${style_2 ? "1800" : "1530"}`}>
        <div className="row justify-content-center">
          <div className="col-xl-10">
            <div className="portfolio-filter masonary-menu d-flex justify-content-center flex-wrap gap-3 mb-60">
              <button data-filter="*" className="active">
                <span>SHOW ALL</span>
              </button>
              {usedServices.map((service) => (
                <button
                  key={service.slug}
                  data-filter={`.filter-${service.slug}`}
                >
                  <span>{service.title.toUpperCase()}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="row grid" ref={isotopContainer}>
          {workItems.map((item) => (
            <div
              key={item.id}
              className={`col-xl-4 col-lg-6 col-md-6 grid-item ${item.serviceSlugs
                .map((slug) => `filter-${slug}`)
                .join(" ")}`}
            >
              <div
                className="tp-project-5-2-thumb mb-30 p-relative not-hide-cursor"
                data-cursor="View<br>Case"
              >
                <Link href={`/work/${item.slug}`} className="cursor-hide">
                  <Image
                    className="anim-zoomin"
                    src={item.coverImage}
                    alt={item.title}
                    style={{ width: "100%", height: "auto" }}
                  />
                  <div className="tp-project-5-2-category tp_fade_anim">
                    <span>{item.category}</span>
                  </div>
                  <div className="tp-project-5-2-content tp_fade_anim">
                    <span className="tp-project-5-2-meta">{item.year}</span>
                    <h4 className="tp-project-5-2-title-sm">{item.title}</h4>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="row">
          <div className="col-xl-12">
            <div className="tp-projct-5-2-btn-box mt-50 d-flex justify-content-center">
              <div className="tp-hover-btn-wrapper">
                <Link
                  className="tp-btn-circle style-2 tp-hover-btn-item tp-hover-btn"
                  href="/contact"
                >
                  <span className="tp-btn-circle-text">
                    Start <br /> a Project
                  </span>
                  <span className="tp-btn-circle-icon">
                    <UpArrow />
                  </span>
                  <i className="tp-btn-circle-dot"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
