'use client';
import React, { useRef } from 'react';
import styles from "./trending.module.scss";
import Image from 'next/image';
import trending from "@/assets/images/trending.png";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import Link from 'next/link';

const Trending = () => {
    const sliderRef = useRef(null);

    const handlePrev = () => {
      if (!sliderRef.current) return;
      sliderRef.current.swiper.slidePrev();
    };

    const handleNext = () => {
      if (!sliderRef.current) return;
      sliderRef.current.swiper.slideNext();
    };
    const trendingData = [
      {
        id: 1,
        route: "/",
        heading: "Secret Tools for Easy Projects Comple",
      },
      {
        id: 2,
        route: "/",
        heading: "Vital Reasons to Go Vegan for a Month",
      },
      {
        id: 3,
        route: "/",
        heading: "Are You Tired of Running in Time Circl",
      },
      {
        id: 4,
        route: "/",
        heading: "Secret Tools for Easy Projects Comple",
      },
      {
        id: 5,
        route: "/",
        heading: "Vital Reasons to Go Vegan for a Month",
      },
      {
        id: 6,
        route: "/",
        heading: "Are You Tired of Running in Time Circl",
      },
    ];
  return (
    <>
      <section className={styles?.trendingWrapper}>
        <div className="container">
          <div className={styles?.trendingWrapper__contentWrapper}>
            <div
              className={styles?.trendingWrapper__contentWrapper__sliderWrapper}
            >
              <div
                className={
                  styles?.trendingWrapper__contentWrapper__sliderWrapper__trendingImage
                }
              >
                <Image src={trending} alt="trending" />
                <p>Trending</p>
              </div>
              <div className={styles?.swiperWrapper}>
                <Swiper
                  slidesPerView={3}
                  spaceBetween={10}
                  className="mySwiper"
                  ref={sliderRef}
                >
                  {trendingData?.map((val)=>{
                    return (
                      <>
                        <SwiperSlide key={val?.id}>
                          <Link href={val?.route}>
                            {val?.heading}
                          </Link>
                        </SwiperSlide>
                      </>
                    );
                  })}
                  
                </Swiper>
              </div>
              <div className={styles?.sliderButton}>
                <button className="prev-arrow" onClick={handlePrev}>
                  <svg
                    width={17}
                    height={17}
                    viewBox="0 0 18 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_1_632)">
                      <path
                        d="M0.25564 9.06549L5.34504 14.1549C5.50212 14.2805 5.68276 14.3375 5.88696 14.3257C6.09117 14.3139 6.26592 14.2374 6.41122 14.096C6.55652 13.9546 6.63506 13.7818 6.64684 13.5776C6.65862 13.3734 6.60168 13.1928 6.47601 13.0357L2.74143 9.30111H16.3485C16.5684 9.30111 16.7569 9.22257 16.914 9.06549C17.0711 8.90841 17.1496 8.71991 17.1496 8.5C17.1496 8.28009 17.0711 8.09159 16.914 7.93451C16.7569 7.77743 16.5684 7.69889 16.3485 7.69889H2.74143L6.47601 3.96431C6.60168 3.80723 6.65862 3.62659 6.64684 3.42238C6.63506 3.21818 6.55652 3.04539 6.41122 2.90402C6.26592 2.76265 6.09117 2.68607 5.88696 2.67429C5.68276 2.66251 5.50212 2.71945 5.34504 2.84511L0.25564 7.93451C0.0985596 8.09159 0.0200195 8.28009 0.0200195 8.5C0.0200195 8.71991 0.0985596 8.90841 0.25564 9.06549Z"
                        fill="#121418"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1_632">
                        <rect
                          width={17}
                          height={17}
                          fill="white"
                          transform="matrix(1 0 0 -1 0.0200195 17)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </button>
                <button className={styles?.nextArrow} onClick={handleNext}>
                  <svg
                    width={17}
                    height={17}
                    viewBox="0 0 18 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_1_632)">
                      <path
                        d="M0.25564 9.06549L5.34504 14.1549C5.50212 14.2805 5.68276 14.3375 5.88696 14.3257C6.09117 14.3139 6.26592 14.2374 6.41122 14.096C6.55652 13.9546 6.63506 13.7818 6.64684 13.5776C6.65862 13.3734 6.60168 13.1928 6.47601 13.0357L2.74143 9.30111H16.3485C16.5684 9.30111 16.7569 9.22257 16.914 9.06549C17.0711 8.90841 17.1496 8.71991 17.1496 8.5C17.1496 8.28009 17.0711 8.09159 16.914 7.93451C16.7569 7.77743 16.5684 7.69889 16.3485 7.69889H2.74143L6.47601 3.96431C6.60168 3.80723 6.65862 3.62659 6.64684 3.42238C6.63506 3.21818 6.55652 3.04539 6.41122 2.90402C6.26592 2.76265 6.09117 2.68607 5.88696 2.67429C5.68276 2.66251 5.50212 2.71945 5.34504 2.84511L0.25564 7.93451C0.0985596 8.09159 0.0200195 8.28009 0.0200195 8.5C0.0200195 8.71991 0.0985596 8.90841 0.25564 9.06549Z"
                        fill="#121418"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1_632">
                        <rect
                          width={17}
                          height={17}
                          fill="white"
                          transform="matrix(1 0 0 -1 0.0200195 17)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Trending
