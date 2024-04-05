"use client";
import { useNavbarContext } from "../../../lib/navbarcontext";
import Image from "next/image";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

export default function Casestudy() {
  const { isOpened } = useNavbarContext();
  return (
    <main
      className={`flex lg:w-[900px] min-h-min text-center justify-center flex-col mx-4 md:mx-auto my-32 ${
        isOpened ? "mt-48" : ""
      }`}
    >
      <div className="text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-20">
          MovieScope Case Study
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
            Overview
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-justify mb-8">
            MovieScope is an app built using ReactJS, leveraging previously
            designed server-side code (including a REST API and database). Users
            can register an account, log in, and access information on a variety
            of movies. Additionally, the app allows users to update their
            personal data and create a list of favorite movies.
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8">
            Purpose
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-justify mb-16">
            This project was created as part of my web development bootcamp at
            CareerFoundry to demonstrate front-end development mastery using the
            React library.
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
              Figure 1. Main view of the websie (left) and VSCode editor (right)
            </figcaption>
          </figure>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8">
            Objective
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-justify mb-16">
            The goal of the project was to create a fully responsive client-side
            interface from scratch, incorporating a range of useful
            functionalities using popular React libraries. This aimed to refine
            my skills and enhance my portfolio.
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
              Figure 2. Profile view (left) and single movie view (right)
            </figcaption>
          </figure>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8">
            Development process overwiew
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-justify mb-16">
            The app was developed as a React single-page application, with
            interactions facilitated by Axios for API communication. Bootstrap
            was utilized for design elements, while Redux managed state across
            the application. React Hook Form and Zod were employed for form
            validation, ensuring data integrity. Additionally, React Toastify
            provided notifications for user interactions. The app's structure
            was organized with separate views and components, including login,
            signup, movie display, and profile manage.
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8">
            Duration
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-justify mb-16">
            Crafting the client-side interface demanded significantly more time
            compared to designing the server-side architecture. The process
            involved immersing myself in various new concepts to achieve the
            desired outcome. Also, a considerable amount of time was dedicated
            to improving the UI and layout design to ensure optimal user
            experience.
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
              Figure 3. Login view (left) and registration view (right).
            </figcaption>
          </figure>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8">
            Challenges
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-justify mb-16">
            This project really required me to learn of lot of new things. I
            encountered the greatest challenge in grasping the Redux library and
            seamlessly integrating my layout with Bootstrap using CSS. However,
            despite these hurdles, I enjoyed working on this project, making it
            my favorite one thus far.
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8">
            Future steps
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-justify mb-16">
            During my free time, I continue to enhance the project by adding new
            functionalities such as Forgotten Password, integration with Google
            Authentication, and the ability for users to rate movies. These
            additions serve as opportunities for me to further polish my
            JavaScript skills and strengthen my understanding of web development
            practices.
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8">
            Final thoughts
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-justify mb-16">
            Overall, I'm immensely proud of the product I've created. It has
            provided me with a wealth of new knowledge and perspectives. ReactJS
            has emerged as my favorite JavaScript library, thanks to its
            versatility and efficiency in building dynamic user interfaces.
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8">
            Credits
          </h2>
          <p className="text-base md:text-lg lg:text-xl">
            <span className="text-bold">Lead Developer:</span> Cezary Szal
          </p>
          <p className="text-base md:text-lg lg:text-xl">
            <span className="text-bold">Tutor:</span> Ayeah Godlove Akoni
          </p>
          <p className="text-base md:text-lg lg:text-xl">
            <span className="text-bold">Mentor:</span> Renish Bhaskaran
          </p>
        </div>
      </div>
    </main>
  );
}
