"use client";
import React from "react";
import { useSearchParams } from "next/navigation";
import { handrail, elements, gates } from "@/components/Data";
import Image from "next/image";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { motion } from "framer-motion";

const Images = () => {
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
    <div className="min-h-screen bg-black text-white pt-10">
      <div className="container-custom py-16 px-2">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-orange mb-6">{product}</h1>
          <div className="w-32 h-1 bg-orange mx-auto"></div>
        </motion.div>

        {/* Image Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {obj.map((e, ind) => {
            console.log(e);
            return (
              <motion.div
                key={ind}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: ind * 0.1 }}
                whileHover={{
                  scale: 1.05,
                  y: -10,
                  transition: { duration: 0.3 },
                }}
                className="group"
              >
                <div className="relative h-80 rounded-2xl overflow-hidden bg-grey-bk border border-orange/20 hover:border-orange transition-all duration-300 shadow-lg hover:shadow-2xl">
                  <Image
                    src={e.link}
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    fill
                    alt={product || ""}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-grey-bk to-black rounded-3xl p-12 border border-orange/20">
            <h3 className="text-3xl font-bold text-orange mb-6">Love What You See?</h3>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              Contact us for a free consultation and quote for your custom project
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/#footer" className="btn-primary text-lg px-10 py-4 inline-block">
                Get Your Quote
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Images;
