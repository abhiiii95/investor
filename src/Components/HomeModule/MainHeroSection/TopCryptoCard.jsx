import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styles from "./mainHeroSection.module.scss";

const TopCryptoCard = ({
  id,
  alt,
  image,
  route,
  heading,
  date,
  newClass,
}) => {
  return (
    <>
      <li className={`${styles?.ulWrapper__li} ${newClass}`}>
        <div className={styles?.liContent}>
          <span className={styles?.date}>{date}</span>
          <Link href={route}>
            <span>{heading}</span>
          </Link>
        </div>
        <span className={styles?.imageWrapper}>
          <Image src={image} alt={alt} />
        </span>
      </li>
    </>
  );
};

export default TopCryptoCard
