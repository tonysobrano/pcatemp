import React from "react";
import Image from "next/image";
import Link from "next/link";
import { contactPageContent } from "@/content/contact";
const ContactLocationTwo = () => {
  return (
    <div className="cn-contact-2-info-area pb-90">
      <div className="container container-1530">
        <div className="row">
          {contactPageContent.studios.map((item) => (
            <div key={item.id} className="col-xl-4 col-lg-4 col-md-6 mb-30">
              <div className={`cn-contact-2-content ${item.id === 2 ? "mt-60" : ""} text-center`}>
                <h4 className="cn-contact-2-title">{item.country}</h4>
                <div className="cn-contact-2-thumb d-flex justify-content-center">
                  <Image
                    src={item.imageOne}
                    alt="contact-img"
                    style={{ height: "auto" }}
                  />
                  <Image
                    src={item.imageTwo}
                    alt="contact-img"
                    style={{ height: "auto" }}
                  />
                </div>
                <div className="cn-contact-2-info-details">
                  <Link className="pb-15" href={item.href} target="_blank">
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
