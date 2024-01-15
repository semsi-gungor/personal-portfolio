import { FC } from "react";
import styles from "./styles.module.scss";
import Header from "./Header";
import Region from "./Region";
import ScrollIndicator from "./ScrollIndicator";
import Light from "./Light";
import ScrollTo from "../UI/ScrollTo";
import OnViewTrigger from "../UI/OnViewTrigger";

const Home: FC = ({}) => {
  return (
    <section className={styles.container}>
      <OnViewTrigger index={0} />
      <ScrollTo index={0} />
      <OnViewTrigger index={0} />
      <Header />
      <Region />
      <ScrollIndicator />
      <Light />
    </section>
  );
};

export default Home;
