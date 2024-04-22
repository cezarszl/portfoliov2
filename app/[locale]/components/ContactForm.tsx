import React from "react";
import { RxGithubLogo } from "react-icons/rx";
import { SiLinkedin } from "react-icons/si";
import { useTranslation } from "react-i18next";

const ContactForm = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
        <div className="md:py-0 md:px-6">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            {t("contact.title")}
          </h1>
          <p className="pt-2 pb-4">{t("contact.subtitle")}</p>
          <div className="space-y-4">
            <p className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5 mr-2 sm:mr-6"
              >
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
              </svg>
              <span>+4917623237640</span>
            </p>
            <p className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5 mr-2 sm:mr-6"
              >
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
              </svg>
              <a href="mailto:cezarszal@gmail.com">cezarszal@gmail.com</a>
            </p>
            <p className="flex items-center">
              <SiLinkedin className="w-5 h-5 mr-2 sm:mr-6" />
              <a href="https://www.linkedin.com/in/cezary-szal/">LinkedIn</a>
            </p>
            <p className="flex items-center">
              <RxGithubLogo className="w-5 h-5 mr-2 sm:mr-6" />
              <a href="https://github.com/cezarszl">GitHub</a>
            </p>
            <p className="mt-12 flex items-center">{t("contact.reply")}</p>
          </div>
        </div>
        <form
          action="https://api.web3forms.com/submit"
          method="POST"
          className="flex flex-col py-6 space-y-6 md:py-0 md:px-6"
        >
          <input
            type="hidden"
            name="access_key"
            value="77e47c06-94c3-4920-89e3-f60a8332c440"
          />

          <label className="block">
            <span className="mb-1">{t("contact.fullname")}</span>
            <input
              type="text"
              name="name"
              required
              className="block text-black w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 dark:bg-gray-100"
            />
          </label>
          <label className="block">
            <span className="mb-1">{t("contact.email")}</span>
            <input
              type="email"
              name="email"
              required
              className="block  text-black w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 dark:bg-gray-100"
            />
          </label>
          <label className="block">
            <span className="mb-1">{t("contact.message")}</span>
            <textarea
              rows={3}
              name="message"
              required
              className="block  text-black w-full rounded-md focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 dark:bg-gray-100"
            ></textarea>
          </label>
          <div className="h-captcha" data-captcha="true"></div>
          <button
            type="submit"
            className="self-center px-8 py-3 text-lg rounded border-2"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default ContactForm;
