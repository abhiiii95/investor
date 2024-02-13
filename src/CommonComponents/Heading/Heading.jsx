import React from 'react';
import styles from "./heading.module.scss";

const Heading = ({heading,newClass}) => {
  return <h4 className={`${styles?.headingH4} ${newClass}`}>{heading}</h4>;
}

export default Heading
