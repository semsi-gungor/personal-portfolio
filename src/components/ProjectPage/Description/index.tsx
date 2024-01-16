import { FC } from "react";
import styles from "./styles.module.scss";
import Seperator from "@/components/UI/Seperator";

type WorkPageProps = {
  id: string;
  title: string;
  description: string;
  year: string;
  tools: Array<string>;
  url: string;
};

const Description: FC<WorkPageProps> = ({}) => {
  return (
    <div className={styles.container}>
      <div className={styles.description}>
        <h2>01</h2>
        <h1>Work Title</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
          fugit esse perspiciatis labore commodi error nesciunt laborum.
        </p>
      </div>
      <div className={styles.detailsContainer}>
        <div className={styles.detail}>
          <Seperator direction="horizontal" origin="left" />
          <p>Year</p>
          <div>
            <p>2023</p>
          </div>
        </div>
        <div className={styles.detail}>
          <Seperator direction="horizontal" origin="left" />
          <p>Tools</p>
          <div>
            <p>React</p>
            <p>Next.js</p>
            <p>SASS</p>
          </div>
        </div>
        <div className={styles.detail}>
          <Seperator direction="horizontal" origin="left" />
          <p>Type</p>
          <div>
            <p>2023</p>
          </div>
        </div>
        <div className={styles.detail}>
          <Seperator direction="horizontal" origin="left" />
          <p>Url</p>
          <div>
            <p>example.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
