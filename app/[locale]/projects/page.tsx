"use client";

import { ProjectsData } from "../lib/projects-data";
import ProjectCard from "../components/ProjectCard";
import React from "react";
import { useNavbarContext } from "../lib/navbarcontext";
import { usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";

const Projects = () => {
  const { isOpened } = useNavbarContext();
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;
  const path = usePathname();
  const isSkillsPage = path === "/projects" || path === "/de/projects";

  const content = (
    <>
      <div className="text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          {t("projects.title")}
        </h1>
        <p className="text-base md:text-lg lg:text-xl md:mb-10">
          {t("projects.subtitle")}
        </p>
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 md:gap-24 justify-items-center scale-8 md:scale-100">
        {ProjectsData.map((project, index) => (
          <ProjectCard
            key={index}
            id={project.id}
            title={project.title}
            description={
              project[
                `description_${currentLanguage}` as keyof typeof project
              ] as string
            }
            technologies={project.technologies}
            image={project.cardImage}
            gitHubLink={project.gitHubLink}
            demoLink={project.demoLink}
          />
        ))}
      </div>
    </>
  );
  return (
    <>
      {isSkillsPage ? (
        <main
          className={`flex lg:w-[900px] min-h-min text-center justify-center flex-col mx-10 md:mx-auto my-32 ${
            isOpened ? "mt-48" : ""
          }`}
        >
          {content}
        </main>
      ) : (
        content
      )}
    </>
  );
};

export default Projects;
