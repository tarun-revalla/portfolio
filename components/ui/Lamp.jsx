"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

const getScreenSizeNumber = () => {
  if (typeof window !== "undefined") {
    const width = window.innerWidth;
    if (width >= 1280) return 7;
    if (width >= 1024) return 6;
    if (width >= 768) return 4;
    return 1;
  }
  return 1;
};

export const LampContainer = ({ children, className }) => {
  const [screenSize, setScreenSize] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      setScreenSize(getScreenSizeNumber());
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isLargeScreen = screenSize > 1;
  const initialWidth = isLargeScreen ? "10rem" : "5rem";
  const whileInViewWidth = isLargeScreen ? "30rem" : "15rem";
  const initialWidth2 = isLargeScreen ? "8rem" : "4rem";
  const whileInViewWidth2 = isLargeScreen ? "15rem" : "8rem";

  return (
    <div
      className={cn(
        "relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[--bg-color] w-full rounded-md z-0 pt-20",
        className
      )}
    >
      <div className="relative flex w-full flex-1 scale-y-125 items-center justify-center isolate z-0">
        <motion.div
          initial={{ opacity: 0.5, width: initialWidth }}
          whileInView={{ opacity: 1, width: whileInViewWidth }}
          transition={{
            delay: 1,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto right-1/2 h-56 overflow-visible w-[30rem] bg-gradient-conic from-[--color-accent] via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]"
        >
          <div className="absolute  w-[100%] left-0 bg-[--bg-color] h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
          <div className="absolute  w-40 h-[100%] left-0 bg-[--bg-color]  bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0.5, width: initialWidth }}
          whileInView={{ opacity: 1, width: whileInViewWidth }}
          transition={{
            delay: 1,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto left-1/2 h-56 w-[30rem] bg-gradient-conic from-transparent via-transparent to-[--color-accent] text-white [--conic-position:from_290deg_at_center_top]"
        >
          <div className="absolute  w-40 h-[100%] right-0 bg-[--bg-color]  bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]" />
          <div className="absolute  w-[100%] right-0 bg-[--bg-color] h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
        </motion.div>
        <div className="absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 bg-[--bg-color] blur-2xl"></div>
        <div className="absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md"></div>
        <div className="absolute inset-auto z-50 h-36 w-[28rem] -translate-y-1/2 rounded-full bg-[--color-accent] opacity-50 blur-3xl"></div>
        <motion.div
          initial={{ width: initialWidth2 }}
          whileInView={{ width: whileInViewWidth2 }}
          transition={{
            delay: 0.8,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-30 h-36 w-64 -translate-y-[6rem] rounded-full bg-[--color-accent] blur-2xl"
        ></motion.div>
        <motion.div
          initial={{ width: initialWidth }}
          whileInView={{ width: whileInViewWidth }}
          transition={{
            delay: 0.8,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-50 h-0.5 w-[30rem] -translate-y-[7rem] bg-[--color-accent] "
        ></motion.div>

        <div className="absolute inset-auto z-40 h-44 w-full -translate-y-[12.5rem] bg-[--bg-color] "></div>
      </div>

      <div className="relative z-50 flex -translate-y-80 flex-col items-center px-5">
        {children}
      </div>
    </div>
  );
};
