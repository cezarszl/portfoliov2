"use client";
import { nunito } from "./lib/fonts";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";
import React from "react";
import { NavbarContext } from "./lib/navbarcontext";
import Particle from "./components/Particle";

export default function ContainerLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isOpened, setIsOpened] = React.useState(false);

  return (
    <>
      <NavbarContext.Provider value={{ isOpened, setIsOpened }}>
        <div
          className={`min-h-screen w-full bg-cover bg-center ${nunito.className} antialiased`}
        >
          <Navbar />
          <Particle />
          {children}
          <Footer />
          <script
            src="https://web3forms.com/client/script.js"
            async
            defer
          ></script>
        </div>
      </NavbarContext.Provider>
    </>
  );
}
