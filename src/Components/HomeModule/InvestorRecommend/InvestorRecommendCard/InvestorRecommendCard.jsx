import React from 'react';
import styles from "./InvestorRecommendCard.module.scss";
import Image from 'next/image';
import nester from "@/assets/images/nester.png";
import Link from 'next/link';
const InvestorRecommendCard = () => {
  return (
    <>
      <div className={styles?.InvestorRecommendCard}>
        <div className={styles?.investorImage}>
          <Image src={nester} alt="nester" />
        </div>
        <div className={styles?.investCardContent}>
          <span className={styles?.investCardContent__span}>Technology</span>
          <Link href={"/"} className={styles?.investCardContent__p}>
            Most Popular Crypto Blogs
          </Link>
          <div className={styles?.investCardContent__div}>
            <p>
              By <span> Henery sanders</span>
            </p>
            <p>27 Jan 2020</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default InvestorRecommendCard
