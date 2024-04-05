"use client";
import Image from "next/image";
import { ProjectsData } from "../../lib/projects-data";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { useNavbarContext } from "../../lib/navbarcontext";

export default function Page({ params }: { params: { id: string } }) {
  const projectId = parseInt(params.id, 10);
  const project = ProjectsData.find((project) => project.id === projectId);

  if (!project) {
    return <div>Project not found</div>;
  }

  const { isOpened } = useNavbarContext();

  return (
    <main
      className={`flex lg:w-[900px] min-h-min text-center justify-center flex-col mx-auto my-32 ${
        isOpened ? "mt-48" : ""
      }`}
    >
      <div>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
          {project.title}
        </h1>
        <p className="text-justify text-base md:text-lg lg:text-xl my-10">
          {project.description}
        </p>
        <div className="my-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
            Technologies
          </h2>
          <p className="md:text-lg lg:text-xl my-10">{project.technologies}</p>
        </div>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-10">
          Screenshots
        </h2>
        <div className="grid grid-cols-1 gap-10 justify-items-center mb-16 w-auto">
          <Zoom>
            <Image
              src={project.imagePath1}
              alt={project.title}
              width={1500}
              height={843}
              className="z-10 w-"
            />
          </Zoom>
          <Zoom>
            <Image
              src={project.imagePath2}
              alt={project.title}
              width={1500}
              height={843}
              className="z-10"
            />
          </Zoom>
        </div>
        <div className="my-10">
          <h3 className="text-1xl md:text-2xl lg:text-3xl font-bold mb-4">
            Live demo
          </h3>
          <a
            className="text-base md:text-lg lg:text-xl md:mb-10"
            href={project.demoLink}
          >
            {project.demoLink}
          </a>
        </div>
        <div>
          <h3 className="text-1xl md:text-2xl lg:text-3xl font-bold mb-4">
            Github
          </h3>
          <a
            className="text-base md:text-lg lg:text-xl md:mb-10"
            href={project.gitHubLink}
          >
            {project.gitHubLink}
          </a>
        </div>
      </div>
    </main>
  );
}
