"use client";

import React, { useState, useRef } from "react";
import styles from "./index.module.css";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
//import { sendContactForm } from "@/lib/api";
import { AiOutlinePhone } from "react-icons/ai";
import { SiGmail } from "react-icons/si";
import { useLocale, useTranslations } from "next-intl";
import { sendContactForm } from "@/lib/api";

const Footer = () => {
  // data
  const date = new Date().getFullYear();
  const loc = useLocale();
  const [data, setData] = useState({
    name: "",
    email: "",
    number: "",
    locale: loc,
  });

  const [error, setError] = useState({
    name: "",
    email: "",
    number: "",
  });

  const t = useTranslations("footer");
  const [result, setResult] = useState("");
  const [active, setActive] = useState(true);

  // handle form changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setData({
      ...data,
      [e.target.name]: value,
      locale: loc,
    });
  };

  // submit form
  const handleClick = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setActive(false);

    setError({
      name: "",
      email: "",
      number: "",
    });

    if (data.name.replace(/\s+/g, "").length < 1 || !data.name || data.email.split("@")[0].length < 1) {
      setError({
        ...error,
        name: t("name_er"),
      });
      setActive(true);
      return;
    }

    if (data.number.replace(/\s+/g, "").length <= 9 || !data.number) {
      setError({
        ...error,
        number: t("number_er"),
      });
      setActive(true);
      return;
    }

    if (data.email.replace(/\s+/g, "").length < 1 || !data.email) {
      setError({
        ...error,
        email: t("email_er"),
      });
      setActive(true);
      return;
    }

    try {
      await sendContactForm(data)
        .then((res) => res.json())
        .then((json) => {
          if (!json.message.code) {
            setResult(json.message);
            setData({
              name: "",
              email: "",
              number: "",
              locale: "",
            });
          } else {
            setResult("Error occured");
          }

          setTimeout(function () {
            setActive(true);
          }, 5500);
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <footer id="footer" className={styles.main_footer}>
      <div className={styles.child_container}>
        <div>
          <h3>{t("h1")}</h3>
          <a href="mailto:ironcraft.us@gmail.com" target="_blank">
            <SiGmail />
            ironcraft.us@gmail.com
          </a>
          <a href="tel:9172396443" target="_blank">
            <AiOutlinePhone />
            EN: (917) 239 6443
          </a>
          <a href="tel:3473685916" target="_blank">
            <AiOutlinePhone />
            RU: (347) 368 5916
          </a>
          <a href="https://www.instagram.com/ironcraft_ny/" target="_blank">
            <FaInstagram /> Instagram
          </a>
          <a href="https://facebook.com/ironcraft.us" target="_blank">
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
            <h4
              className={`${
                result !== "Message was sent successfully!" && result !== "Письмо успешно отправлено!" ? "error" : ""
              }  ${styles.success}`}
            >
              {result}
            </h4>
          ) : (
            ""
          )}
          <div>
            <label>{t("hold1")}: </label>
            <label className="error">{error.name}</label>
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
            <label className="error">{error.email}</label>
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
            <label className="error">{error.number}</label>
            <input
              type="text"
              name="number"
              placeholder={`${t("hold3")}`}
              onKeyPress={(event) => {
                if (!/[0-9]/.test(event.key)) {
                  event.preventDefault();
                }
              }}
              maxLength={10}
              value={data.number}
              onChange={(e) => handleChange(e)}
            />
          </div>

          <button type="submit" className={`yellow ${active ? "" : "disabled"}`} disabled={active ? false : true}>
            {t("button")}
          </button>
        </form>
      </div>
      <div className={styles.reserved}>
        <small>&copy; IronCraft. All rights reserved. {date} </small>
      </div>
    </footer>
  );
};

export default Footer;
