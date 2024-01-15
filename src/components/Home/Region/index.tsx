import { FC } from "react";
import styles from "./styles.module.scss";

const Region: FC = ({}) => {
  return (
    <div className={styles.region}>
      <div className={styles.ping} />
      <p>TÜRKİYE</p>
    </div>
  );
};

export default Region;
