import { FooterLinks } from "../lib/constants";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="mt-auto">
      <hr className="h-px w-4/5 md:w-3/5 mx-auto my-0" />
      <div className="flex md:w-3/5 mx-auto justify-around items-center gap-y-0 gap-x-4 py-8">
        <p>© {new Date().getFullYear()} Cezary Szal&apos;s Portfolio</p>
        <Link href="/impressum">Impressum</Link>
        <div className="flex gap-5 md:gap-10">
          {FooterLinks.map((footerLink) => (
            <Link key={footerLink.name} href={footerLink.link}>
              <footerLink.icon className="md:w-5 md:h-5 w-4 h-4" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
