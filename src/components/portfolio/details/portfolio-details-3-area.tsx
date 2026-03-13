
import React from 'react';
import { scroller } from 'react-scroll';
import {Swiper,SwiperSlide} from 'swiper/react';
import {Autoplay} from 'swiper/modules';
import { SwiperOptions } from 'swiper/types';
import Image from 'next/image';
import { Leaf, ScrollDownTwo,UpArrowFour} from '@/components/svg';

// images
import full_image from '@/assets/img/inner-project/portfolio-details-3/portfolio-img-1.jpg';
import full_image_2 from '@/assets/img/inner-project/portfolio-details-3/portfolio-img-2.jpg';
import port_img_1 from '@/assets/img/inner-project/portfolio-details-3/portfolio-img-3.jpg';
import port_img_2 from '@/assets/img/inner-project/portfolio-details-3/portfolio-img-4.jpg';
import port_img_3 from '@/assets/img/inner-project/portfolio-details-3/portfolio-img-5.jpg';
import port_img_4 from '@/assets/img/inner-project/portfolio-details-3/portfolio-img-6.jpg';
import port_img_5 from '@/assets/img/inner-project/portfolio-details-3/portfolio-img-7.jpg';
import Link from 'next/link';

// slider images
const slider_images = [port_img_3,port_img_4,port_img_5,port_img_4];

// slider setting
const slider_setting:SwiperOptions = {
  slidesPerView: 3,
  loop: true,
  autoplay: true,
  spaceBetween: 20,
  speed: 1000,
  breakpoints: {
    '1400': {
      slidesPerView: 3,
    },
    '1200': {
      slidesPerView: 3,
    },
    '992': {
      slidesPerView: 2,
    },
    '768': {
      slidesPerView: 2,
    },
    '576': {
      slidesPerView: 1,
    },
    '0': {
      slidesPerView: 1,
    },
  },
}

