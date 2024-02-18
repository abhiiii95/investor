import React from 'react';
import styles from "./InvestorRecommendCard.module.scss";
import Image from 'next/image';
import nester from "@/assets/images/nester.png";
import Link from 'next/link';
const InvestorRecommendCard = ({
  id,
  image,
  alt,
  route,
  heading,
  subHeading,
  topic,
      date,
      writer
}) => {
  return (
    <>
      <div className={styles?.InvestorRecommendCard}>
        <div className={styles?.investorImage}>
          <Image src={image} alt={alt} />
        </div>
        <div className={styles?.investCardContent}>
          <span className={styles?.investCardContent__span}>{topic}</span>
          <Link href={route} className={styles?.investCardContent__p}>
            <span>{heading}</span>
          </Link>
          <div className={styles?.investCardContent__div}>
            <p>
              By <span> {writer}</span>
            </p>
            <p>{date}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default InvestorRecommendCard
