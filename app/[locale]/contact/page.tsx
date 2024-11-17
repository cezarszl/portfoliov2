"use client";
import ContactForm from "../components/ContactForm";
import { useNavbarContext } from "../lib/navbarcontext";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { isOpened } = useNavbarContext();
  const { t } = useTranslation();

  return (
    <main
      className={`flex lg:w-[900px] min-h-screen text-center justify-center flex-col mx-auto my-32  ${
        isOpened ? "mt-48" : ""
      }`}
    >
      <div className="flex items-center justify-center">
        <ContactForm />
      </div>
      <p className="mt-10 text-xl font-normal min-h-[2rem]">
        {t("contact.content1")}
        <br />
        {t("contact.content2")}
        <br />
        {t("contact.content3")}
      </p>
    </main>
  );
};

export default Contact;