export default function PortfolioDetailsThreeArea() {
  const scrollTo = () => {
    scroller.scrollTo('xyz', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
    });
  };
  return (
    <>
      {/* details are */}
      <div className="tp-project-details-3-top tp-project-details-3-ptb">
          <div className="container container-1560">
            <div className="row">
                <div className="col-xl-12">
                  <div className="tp-project-details-3-title-box">
                      <h2 className="tp-section-title-160 mb-50 tp-char-animation">Brand Platform Refresh</h2>
                  </div>
                </div>
            </div>
            <div className="row">
                <div className="col-xl-6">
                  <div className="tp-project-details-3-scroll smooth">
                      <a onClick={scrollTo} className="pointer">
                        <span>
                            <ScrollDownTwo/>
                        </span>
                        Scroll to Explore
                      </a>
                  </div>
                </div>
                <div className="col-xl-6">
                  <div className="tp-project-details-3-link mt-30 text-start text-md-end">
                      <Link href="#">
                        Visit  Website
                        <span>
                            <UpArrowFour/>
                        </span>
                      </Link>
                  </div>
                </div>
            </div>
          </div>
      </div>
      {/* details are */}

      {/* full image */}
      <div className="tp-project-details-3-full-width-thumb mb-120">
          <Image data-speed=".8" src={full_image} alt="port-img" style={{ height: 'auto' }}/>
      </div>
      {/* full image */}

      {/* details area */}
      <div className="showcase-details-2-area pb-120">
          <div className="container">
            <div className="row">
                <div className="col-xl-12">
                  <div className="showcase-details-2-section-box">
                      <h4 className="showcase-details-2-section-title tp-char-animation">Stronger First Impression</h4>
                  </div>
                </div>
            </div>
            <div className="row">
                <div className="col-xl-3">
                  <div className="showcase-details-2-section-left">
                      <span className="ab-inner-subtitle mb-25">
                        <Leaf/>
                        An introduction
                      </span>
                  </div>
                </div>
                <div className="col-xl-9">
                  <div className="showcase-details-2-content-right tp_title_anim">
                      <p className="pb-25">The original site no longer reflected the quality of the work behind it, so the goal of this redesign was to create a sharper digital experience that feels modern, credible, and easier to navigate.</p>
                      <p>The refresh focused on clarity, stronger visual hierarchy, and a more polished presentation of the work.</p>
                  </div>
                </div>
            </div>
          </div>
      </div>
      {/* details area */}

    {/*details thumb */}
        <div id="xyz" className="tp-project-details-3-thumb mb-120">
          <div className="container container-1560">
            <div className="row">
                <div className="col-xl-12">
                  <div className="tp-project-details-3-thumb-box">
                    <Image data-speed=".8" src={full_image_2} alt="port-img" style={{ height: 'auto' }}/>
                  </div>
                </div>
            </div>
          </div>
      </div>
    {/* details thumb */}

    {/* details area */}
    <div className="showcase-details-2-area pb-120">
        <div className="container">
          <div className="row">
              <div className="col-xl-8">
                <div className="showcase-details-2-section-box">
                    <h4 className="showcase-details-2-section-title tp-char-animation">The Goal</h4>
                </div>
              </div>
          </div>
          <div className="row">
              <div className="col-xl-3">
                <div className="showcase-details-2-section-left">
                    <span className="ab-inner-subtitle mb-25">
                      <Leaf/>
                      An introduction
                    </span>
                </div>
              </div>
              <div className="col-xl-9">
                <div className="showcase-details-2-content-right tp_title_anim">
                    <p className="pb-25">The project aimed to improve how the work was understood, not just how it looked. Navigation, layout, and storytelling were tightened to support that goal.</p>
                    <p>The new structure helps visitors move from interest to inquiry with less friction.</p>
                </div>
              </div>
          </div>
        </div>
    </div>
    {/* details area */}

    {/* details thumb */}
    <div className="tp-project-details-3-thumb mb-90">
        <div className="container">
          <div className="row">
              <div className="col-xl-6">
                <div className="tp-project-details-3-thumb-box mb-30">
                    <Image className="w-100" src={port_img_1} alt="port-img" style={{height:'auto'}}/>
                </div>
              </div>
              <div className="col-xl-6">
                <div className="tp-project-details-3-thumb-box mb-30">
                  <Image className="w-100" src={port_img_2} alt="port-img" style={{height:'auto'}}/>
                </div>
              </div>
          </div>
        </div>
    </div>
    {/* details thumb */}

    {/* details area */}
    <div className="showcase-details-2-area pb-120">
        <div className="container">
          <div className="row">
              <div className="col-xl-8">
                <div className="showcase-details-2-section-box">
                    <h4 className="showcase-details-2-section-title tp-char-animation">The Goal</h4>
                </div>
              </div>
          </div>
          <div className="row">
              <div className="col-xl-3">
                <div className="showcase-details-2-section-left">
                    <span className="ab-inner-subtitle mb-25">
                      <Leaf/>
                      An introduction
                    </span>
                </div>
              </div>
              <div className="col-xl-9">
                <div className="showcase-details-2-content-right tp_title_anim">
                    <p className="pb-25">The final system was designed to stay flexible for future updates while keeping the brand presentation consistent across every case study and landing section.</p>
                    <p>That makes it easier to grow the site without returning to a scattered template feel.</p>
                </div>
              </div>
          </div>
        </div>
    </div>
    {/* details area */}

     {/* slider images area */}
     <div className="pd-visual-slider-wrap pb-40">
          <Swiper {...slider_setting} modules={[Autoplay]} className="swiper-container pd-visual-slider-active">
              {slider_images.map((imgSrc, index) => (
                <SwiperSlide key={index}>
                  <div className="pd-visual-slider-thumb fix">
                    <Image src={imgSrc} alt="port-img" style={{height:"auto"}}/>
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      {/* slider images area */}
    </>
  )
}
