import React from "react";
import Image from "next/image";
// images
import location_1 from "@/assets/img/inner-contact/contact/info-1.jpg";
import location_2 from "@/assets/img/inner-contact/contact/info-2.jpg";
import location_3 from "@/assets/img/inner-contact/contact/info-3.jpg";
import Link from "next/link";

// data
const location_data = [
  {
    id: 1,
    img: location_1,
    country: "Jigjiga",
    time: "East Africa Time (UTC+3)",
    location_title: "Prime Creative HQ",
    address: "Jigjiga, Somali Region <br /> Ethiopia",
    link: "https://maps.google.com/?q=Jigjiga,Ethiopia",
    linkLabel: "View location",
    email: "info@primecreative.agency",
  },
  {
    id: 2,
    img: location_2,
    country: "Remote Projects",
    time: "Available across East Africa and beyond",
    location_title: "Digital Delivery",
    address: "Remote collaboration for campaigns, <br /> systems, and content production",
    link: "/service",
    linkLabel: "See services",
    email: "info@primecreative.agency",
  },
  {
    id: 3,
    img: location_3,
    country: "Partnerships",
    time: "Campaigns, events, and collaborations",
    location_title: "Business Inquiries",
    address: "For partnerships, media, and long-term <br /> collaborations, reach out directly",
    link: "mailto:info@primecreative.agency",
    linkLabel: "Contact by email",
    email: "info@primecreative.agency",
  },
];

const ContactLocation = () => {
  return (
    <div className="cn-contact-info-area">
      <div className="container container-1840">
        <div className="cn-contact-info-bg black-bg">
          {location_data.map((item) => (
            <div key={item.id} className="cn-contact-info-item">
              <div className="row">
                <div className="col-xl-7">
                  <div className="cn-contact-left d-flex flex-wrap align-items-center">
                    <div className="cn-contact-info-thumb">
                      <Image src={item.img} alt="image" style={{ height: "auto" }} />
                    </div>
                    <div className="cn-contact-left-info">
                      <h4 className="cn-contact-left-title">{item.country}</h4>
                      <span>
                        <i className="fa-regular fa-clock"></i>
                        {item.time}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-xl-5">
                  <div className="cn-contact-right-wrap d-flex align-items-start justify-content-between">
                    <div className="cn-contact-right">
                      <div className="cn-contact-location">
                        <span className="cn-contact-location-title">
                          {item.location_title}
                        </span>
                        <Link
                          href={item.link}
                          target="_blank"
                          dangerouslySetInnerHTML={{ __html: item.address }}
                        ></Link>
                      </div>
                      <div className="cn-contact-map">
                        <Link href={item.link} target="_blank">{item.linkLabel}</Link>
                      </div>
                    </div>
                    <div className="cn-contact-right-info text-start text-md-end">
                      <Link href={`mailto:${item.email}`}>{item.email}</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactLocation;
