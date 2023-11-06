"use client";
import React, { useState } from "react";
import styles from "./page.module.css";
import Slider from "@/components/Slider";
import { handrail, elements, gates } from "@/components/Data";

export default function Home() {
  const [width, setWidth] = useState<number>(window.innerWidth);
  const isBrowser = () => typeof window !== "undefined";
  console.log(width);
  const changeWidth = () => {
    setWidth(window.innerWidth);
  };

  if (isBrowser()) {
    window.addEventListener("resize", changeWidth);
  }

  return (
    <main className={`${styles.main}  `}>
      <section className={`spacer ${styles.sec}`}>
        <div className={styles.text_holder}>
          <h1>Превращаем метал в искуство!</h1>
          <a href="#handrails" className="yellow">
            Посмотреть коталог
          </a>
        </div>
      </section>

      <div id="handrails" className={`spacer ${styles.slider_container} `}>
        <h1>Перила</h1>
        <div>
          <Slider data={handrail} size={width} index={"1"} />
        </div>
      </div>
      <div id="gates" className={`spacer ${styles.slider_container} `}>
        <h1>Ворота и двери</h1>

        <div>
          <Slider data={gates} size={width} index={"2"} />
        </div>
      </div>
      <div id="elements" className={`spacer ${styles.slider_container} `}>
        <h1>Элементы</h1>

        <div>
          <Slider data={elements} size={width} index={"3"} />
        </div>
      </div>
    </main>
  );
}
