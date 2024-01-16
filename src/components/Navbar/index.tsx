"use client";

import { FC, useRef, ElementRef, useEffect } from "react";
import styles from "./styles.module.scss";
import { useNavbar } from "@/context/navbar-context";
import { usePathname } from "next/navigation";

const Navbar: FC = ({}) => {
  const { index } = useNavbar();

  const pathname = usePathname();

  const sections = [
    { title: "Home" },
    { title: "About" },
    { title: "Works" },
    { title: "Contact" },
  ];

  const indicatorRef = useRef<ElementRef<"div">>(null);

  useEffect(() => {
    function onClick(index: number) {
      if (!indicatorRef.current) return;

      const lis = document.querySelectorAll("li[data-index]");

      const { left, width, x } = lis[index].getBoundingClientRect();

      const { left: firstLeft } = lis[0].getBoundingClientRect();

      indicatorRef.current.style.setProperty("--width", `${width}px`);
      indicatorRef.current.style.setProperty(
        "--left",
        `${left - firstLeft + 10}px`
      );
    }

    onClick(index);
  }, [index]);

  function onPointerDown(index: number) {
    const divs = document.querySelectorAll("div[data-index]");

    if (divs[index]) {
      divs[index].scrollIntoView({ behavior: "smooth" });
    }
  }

  if (pathname !== "/") return null;

  return (
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
        {sections.map((section, index) => (
          <li
            data-index={index}
            onPointerDown={onPointerDown.bind(null, index)}
            className={styles.navItem}
            key={section.title}
          >
            {section.title}
          </li>
        ))}
      </ul>
      <div ref={indicatorRef} className={styles.activeIndicator}></div>
    </nav>
  );
};

export default Navbar;
