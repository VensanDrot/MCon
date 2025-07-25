"use client";

import { useTranslations } from "next-intl";
import { handrail, gates, elements } from "@/components/Data";
import Slider from "@/components/Slider";
import Link from "next/link";
import GetStarted from "@/components/GetStarted";
import { motion } from "framer-motion";

export default function Index() {
  const t = useTranslations("main_page");

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/slide_7.jpg')`,
          }}
        />
        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-orange to-yellow bg-clip-text text-transparent"
          >
            {t("head_text")}
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link href="#handrails" className="btn-primary text-lg px-8 py-4 animate-pulse-slow">
              {t("head_button")}
            </Link>
            <Link href="#footer" className="btn-secondary text-lg px-8 py-4">
              {t("head_button2")}
            </Link>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-orange rounded-full flex justify-center">
            <div className="w-1 h-3 bg-orange rounded-full mt-2 animate-bounce"></div>
          </div>
        </motion.div>
      </section>

      {/* Benefits Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <GetStarted />
      </motion.div>

      {/* Portfolio Sections */}
      <div id="handrails" className="section-padding bg-gradient-to-b from-black to-grey-bk">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <Link
              href={{
                pathname: `galery`,
                query: { type: "handrails" },
              }}
              className="group"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-orange mb-4 group-hover:text-yellow transition-colors duration-300">
                {t("h1")}
              </h2>
              <div className="w-24 h-1 bg-orange mx-auto group-hover:w-32 transition-all duration-300"></div>
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Slider alt="Handrails" data={handrail} index={"1"} />
          </motion.div>
        </div>
      </div>

      <div id="gates" className="section-padding bg-grey-bk">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <Link
              href={{
                pathname: `galery`,
                query: { type: "gates" },
              }}
              className="group"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-orange mb-4 group-hover:text-yellow transition-colors duration-300">
                {t("h2")}
              </h2>
              <div className="w-24 h-1 bg-orange mx-auto group-hover:w-32 transition-all duration-300"></div>
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Slider alt="Gates" data={gates} index={"2"} />
          </motion.div>
        </div>
      </div>

      <div id="elements" className="section-padding bg-gradient-to-b from-grey-bk to-black">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <Link
              href={{
                pathname: `galery`,
                query: { type: "elements" },
              }}
              className="group"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-orange mb-4 group-hover:text-yellow transition-colors duration-300">
                {t("h3")}
              </h2>
              <div className="w-24 h-1 bg-orange mx-auto group-hover:w-32 transition-all duration-300"></div>
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Slider alt="Elements" data={elements} index={"3"} />
          </motion.div>
        </div>
      </div>

      {/* Call to Action Section */}
      <section className="section-padding bg-gradient-to-r from-orange to-redish relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative z-10 container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">Ready to Start Your Project?</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Transform your space with our expert metalwork craftsmanship
            </p>
            <Link
              href="#footer"
              className="inline-block bg-white text-orange px-8 py-4 rounded-lg font-bold text-lg hover:bg-black hover:text-white transition-all duration-300 transform hover:scale-105"
            >
              Get Free Quote
            </Link>
          </motion.div>
        </div>

        {/* Floating elements */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-10 left-10 w-20 h-20 border-2 border-white/20 rounded-full"
        />
        <motion.div
          animate={{
            y: [0, 20, 0],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute bottom-10 right-10 w-16 h-16 border-2 border-white/20 rounded-full"
        />
      </section>
    </main>
  );
}
