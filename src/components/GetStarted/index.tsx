import React from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import i1 from "../../../public/1.webp";
import i2 from "../../../public/2.webp";
import i3 from "../../../public/3.webp";
import i4 from "../../../public/4.webp";

const GetStarted = () => {
  const t = useTranslations("main_page");

  const benefits = [
    { image: i2, header: t("ben1.header"), body: t("ben1.body") },
    { image: i3, header: t("ben2.header"), body: t("ben2.body") },
    { image: i1, header: t("ben3.header"), body: t("ben3.body") },
    { image: i4, header: t("ben4.header"), body: t("ben4.body") },
  ];

  return (
    <section className="section-padding bg-gradient-to-b from-black to-grey-bk">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-orange mb-6">{t("ben_head")}</h2>
          <div className="w-32 h-1 bg-orange mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-grey-bk rounded-2xl p-8 text-center h-full border border-orange/20 hover:border-orange transition-all duration-300 card-hover">
                <motion.div whileHover={{ scale: 1.1, rotate: 5 }} transition={{ duration: 0.3 }} className="mb-6">
                  <Image
                    src={benefit.image}
                    width={120}
                    height={120}
                    loading="lazy"
                    alt="benefit"
                    className="mx-auto rounded-lg shadow-lg"
                  />
                </motion.div>
                <h3 className="text-xl font-bold text-orange mb-4 group-hover:text-yellow transition-colors duration-300">
                  {benefit.header}
                </h3>
                <p className="text-white/80 leading-relaxed">{benefit.body}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link href="#handrails" className="btn-primary text-lg px-10 py-4 inline-block">
            {t("head_button")}
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default GetStarted;
