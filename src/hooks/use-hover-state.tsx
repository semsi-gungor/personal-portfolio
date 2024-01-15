import { useCursor } from "@/context/mouse-context";
import { useRef, useEffect } from "react";

export function useHoverState<T extends HTMLElement>(type: "hover" | "link") {
  const ref = useRef<T>(null);
  const { setCursorState } = useCursor();

  useEffect(() => {
    if (!ref.current) return;
    const refValue = ref.current;

    function onMouseEnter() {
      setCursorState(type);
    }
    function onMouseLeave() {
      setCursorState("default");
    }

    refValue.addEventListener("mouseenter", onMouseEnter);

    refValue.addEventListener("mouseleave", onMouseLeave);

    return () => {
      refValue.removeEventListener("mouseenter", onMouseEnter);
      refValue.removeEventListener("mouseleave", onMouseLeave);
    };
  }, [setCursorState, ref, type]);

  return ref;
}
