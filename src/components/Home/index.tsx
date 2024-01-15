import { FC } from "react";
import styles from "./styles.module.scss";
import Header from "./Header";
import Region from "./Region";
import ScrollIndicator from "./ScrollIndicator";
import Light from "./Light";

const Home: FC = ({}) => {
  return (
    <section className={styles.container}>
      <Header />
      <Region />
      <ScrollIndicator />
      <Light />
    </section>
  );
};

export default Home;
