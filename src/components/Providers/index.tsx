import { ReactNode } from "react";
import CursorContextProvider from "@/context/mouse-context";
import NavbarContextProvider from "@/context/navbar-context";

const Provider = ({ children }: { children: ReactNode }) => {
  return (
    <CursorContextProvider>
      <NavbarContextProvider>{children}</NavbarContextProvider>
    </CursorContextProvider>
  );
};

export default Provider;
