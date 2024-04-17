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
      <p className="mt-10 text-xl font-normal">
        Open to remote, freelance, and full-time opportunities in software
        development.
        <br />
        Please feel free to reach out to me with any opportunities or inquiries.
        <br />
        Thank you for considering my portfolio.
      </p>
    </main>
  );
};

export default Contact;
