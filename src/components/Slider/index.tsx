"use client";
import React, { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./index.css";

interface IProps {
  data: {
    link: StaticImageData;
  }[];
  index: string;
  alt: string;
}

const Slider: FC<IProps> = ({ data, index, alt }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="relative"
    >
      <div className="relative">
        <Swiper
          spaceBetween={10}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 5500,
            disableOnInteraction: false,
          }}
          navigation={{
            nextEl: `.next${index}`,
            prevEl: `.prev${index}`,
          }}
          breakpoints={{
            600: {
              slidesPerView: 1,
            },
            610: {
              slidesPerView: 2,
            },
            1400: {
              slidesPerView: 3,
            },
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          modules={[Autoplay, Navigation, Pagination]}
          className="mySwiper"
        >
          {data.map((e, index) => {
            return (
              <SwiperSlide key={index}>
                <div className="relative h-80 rounded-2xl overflow-hidden bg-grey-bk border border-orange/20 hover:border-orange transition-all duration-300 group">
                  <Image
                    src={e.link}
                    loading="lazy"
                    // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt={`${alt}`}
                    className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>

        <div
          className={`swiper-button-next next${index} !text-orange !bg-white/10 !w-12 !h-12 !rounded-full backdrop-blur-sm hover:!bg-orange/20 transition-all duration-300`}
        ></div>
        <div
          className={`swiper-button-prev prev${index} !text-orange !bg-white/10 !w-12 !h-12 !rounded-full backdrop-blur-sm hover:!bg-orange/20 transition-all duration-300`}
        ></div>
      </div>
    </motion.div>
  );
};

export default Slider;
