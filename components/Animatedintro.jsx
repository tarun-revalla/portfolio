
'use client'
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { TextPlugin } from "gsap/dist/TextPlugin";
import HyperText from './ui/HyperText';

gsap.registerPlugin(TextPlugin);

const AnimatedIntro = () => {
 const iamref = useRef(null);
  const titleRef = useRef(null);
  const nameRef = useRef(null);
  const descriptionRef = useRef(null);

  useEffect(() => {
    gsap.to(iamref.current, {
        duration: 0.2,
        text: "I'm",
        delay: 0.7, 
        ease: "none"
      });

    gsap.to(titleRef.current, {
      duration: 0.9,
      text: "Software Developer",
      delay: 2.3,
      ease: "none"
    });

    gsap.to(descriptionRef.current, {
      duration: 2.5,
      text: "I excel at crafting digital experiences and I am proficient in various programming languages and technologies.",
      delay: 7, // Start after the name animation
      ease: "none"
    });
  }, []);

  return (
    <div className="text-center dark:text-black text-white xl:text-left xl:mb-13 transition-all duration-100 px-3">
      <span className="md:text-4xl text-xl py-bottom-2" ref={titleRef}></span>
      <h1 className="md:h1  md:mb-6 h2 mb-3 text-accent">
        Hey there !
        <br />
        <span className="md:h1 h2  mb-3 md:mb-6 text-[--text-color]" ref={iamref}></span>
        <br />
        <span className="flex flex-col items-center justify-center md:mb-6 text-[--text-color]"><HyperText text="Tarun Revalla"></HyperText></span>
      </h1>
      <p
        className="max-w-[490px] md:mb-9 mt-1 mb-5 mx-2 dark:text-black text-white/80 xl:mx-0"
        ref={descriptionRef}
      >
      </p>
    </div>
  );
};

export default AnimatedIntro;
