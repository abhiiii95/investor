"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import styles from "./latestBlog.module.scss";
import LatestBlogCard from "./LatestBlogCard/LatestBlogCard";

const LatestBlog = () => {
    const sliderRef = useRef(null);

    const handlePrev = () => {
      if (!sliderRef.current) return;
      sliderRef.current.swiper.slidePrev();
    };

    const handleNext = () => {
      if (!sliderRef.current) return;
      sliderRef.current.swiper.slideNext();
    };
  return (
    <section className={styles?.latestBlog}>
      <div className={styles?.latestBlogContainer}>
        <div className="container">
          <div className={styles?.headingWrapper}>
            <p className={styles?.uprHeading}>Latest Articles</p>
            <p className={styles?.downHeading}>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris..
            </p>
          </div>
          <div className={styles?.midContainer}>
            <Swiper
              slidesPerView={4}
              spaceBetween={32}
              className="mySwiper"
              ref={sliderRef}
            >
              {[1, 2, 3, 4, 5]?.map((val) => {
                return (
                  <>
                    <SwiperSlide key={val?.id}>
                      <LatestBlogCard />
                    </SwiperSlide>
                  </>
                );
              })}
            </Swiper>
            <div className={styles?.swiperBtn}>
              <button className={styles?.prevBtn} onClick={handlePrev}>
                <svg
                  width={20}
                  height={20}
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M13.5667 9.55837C13.6837 9.67556 13.7495 9.83441 13.7495 10C13.7495 10.1657 13.6837 10.3245 13.5667 10.4417L7.3167 16.6917C7.19822 16.8021 7.04152 16.8622 6.8796 16.8593C6.71768 16.8565 6.56319 16.7909 6.44868 16.6764C6.33417 16.5619 6.26858 16.4074 6.26572 16.2455C6.26287 16.0836 6.32297 15.9268 6.43337 15.8084L12.2417 10L6.43337 4.1917C6.32297 4.07322 6.26287 3.91652 6.26572 3.7546C6.26858 3.59268 6.33417 3.43819 6.44868 3.32368C6.56319 3.20917 6.71768 3.14358 6.8796 3.14072C7.04152 3.13787 7.19822 3.19797 7.3167 3.30837L13.5667 9.55837Z"
                    fill="#111827"
                  />
                </svg>
              </button>
              <button className={styles?.nextBtn} onClick={handleNext}>
                <svg
                  width={20}
                  height={20}
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M13.5667 9.55837C13.6837 9.67556 13.7495 9.83441 13.7495 10C13.7495 10.1657 13.6837 10.3245 13.5667 10.4417L7.3167 16.6917C7.19822 16.8021 7.04152 16.8622 6.8796 16.8593C6.71768 16.8565 6.56319 16.7909 6.44868 16.6764C6.33417 16.5619 6.26858 16.4074 6.26572 16.2455C6.26287 16.0836 6.32297 15.9268 6.43337 15.8084L12.2417 10L6.43337 4.1917C6.32297 4.07322 6.26287 3.91652 6.26572 3.7546C6.26858 3.59268 6.33417 3.43819 6.44868 3.32368C6.56319 3.20917 6.71768 3.14358 6.8796 3.14072C7.04152 3.13787 7.19822 3.19797 7.3167 3.30837L13.5667 9.55837Z"
                    fill="#111827"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LatestBlog
