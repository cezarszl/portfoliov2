"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useTranslation } from "react-i18next";

interface ProjectCardProps {
  id: number;
  image: string;
  title: string;
  description: string;
  technologies: string;
  gitHubLink: string;
  demoLink: string;
}

const ProjectCard = ({
  id,
  image,
  title,
  description,
  technologies,
  gitHubLink,
  demoLink,
}: ProjectCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const { t } = useTranslation();

  function handleFlip() {
    if (!isAnimating) {
      setIsAnimating(true);
      setIsFlipped(!isFlipped);
      setIsAnimating(false);
    }
  }
  return (
    <div
      onClick={handleFlip}
      className="flex w-[400px] h-[400px] rounded-md cursor-pointer border-4 border-gray-300 my-10"
    >
      <motion.div
        className="flip-card-inner w-full h-full"
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 360 }}
        transition={{ duration: 0.6, animationDirection: "normal" }}
        onAnimationComplete={() => setIsAnimating(false)}
      >
        <div
          style={{ backgroundImage: `url(${image})` }}
          className="flip-card-front w-full h-full bg-cover bg-center"
        >
          <div className="absolute inset-0 w-full h-full rounded-md bg-black opacity-0 group-hover:opacity-40" />
          {/* <div className="absolute inset-0 w-full h-full text-[20px] pb-10 hidden group-hover:flex items-center justify-center"></div> */}
        </div>
        <div
          // style={{ backgroundImage: `url(${image})` }}
          className="flip-card-back w-full h-full group relative bg-black bg-cover bg-center text-white flex flex-col px-6"
        >
          {/* <div className="absolute inset-0 w-full h-full rounded-md bg-black opacity-0 " /> */}
          <div className="flex flex-col gap-5">
            <h1 className="text-white text-2xl font-semibold">{title}</h1>
            <p className="text-white text-base text-justify">{description}</p>
            <p className="text-white text-base text-center">
              {t("projectcard.techstack")}:
              <span className="font-bold"> {technologies}</span>
            </p>
          </div>
          <div className="relative flex justify-evenly items-center w-full mt-auto">
            <Link
              href={`/projects/${id}`}
              className="flex items-center no-underline hover:underline text-white"
              onClick={(e) => e.stopPropagation()}
            >
              {t("projectcard.viewdetails")}
            </Link>
            {id === 1 && (
              <Link
                href={`/projects/${id}/casestudy`}
                className="flex items-center no-underline hover:underline text-white"
                onClick={(e) => e.stopPropagation()}
              >
                {t("projectcard.casestudy")}
              </Link>
            )}
            <Link
              href={gitHubLink}
              className="flex items-center no-underline hover:underline text-white"
              onClick={(e) => e.stopPropagation()}
            >
              {t("projectcard.github")}
            </Link>
            <Link
              href={demoLink}
              className="flex items-center no-underline hover:underline text-white"
              onClick={(e) => e.stopPropagation()}
            >
              {t("projectcard.demo")}
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
export default ProjectCard;
