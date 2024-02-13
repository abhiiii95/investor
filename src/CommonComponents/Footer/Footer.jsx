import React from 'react';
import styles from "./footer.module.scss";
import logo from "@/assets/images/logo.png";
import Link from 'next/link';
import Image from 'next/image';
import facebook from "@/assets/images/facebook.svg";
import twitter from "@/assets/images/twitter.svg";
import insta from "@/assets/images/insta.svg";
import yt from "@/assets/images/yt.svg";
import rArrow from "@/assets/images/rArrow.svg";
import email from "@/assets/images/email.svg";

const Footer = () => {
    const usefulLinks = [
      {
        id: 1,
        route: "/",
        name: "About Us",
      },
      {
        id: 2,
        route: "/",
        name: "Contact",
      },
      {
        id: 3,
        route: "/",
        name: "News",
      },
      {
        id: 4,
        route: "/",
        name: "Crypto",
      },
      {
        id: 5,
        route: "/",
        name: "Stocks",
      },
      {
        id: 6,
        route: "/",
        name: "Privacy Policy",
      },
      {
        id: 7,
        route: "/",
        name: "Terms Of Use",
      },
      {
        id: 8,
        route: "/",
        name: "Cookies Policy",
      },
    ];
  return (
    <footer className={styles?.footerWrapper}>
      <div className="container">
        <div className={styles?.footerContentWrapper}>
          <div className={styles?.leftContent}>
            <Link href="/" className={styles?.navLogo}>
              <Image src={logo} alt="logo" priority />
            </Link>
            <p className={styles?.desc}>
              Expert insights, industry trends, and inspiring stories that help
              you live and work on your own terms. Expert insights, industry
              trends.
            </p>
            <p className={styles?.followUs}>Follow Us</p>
            <ul className={styles?.followLink}>
              <li>
                <Link href={"/"} target="_blank">
                  <Image src={facebook} alt="facebook" />
                </Link>
              </li>
              <li>
                <Link href={"/"} target="_blank">
                  <Image src={twitter} alt="twitter" />
                </Link>
              </li>
              <li>
                <Link href={"/"} target="_blank">
                  <Image src={insta} alt="insta" />
                </Link>
              </li>
              <li>
                <Link href={"/"} target="_blank">
                  <Image src={yt} alt="yt" />
                </Link>
              </li>
            </ul>
          </div>
          <div className={styles?.midContent}>
            <p className={styles?.midHeading}>UseFul Links </p>
            <ul className={styles?.usefulLinks}>
              {usefulLinks.map((val) => {
                return (
                  <>
                    <li key={val?.id}>
                      <Link href={val?.route}>
                        <Image src={rArrow} alt="rArrow" />
                        <span>{val?.name}</span>
                      </Link>
                    </li>
                  </>
                );
              })}
            </ul>
          </div>
          <div className={styles?.rightContent}>
            <p className={styles?.midHeading}>Contact Us </p>
            <div className={styles?.emailWrapper}>
              <Image src={email} alt="email" />
              <p>Email :-</p>
              <Link href={"/"} target="_blank">
                investornestor@nestor.com
              </Link>
            </div>
            <div className={styles?.subscribeWrapper}>
              <input type="email" placeholder="Enter Your Mail Id" />
              <button>Subscribe</button>
            </div>
          </div>
        </div>
        <div className={styles?.copyRight}>
          <p>© 2024. All rights reserved. </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer
