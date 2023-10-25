"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Navigation, FreeMode, Thumbs, EffectCoverflow } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { data } from "../../../_data/db";
import { BuildingCard } from "../BuildingCard";

export function BuildindSlider() {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

  return (
    <motion.div
      initial={{ x: 400, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {
        <Swiper
          effect={"coverflow"}
          speed={1000}
          spaceBetween={80}
          allowTouchMove={true}
          className="w-[40rem]"
          watchSlidesProgress={true}
          thumbs={{
            swiper:
              thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
          }}
          modules={[FreeMode, Navigation, Thumbs, EffectCoverflow]}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
        >
          <>
            {data.buildings.map((building) => {
              return (
                <SwiperSlide key={building.id}>
                  <BuildingCard building={building} />
                </SwiperSlide>
              );
            })}
          </>
        </Swiper>
      }
    </motion.div>
  );
}
