"use client";

import { useTheme } from "next-themes";
import { useState, useEffect, useRef } from "react";
import { BsSunFill, BsMoonFill } from "react-icons/bs";

const DarkModeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const rippleRef = useRef(null);

  useEffect(() => {
    setMounted(true);

    // Check for saved theme preference in local storage on mount
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setTheme(storedTheme);
    } else {
      setTheme("light");
    }
  }, [setTheme]);

  const currentTheme = theme;

  const handleThemeToggle = () => {
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    setTheme(newTheme);

    // Save the selected theme to local storage
    localStorage.setItem("theme", newTheme);

    // Trigger the ripple effect
    const ripple = rippleRef.current;
    ripple.classList.remove("active");
    void ripple.offsetWidth; // trigger reflow
    ripple.classList.add("active");
  };

  return (
    <div className="px-4">
    <button 
      onClick={handleThemeToggle}
      className="group w-9 h-9 border-2 border-[--text-color] flex justify-center items-center rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-180 ripple"
      ref={rippleRef}
    >
      {mounted &&
        (currentTheme === "dark" ? (
          <BsMoonFill className="text-xl text-gray-800 group-hover:text-white transition-all duration-1200" />
        ) : (
          <BsSunFill className="text-xl text-white/90 group-hover:text-black transition-all duration-1200" />
        ))}
    </button>
  </div>
  );
};

export default DarkModeToggle;
