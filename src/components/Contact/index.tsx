"use client";

import { ElementRef, FC } from "react";
import SectionWithHeader from "../UI/SectionWithHeader";
import styles from "./styles.module.scss";
import Seperator from "../UI/Seperator";
import { ArrowUpRight } from "lucide-react";
import OnViewTrigger from "../UI/OnViewTrigger";
import ScrollTo from "../UI/ScrollTo";
import { useHoverState } from "@/hooks/use-hover-state";

const Contact: FC = ({}) => {
  const ref = useHoverState<ElementRef<"div">>("link");

  return (
    <SectionWithHeader heading="Contact">
      <OnViewTrigger index={3} />
      <ScrollTo index={3} />
      <div ref={ref} className={styles.container}>
        <Seperator direction="horizontal" origin="left" />
        <div className={styles.linkContainer}>
          <Seperator direction="vertical" origin="top" delay={500} />
          <div className={styles.link}>
            <div className={styles.expand}></div>
            <p>email</p> <ArrowUpRight size={50} />
          </div>
          <div className={styles.link}>
            <div className={styles.expand}></div>
            <p>github</p> <ArrowUpRight size={50} />
          </div>
        </div>
        <div className={styles.linkContainer}>
          <div className={styles.link}>
            <div className={styles.expand}></div>
            <p>linkedin</p> <ArrowUpRight size={50} />
          </div>
          <div className={styles.link}>
            <div className={styles.expand}></div>
            <p>cv.me</p> <ArrowUpRight size={50} />
          </div>
        </div>
      </div>
    </SectionWithHeader>
  );
};

export default Contact;
