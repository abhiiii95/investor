import React from 'react';
import styles from "./ourMission.module.scss";
import Heading from '@/CommonComponents/Heading/Heading';
import Image from 'next/image'; 
import auth1 from "@/assets/images/auth1.png";
import auth2 from "@/assets/images/auth2.png";
import auth3 from "@/assets/images/auth3.png";
import auth4 from "@/assets/images/auth4.png";
import auth5 from "@/assets/images/auth5.png";

const OurMission = () => {
  const autherData = [
    {
      id: 1,
      name: "Truelock Alric",
      job: "Author Job",
      image: auth1,
      alt: "auth1",
    },
    {
      id: 2,
      name: "Birrell Chariot",
      job: "Author Job",
      image: auth2,
      alt: "auth2",
    },
    {
      id: 3,
      name: "Foulcher Nathanil",
      job: "Author Job",
      image: auth3,
      alt: "auth3",
    },
    {
      id: 4,
      name: "Falconar Agnes",
      job: "Author Job",
      image: auth4,
      alt: "auth4",
    },
    {
      id: 5,
      name: "Tousy Vita",
      job: "Author Job",
      image: auth5,
      alt: "auth5",
    },
  ];
  return (
    <section className={styles?.ourMissionWrapper}>
      <div className="container">
        <div className={styles?.ourMissionContent}>
          <div className={styles?.leftContent}>
            <Heading heading={"Our Mission"} />
            <p className={styles?.leftContent__heading}>
              What Beauty Trends Can Turn a Person Into
            </p>
            <p className={styles?.desc}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
            <p className={styles?.desc}>
              . Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris..Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
            <p className={styles?.desc}>
              . Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris..
            </p>
            <button className={styles?.knowBtn}>
              <span>know more about us</span>
            </button>
          </div>
          <div className={styles?.rightContent}>
            <div className={styles?.rightContentHeading}>
              🎭 Discover Authors
            </div>
            <ul className={styles?.authorUl}>
              {autherData.map((val) => {
                return (
                  <>
                    <li key={val?.id}>
                      <span className={styles?.authorSpan}>
                        <Image src={val?.image} alt={val?.alt} />
                      </span>
                      <div className={styles?.authorUl__div}>
                        <p className={styles?.authorName}>{val?.name}</p>
                        <p className={styles?.authorJob}>{val?.job}</p>
                      </div>
                    </li>
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

export default OurMission
