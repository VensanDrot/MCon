"use client";
import React from "react";
import styles from "./index.module.css";
import { useTranslations } from "next-intl";

const Footer = () => {
  const t = useTranslations("footer");
  const date = new Date().getFullYear();

  return (
    <footer className={styles.main_footer}>
      <h1>MetalWorks</h1>
      <h1>
        &copy; {t("line1")} {date}
      </h1>
    </footer>
  );
};

export default Footer;
