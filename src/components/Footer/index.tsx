import React from "react";
import styles from "./index.module.css";

const Footer = () => {
  const date = new Date().getFullYear();

  return (
    <footer className={styles.main_footer}>
      <h1>MetalWorks</h1>
      <h1>&copy; All rights reserved. {date}</h1>
    </footer>
  );
};

export default Footer;
