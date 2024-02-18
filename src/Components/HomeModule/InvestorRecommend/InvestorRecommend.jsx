import React from 'react';
import styles from "./investorRecommend.module.scss";
import Heading from '@/CommonComponents/Heading/Heading';
import Link from 'next/link';
import recmd from "@/assets/images/recmd.png";
import blog1 from "@/assets/images/blog1.webp";
import Image from 'next/image';
import InvestorRecommendCard from './InvestorRecommendCard/InvestorRecommendCard';
import nester from "@/assets/images/nester.png";
import img1 from "@/assets/images/img2.png";
import img2 from "@/assets/images/img3.png";
import img3 from "@/assets/images/img4.png";

const InvestorRecommend = () => {
  const nesterData = [
    {
      id: 1,
      image: nester,
      alt: "nester",
      route: "/",
      heading: "Most Popular Crypto Blogs",
      subHeading: "7 Articles",
      topic: "Technology",
      date: "27 JAN 2020",
      writer: "Henery Sanders",
    },
    {
      id: 2,
      image: img1,
      alt: "img1",
      route: "/",
      heading: "Most Popular Crypto Blogs",
      subHeading: "10 Articles",
      topic: "Technology",
      date: "27 JAN 2020",
      writer: "Henery Sanders",
    },
    {
      id: 3,
      image: img2,
      alt: "img2",
      route: "/",
      heading: "Most Popular Crypto Blogs",
      subHeading: "17 Articles",
      topic: "Technology",
      date: "27 JAN 2020",
      writer: "Henery Sanders",
    },
    {
      id: 4,
      image: img3,
      alt: "img3",
      route: "/",
      heading: "Most Popular Crypto Blogs",
      subHeading: "7 Articles",
      topic: "Technology",
      date: "27 JAN 2020",
      writer: "Henery Sanders",
    },
  ];
  return (
    <>
      <section className={styles?.investorRecommendWrapper}>
        <div className="container">
          <div className={styles?.headingWrapper}>
            <Heading heading={"Invest Nestor Recommends "} />
            <Link href="/" className={styles?.viewAll}>
              View All
            </Link>
          </div>
          <div className={styles?.investorContent}>
            <div className={styles?.leftContent}>
              <Image src={blog1} alt="blog1" className={styles?.recmd} />
              <div className={styles?.blog1}>
                <span className={styles?.blog1__span}>
                  <span>Technology</span>
                </span>
                <Link href={"/"}>
                  <span className={styles?.blog1__h2}>
                    What Beauty Trends Can Turn a Person Into
                  </span>
                </Link>
                <div className={styles?.blog1__div}>
                  <p>
                    By <span>Henray Sandras</span>
                  </p>
                  <p>27 jan 2020</p>
                </div>
              </div>
            </div>
            <div className={styles?.rightContent}>
              {nesterData.map((val) => {
                return (
                  <>
                    <InvestorRecommendCard {...val} key={val?.id} />
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default InvestorRecommend
