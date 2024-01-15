import { FC } from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import bg from "@/assets/light.png";

const Light: FC = ({}) => {
  return (
    <div className={styles.scene}>
      <div className={styles.imageContainer}>
        <Image src={bg} fill alt="" />
      </div>
    </div>
  );
};

export default Light;
