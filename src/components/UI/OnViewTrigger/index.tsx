"use client";

import { FC, useEffect } from "react";
import styles from "./styles.module.scss";
import { useInView } from "react-intersection-observer";
import { useNavbar } from "@/context/navbar-context";

interface OnViewTriggerProps {
  index: number;
}

const OnViewTrigger: FC<OnViewTriggerProps> = ({ index }) => {
  const { setNavbarIndex } = useNavbar();

  const { ref, inView, entry } = useInView({ threshold: 0.8 });

  useEffect(() => {
    if (inView) setNavbarIndex(index);
  }, [inView, index, setNavbarIndex]);

  return <div ref={ref} className={styles.trigger} aria-hidden></div>;
};

export default OnViewTrigger;
