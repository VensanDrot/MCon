import React from "react";
import styles from "./index.module.css";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import i1 from "../../../public/1.webp";
import i2 from "../../../public/2.webp";
import i3 from "../../../public/3.webp";
import i4 from "../../../public/4.webp";

const GetStarted = () => {
  const t = useTranslations("main_page");
  return (
    <div className={styles.get_main_container}>
      <div className={styles.get_container}>
        <h1>{t("ben_head")}</h1>
        <ol className={styles.get_info_container}>
          <li>
            <Image src={i2} width={130} height={130} loading="lazy" alt="experience" />
            <h2>{t("ben1.header")}</h2>
            <p>{t("ben1.body")}</p>
          </li>
          <li>
            <Image src={i3} width={130} height={130} loading="lazy" alt="experience" />
            <h2>{t("ben2.header")}</h2>
            <p>{t("ben2.body")}</p>
          </li>
          <li>
            <Image src={i1} width={130} height={130} loading="lazy" alt="experience" />
            <h2>{t("ben3.header")}</h2>
            <p>{t("ben3.body")}</p>
          </li>
          <li>
            <Image src={i4} width={130} height={130} loading="lazy" alt="experience" />
            <h2>{t("ben4.header")}</h2>
            <p>{t("ben4.body")}</p>
          </li>
        </ol>
        <Link href={"#handrails"} className="yellow">
          {t("head_button")}
        </Link>
      </div>
    </div>
  );
};

export default GetStarted;
