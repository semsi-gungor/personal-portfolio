"use client";

import { FC } from "react";
import styles from "./styles.module.scss";
import Description from "./Description";
import Gallery from "./Gallery";
import Wrapper from "../UI/Wrapper";
import { Project } from "@/data/projects-data";

type WorkPageProps = {
  project: Project;
};

const ProjectPage: FC<WorkPageProps> = ({ project }) => {
  const { description, id, images, title, tools, url, year } = project;
  return (
    <Wrapper>
      <div className={styles.container}>
        <Description
          description={description}
          id={id}
          title={title}
          tools={tools}
          url={url}
          year={year}
        />
        <Gallery images={images} />
      </div>
    </Wrapper>
  );
};

export default ProjectPage;
