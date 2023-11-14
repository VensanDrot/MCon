"use client";

import { useTranslations } from "next-intl";
import styles from "./page.module.css";
import { handrail, gates, elements } from "@/components/Data";
import Slider from "@/components/Slider";
import GetStarted from "@/components/GetStarted";

export default function Index() {
  const t = useTranslations("main_page");
  return (
    <main className={`${styles.main}  `}>
      <section className={`spacer ${styles.sec}`}>
        <div className={styles.text_holder}>
          <h1>{t("head_text")}</h1>
          <a href="#handrails" className="yellow">
            {t("head_button")}
          </a>
        </div>
      </section>

      <GetStarted />
      <div id="handrails" className={`spacer ${styles.slider_container} `}>
        <h1>{t("h1")}</h1>
        <div>
          <Slider data={handrail} index={"1"} />
        </div>
      </div>
      <div id="gates" className={`spacer ${styles.slider_container} `}>
        <h1>{t("h2")}</h1>

        <div>
          <Slider data={gates} index={"2"} />
        </div>
      </div>
      <div id="elements" className={`spacer ${styles.slider_container} `}>
        <h1>{t("h3")}</h1>

        <div className={styles.last}>
          <Slider data={elements} index={"3"} />
        </div>
      </div>
    </main>
  );
}

//  <h1>{t("head_text")}</h1>
