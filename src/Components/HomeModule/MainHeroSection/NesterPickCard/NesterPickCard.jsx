import React from 'react';
import styles from "../mainHeroSection.module.scss";
import Image from "next/image";
import Link from "next/link";


const NesterPickCard = ({id,alt,image,route,heading,subHeading,newClass}) => {
  return (
    <>
      <li className={`${styles?.ulWrapper__li} ${newClass}`}>
        <span className={styles?.imageWrapper}>
          <Image src={image} alt={alt} />
        </span>
        <div className={styles?.liContent}>
          <Link href={route}>
            <p>{heading}</p>
          </Link>
          <span>{subHeading}</span>
        </div>
      </li>
    </>
  );
}

export default NesterPickCard
