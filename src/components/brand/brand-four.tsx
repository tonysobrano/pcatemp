'use client';
import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { SwiperOptions } from 'swiper/types';

// images 
import brand_1 from '@/assets/brand/client-logo-1.png';
import brand_2 from '@/assets/brand/client-logo-2.png';
import brand_3 from '@/assets/brand/client-logo-3.png';
import brand_4 from '@/assets/brand/client-logo-4.png';
import brand_5 from '@/assets/brand/client-logo-5.png';
import brand_6 from '@/assets/brand/client-logo-7.png';

const brand_images = [
  { src: brand_1, width: 90, height: 59 },
  { src: brand_2, width: 70, height: 64 },
  { src: brand_3, width: 100, height: 49 },
  { src: brand_4, width: 80, height: 53 },
  { src: brand_5, width: 120, height: 43 },
  { src: brand_6, width: 100, height: 49 },
];

// slider setting
const slider_setting:SwiperOptions = {
  slidesPerView: 5,
  loop: false,
  autoplay: false,
  spaceBetween: 0,
  speed: 1000,
  breakpoints: {
    '1400': {
      slidesPerView: 5,
    },
    '1200': {
      slidesPerView: 4,
    },
    '992': {
      slidesPerView: 4,
    },
    '768': {
      slidesPerView: 3,
    },
    '576': {
      slidesPerView: 2,
    },
    '0': {
      slidesPerView: 1,
    },
  },
  navigation: {
    prevEl: '.tp-shop-brand-prev',
    nextEl: '.tp-shop-brand-next',
  },
}
export default function BrandFour() {
  return (
    <div className="tp-shop-brand-area mb-100">
        <div className="container container-1300">
          <div className="row">
              <div className="col-xl-12">
                <div className="tp-shop-brand-wrapper">
                    <Swiper {...slider_setting} className="swiper-container tp-shop-brand-active fix">
                        {brand_images.map((item, i) => (
                          <SwiperSlide key={i}>
                            <div className="tp-shop-brand-item">
                                <Image
                                  src={item.src}
                                  alt="brand-img"
                                  width={item.width}
                                  height={item.height}
                                  style={{ width: item.width, height: item.height, objectFit: 'cover' }}
                                />
                            </div>
                          </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
              </div>
          </div>
        </div>
    </div>
  )
}
