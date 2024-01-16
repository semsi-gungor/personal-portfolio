import { FC } from "react";
import styles from "./styles.module.scss";
import SectionWithHeader from "../UI/SectionWithHeader";
import Work from "./Work/index";
import OnViewTrigger from "../UI/OnViewTrigger";
import ScrollTo from "../UI/ScrollTo";
import { projects } from "@/data/projects-data";

const Works: FC = ({}) => {
  return (
    <SectionWithHeader heading="Works">
      <OnViewTrigger index={2} />
      <ScrollTo index={2} />
      <div className={styles.works}>
        {/* {projects.map((project) => (
          <Work
            key={project.id}
            id={project.id}
            imageSrc={project.images[0]}
            role={project.role}
            techStack={project.tools}
            title={project.title}
            year={project.year}
          />
        ))} */}
      </div>
    </SectionWithHeader>
  );
};

export default Works;
