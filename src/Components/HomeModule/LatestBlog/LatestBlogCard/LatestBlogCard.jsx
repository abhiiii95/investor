import React from 'react';
import styles from "./latestBlogCard.module.scss";
import Image from 'next/image';
import electronics from "@/assets/images/electronics.png";
import profile from "@/assets/images/profile.png";
import Link from 'next/link';

const LatestBlogCard = () => {
  return (
    <div className={styles?.latestBlogCard}>
      <div className={styles?.imageWrapper}>
        <Image src={electronics} alt="electronics" />
      </div>
      <div className={styles?.latestBlogContent}>
        <div className={styles?.dateImage}>
          <div className={styles?.imageName}>
            <Image src={profile} alt="profile" />
            <p>Pillifant Vern</p>
          </div>
          <p className={styles?.date}>May 20, 2021</p>
        </div>
        <Link href="/" className={styles?.blogSubHeading}>
          How architects visualize design for world’s biggest airport
        </Link>
        <span className={styles?.smallHeading}>Electronics</span>
      </div>
    </div>
  );

}

export default LatestBlogCard
