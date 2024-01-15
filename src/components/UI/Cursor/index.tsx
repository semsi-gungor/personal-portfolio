"use client";

import { useCursor } from "@/context/mouse-context";
import { ElementRef, FC, useEffect, useRef } from "react";
import styles from "./styles.module.scss";
import { ArrowUpRight } from "lucide-react";

const Cursor: FC = ({}) => {
  const { cursorState } = useCursor();
  const cursorRef = useRef<ElementRef<"div">>(null);

  useEffect(() => {
    function mouseHandler(e: MouseEvent) {
      if (!cursorRef.current) return;

      cursorRef.current.style.setProperty("--x", `${e.clientX}px`);
      cursorRef.current.style.setProperty("--y", `${e.clientY}px`);
    }

    window.addEventListener("mousemove", mouseHandler);

    return () => {
      window.removeEventListener("mousemove", mouseHandler);
    };
  }, []);

  return (
    <div ref={cursorRef} className={styles.cursorShell}>
      <div className={styles.cursor} data-cursor-state={cursorState}>
        {cursorState === "link" && <ArrowUpRight size={16} />}
      </div>
    </div>
  );
};

export default Cursor;
