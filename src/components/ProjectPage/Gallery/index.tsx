"use client";

import { FC, useState } from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import Modal from "@/components/UI/Modal";
import ImageWithLoader from "@/components/UI/ImageWithLoader";

type WorkPageProps = {
  images: Array<string>;
};

const Gallery: FC<WorkPageProps> = ({ images }) => {
  const [index, setIndex] = useState(0);

  const [open, setOpen] = useState(false);

  return (
    <>
      <Modal isModalOpen={open} setIsModalOpen={setOpen}>
        <div className={styles.picModal}>
          {/* <Image src={images[index]} fill alt="" /> */}
          <ImageWithLoader src={images[index]} />
        </div>
      </Modal>

      <div className={styles.container}>
        <div
          onClick={() => {
            setOpen(true);
          }}
          className={styles.selected}
        >
          {/* <Image src={images[index]} fill alt="" /> */}
          <ImageWithLoader src={images[index]} />
        </div>
        <div className={styles.gallery}>
          {images.map((pic, index) => {
            return (
              <div
                onClick={() => {
                  setIndex(index);
                }}
                key={pic}
                className={styles.galleryItem}
              >
                {/* <Image src={pic} fill alt="" /> */}
                <ImageWithLoader src={pic} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Gallery;
