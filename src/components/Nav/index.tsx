"use client";
import React, { useEffect, useState } from "react";
import { Squash as Hamburger } from "hamburger-react";
import Image from "next/image";
import img from "../../../public/logo.webp";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "next-intl/client";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { useSearchParams } from "next/navigation";
import { Switch } from "antd";
import { motion } from "framer-motion";

const Nav = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const query = searchParams?.get("type");
  const t = useTranslations("nav");
  const cur = useLocale();
  const url = query !== null ? `?type=${query}` : "";
  const [navbar, setNavbar] = useState(false);
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    const isBrowser = () => typeof window !== "undefined";

    const changeBackground = () => {
      window.scrollY >= 100 ? setNavbar(true) : setNavbar(false);
    };

    if (isBrowser()) {
      window.addEventListener("scroll", changeBackground);
    }
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 inset-0 w-screen transition-all duration-500 ${
        navbar ? "bg-black/95 backdrop-blur-sm shadow-lg" : "bg-black/80"
      } ${isOpen ? "h-96 overflow-hidden" : "h-20"}`}
    >
      <div className="flex justify-between items-center h-20 w-11/12 mx-auto">
        <Link href="/#" className="flex items-center h-20 z-50">
          <Image src={img} alt="IronCraft Logo" height={50} className="w-auto max-lg:h-[50px]" />
        </Link>

        <div className="lg:hidden flex items-center">
          <Hamburger size={35} color="#f58842" toggled={isOpen} toggle={setOpen} />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-6 text-white uppercase text-lg font-medium">
          <Link
            href={{
              pathname: `galery`,
              query: { type: "handrails" },
            }}
            className="hover:text-orange transition-colors duration-300"
          >
            {t("l1")}
          </Link>
          <Link
            href={{
              pathname: `galery`,
              query: { type: "gates" },
            }}
            className="hover:text-orange transition-colors duration-300"
          >
            {t("l2")}
          </Link>
          <Link
            href={{
              pathname: `galery`,
              query: { type: "elements" },
            }}
            className="hover:text-orange transition-colors duration-300"
          >
            {t("l3")}
          </Link>

          <Switch
            defaultChecked={cur !== "en"}
            checkedChildren="EN"
            unCheckedChildren="RU"
            onChange={() => {
              setTimeout(() => {
                router.replace(pathname + url, { locale: cur === "ru" ? "en" : "ru" });
              }, 150);
            }}
            style={{ backgroundColor: cur === "ru" ? "orange" : "orange" }}
          />

          <Link href="/#handrails" className="btn-primary">
            {t("l4")}
          </Link>

          {/* Social Icons */}
          <div className="flex items-center space-x-2">
            <motion.a
              href="https://facebook.com/ironcraft.us"
              target="_blank"
              whileHover={{ scale: 1.1 }}
              className="relative group"
            >
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-300">
                <FaFacebookF className="text-xl text-white" />
              </div>
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-white text-black text-sm rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                Facebook
              </div>
            </motion.a>

            <motion.a
              href="https://www.instagram.com/ironcraft_ny/"
              target="_blank"
              whileHover={{ scale: 1.1 }}
              className="relative group"
            >
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors duration-300">
                <FaInstagram className="text-xl text-white" />
              </div>
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-white text-black text-sm rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                Instagram
              </div>
            </motion.a>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden absolute top-20 left-0 w-full bg-black transition-all duration-500 overflow-hidden ${
            isOpen ? "h-80" : "h-0"
          }`}
        >
          <div className="flex flex-col items-center space-y-6 py-8 text-white uppercase text-lg">
            <Link
              href={{
                pathname: `galery`,
                query: { type: "handrails" },
              }}
              onClick={() => setOpen(false)}
              className="hover:text-orange transition-colors duration-300"
            >
              {t("l1")}
            </Link>
            <Link
              href={{
                pathname: `galery`,
                query: { type: "gates" },
              }}
              onClick={() => setOpen(false)}
              className="hover:text-orange transition-colors duration-300"
            >
              {t("l2")}
            </Link>
            <Link
              href={{
                pathname: `galery`,
                query: { type: "elements" },
              }}
              onClick={() => setOpen(false)}
              className="hover:text-orange transition-colors duration-300"
            >
              {t("l3")}
            </Link>

            <Switch
              defaultChecked={cur !== "en"}
              checkedChildren="EN"
              unCheckedChildren="RU"
              onChange={() => {
                setTimeout(function () {
                  router.replace(pathname + url, { locale: cur === "ru" ? "en" : "ru" });
                }, 150);
              }}
            />

            <Link href="/#handrails" className="btn-primary" onClick={() => setOpen(false)}>
              {t("l4")}
            </Link>

            {/* Mobile Social Icons */}
            <div className="flex items-center space-x-4">
              <motion.a
                href="https://facebook.com/ironcraft.us"
                target="_blank"
                whileHover={{ scale: 1.1 }}
                className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-300"
              >
                <FaFacebookF className="text-xl text-white" />
              </motion.a>

              <motion.a
                href="https://www.instagram.com/ironcraft_ny/"
                target="_blank"
                whileHover={{ scale: 1.1 }}
                className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors duration-300"
              >
                <FaInstagram className="text-xl text-white" />
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Nav;
