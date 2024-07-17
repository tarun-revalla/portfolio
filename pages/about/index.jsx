"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "../../components/ui/Lamp";
import { FlipWords } from "../../components/ui/FlipWords";
import Stairs from "../../components/Layout/Stairs";

const about = () => {
  const words = ["innovative", "efficient", "robust", "scalable", "tailored"];
  const words2 = ["powerful", "scalable", "dynamic", "innovative", "efficient"];
  return (
    <Stairs>
      <LampContainer >
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mt-4 md:mt-3 lg:mt-14 bg-gradient-to-br from-[--text-color] to-slate-600 py-0 md:py-4 bg-clip-text text-center text-xl font-medium  md:text-transparent lg:text-base tracking-tight md:text-4xl"
        >
          <div className=" lg:mt-[-270px] mt-[-30px] xl:mt-[0px]">
            <span className="text-[--bg-color] font-bold text-xl md:text-4xl py-2">
              Full-stack excellence
            </span>
            <br />
            <br />
            <div className="text-sm md:text-xl">
              Transforming ideas into{" "}
              <FlipWords words={words} duration={4000} /> solutions.
              <br />
              <br />
              Architecting visions into{" "}
              <FlipWords
                words={words2}
                startDelay={2000}
                duration={4000}
              />{" "}
              realities.
            </div>
          </div>
        </motion.h1>
      </LampContainer>
    </Stairs>
  );
};

export default about;
