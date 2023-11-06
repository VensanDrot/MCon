"use client";
import React, { useState } from "react";
import { Squash as Hamburger } from "hamburger-react";
import Image from "next/image";
import styles from "./index.module.css";
import img from "../../../public/logo.png";

const Nav = () => {
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
          <a href="#handrails">Перила</a>
          <a href="#gates">Ворота и двери</a>
          <a href="#elements">Элементы</a>
          <a href="#handrails" className="yellow">
            Просмотреть каталог
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
            Перила
          </a>
          <a href="#gates" onClick={() => setOpen(!isOpen)}>
            Ворота и двери
          </a>
          <a href="#elements" onClick={() => setOpen(!isOpen)}>
            Элементы
          </a>
          <a href="#handrails" className="yellow" onClick={() => setOpen(!isOpen)}>
            Просмотреть каталог
          </a>
        </div>
      </div>
    </header>
  );
};

export default Nav;
