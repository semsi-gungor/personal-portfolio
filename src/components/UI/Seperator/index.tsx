import { FC } from "react";
import styles from "./styles.module.scss";

interface SeperatorProps {
  direction: "horizontal" | "vertical";
  origin: "left" | "right" | "top";
  delay?: number;
}

const Seperator: FC<SeperatorProps> = ({ direction, origin, delay = 0 }) => {
  return (
    <div
      data-direction={direction}
      data-origin={origin}
      style={{ animationDelay: `${delay}ms` }}
      className={styles.seperator}
    ></div>
  );
};

export default Seperator;
