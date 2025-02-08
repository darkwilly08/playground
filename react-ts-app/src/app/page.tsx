"use client";

import Image from "next/image";
import styles from "./page.module.scss";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const Content = () => {
  return <div className={styles.content}>I am the content</div>;
};

const MotionButton = () => {
  return (
    <motion.button
      whileTap={{
        transform: "translateY(100px)",
      }}
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
        transform: "translateY(100px)",
      }}
      onClick={() => {}}
      className={styles.button}
    >
      Button
    </motion.button>
  );
};

const DragIcon = () => {
  return <div className={styles["drag-icon"]}>🔽</div>;
};

const BSHeader = () => {
  return (
    <motion.div
      drag
      dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
      className={styles["bs-header"]}
    >
      <DragIcon />
    </motion.div>
  );
};

const BSFooter = () => {
  return <div className={styles["bs-footer"]}>I am the footer</div>;
};

const BottomSheet = ({ footer, children }: any) => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="bottom-sheet"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          className={styles.bs}
        >
          <BSHeader />
          {footer}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const Footer = () => {
  return (
    <div className={styles.footer}>
      <MotionButton />
    </div>
  );
};

export default function Home() {
  return (
    <main className={styles.container}>
      <Content />
      <BottomSheet footer={<BSFooter />}>
        <div className="text-black p-8">holis</div>
      </BottomSheet>
    </main>
  );
}
