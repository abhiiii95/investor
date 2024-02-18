"use client";
import React, { useEffect, useState } from "react";
import styles from "./header.module.scss";
import Image from 'next/image';
import Link from 'next/link';
import logo from "@/assets/images/logo.png";

import { usePathname } from "next/navigation";

const Header = () => {
const pathname = usePathname();
const [sticky, setSticky] = useState("");
    const linkData = [
      {
        id: 1,
        name: "PERSONAL FINANCE",
        route:"/"
      },
      {
        id: 2,
        name: "NEWS",
        route:"/news"
      },
      {
        id: 3,
        name: "Loans",
        route:"/loans"
      },
      {
        id: 4,
        name: "Banking",
        route:"/banking"
      },
      {
        id: 5,
        name: "CRypto",
        route:"/crypto"
      },
      {
        id: 6,
        name: "About Us",
        route:"/about"
      },
    ];

     useEffect(() => {
       console.log("hello");
       window.addEventListener("scroll", isSticky);
       return () => {
         window.removeEventListener("scroll", isSticky);
       };
     }, []);
      const isSticky = () => {
        /* Method that will fix header after a specific scrollable */
        const scrollTop = window.scrollY;
        const stickyClass = scrollTop >= 250 ? "is-sticky" : "";
        setSticky(stickyClass);
        console.log(stickyClass);
      };
    
  return (
    <>
      <header className={`${styles?.headerWrapper} ${sticky}`}>
        <div className="container">
          <nav className={styles?.navWapper}>
            <Link href="/" className={styles?.navLogo}>
              <Image src={logo} alt="logo" priority />
            </Link>
            <ul className={styles?.navLinkWrapper}>
              {linkData?.map((val) => {
                return (
                  <>
                    <li key={val?.id}>
                      <Link
                        href={val?.route}
                        className={
                          pathname === val?.route ? styles?.activeLink : ""
                        }
                      >
                        {val?.name}
                      </Link>
                    </li>
                  </>
                );
              })}
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header
