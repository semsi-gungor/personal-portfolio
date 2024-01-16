"use client";

import {
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { createPortal } from "react-dom";
import styles from "./styles.module.scss";

interface ModalProps {
  isModalOpen: boolean;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
  children?: ReactNode;
}

const Modal: FC<ModalProps> = ({ isModalOpen, setIsModalOpen, children }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    if (isModalOpen) {
      setIsMounted(true);
    } else {
      setTimeout(() => {
        setIsMounted(false);
        document.body.style.overflow = "";
      }, 300);
    }
  }, [isModalOpen]);

  return createPortal(
    <>
      {isMounted && (
        <>
          <div
            onClick={() => {
              setIsModalOpen(false);
            }}
            data-state={isModalOpen}
            data-mounted={isMounted}
            className={styles.overlay}
          ></div>
          <div data-state={isModalOpen} className={styles.modal}>
            {children}
          </div>
        </>
      )}
    </>,
    document.body
  );
};

export default Modal;
