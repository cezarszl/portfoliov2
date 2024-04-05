"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { SkillData } from "../lib/constants";
import Image from "next/image";
import { Autoplay } from "swiper/modules";
import { useNavbarContext } from "../lib/navbarcontext";

const Skills = () => {
  const { isOpened } = useNavbarContext();
  return (
    <main
      className={`flex lg:w-[900px] min-h-min text-center justify-center flex-col mx-auto my-32 ${
        isOpened ? "mt-48" : ""
      }`}
    >
      <div className="text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          Skills & Technologies
        </h1>
        <p className="text-base md:text-lg lg:text-xl md:mb-10">
          Using the latest tech this world has to offer
        </p>
      </div>
      <Swiper
        slidesPerView={5}
        loop={true}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        speed={5000}
        modules={[Autoplay]}
        className="w-full mt-20"
      >
        {SkillData.map((skill, index) => (
          <SwiperSlide
            key={index}
            className="!flex flex-col items-center md:min-h-48 min-h-28"
          >
            <Image
              src={skill.Image}
              alt={skill.name}
              width={skill.width}
              height={skill.height}
              className="w-10 h-10 md:w-20 md:h-20"
            />
            <p className="absolute text-white text-[12px] md:text-[16px] my-[60px] md:my-[90px]">
              {skill.name}
            </p>
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        slidesPerView={5}
        loop={true}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          reverseDirection: true,
        }}
        speed={5000}
        modules={[Autoplay]}
        className="w-full"
      >
        {SkillData.map((skill, index) => (
          <SwiperSlide
            key={index}
            className="!flex flex-col items-center md:min-h-48 min-h-28"
          >
            <Image
              src={skill.Image}
              alt={skill.name}
              width={skill.width}
              height={skill.height}
              className="w-10 h-10 md:w-20 md:h-20"
            />
            <p className="absolute text-white text-[12px] md:text-[16px] my-[60px] md:my-[90px]">
              {skill.name}
            </p>
          </SwiperSlide>
        ))}
      </Swiper>
    </main>
  );
};

export default Skills;
