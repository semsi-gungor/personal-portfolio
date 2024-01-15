import { FC } from "react";
import styles from "./styles.module.scss";
import SectionWithHeader from "../UI/SectionWithHeader";
import Seperator from "../UI/Seperator";
import OnViewTrigger from "../UI/OnViewTrigger";
import ScrollTo from "../UI/ScrollTo";

const capabilities = [
  "Front-end development",
  "Web design",
  "Responsive Desgin",
  "Accsessbile design",
];

const techStack = [
  "HTML",
  "CSS",
  "SASS",
  "Javascript",
  "Typscript",
  "React",
  "Next.js",
  "Framer Motion",
];

const About: FC = ({}) => {
  return (
    <SectionWithHeader heading="About">
      <OnViewTrigger index={1} />
      <ScrollTo index={1} />
      <OnViewTrigger index={1} />
      <div className={styles.aboutContainer}>
        <Seperator direction="horizontal" origin="left" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          condimentum, ipsum vitae molestie fringilla, mi felis consectetur ex,
          eget vulputate sapien nisl a lorem. Donec ac odio vel risus cursus
          volutpat a eu neque. Nunc eget velit eu purus molestie congue. In quis
          gravida quam. Nullam ut consectetur turpis.
        </p>
        <div className={styles.aboutDetails}>
          <div className={styles.stack}>
            <Seperator direction="horizontal" origin="right" />
            <Seperator direction="vertical" origin="top" delay={500} />
            <p>Capabilities</p>
            <div>
              {capabilities.map((cap) => (
                <p key={cap}>{cap}</p>
              ))}
            </div>
          </div>
          <div className={styles.stack}>
            <Seperator direction="horizontal" origin="left" />
            <p>Tech Stack</p>
            <div>
              {techStack.map((cap) => (
                <p key={cap}>{cap}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionWithHeader>
  );
};

export default About;
