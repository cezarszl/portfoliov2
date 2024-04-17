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
            Born and raised in Częstochowa, Poland. I fell in love with
            computers and technology from the first Commodore 64. For this
            reason, I educated myself at the local university in the department
            of computer science. After a long 10-year stay in Great Britain and
            gaining experience in other industries, I joined the rest of my
            family and moved to Hanover, Germany. With major changes, I decided
            to take part in CareersFoundry&apos;s bootcamp and return to what I
            love, which is programming.
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
            src="/images/about.png"
            width={1200}
            height={1600}
            alt="Cezary's personal headshot"
            className="overflow-hidden w-full object-cover border-2 border-gray-300 filter grayscale transition-all duration-500 ease-in-out cursor-cell hover:grayscale-0 hover:scale-102"
          />
        </div>
      </div>
      <div>
        <p className="text-xl font-normal text-justify mt-20">
          Besides new technologies, I am a big fan of football, tennis, and
          esports. Moreover, I try to spend every vacation traveling. In 2023, I
          completed the Caminho de Portugal, which is over 300 km of hiking
          through Portugal to Santiago de Compostela in Spain.
        </p>
        <p className="text-xl font-normal text-justify mt-12">
          I enjoy the full spectrum of web development, but I&apos;m
          particularly passionate about integrating front-end and back-end
          technologies to create seamless user experiences. On the front-end, I
          love crafting interactive and visually appealing interfaces using
          modern frameworks like React or Angular. This involves a lot of
          creative problem-solving and design thinking, which are aspects I find
          deeply rewarding. On the back-end, I&apos;m intrigued by the challenge
          of designing robust APIs and optimizing database interactions to
          ensure performance and scalability. Working with databases, whether
          SQL or NoSQL, allows me to structure data effectively and leverage it
          to drive the application&apos;s functionality. What excites me the
          most is seeing all these components come together into a cohesive and
          functional application that provides real value to users.
        </p>
      </div>
    </main>
  );
};

export default About;
