"use client";

import Image from "next/image";
import { useNavbarContext } from "../lib/navbarcontext";
import { ArrowDownTrayIcon } from "@heroicons/react/24/solid";
const About = () => {
  const { isOpened } = useNavbarContext();

  return (
    <main
      className={`flex lg:w-[900px] min-h-min text-center justify-center flex-col mx-4 md:mx-auto my-32 ${
        isOpened ? "mt-48" : ""
      }`}
    >
      <div className="text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          About me
        </h1>
        <p className="text-base md:text-lg lg:text-xl mb-10 md:mb-20">
          A few words
        </p>
      </div>
      <div className="md:flex md:gap-16">
        <div className="block mx-auto w-10/12 md:hidden md:w-6/12">
          <Image
            src="/images/about.jpeg"
            width={1200}
            height={1600}
            alt="Cezary's personal headshot"
            className="overflow-hidden w-full object-cover border-2 border-gray-300 filter grayscale transition-all duration-500 ease-in-out cursor-cell hover:grayscale-0 hover:scale-102 mb-14"
          />
        </div>
        <div className="w-full md:w-6/12">
          <p className="text-xl font-normal text-justify">
            As a Certified Full-Stack Web Developer, I bring a diverse skill set
            honed through experience in HR and recruitment, as well as rigorous
            technical training. With a track record of facilitating over 100
            successful placements at a work agency and implementing quality
            control procedures that resulted in a 20% increase in product
            reliability in a food manufacture, I excel in client relationship
            management, problem-solving, and collaboration. My proficiency in
            HTML, CSS, JavaScript, React, Node.js, and database management
            equips me to tackle complex web development projects with precision
            and efficiency.
          </p>
          <div className="mt-[3rem] flex flex-col space-y-6 sm:space-y-0 sm:flex sm:flex-row items-center justify-center sm:space-x-6">
            <a
              href="https://coach-courses-us.s3.amazonaws.com/exercises/723/61551/0835f576ed5066d2f35ccab4acc12a23/cezary-szal-resume--1-.pdf"
              target="_blank"
              rel="noreferrer"
            >
              <button className="px-[2rem] hover:bg-yellow-400 transition-all duration-200 py-[1rem] text-[18px] font-bold uppercase bg-[#55e6a5] text-black flex items-center space-x-2">
                <p>Download Resume</p>
                <ArrowDownTrayIcon className="w-[1.6rem] h-[1.7rem] text-black" />
              </button>
            </a>
          </div>
        </div>
        <div className="hidden md:block md:w-6/12">
          <Image
            src="/images/about.jpeg"
            width={1200}
            height={1600}
            alt="Cezary's personal headshot"
            className="overflow-hidden w-full object-cover border-2 border-gray-300 filter grayscale transition-all duration-500 ease-in-out cursor-cell hover:grayscale-0 hover:scale-102"
          />
        </div>
      </div>
    </main>
  );
};

export default About;
