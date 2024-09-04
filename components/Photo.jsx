"use client";
import { memo, useEffect, useState, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";

const Photo = memo(() => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return document.documentElement.classList.contains('dark');
    }
    return false;
  });
  const svgRef = useRef(null);

  const applyTheme = useCallback(() => {
    if (svgRef.current) {
      const elementsToInvert = ['#gear7', '#gear6', '#gear5', '#gear4', '#gear3', '#gear2', '#gear1'];
      elementsToInvert.forEach(elementId => {
        const element = svgRef.current.querySelector(elementId);
        if (element) {
          element.style.filter = isDarkMode ? 'invert(0.9)' : 'none';
        }
      });
    }
  }, [isDarkMode]);

  const loadSVG = useCallback(async () => {
    try {
      const response = await fetch("/assets/tsrun.svg");
      const svgText = await response.text();
      if (svgRef.current) {
        svgRef.current.innerHTML = svgText;
        applyTheme();
        animateSVG();
      }
    } catch (error) {
      console.error("Error loading SVG:", error);
    }
  }, [applyTheme,animateSVG]);

  const animateSVG = useCallback(() => {
    const timeline = gsap.timeline();
    
    // Helper function to apply animations
    const animate = (selector, props, position) =>
      timeline.from(selector, { opacity: 0, scale: 0.5, duration: 0.8, ease: "easeInOut", ...props }, position);
    
    const rotate = (selector, clockwise, duration, position) =>
      timeline.to(selector, {
        rotation: clockwise ? 360 : -360,
        transformOrigin: "center",
        repeat: -1,
        ease: "linear",
        duration, // Updated duration for faster rotation
      }, position);
  
    const elements = [
      { selector: "#Coffee", position: "=1" },
      { selector: "#window1-low" },
      { selector: "#gear7", animate: { duration: 0.5 }, rotate: { clockwise: false, duration: 6, position: "=-1" } }, // Updated duration
      { selector: "#xml", position: "-=5.5" }, // Adjusted position to fit the reduced total duration
      { selector: "#window2-mid", position: "-=0.4" }, // Adjusted position
      { selector: "#gear4", rotate: { clockwise: false, duration: 6, position: "-=5.5" } }, // Updated duration
      { selector: "#css" },
      { selector: "#gear5", rotate: { clockwise: true, duration: 7, position: "-=6.5" } }, // Updated duration
      { selector: "#gear2", position: "-=4.5", rotate: { clockwise: false, duration: 6 } }, // Updated duration
      { selector: "#gear6", rotate: { clockwise: false, duration: 6.5, position: "-=6.5" } }, // Updated duration
      { selector: "#window3-top", position: "-=6.5" }, // Adjusted position
      { selector: "#gear1", rotate: { clockwise: true, duration: 6.5, position: "-=7" } }, // Updated duration
      { selector: "#gear3", position: "-=1.5", rotate: { clockwise: true, duration: 6 } }, // Updated duration
      { selector: "#js", position: "-=6" } // Adjusted position
    ];
  
    elements.forEach(({ selector, animate: animateProps, rotate: rotateProps, position }) => {
      animate(selector, animateProps, position);
      if (rotateProps) {
        rotate(selector, rotateProps.clockwise, rotateProps.duration, rotateProps.position);
      }
    });
  }, []);

  useEffect(() => {
    loadSVG();

    const handleThemeChange = () => {
      setIsDarkMode(document.documentElement.classList.contains('dark'));
    };

    // Initial check
    handleThemeChange();

    // Set up a MutationObserver to watch for changes to the 'class' attribute of <html>
    const observer = new MutationObserver(handleThemeChange);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

    return () => observer.disconnect();
  }, [loadSVG]);

  useEffect(() => {
    applyTheme();
  }, [isDarkMode, applyTheme]);

  return (
    <div className="w-full h-full relative">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <div
          ref={svgRef}
          className="w-[320px] h-[320px] md:w-[425px] md:h-[425px] xl:w-[530px] xl:h-[530px] translate-x-4 translate-y-6"
        />
      </motion.div>
    </div>
  );
});

Photo.displayName = 'Photo';

export default Photo;