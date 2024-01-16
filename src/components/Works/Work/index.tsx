"use client";

import { ElementRef, FC } from "react";
import styles from "./styles.module.scss";
import Seperator from "@/components/UI/Seperator";
import Image from "next/image";
import { useHoverState } from "@/hooks/use-hover-state";

interface WorkProps {
  id: string;
  title: string;
  year: string;
  techStack: Array<string>;
  role: Array<string>;
  imageSrc: string;
}

const Work: FC<WorkProps> = ({
  id,
  imageSrc,
  role,
  techStack,
  title,
  year,
}) => {
  const ref = useHoverState<ElementRef<"div">>("link");

  return (
    <div ref={ref} className={styles.work}>
      <div className={styles.banner}>
        <Seperator direction="horizontal" origin="left" />
        <div>
          <p>{id}</p>
        </div>
        <div>
          <p>Frontend Development, Web Design</p>
          <p>2023</p>
        </div>
      </div>
      <div className={styles.detailsContainer}>
        <div className={styles.details}>
          <p>Project Title</p>
          <div>
            <TechStack techStack={techStack} />
          </div>
        </div>
        <div className={styles.imgContainer}>
          <Image
            src="https://images.unsplash.com/photo-1533022139390-e31c488d69e2"
            alt=""
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
};

function TechStack({ techStack }: { techStack: Array<string> }) {
  return (
    <div className={styles.techStack}>
      {techStack.map((tech) => (
        <div key={tech} className={styles.tech}>
          {tech}
        </div>
      ))}
    </div>
  );
}

export default Work;
