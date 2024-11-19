"use client";
import ContactForm from "../components/ContactForm";
import { useNavbarContext } from "../lib/navbarcontext";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { isOpened } = useNavbarContext();
  const { t } = useTranslation();

  return (
    <main
      className={`flex lg:w-[900px] min-h-min text-center justify-center flex-col mx-auto my-32  ${
        isOpened ? "mt-48" : ""
      }`}
    >
      <div className="flex items-center justify-center min-h-96">
        <ContactForm />
      </div>

      <p className="pt-16 text-xl font-normal min-h-8">
        {t("contact.content1")}
      </p>
      <p className="text-xl font-normal min-h-8">{t("contact.content2")}</p>
      <p className="text-xl font-normal min-h-8">{t("contact.content3")}</p>
    </main>
  );
};

export default Contact;
