"use client";

import React, { useState } from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { AiOutlinePhone } from "react-icons/ai";
import { SiGmail } from "react-icons/si";
import { useLocale, useTranslations } from "next-intl";
import { sendContactForm } from "@/lib/api";
import { motion } from "framer-motion";
import { fbqTrack, fbqCustom } from "@/lib/fbq";

const Footer = () => {
  const date = new Date().getFullYear();
  const loc = useLocale();
  const t = useTranslations("footer");

  const [data, setData] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
    locale: loc,
  });

  const [error, setError] = useState({
    name: "",
    email: "",
    number: "",
  });

  const [result, setResult] = useState("");
  const [active, setActive] = useState(true);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setData((prev) => ({
      ...prev,
      [e.target.name]: value,
      locale: loc,
    }));
  };

  const fail = (field: "name" | "email" | "number", msg: string) => {
    setError((prev) => ({ ...prev, [field]: msg }));
    setActive(true);
    // Track validation error
    fbqCustom("ContactFormError", { reason: field, locale: loc, source: "footer" });
  };

  const handleClick = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setActive(false);
    setError({ name: "", email: "", number: "" });

    // --- Client-side validation
    if (data.name.replace(/\s+/g, "").length < 1 || !data.name || data.email.split("@")[0].length < 1) {
      return fail("name", t("name_er"));
    }
    if (data.number.replace(/\s+/g, "").length <= 9 || !data.number) {
      return fail("number", t("number_er"));
    }
    if (data.email.replace(/\s+/g, "").length < 1 || !data.email) {
      return fail("email", t("email_er"));
    }

    try {
      const res = await sendContactForm(data);
      const json = await res.json();

      if (!json?.message?.code) {
        setResult(json.message);

        // Reset form
        setData({
          name: "",
          email: "",
          number: "",
          message: "",
          locale: "",
        });

        // --- Tracking on success
        fbqTrack("Lead", {
          content_name: "Footer Contact Form",
          locale: loc,
          source: "footer",
        });
        fbqCustom("ContactFormSubmitted", {
          locale: loc,
          source: "footer",
        });
      } else {
        setResult("Error occured");
        fbqCustom("ContactFormError", { reason: "server_response_code", locale: loc, source: "footer" });
      }
    } catch (e) {
      console.log(e);
      setResult("Error occured");
      fbqCustom("ContactFormError", { reason: "network_or_throw", locale: loc, source: "footer" });
    } finally {
      setTimeout(() => setActive(true), 5500);
    }
  };

  return (
    <footer id="footer" className="bg-black text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 max-lg:p-3 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-orange mb-4">{t("h1")}</h3>

            <div className="space-y-4">
              <motion.a
                href="mailto:ironcraft.us@gmail.com"
                target="_blank"
                className="flex items-center space-x-3 text-white hover:text-orange transition-colors duration-300 group"
                whileHover={{ x: 10 }}
              >
                <SiGmail className="text-2xl text-orange group-hover:scale-110 transition-transform duration-300" />
                <span>ironcraft.us@gmail.com</span>
              </motion.a>

              <motion.a
                href="tel:3473685913"
                target="_blank"
                className="flex items-center space-x-3 text-white hover:text-orange transition-colors duration-300 group"
                whileHover={{ x: 10 }}
              >
                <AiOutlinePhone className="text-2xl text-orange group-hover:scale-110 transition-transform duration-300" />
                <span>EN: (347) 368 5913</span>
              </motion.a>

              <motion.a
                href="tel:3473685916"
                target="_blank"
                className="flex items-center space-x-3 text-white hover:text-orange transition-colors duration-300 group"
                whileHover={{ x: 10 }}
              >
                <AiOutlinePhone className="text-2xl text-orange group-hover:scale-110 transition-transform duration-300" />
                <span>RU: (347) 368 5916</span>
              </motion.a>

              <motion.a
                href="https://www.instagram.com/ironcraft_ny/"
                target="_blank"
                className="flex items-center space-x-3 text-white hover:text-orange transition-colors duration-300 group"
                whileHover={{ x: 10 }}
              >
                <FaInstagram className="text-2xl text-orange group-hover:scale-110 transition-transform duration-300" />
                <span>Instagram</span>
              </motion.a>

              <motion.a
                href="https://facebook.com/ironcraft.us"
                target="_blank"
                className="flex items-center space-x-3 text-white hover:text-orange transition-colors duration-300 group"
                whileHover={{ x: 10 }}
              >
                <FaFacebookF className="text-2xl text-orange group-hover:scale-110 transition-transform duration-300" />
                <span>Facebook</span>
              </motion.a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleClick} className="bg-grey-bk rounded-2xl p-5 border border-orange/20 ">
              <h3 className="text-3xl font-bold text-orange mb-6 text-center">{t("h2")}</h3>

              {!active && result && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`mb-6 p-4 rounded-lg text-center ${
                    result !== "Message was sent successfully!" && result !== "Письмо успешно отправлено!"
                      ? "bg-red-500/20 text-red-400"
                      : "bg-green-500/20 text-green-400"
                  }`}
                >
                  {result}
                </motion.div>
              )}

              <div className="space-y-6">
                <div>
                  <label className="block text-white font-semibold mb-2">{t("hold1")}</label>
                  {error.name && <p className="text-red-400 text-sm mb-2">{error.name}</p>}
                  <input
                    type="text"
                    name="name"
                    placeholder={t("hold1")}
                    value={data.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-black border border-orange/30 rounded-lg text-white focus:border-orange focus:outline-none transition-colors duration-300"
                  />
                </div>

                <div>
                  <label className="block text-white font-semibold mb-2">{t("hold2")}</label>
                  {error.email && <p className="text-red-400 text-sm mb-2">{error.email}</p>}
                  <input
                    type="email"
                    name="email"
                    placeholder={t("hold2")}
                    value={data.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-black border border-orange/30 rounded-lg text-white focus:border-orange focus:outline-none transition-colors duration-300"
                  />
                </div>

                <div>
                  <label className="block text-white font-semibold mb-2">{t("hold3")}</label>
                  {error.number && <p className="text-red-400 text-sm mb-2">{error.number}</p>}
                  <input
                    type="text"
                    name="number"
                    placeholder={t("hold3")}
                    onKeyPress={(event) => {
                      if (!/[0-9]/.test(event.key)) event.preventDefault();
                    }}
                    maxLength={10}
                    value={data.number}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-black border border-orange/30 rounded-lg text-white focus:border-orange focus:outline-none transition-colors duration-300"
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={!active}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => fbqCustom("ContactFormAttempt", { source: "footer", locale: loc })}
                  className={`w-full py-4 px-6 rounded-lg font-bold text-lg transition-all duration-300 ${
                    active ? "bg-orange text-white hover:bg-redish" : "bg-gray-600 text-gray-400 cursor-not-allowed"
                  }`}
                >
                  {t("button")}
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>

      <div className="border-t border-orange/20 py-6">
        <div className="container-custom text-center">
          <small className="text-white/60">&copy; IronCraft. All rights reserved. {date}</small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
