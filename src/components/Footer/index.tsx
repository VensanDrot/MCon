"use client";

import React, { useState, useRef } from "react";
import styles from "./index.module.css";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
//import { sendContactForm } from "@/lib/api";
import { AiOutlinePhone } from "react-icons/ai";
import { SiGmail } from "react-icons/si";
import { useTranslations } from "next-intl";

const Footer = () => {
  // data
  const [data, setData] = useState({
    name: "",
    email: "",
    number: "",
  });
  const t = useTranslations("footer");
  const [result, setResult] = useState("");
  const [active, setActive] = useState(true);
  const date = new Date().getFullYear();

  // handle form changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setData({
      ...data,
      [e.target.name]: value,
    });
  };

  // submit form
  const handleClick = async (event: React.FormEvent<HTMLFormElement>) => {
    // event.preventDefault();
    // setActive(false);
    // try {
    //   await sendContactForm(data)
    //     .then((res) => res.json())
    //     .then((json) => {
    //       if (!json.message.code) {
    //         setResult(json.message);
    //         setData({
    //           name: "",
    //           email: "",
    //           number: "",
    //         });
    //       } else {
    //         setResult("Error occured");
    //       }
    //       setTimeout(function () {
    //         setActive(true);
    //       }, 5500);
    //     });
    // } catch (error) {
    //   console.log(error);
    // }
  };

  return (
    <footer className={styles.main_footer}>
      <div className={styles.child_container}>
        <div>
          <h3>{t("h1")}</h3>
          <a href="mailto:@gmail.com" target="_blank">
            <SiGmail />
            @gmail.com
          </a>
          <a href="tel:" target="_blank">
            <AiOutlinePhone />
            (xxx) xxx xxxx
          </a>
          <a href="" target="_blank">
            <FaInstagram /> Instagram
          </a>
          <a href="" target="_blank">
            <FaFacebookF />
            Facebook
          </a>
        </div>
        {/* Contact Form */}

        <form
          onSubmit={(e) => {
            handleClick(e);
          }}
        >
          <h3>{t("h2")}</h3>
          {!active ? (
            <h4 className={`${result !== "Message was sent successfully" ? "error" : ""}  ${styles.success}`}>
              {result}
            </h4>
          ) : (
            ""
          )}
          <div>
            <label>{t("hold1")}: </label>
            <input
              type="text"
              name="name"
              placeholder={`${t("hold1")}`}
              value={data.name}
              onChange={(e) => handleChange(e)}
            />
          </div>

          <div>
            <label>{t("hold2")}:</label>
            <input
              type="email"
              name="email"
              placeholder={`${t("hold2")}`}
              value={data.email}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div>
            <label>{t("hold3")}:</label>
            <input
              type="text"
              name="number"
              placeholder={`${t("hold3")}`}
              onKeyPress={(event) => {
                if (!/[0-9]/.test(event.key)) {
                  event.preventDefault();
                }
              }}
              minLength={9}
              maxLength={10}
              value={data.number}
              onChange={(e) => handleChange(e)}
            />
          </div>

          <button type="submit" className={`yellow ${active ? "" : "disabled"}`} disabled={active ? false : true}>
            Submit
          </button>
        </form>
      </div>
    </footer>
  );
};

export default Footer;
