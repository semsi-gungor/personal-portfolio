import { useCursor } from "@/context/mouse-context";
import { useRef, useEffect } from "react";

export function useHoverState<T extends HTMLElement>(type: "hover" | "link") {
  const ref = useRef<T>(null);
  const { setCursorState } = useCursor();

  useEffect(() => {
    if (!ref.current) return;

    function onMouseEnter() {
      setCursorState(type);
    }
    ref.current.addEventListener("mouseenter", onMouseEnter);

    function onMouseLeave() {
      setCursorState("default");
    }
    ref.current.addEventListener("mouseleave", onMouseLeave);

    return () => {
      ref.current?.removeEventListener("mouseenter", onMouseEnter);
      ref.current?.removeEventListener("mouseleave", onMouseLeave);
    };
  }, [setCursorState]);

  return ref;
}
