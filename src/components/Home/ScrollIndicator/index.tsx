import { FC } from "react";
import styles from "./styles.module.scss";

interface ScrollIndicatorProps {}

const ScrollIndicator: FC<ScrollIndicatorProps> = ({}) => {
  return <div className={styles.indicator}></div>;
};

export default ScrollIndicator;
