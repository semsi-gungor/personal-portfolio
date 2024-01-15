"use client";

import { FC, useRef, ElementRef, useEffect } from "react";
import styles from "./styles.module.scss";
import { useNavbar } from "@/context/navbar-context";

const Navbar: FC = ({}) => {
  const { index } = useNavbar();

  const sections = [
    { title: "Home", ref: useRef<ElementRef<"ul">>(null) },
    { title: "About", ref: useRef<ElementRef<"ul">>(null) },
    { title: "Works", ref: useRef<ElementRef<"ul">>(null) },
    { title: "Contact", ref: useRef<ElementRef<"ul">>(null) },
  ];

  const indicatorRef = useRef<ElementRef<"div">>(null);

  useEffect(() => {
    function onClick(index: number) {
      if (!indicatorRef.current) return;
      if (!sections[index].ref.current) return;
      const activeRef = sections[index].ref;
      const width = activeRef.current!.clientWidth;
      const left = activeRef.current!.offsetLeft;

      indicatorRef.current.style.setProperty("--width", `${width}px`);
      indicatorRef.current.style.setProperty("--left", `${left}px`);
    }

    onClick(index);
  }, [index]);

  function onPointerDown(index: number) {
    const divs = document.querySelectorAll("div[data-index]");

    if (divs[index]) {
      divs[index].scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <nav className={styles.navbar}>
      <li className={styles.navList}>
        {sections.map((section, index) => (
          <ul
            onPointerDown={onPointerDown.bind(null, index)}
            ref={section.ref}
            className={styles.navItem}
            key={section.title}
          >
            {section.title}
          </ul>
        ))}
      </li>
      <div ref={indicatorRef} className={styles.activeIndicator}></div>
    </nav>
  );
};

export default Navbar;
