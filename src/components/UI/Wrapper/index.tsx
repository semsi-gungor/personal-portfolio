import { FC, ReactNode } from "react";
import styles from "./styles.module.scss";

type WrapperProps = {
  children: ReactNode;
};

const Wrapper: FC<WrapperProps> = ({ children }) => {
  return <section className={styles.wrapper}>{children}</section>;
};

export default Wrapper;
