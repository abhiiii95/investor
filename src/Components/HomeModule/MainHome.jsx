import React from 'react';
import styles from "./mainHome.module.scss";
import Trending from './TrendingSection/Trending';
import MainHeroSection from './MainHeroSection/MainHeroSection';
import InvestorRecommend from './InvestorRecommend/InvestorRecommend';
import OurMission from './OurMission/OurMission';
import LatestBlog from './LatestBlog/LatestBlog';

const MainHome = () => {
  return <>
  <Trending />
  <MainHeroSection />
  <InvestorRecommend />
  <OurMission />
  <LatestBlog />
  </>;
}

export default MainHome
