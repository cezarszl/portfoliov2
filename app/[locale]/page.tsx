"use client";
import Image from "next/image";
import { useNavbarContext } from "./lib/navbarcontext";
import TextEffect from "./components/TextEffect";
import { ArrowDownTrayIcon } from "@heroicons/react/24/solid";
import { EnvelopeIcon } from "@heroicons/react/24/solid";
import { BriefcaseIcon } from "@heroicons/react/24/solid";
import Skills from "./skills/page";
import Projects from "./projects/page";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { isOpened } = useNavbarContext();
  const { t } = useTranslation();
  return (
    <main className="flex w-full max-w-[900px] min-h-[100vh] text-center justify-center flex-col mx-4 md:mx-auto py-12">
      {/* <div className="max-w-32 sm:max-w-64 lg:max-w-md xl:max-w-lg 2xl:max-w-xl mx-auto">
        <Image
          src="/images/profile.png"
          className="rounded-full border-4 border-gray-300 shadow-lg transform transition-all"
          width={200}
          height={200}
          layout="fixed"
          alt="Cezary's personal headshot"
        />
      </div>
      <div className="text-center mt-8 md:mt-12 min-h-[4rem]">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          {t("home.welcome")}
        </h1>
        <TextEffect
          textEffect1={t("home.texteffect1")}
          textEffect2={t("home.texteffect2")}
          textEffect3={t("home.texteffect3")}
        />
      </div>
      <p className="m-14 text-xl font-normal text-center min-h-[2rem]">
        {t("home.message")}
      </p>
      <div className="mt-[2rem] flex flex-col space-y-6 sm:space-y-0 sm:flex sm:flex-row items-center justify-center sm:space-x-6">
        <a
          href="https://coach-courses-us.s3.amazonaws.com/exercises/723/61551/0835f576ed5066d2f35ccab4acc12a23/cezary-szal-resume--1-.pdf"
          target="_blank"
          rel="noreferrer"
        >
          <button className="px-[2rem] hover:bg-yellow-400 transition-all duration-200 py-[1rem] text-[18px] font-bold uppercase bg-[#55e6a5] text-black flex items-center space-x-2">
            <p>{t("home.resumebtn")}</p>
            <ArrowDownTrayIcon className="w-[1.6rem] h-[1.7rem] text-black" />
          </button>
        </a>
        <a href="/contact" rel="noreferrer">
          <button className="px-[2rem] hover:bg-yellow-400 transition-all duration-200 py-[1rem] text-[18px] font-bold uppercase bg-[#55e6a5] text-black flex items-center space-x-2">
            <p>{t("home.gitbtn")}</p>
            <EnvelopeIcon className="w-[1.6rem] h-[1.7rem] text-black" />
          </button>
        </a>
        <a href="/projects" rel="noreferrer">
          <button className="px-[2rem] hover:bg-yellow-400 transition-all duration-200 py-[1rem] text-[18px] font-bold uppercase bg-[#55e6a5] text-black flex items-center space-x-2">
            <p>{t("home.portfoliobtn")}</p>
            <BriefcaseIcon className="w-[1.6rem] h-[1.7rem] text-black" />
          </button>
        </a>
      </div> */}
      <div className="min-h-[500px]">
        <Skills />
      </div>
      <div className="min-h-[400px]">
        <Projects />
      </div>
    </main>
  );
}
