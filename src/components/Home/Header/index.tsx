"use client";

import { FC, ElementRef } from "react";
import styles from "./styles.module.scss";
import Hand from "@/assets/hand.png";
import Image from "next/image";

const Header: FC = ({}) => {
  return (
    <header className={styles.header}>
      <h1 className={styles.heading}>
        <span>Hello</span>
        <span className={styles.imgContainer}>
          <Image src={Hand} alt="" fill />
        </span>
        <span>I'm Şemsi.</span>
      </h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed
        iaculis mi. In tempus quis nisl at sagittis. Nulla aliquam faucibus orci
        nec iaculis.
      </p>
    </header>
  );
};

export default Header;
