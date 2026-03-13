import React from "react";
import Image from "next/image";

// images
import c_img_1 from "@/assets/img/inner-contact/contact/contact-1.jpg";
import c_img_2 from "@/assets/img/inner-contact/contact/contact-2.jpg";
import c_img_3 from "@/assets/img/inner-contact/contact/contact-3.jpg";
import c_img_4 from "@/assets/img/inner-contact/contact/contact-4.jpg";
import c_img_5 from "@/assets/img/inner-contact/contact/contact-5.jpg";
import c_img_6 from "@/assets/img/inner-contact/contact/contact-6.jpg";
import Link from "next/link";

const location_data = [
  {
    id: 1,
    country: "Jigjiga Studio",
    img_1: c_img_1,
    img_2: c_img_2,
    map: "https://maps.google.com/?q=Jigjiga,Ethiopia",
    address: "Jigjiga, Somali Region, Ethiopia",
    email: "info@primecreative.agency",
  },
  {
    id: 2,
    country: "Remote Projects",
    img_1: c_img_3,
    img_2: c_img_4,
    map: "/service",
    address: "Working with clients across East Africa and beyond",
    email: "info@primecreative.agency",
    note: "We usually respond within 24 hours.",
  },
  {
    id: 3,
    country: "Join the Team",
    img_1: c_img_5,
    img_2: c_img_6,
    map: "mailto:info@primecreative.agency",
    address:
      "Freelancers, collaborators, and future team members are welcome to reach out.",
    note: "Send portfolio links instead of large attachments.",
    email: "info@primecreative.agency",
  },
];
const ContactLocationTwo = () => {
  return (
    <div className="cn-contact-2-info-area pb-90">
      <div className="container container-1530">
        <div className="row">
          {location_data.map((item) => (
            <div key={item.id} className="col-xl-4 col-lg-4 col-md-6 mb-30">
              <div className={`cn-contact-2-content ${item.id === 2 ? "mt-60" : ""} text-center`}>
                <h4 className="cn-contact-2-title">{item.country}</h4>
                <div className="cn-contact-2-thumb d-flex justify-content-center">
                  <Image
                    src={item.img_1}
                    alt="contact-img"
                    style={{ height: "auto" }}
                  />
                  <Image
                    src={item.img_2}
                    alt="contact-img"
                    style={{ height: "auto" }}
                  />
                </div>
                <div className="cn-contact-2-info-details">
                  <Link className="pb-15" href={item.map} target="_blank">
                    {item.address}
                  </Link>
                  <Link href={`mailto:${item.email}`}>{item.email}</Link>
                  {item.phone && <Link href={`tel:${item.phone}`}>{item.phone}</Link>}
                  {item.note && <span>{item.note}</span>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactLocationTwo;
