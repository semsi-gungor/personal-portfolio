import { FC } from "react";
import styles from "./styles.module.scss";
import SectionWithHeader from "../UI/SectionWithHeader";
import Work from "./Work/index";
import OnViewTrigger from "../UI/OnViewTrigger";
import ScrollTo from "../UI/ScrollTo";

const Works: FC = ({}) => {
  return (
    <SectionWithHeader heading="Works">
      <ScrollTo index={2} />
      <OnViewTrigger index={2} />
      <div className={styles.works}>
        <Work
          id="01"
          role={["Frontend Development"]}
          imageSrc="https://images.unsplash.com/photo-1570891836654-d4961a7b6929"
          techStack={["Next.js", "Next.js", "Next.js"]}
          title="Project Title"
          year="2023"
        />
        <Work
          id="01"
          role={["Frontend Development"]}
          imageSrc="https://images.unsplash.com/photo-1570891836654-d4961a7b6929"
          techStack={["Next.js", "Next.js", "Next.js"]}
          title="Project Title"
          year="2023"
        />
      </div>
    </SectionWithHeader>
  );
};

export default Works;
