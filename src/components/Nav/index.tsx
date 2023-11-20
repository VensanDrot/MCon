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
import { usePathname, useRouter } from "next-intl/client";
import { useSearchParams } from "next/navigation";

const Nav = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const query = searchParams?.get("type");
  const t = useTranslations("nav");
  const cur = useLocale();
  const url = query !== null ? `?type=${query}` : "";
  //navbar control
  const [navbar, setNavbar] = useState(false);
  const [isOpen, setOpen] = useState(false);

  //console.log(url);

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
        <Link href="/#" className={styles.nav_img_con}>
          <Image src={img} alt="Chilling" className={styles.nav_img} height={70} />
        </Link>

        <div className={styles.Hamburger_container}>
          <Hamburger size={35} toggled={isOpen} toggle={setOpen} />
        </div>

        {/* PC Version */}
        <div className={styles.nav_link_holder}>
          <Link
            href={{
              pathname: `galery`,
              query: {
                type: "handrails",
              },
            }}
          >
            {t("l1")}
          </Link>
          <Link
            href={{
              pathname: `galery`,
              query: {
                type: "gates",
              },
            }}
          >
            {t("l2")}
          </Link>
          <Link
            href={{
              pathname: `galery`,
              query: {
                type: "elements",
              },
            }}
          >
            {t("l3")}
          </Link>

          <button
            onClick={() => {
              router.replace(pathname + url, { locale: cur === "ru" ? "en" : "ru" });
            }}
          >
            <Image src={cur === "ru" ? usa : rus} height={50} width={50} alt={cur === "ru" ? "/en" : "/ru"} />
          </button>

          <Link href="/#handrails" className="yellow">
            {t("l4")}
          </Link>
        </div>

        {/* Mobile */}

        <div
          className={`
          ${isOpen ? `${styles.nav_link_mobile} ${styles.nav_link_mobile_active}` : styles.nav_link_mobile} ${
            styles.nav_link_holder
          } `}
        >
          <Link
            href={{
              pathname: `galery`,
              query: {
                type: "handrails",
              },
            }}
            onClick={() => setOpen(!isOpen)}
          >
            {t("l1")}
          </Link>
          <Link
            href={{
              pathname: `galery`,
              query: {
                type: "gates",
              },
            }}
            onClick={() => setOpen(!isOpen)}
          >
            {t("l2")}
          </Link>
          <Link
            href={{
              pathname: `galery`,
              query: {
                type: "elements",
              },
            }}
            onClick={() => setOpen(!isOpen)}
          >
            {t("l3")}
          </Link>
          <button
            onClick={() => {
              router.replace(pathname + url, { locale: cur === "ru" ? "en" : "ru" });
            }}
          >
            <Image src={cur === "ru" ? usa : rus} height={50} width={50} alt={cur === "ru" ? "/en" : "/ru"} />
          </button>
          <Link href="/#handrails" className="yellow" onClick={() => setOpen(!isOpen)}>
            {t("l4")}
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Nav;

//  href={{
//     pathname: `bookingpage`,
//     query: {
//       icon: e.icon,
//       description: e.description,
//       product: e.name,
//       price: e.price,
//       type: e.productType,
//     },
//   }}
