import Heading from "@/CommonComponents/Heading/Heading";
import styles from "./mainHeroSection.module.scss";
import nester from "@/assets/images/nester.png";
import img1 from "@/assets/images/img2.png";
import img2 from "@/assets/images/img3.png";
import img3 from "@/assets/images/img4.png";

import NesterPickCard from "./NesterPickCard/NesterPickCard";
import Link from "next/link";
import Image from "next/image";
import TopCryptoCard from "./TopCryptoCard";
import hero from "@/assets/images/tech.webp";

const MainHeroSection = () => {
  const nesterData = [
    {
      id: 1,
      image: nester,
      alt: "nester",
      route: "/",
      heading: "Celebrities",
      subHeading: "7 Articles",
    },
    {
      id: 2,
      image: img1,
      alt: "img1",
      route: "/",
      heading: "Investing",
      subHeading: "10 Articles",
    },
    {
      id: 3,
      image: img2,
      alt: "img2",
      route: "/",
      heading: "Real Estate",
      subHeading: "17 Articles",
    },
    {
      id: 4,
      image: img3,
      alt: "img3",
      route: "/",
      heading: "Athletes",
      subHeading: "7 Articles",
    },
  ];
  const cryptoData = [
    {
      id: 1,
      image: nester,
      alt: "nester",
      route: "/",
      heading: "Most Popular Crypto Blogs",
      date: "22 Jan ,2020",
    },
    {
      id: 2,
      image: img1,
      alt: "img1",
      route: "/",
      heading: "Most Popular Crypto Blogs",
      date: "22 Jan ,2020",
    },
    {
      id: 3,
      image: img2,
      alt: "img2",
      route: "/",
      heading: "Most Popular Crypto Blogs",
      date: "22 Jan ,2020",
    },
    {
      id: 4,
      image: img3,
      alt: "img1",
      route: "/",
      heading: "Most Popular Crypto Blogs",
      date: "22 Jan ,2020",
    },
  ];
  return (
    <section className={styles?.mainHeroSectionWrapper}>
      <div className="container">
        <div className={styles?.contentWrapper}>
          <div className={styles?.leftContent}>
            <Heading heading={"Nestor Picks"} />
            <ul className={styles?.ulWrapper}>
              {nesterData?.map((val) => {
                return (
                  <>
                    <NesterPickCard key={val?.id} {...val} />
                  </>
                );
              })}
            </ul>
            <Link href="/" className={styles?.viewAll}>
              View All
            </Link>
          </div>
          <div className={styles?.midContent}>
            <div className={styles?.imageWrapper}>
              <Image src={hero} alt="hero" priority />
              <div className={styles?.imageContent}>
                <span className={styles?.topic}>
                  <span>Technolgy</span>
                </span>
                <h1>
                  <span>What Beauty Trends Can Turn a Person Into</span>
                </h1>
                <p className={styles?.description}>
                  Today, modern beauty bloggers make money by popularizing
                  trends that could cause serious health issues…
                </p>
                <div className={styles?.writerWrapper}>
                  <p>
                    By <span>Henry Sanders</span>
                  </p>
                  <p>27 JAN, 2020</p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles?.rightContent}>
            <Heading heading={"Top Crypto Stories"} />
            <ul className={styles?.ulWrapper}>
              {cryptoData?.map((val) => {
                return (
                  <>
                    <TopCryptoCard key={val?.id} {...val} />
                  </>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MainHeroSection
