"use client";
import React from "react";

// Define the context's type
interface INavbarContext {
  isOpened: boolean;
  setIsOpened: (open: boolean) => void;
}

// Create a context with a default value
export const NavbarContext = React.createContext<INavbarContext>({
  isOpened: false,
  setIsOpened: () => {},
});

// Export a custom hook for your Navbar context
export const useNavbarContext = () => React.useContext(NavbarContext);
