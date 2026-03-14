import React from "react";
import { UpArrow } from "@/components/svg";
import Link from "next/link";
import { siteSettings } from "@/content/site-settings";

export default function FooterFive() {
  return (
    <footer>
      <div className="tp-footer-5-area black-bg pt-120 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="tp-footer-5-content-wrap">
                <div className="tp-footer-5-title-box">
                  <span className="tp-footer-5-subtitle">
                    Want to <br /> Start a Project?
                  </span>
                  <h4 className="tp-footer-5-title tp_reveal_anim-2 footer-big-text">
                    {"Let's"} Talk
                  </h4>
                </div>
                <div className="tp-footer-5-info d-flex align-items-center justify-content-start justify-content-md-end">
                  <Link className="tp-footer-5-mail" href={`mailto:${siteSettings.email}`}>
                    {siteSettings.email}
                  </Link>
                  <Link className="tp-footer-5-link" href="/contact">
                    <UpArrow clr="#19191A" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* footer area end */}

      {/* copyright area start */}
      <div className="tp-copyright-5-area tp-copyright-5-style-2 black-bg pb-50">
        <div className="container container-1560">
          <div className="row align-items-center">
            <div className="col-xl-3 col-lg-6 col-md-5 d-none d-xl-block">
              <div className="tp-copyright-5-left-info"></div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-7">
              <div className="tp-copyright-2-social text-start text-sm-center text-xl-center">
                {siteSettings.footerSocialLinks
                  .filter((link) =>
                    ["linkedin", "instagram", "facebook"].includes(link.label)
                  )
                  .map((link) => (
                    <Link className="mb-10" href={link.href} key={link.label} target="_blank">
                      {link.label.charAt(0).toUpperCase() + link.label.slice(1)}
                    </Link>
                  ))}
                <p className="mt-20 mb-0">
                  ©{new Date().getFullYear()} {siteSettings.name}. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
