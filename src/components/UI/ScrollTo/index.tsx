import { FC } from "react";
import styles from "./styles.module.scss";

interface ScrollToProps {
  index: number;
}

const ScrollTo: FC<ScrollToProps> = ({ index }) => {
  return <div data-index={index} className={styles.scrollTo} />;
};

export default ScrollTo;
