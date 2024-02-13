import React from 'react';
import styles from "./ourMission.module.scss";
import Heading from '@/CommonComponents/Heading/Heading';
import Image from 'next/image'; 
import profile from "@/assets/images/profile.png";

const OurMission = () => {
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
            <button className={styles?.knowBtn}>know more about us</button>
          </div>
          <div className={styles?.rightContent}>
            <div className={styles?.rightContentHeading}>
              🎭 Discover Authors
            </div>
            <ul className={styles?.authorUl}>
                {
                    Array(4).fill("").map((val)=>{
                        return (
                          <>
                            <li>
                              <span className={styles?.authorSpan}>
                                <Image src={profile} alt="profile" />
                              </span>
                              <div className={styles?.authorUl__div}>
                                <p className={styles?.authorName}>
                                  Truelock Alric
                                </p>
                                <p className={styles?.authorJob}>Author Job</p>
                              </div>
                            </li>
                          </>
                        );
                    })
                }
              
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurMission
