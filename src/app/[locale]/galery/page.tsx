"use client";
import React from "react";
import { useSearchParams } from "next/navigation";
import { handrail, elements, gates } from "@/components/Data";
import styles from "./index.module.css";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { object } from "prop-types";

const Images = () => {
  // queries for data on the page
  const searchParams = useSearchParams();
  const t = useTranslations("galery");
  let product = searchParams?.get("type");
  let obj;

  if (product === "handrails") {
    product = t("l3");
    obj = handrail;
  } else if (product === "elements") {
    product = t("l2");
    obj = elements;
  } else {
    product = t("l1");
    obj = gates;
  }

  return (
    <div className={`spacer ${styles.main_cont}`}>
      <div className={styles.container}>
        <h1>{product}</h1>
        <div className={styles.img_grid}>
          {obj.map((e, ind) => {
            return (
              <div key={ind} className={styles.img_cont}>
                <Image
                  src={e.link}
                  className={styles.img}
                  loading="lazy"
                  sizes="width: 300px; height:300px;"
                  fill
                  alt={product ? product : ""}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Images;
