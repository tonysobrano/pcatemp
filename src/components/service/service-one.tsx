import React from "react";
import Image from "next/image";
import Link from "next/link";

// service images
import s_1 from "@/assets/img/home-01/service/service-icon-1.png";
import s_2 from "@/assets/img/home-01/service/service-icon-2.png";
import s_3 from "@/assets/img/home-01/service/service-icon-3.png";
import s_4 from "@/assets/img/home-01/service/service-icon-4.png";

// service data
const service_data = [
  {
    id: 1,
    title: "Video Production",
    desc: "We produce high-quality video content - commercials, event coverage, corporate films, and social media reels that tell your story and capture attention.",
    icon: s_1,
  },
  {
    id: 2,
    title: "Branding & Identity",
    desc: "Your brand is more than a logo - it is how the world sees you. We craft complete brand identities that are strategic, memorable, and built to last.",
    icon: s_2,
  },
  {
    id: 3,
    title: "Web Design & Development",
    desc: "Modern, responsive websites built to convert visitors into customers - designed with your brand identity and business goals at the center.",
    icon: s_3,
  },
  {
    id: 4,
    title: "Business Systems",
    desc: "We build custom digital tools and systems that help businesses operate more efficiently - from point-of-sale solutions to internal management platforms.",
    icon: s_4,
  },
];

const ServiceOne = () => {
  return (
    <div className="tp-service-area pt-180 pb-80 tp-btn-trigger">
      <div className="container container-1630">
        <div className="row">
          <div className="col-xl-6 col-lg-6">
            <div className="tp-service-title-box p-relative">
              <span className="tp-section-subtitle subtitle-position tp-char-animation">
                What we do
              </span>
              <h4 className="tp-section-title tp-char-animation">
                {"We're"} really<br />
                <span>good at</span>
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
              {service_data.map((s, i) => (
                <div
                  key={s.id}
                  className="tp-service-item d-flex align-items-start mb-75 tp_fade_bottom"
                >
                  <div className="tp-service-icon">
                    <Image src={s.icon} alt="icon" style={{ height: "auto" }} />
                  </div>
                  <div className="tp-service-content">
                    <h4 className="tp-service-title-sm order-0">
                      <Link href="/service-details">{s.title}</Link>
                    </h4>
                    <p className="order-1">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceOne;
