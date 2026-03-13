"use client";

import React from "react";
import { gsap } from "gsap";
import Image from "next/image";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import useScrollSmooth from "@/hooks/use-scroll-smooth";
import { ScrollSmoother, ScrollTrigger, SplitText } from "@/plugins";
import Wrapper from "@/layouts/wrapper";
import HeaderEleven from "@/layouts/headers/header-eleven";
import FooterTwo from "@/layouts/footers/footer-two";
import { Dots, Share } from "@/components/svg";
import Social from "@/components/social/social";
import { serviceItems } from "@/data/service-data";
import { workItems, type WorkItem } from "@/data/work-data";
import { projectDetailsPin } from "@/utils/project-anim";
import { charAnimation, titleAnimation } from "@/utils/title-animation";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

type WorkDetailsMainProps = {
  work: WorkItem;
};

export default function WorkDetailsMain({ work }: WorkDetailsMainProps) {
  const [showSocial, setShowSocial] = React.useState(false);
  useScrollSmooth();

  const currentIndex = workItems.findIndex((item) => item.slug === work.slug);
  const prevWork = currentIndex > 0 ? workItems[currentIndex - 1] : null;
  const nextWork =
    currentIndex >= 0 && currentIndex < workItems.length - 1
      ? workItems[currentIndex + 1]
      : null;

  const serviceLabels = work.serviceSlugs.map((slug) => {
    return serviceItems.find((item) => item.slug === slug)?.title ?? slug;
  });

  useGSAP(() => {
    const timer = setTimeout(() => {
      charAnimation();
      titleAnimation();
      projectDetailsPin();
    }, 100);

    return () => clearTimeout(timer);
  });

  return (
    <Wrapper>
      <HeaderEleven cls="tp-inner-header-border" />

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <div className="project-details-1-area project-details-1-pt">
              <div className="container-fluid p-0">
                <div className="row g-0">
                  <div className="col-xl-7">
                    <div className="project-details-1-left">
                      {work.gallery.map((image, index) => (
                        <div key={`${work.slug}-${index}`} className="project-details-1-thumb mb-10">
                          <Image
                            src={image}
                            alt={`${work.title} gallery ${index + 1}`}
                            style={{ width: "100%", height: "auto" }}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="col-xl-5">
                    <div className="project-details-1-right-wrap">
                      <div className="project-details-1-right p-relative">
                        <div className="project-details-1-title-box">
                          <span className="project-details-1-subtitle">
                            <i>{work.id < 10 ? `0${work.id}` : work.id}</i>
                            {work.category}
                          </span>
                          <h4 className="project-details-1-title">{work.title}</h4>
                          <p>{work.summary}</p>
                        </div>
                        <div className="project-details-1-info-wrap">
                          <div className="project-details-1-info">
                            <span>Client</span>
                            <h4>{work.client}</h4>
                          </div>
                          <div className="project-details-1-info">
                            <span>Year</span>
                            <h4>{work.year}</h4>
                          </div>
                          <div className="project-details-1-info">
                            <span>Services</span>
                            <h4>{serviceLabels.join(", ")}</h4>
                          </div>
                          <div className="project-details-1-info">
                            <span>Location</span>
                            <h4>{work.location}</h4>
                          </div>
                        </div>
                        <div className="project-details-1-social">
                          {showSocial && (
                            <div className="project-details-1-social-inner">
                              <Social />
                            </div>
                          )}
                          <div className="project-details-1-social-main">
                            <button
                              type="button"
                              className="share-icon pointer"
                              onClick={() => setShowSocial((value) => !value)}
                            >
                              <span>
                                <Share />
                              </span>
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="project-details-1-navigation d-flex justify-content-between align-items-center">
                        {prevWork ? (
                          <Link className="project-details-1-prev" href={`/work/${prevWork.slug}`}>
                            <i className="fa-sharp fa-regular fa-arrow-left"></i>
                            <span>Prev</span>
                          </Link>
                        ) : (
                          <span className="project-details-1-prev opacity-0">
                            <i className="fa-sharp fa-regular fa-arrow-left"></i>
                            <span>Prev</span>
                          </span>
                        )}
                        <Link href="/work">
                          <span>
                            <Dots />
                          </span>
                        </Link>
                        {nextWork ? (
                          <Link className="project-details-1-next" href={`/work/${nextWork.slug}`}>
                            <span>Next</span>
                            <i className="fa-sharp fa-regular fa-arrow-right"></i>
                          </Link>
                        ) : (
                          <span className="project-details-1-next opacity-0">
                            <span>Next</span>
                            <i className="fa-sharp fa-regular fa-arrow-right"></i>
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="showcase-details-overview pt-120 pb-80">
              <div className="container">
                <div className="row">
                  <div className="col-xl-4">
                    <div className="showcase-details-overview-left">
                      <span className="showcase-details-subtitle">Overview</span>
                    </div>
                  </div>
                  <div className="col-xl-8">
                    <div className="showcase-details-overview-right">
                      <p className="tp_title_anim">{work.excerpt}</p>
                      <div className="showcase-details-overview-info">
                        <div className="showcase-details-overview-info-item tp_fade_bottom">
                          <div className="row align-items-center">
                            <div className="col-6">
                              <div className="showcase-details-overview-info-left">
                                <span>Deliverables</span>
                              </div>
                            </div>
                            <div className="col-6">
                              <div className="showcase-details-overview-info-right">
                                <span>{work.deliverables.join(", ")}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="showcase-details-overview-info-item tp_fade_bottom">
                          <div className="row align-items-center">
                            <div className="col-6">
                              <div className="showcase-details-overview-info-left">
                                <span>Outcomes</span>
                              </div>
                            </div>
                            <div className="col-6">
                              <div className="showcase-details-overview-info-right">
                                <span>{work.outcomes.join(", ")}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="showcase-details-overview pb-60">
              <div className="container">
                <div className="row">
                  <div className="col-xl-4">
                    <div className="showcase-details-overview-left">
                      <span className="showcase-details-subtitle fs-40 tp-char-animation">
                        The challenge
                      </span>
                    </div>
                  </div>
                  <div className="col-xl-8">
                    <div className="showcase-details-overview-right tp_title_anim">
                      <p>{work.challenge}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="showcase-details-overview pb-120">
              <div className="container">
                <div className="row">
                  <div className="col-xl-4">
                    <div className="showcase-details-overview-left">
                      <span className="showcase-details-subtitle fs-40 tp-char-animation">
                        The solution
                      </span>
                    </div>
                  </div>
                  <div className="col-xl-8">
                    <div className="showcase-details-overview-right">
                      {work.solution.map((paragraph) => (
                        <p key={paragraph} className="tp_title_anim">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>

          <FooterTwo topCls="" />
        </div>
      </div>
    </Wrapper>
  );
}
