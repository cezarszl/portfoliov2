"use client";
import Image from "next/image";
import { useNavbarContext } from "./lib/navbarcontext";
import TextEffect from "./components/TextEffect";
import { ArrowDownTrayIcon } from "@heroicons/react/24/solid";
export default function Home() {
  const { isOpened } = useNavbarContext();
  return (
    <main
      className={`flex lg:w-[900px] min-h-min text-center justify-center flex-col mx-4 md:mx-auto my-32 ${
        isOpened ? "mt-48" : ""
      }`}
    >
      <div className="max-w-32 sm:max-w-64 lg:max-w-md xl:max-w-lg 2xl:max-w-xl mx-auto">
        <Image
          src="/images/profile.webp"
          className="rounded-full border-4 border-gray-300 shadow-lg transform transition-all md:hover:scale-105"
          width={300}
          height={300}
          alt="Cezary's personal headshot"
        />
      </div>
      <div className="text-center mt-8 md:mt-12">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          Hey, I&apos;m Cezary 👋
        </h1>
        <TextEffect />
      </div>
      <div className="mt-[2rem] flex-col space-y-6 sm:space-y-0 sm:flex sm:flex-row items-center justify-center sm:space-x-6">
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
    </main>
  );
}
