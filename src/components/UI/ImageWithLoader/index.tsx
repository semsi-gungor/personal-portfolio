"use client";

import Image from "next/image";
import { FC } from "react";
import styles from "./styles.module.scss";

interface ImageWithLoaderProps {
  src: string;
}

const ImageWithLoader: FC<ImageWithLoaderProps> = ({ src }) => {
  return (
    <>
      <div className={styles.skeleton} />
      <Image
        src={src}
        alt=""
        fill
        className="opacity-0 object-cover transition duration-500"
        onLoad={(e) => {
          e.currentTarget.classList.remove("opacity-0");
        }}
      />
    </>
  );
};

export default ImageWithLoader;
