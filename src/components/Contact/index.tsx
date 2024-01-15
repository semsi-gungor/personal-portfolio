import { FC } from "react";
import SectionWithHeader from "../UI/SectionWithHeader";
import styles from "./styles.module.scss";
import Seperator from "../UI/Seperator";
import { ArrowUpRight } from "lucide-react";
import OnViewTrigger from "../UI/OnViewTrigger";
import ScrollTo from "../UI/ScrollTo";

const Contact: FC = ({}) => {
  return (
    <SectionWithHeader heading="Contact">
      <OnViewTrigger index={3} />
      <ScrollTo index={3} />
      <OnViewTrigger index={3} />
      <div className={styles.container}>
        <Seperator direction="horizontal" origin="left" />
        <div className={styles.linkContainer}>
          <Seperator direction="vertical" origin="top" delay={500} />
          <div className={styles.link}>
            <p>email</p> <ArrowUpRight size={50} />
          </div>
          <div className={styles.link}>
            <p>github</p> <ArrowUpRight size={50} />
          </div>
        </div>
        <div className={styles.linkContainer}>
          <div className={styles.link}>
            <p>linkedin</p> <ArrowUpRight size={50} />
          </div>
          <div className={styles.link}>
            <p>cv.me</p> <ArrowUpRight size={50} />
          </div>
        </div>
      </div>
    </SectionWithHeader>
  );
};

export default Contact;
