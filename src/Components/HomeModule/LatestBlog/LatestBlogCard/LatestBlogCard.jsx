import React from 'react';
import styles from "./latestBlogCard.module.scss";
import Image from 'next/image';
import electronics from "@/assets/images/electronics.png";
import profile from "@/assets/images/auth1.png";
import Link from 'next/link';

const LatestBlogCard = ({
  id,
  image,
  alt,
  route,
  date,
  authorName,
  heading,
}) => {
  return (
    <div className={styles?.latestBlogCard}>
      <div className={styles?.imageWrapper}>
        <Image src={image} alt={alt} />
      </div>
      <div className={styles?.latestBlogContent}>
        <div className={styles?.dateImage}>
          <div className={styles?.imageName}>
            <Image src={profile} alt="profile" />
            <p>{authorName}</p>
          </div>
          <p className={styles?.date}>{date}</p>
        </div>
        <Link href={route} className={styles?.blogSubHeading}>
          <span>{heading}</span>
        </Link>
        <span className={styles?.smallHeading}>Electronics</span>
      </div>
    </div>
  );
};

export default LatestBlogCard
