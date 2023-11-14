"use client";
import React, { useState } from "react";
import { Squash as Hamburger } from "hamburger-react";
import Image from "next/image";
import styles from "./index.module.css";
import img from "../../../public/logo.png";
import usa from "../../../public/usa-flag-round-circle-icon.svg";
import rus from "../../../public/russia-flag-round-circle-icon.svg";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";

const Nav = () => {
  const t = useTranslations("nav");
  const [navbar, setNavbar] = useState(false);
  const [isOpen, setOpen] = useState(false);

  const isBrowser = () => typeof window !== "undefined";

  const changeBackground = () => {
    window.scrollY >= 100 ? setNavbar(true) : setNavbar(false);
  };

  if (isBrowser()) {
    window.addEventListener("scroll", changeBackground);
  }

  return (
    <header
      className={` ${navbar ? `${styles.nav_container} ${styles.nav_active}` : styles.nav_container} ${
        isOpen ? styles.nav_container_mobile : ""
      } `}
    >
      <div className={styles.nav_box}>
        <a href="/#" className={styles.nav_img_con}>
          <Image src={img} alt="Chilling" className={styles.nav_img} height={100} />
        </a>

        <div className={styles.Hamburger_container}>
          <Hamburger size={35} toggled={isOpen} toggle={setOpen} />
        </div>

        {/* PC Version */}
        <div className={styles.nav_link_holder}>
          <a href="#handrails">{t("l1")}</a>
          <a href="#gates">{t("l2")}</a>
          <a href="#elements">{t("l3")}</a>
          <Link href={useLocale() === "ru" ? "/en" : "/ru"}>
            <Image
              src={useLocale() === "ru" ? usa : rus}
              height={50}
              width={50}
              alt={useLocale() === "ru" ? "/en" : "/ru"}
            />
          </Link>

          <a href="#handrails" className="yellow">
            {t("l4")}
          </a>
        </div>

        {/* Mobile */}

        <div
          className={`
          ${isOpen ? `${styles.nav_link_mobile} ${styles.nav_link_mobile_active}` : styles.nav_link_mobile} ${
            styles.nav_link_holder
          } `}
        >
          <a href="#handrails" onClick={() => setOpen(!isOpen)}>
            {t("l1")}
          </a>
          <a href="#gates" onClick={() => setOpen(!isOpen)}>
            {t("l2")}
          </a>
          <a href="#elements" onClick={() => setOpen(!isOpen)}>
            {t("l3")}
          </a>
          <Link href={useLocale() === "ru" ? "/en" : "/ru"}>
            <Image
              src={useLocale() === "ru" ? usa : rus}
              height={50}
              width={50}
              alt={useLocale() === "ru" ? "/en" : "/ru"}
            />
          </Link>
          <a href="#handrails" className="yellow" onClick={() => setOpen(!isOpen)}>
            {t("l4")}
          </a>
        </div>
      </div>
    </header>
  );
};

export default Nav;
