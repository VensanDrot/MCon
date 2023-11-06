"use client";
import React, { FC } from "react";
import styles from "./index.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./index.css";

interface IProps {
  data: {
    link: string;
  }[];
  size: number | undefined;
  index: string;
}

const Slider: FC<IProps> = ({ data, size, index }) => {
  const calc = () => {
    if (!size) return 3;
    if (size > 1400) {
      return 3;
    } else if (size > 500) {
      return 2;
    } else {
      return 1;
    }
  };

  return (
    <>
      <div className={styles.swiper_box}>
        <Swiper
          slidesPerView={calc()}
          spaceBetween={30}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation={{
            nextEl: `.next${index}`,
            prevEl: `.prev${index}`,
          }}
          modules={[Autoplay, Navigation]}
          className="mySwiper"
        >
          {data.map((e, index) => {
            return (
              <SwiperSlide key={index}>
                <Image
                  alt="The guitarist in the concert."
                  src={e.link}
                  width={100}
                  height={100}
                  layout="responsive"
                  loading="lazy"
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal"></div>
        <div className={`swiper-button-next next${index}`}></div>
        <div className={`swiper-button-prev prev${index}`}></div>
      </div>
    </>
  );
};

export default Slider;
