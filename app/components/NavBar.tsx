"use client";

import Link from "next/link";
import { NavLinks } from "../lib/constants";
import { usePathname } from "next/navigation";
import { roboto_mono } from "../lib/fonts";
import { useState } from "react";
import { useNavbarContext } from "../lib/navbarcontext";

const Navbar = () => {
  const path = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { setIsOpened } = useNavbarContext();

  const toggleMenu = () => {
    const newIsMenuOpen = !isMenuOpen;
    setIsMenuOpen(newIsMenuOpen);
    setIsOpened(newIsMenuOpen); // Aktualizowanie stanu w kontekście
  };

  return (
    <div className="flex justify-end p-4">
      {/* Toggle Button */}
      <button
        className="text-white focus:outline-none lg:hidden z-20"
        onClick={toggleMenu}
      >
        <svg
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-8 h-8"
        >
          {isMenuOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          )}
        </svg>
      </button>

      <nav
        className={`${
          roboto_mono.className
        } absolute lg:relative top-0 lg:top-auto left-0 lg:left-auto lg:right-auto bg-none p-8 lg:p-0 transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        } transition-transform duration-300 ease-in-out lg:flex lg:flex-row`}
      >
        {NavLinks.map((nav) => (
          <Link
            key={nav.name}
            href={nav.link}
            className={`group text-lg lg:text-xl flex mb-3 lg:mb-0 lg:mr-5 items-center hover:text-gray-400 ${
              path === nav.link ? "text-gray-400 underline" : "text-white"
            }`}
          >
            <nav.icon
              className={`transition-all duration-300 ease-in-out w-4 h-4 lg:w-5 lg:h-5 mr-1 ${
                path === nav.link ? "text-gray-400" : "text-white"
              } group-hover:scale-110`}
            />
            {nav.name}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Navbar;
