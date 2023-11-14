import React from "react";
import styles from "./index.module.css";
import { useTranslations } from "next-intl";
import Image from "next/image";
import exp from "../../../public/exp.jpg";
import ind from "../../../public/ind.jpg";
import qual from "../../../public/qual.jpg";
import hand from "../../../public/hand.png";

const GetStarted = () => {
  const t = useTranslations("main_page");
  return (
    <div className={styles.get_main_container}>
      <div className={styles.get_container}>
        <h1>{t("ben_head")}</h1>
        <ol className={styles.get_info_container}>
          <li>
            <Image src={exp} width={130} height={130} loading="lazy" alt="experience" />
            <h2>{t("ben1.header")}</h2>
            <p>{t("ben1.body")}</p>
          </li>
          <li>
            <Image src={ind} width={130} height={130} loading="lazy" alt="experience" />
            <h2>{t("ben2.header")}</h2>
            <p>{t("ben2.body")}</p>
          </li>
          <li>
            <Image src={qual} width={130} height={130} loading="lazy" alt="experience" />
            <h2>{t("ben3.header")}</h2>
            <p>{t("ben3.body")}</p>
          </li>
          <li>
            <Image src={hand} width={130} height={130} loading="lazy" alt="experience" />
            <h2>{t("ben4.header")}</h2>
            <p>{t("ben4.body")}</p>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default GetStarted;
