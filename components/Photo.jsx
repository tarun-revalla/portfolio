"use client";
import { motion } from "framer-motion";
import { useEffect } from "react";
import gsap from "gsap";

const Photo = () => {
  useEffect(() => {
    // Function to load and inject the SVG
    const loadSVG = async () => {
      try {
        const response = await fetch("/assets/tsrun.svg");
        const svgText = await response.text();
        document.getElementById("svg-container").innerHTML = svgText;

        animateSVG();
      } catch (error) {
        console.error("Error loading SVG:", error);
      }
    };

    // Function to animate the SVG elements sequentially using GSAP
    const animateSVG = () => {
      const timeline = gsap.timeline();

      // Animate elements sequentially
      timeline
        .from(
          "#Coffee",
          {
            opacity: 0,
            scale: 0.5,
            duration: 1,
            ease: "easeInOut",
          },
          "=1"
        )
        .from("#window1-low", {
          opacity: 0,
          scale: 0.5,
          duration: 1,
          ease: "easeInOut",
        })

        .from("#gear7", {
          opacity: 0,
          scale: 0.5,
          duration: 0.5,
          ease: "easeInOut",
        })
        .to(
          "#gear7",
          {
            rotation: -360,
            transformOrigin: "center",
            repeat: -1,
            ease: "linear",
            duration: 8,
          },
          "=-1"
        )

        .from(
          "#xml",
          {
            opacity: 0,
            scale: 0.5,
            duration: 1,
            ease: "easeInOut",
          },
          "-=7"
        )

        .from(
          "#window2-mid",
          {
            opacity: 0,
            scale: 0.5,
            duration: 1,
            ease: "easeInOut",
          },
          "-=0.5"
        )
        .from("#gear4", {
          opacity: 0,
          scale: 0.5,
          duration: 1,
          ease: "easeInOut",
        })

        .to(
          "#gear4",
          {
            rotation: -360,
            transformOrigin: "center",
            repeat: -1,
            ease: "linear",
            duration: 8,
          },
          "-=7"
        )
        .from("#css", {
          opacity: 0,
          scale: 0.5,
          duration: 1,
          ease: "easeInOut",
        })
        .from("#gear5", {
          opacity: 0,
          scale: 0.5,
          duration: 1,
          ease: "easeInOut",
        })
        .to(
          "#gear5",
          {
            rotation: 360,
            transformOrigin: "center",
            repeat: -1,
            ease: "linear",
            duration: 10,
          },
          "-=8.5"
        )

        .from(
          "#gear2",
          {
            opacity: 0,
            scale: 0.5,
            duration: 1,
            ease: "easeInOut",
          },
          "-=5"
        )
        .to("#gear2", {
          rotation: -360,
          transformOrigin: "center",
          repeat: -1,
          ease: "linear",
          duration: 9,
        })

        .from("#gear6", {
          opacity: 0,
          scale: 0.5,
          duration: 1,
          ease: "easeInOut",
        })
        .to(
          "#gear6",
          {
            rotation: -360,
            transformOrigin: "center",
            repeat: -1,
            ease: "linear",
            duration: 10,
          },
          "-=9"
        )

        .from(
          "#window3-top",
          {
            opacity: 0,
            scale: 0.5,
            duration: 1,
            ease: "easeInOut",
          },
          "-=9"
        )

        .from("#gear1", {
          opacity: 0,
          scale: 0.5,
          duration: 1,
          ease: "easeInOut",
        })
        .to(
          "#gear1",
          {
            rotation: 360,
            transformOrigin: "center",
            repeat: -1,
            ease: "linear",
            duration: 10,
          },
          "-=9.5"
        )
        .from(
          "#gear3",
          {
            opacity: 0,
            scale: 0.5,
            duration: 1,
            ease: "easeInOut",
          },
          "-=2"
        )
        .to("#gear3", {
          rotation: 360,
          transformOrigin: "center",
          repeat: -1,
          ease: "linear",
          duration: 8,
        })
        .from(
          "#js",
          {
            opacity: 0,
            scale: 0.5,
            duration: 1,
            ease: "easeInOut",
          },
          "-=8"
        );
    };

    loadSVG();
  }, []);

  return (
    <div className="w-full h-full relative">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{
          opacity: 1,
          scale: 1,
          transition: { duration: 1, delay:0, ease: "easeInOut" },
        }}
      >
        <div
          id="svg-container"
          className="w-[320px] h-[320px] md:w-[425px] md:h-[425px] xl:w-[530px] xl:h-[530px] translate-x-4 translate-y-6"
        ></div>
      </motion.div>
    </div>
  );
};

export default Photo;
