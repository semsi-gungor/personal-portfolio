import { FC, ReactNode } from "react";
import Wrapper from "../Wrapper";
import styles from "./styles.module.scss";

interface HeaderProps {
  heading: string;
  children: ReactNode;
}

const SectionWithHeader: FC<HeaderProps> = ({ children, heading }) => {
  return (
    <Wrapper>
      <div className={styles.headingWrapper}>
        <h2 className={styles.heading}>{heading}</h2>
        {children}
      </div>
    </Wrapper>
  );
};

export default SectionWithHeader;
