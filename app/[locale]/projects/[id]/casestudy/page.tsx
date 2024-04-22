"use client";
import { useNavbarContext } from "../../../lib/navbarcontext";
import Image from "next/image";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { useTranslation } from "react-i18next";

export default function Casestudy() {
  const { isOpened } = useNavbarContext();
  const { t } = useTranslation();

  return (
    <main
      className={`flex lg:w-[900px] min-h-min text-center justify-center flex-col mx-4 md:mx-auto my-32 ${
        isOpened ? "mt-48" : ""
      }`}
    >
      <div className="text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-20">
          {t("casestudy.title")}
        </h1>
      </div>
      <div className="grid grid-cols-1">
        <Image
          src="/projects/casestudy/moviescope_logo.png"
          alt="logo"
          width={1500}
          height={843}
          className="justify-self-end w-5/12 h-5/12 col-span-2"
        />
        <div className="my-12 text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8">
            {t("casestudy.overview")}
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-justify mb-8">
            {t("casestudy.overview_content")}
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8">
            {t("casestudy.purpose")}
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-justify mb-16">
            {t("casestudy.purpose_content")}
          </p>

          <figure className="items-center col-span-2 mb-16">
            <Zoom>
              <Image
                src="/projects/casestudy/moviescope1.png"
                alt="moviescope1"
                width={1500}
                height={843}
                className="block w-10/12 h-10/12 mx-auto"
              />
            </Zoom>
            <figcaption className="text-base md:text-lg lg:text-xl">
              {t("casestudy.figure1")}
            </figcaption>
          </figure>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8">
            {t("casestudy.objective")}
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-justify mb-16">
            {t("casestudy.objective_content")}
          </p>
          <figure className="items-center col-span-2 mb-16">
            <Zoom>
              <Image
                src="/projects/casestudy/moviescope2.png"
                alt="moviescope2"
                width={1500}
                height={843}
                className="block w-11/12 h-11/12 mx-auto"
              />
            </Zoom>
            <figcaption className="text-base md:text-lg lg:text-xl">
              {t("casestudy.figure2")}
            </figcaption>
          </figure>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8">
            {t("casestudy.development")}
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-justify mb-16">
            {t("casestudy.development_content")}
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8">
            {t("casestudy.duration")}
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-justify mb-16">
            {t("casestudy.duration_content")}
          </p>
          <figure className="items-center col-span-2 mb-16">
            <Zoom>
              <Image
                src="/projects/casestudy/moviescope3.png"
                alt="moviescope3"
                width={1500}
                height={843}
                className="block w-11/12 h-11/12 mx-auto"
              />
            </Zoom>
            <figcaption className="text-base md:text-lg lg:text-xl">
              {t("casestudy.figure3")}
            </figcaption>
          </figure>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8">
            {t("casestudy.challenges")}
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-justify mb-16">
            {t("casestudy.challenges_content")}
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8">
            {t("casestudy.futuresteps")}
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-justify mb-16">
            {t("casestudy.futuresteps_content")}
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8">
            {t("casestudy.finalthoughts")}
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-justify mb-16">
            {t("casestudy.finalthoughts_content")}
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8">
            {t("casestudy.credits")}
          </h2>
          <p className="text-base md:text-lg lg:text-xl">
            <span className="text-bold">{t("casestudy.leaddeveloper")}:</span>{" "}
            Cezary Szal
          </p>
          <p className="text-base md:text-lg lg:text-xl">
            <span className="text-bold">{t("casestudy.tutor")}:</span> Ayeah
            Godlove Akoni
          </p>
          <p className="text-base md:text-lg lg:text-xl">
            <span className="text-bold">{t("casestudy.mentor")}:</span> Renish
            Bhaskaran
          </p>
        </div>
      </div>
    </main>
  );
}
