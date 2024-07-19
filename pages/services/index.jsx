"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "../../components/ui/Lamp";
import { FlipWords } from "../../components/ui/FlipWords";
import Stairs from "../../components/Layout/Stairs";
import { cn } from "../../lib/utils";
import DotPattern from "../../components/magicui/dot-pattern";
import GradCard from "../../components/GradCard";
import { servicesconstants } from "../../constants/links";
import FloatNavbar from "../../components/FloatNavbar";

const about = () => {
  const words = ["innovative", "efficient", "robust", "scalable", "tailored"];
  const words2 = ["powerful", "scalable", "dynamic", "innovative", "efficient"];
  return (
    <Stairs>
      <FloatNavbar />
      <LampContainer>
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mt-4 md:mt-3 lg:mt-14 bg-gradient-to-br from-[--text-color] to-slate-600 py-0 md:py-4 bg-clip-text text-center text-xl font-medium  md:text-transparent xl:text-transparent tt:text-teal-400 tracking-tight md:text-4xl"
        >
          <div className=" lg:mt-[-270px] mt-[-30px] xl:mt-[0px] tt:mt-[-180px]">
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
      <div className="relative flex w-full items-center justify-center overflow-hidden rounded-lg bg-[--bg-color] p-4 translate-y-[-24vh] md:translate-y-[-30vh] lg:translate-y-[-20vh] xl:translate-y-[-24vh] ">
        <div className="grid grid-cols-1 h-full md:grid-cols-2 gap-[60px] m-4 my-10">
          {servicesconstants.map((service, index) => (
            <GradCard service={service} key={index} />
          ))}
        </div>
        <DotPattern
          className={cn(
            "[mask-image:radial-gradient(450px_circle_at_center,white,transparent)]"
          )}
        />
      </div>
    </Stairs>
  );
};

export default about;
