import { FC } from "react";
import styles from "./styles.module.scss";
import { Copyright } from "lucide-react";
import Clock from "../UI/Clock/Clock";
import Seperator from "../UI/Seperator";

const Footer: FC = ({}) => {
  return (
    <footer className={styles.footer}>
      <div className={styles.sections}>
        <Seperator direction="horizontal" origin="left" />
        <div className={styles.section}>
          <Seperator direction="vertical" origin="top" delay={500} />
          <Clock />
        </div>
        <div className={styles.section}>
          <Seperator direction="vertical" origin="top" delay={500} />
          <p>semsi.gungor00@gmail.com</p>
        </div>
        <div className={styles.section}>back to top</div>
      </div>
      <div className={styles.foot}>
        <div>
          <span>
            <Copyright size={20} />
          </span>
          <span>2024</span> <span>Şemsi GÜNGÖR</span>
        </div>
        <span>cv.me</span>
      </div>
    </footer>
  );
};

export default Footer;
