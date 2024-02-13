import React from 'react';
import styles from "./investorRecommend.module.scss";
import Heading from '@/CommonComponents/Heading/Heading';
import Link from 'next/link';
import recmd from "@/assets/images/recmd.png";
import Image from 'next/image';
import InvestorRecommendCard from './InvestorRecommendCard/InvestorRecommendCard';

const InvestorRecommend = () => {
  return (
    <>
      <section className={styles?.investorRecommendWrapper}>
        <div className="container">
          <div className={styles?.headingWrapper}>
            <Heading heading={"Invest Nestor Recommends "} />
            <Link href="/" className={styles?.viewAll}>
              View All
            </Link>
          </div>
          <div className={styles?.investorContent}>
            <div className={styles?.leftContent}>
              <Image src={recmd} alt="recmd" className={styles?.recmd} />
              <div className={styles?.blog1}>
                <span className={styles?.blog1__span}>Technology</span>
                <h2 className={styles?.blog1__h2}>
                  What Beauty Trends Can Turn a Person Into
                </h2>
                <div className={styles?.blog1__div}>
                  <p>
                    By <span>Henray Sandras</span>
                  </p>
                  <p>27 jan 2020</p>
                </div>
              </div>
            </div>
            <div className={styles?.rightContent}>
                {
                    Array(4).fill("").map((val)=>{
                        return(
                            <>
                        <InvestorRecommendCard />
                            </>
                        )
                    })
                }
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default InvestorRecommend
