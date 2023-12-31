"use client";
import React, { FC } from "react";
import styles from "./index.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import Image, { StaticImageData } from "next/image";

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
    <>
      <div className={styles.swiper_box}>
        <Swiper
          spaceBetween={30}
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
          pagination={true}
          modules={[Autoplay, Navigation, Pagination]}
          className="mySwiper"
        >
          {data.map((e, index) => {
            return (
              <SwiperSlide key={index}>
                <Image src={e.link} fill loading="lazy" sizes="height: auto; width: auto;" alt={`${alt}`} />
              </SwiperSlide>
            );
          })}
        </Swiper>

        <div className={`swiper-button-next next${index}`}></div>
        <div className={`swiper-button-prev prev${index}`}></div>
      </div>
    </>
  );
};

export default Slider;
