"use client";
import ContactForm from "../components/ContactForm";
import { useNavbarContext } from "../lib/navbarcontext";

const Contact = () => {
  const { isOpened } = useNavbarContext();

  return (
    <main
      className={`flex lg:w-[900px] min-h-min text-center justify-center flex-col mx-auto my-32  ${
        isOpened ? "mt-48" : ""
      }`}
    >
      <div className="flex items-center justify-center">
        <ContactForm />
      </div>
    </main>
  );
};

export default Contact;
