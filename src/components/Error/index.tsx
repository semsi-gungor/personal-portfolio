import { FC } from "react";
import styles from "./styles.module.scss";
import Wrapper from "../UI/Wrapper";

const ErrorPage: FC = ({}) => {
  return (
    <Wrapper>
      <div className={styles.container}>
        <h1>404</h1>
        <div>
          <p>Page not found</p>
          <p>The page you are looking for doesn’t exist or has been moved.</p>
        </div>
        <button>Return home</button>
      </div>
    </Wrapper>
  );
};

export default ErrorPage;
