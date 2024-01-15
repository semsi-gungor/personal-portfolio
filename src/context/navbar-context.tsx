"use client";

import { useState, createContext, useContext } from "react";

type NavbarContextType = {
  index: number;
  setNavbarIndex: (index: number) => void;
};

export const NavbarContext = createContext<NavbarContextType>({
  index: 0,
  setNavbarIndex: (index: number) => {},
});

const NavbarContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [index, setIndex] = useState(0);

  function setNavbarIndex(index: number) {
    setIndex(index);
  }

  return (
    <NavbarContext.Provider
      value={{ index: index, setNavbarIndex: setNavbarIndex }}
    >
      {children}
    </NavbarContext.Provider>
  );
};

export default NavbarContextProvider;

export function useNavbar() {
  const { index, setNavbarIndex } = useContext(NavbarContext);

  return { index, setNavbarIndex };
}
