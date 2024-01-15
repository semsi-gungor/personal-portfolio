"use client";

import { useState, createContext, useContext } from "react";

type CursorState = "default" | "hover" | "link" | "none";

type CursorContextType = {
  cursorState: CursorState;
  setCursorState: (state: CursorState) => void;
};

export const CursorContext = createContext<CursorContextType>({
  cursorState: "default",
  setCursorState: (state: CursorState) => {},
});

const CursorContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [cursorState, setCursorState] = useState<CursorState>("default");

  function changeCursorState(state: CursorState) {
    setCursorState(state);
  }

  return (
    <CursorContext.Provider
      value={{ cursorState: cursorState, setCursorState: changeCursorState }}
    >
      {children}
    </CursorContext.Provider>
  );
};

export default CursorContextProvider;

export function useCursor() {
  const context = useContext(CursorContext);

  return context;
}
