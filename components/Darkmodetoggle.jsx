"use client";

import { useTheme } from "next-themes";
import { useState, useEffect, useRef } from "react";
import { BsSun, BsMoon } from "react-icons/bs";
import { RiMoonClearLine } from "react-icons/ri";

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
    <div>
      <button
        onClick={handleThemeToggle}
        className="group w-5 h-5  flex justify-center items-center rounded-full hover:scale-125  transition-all duration-500"
        ref={rippleRef}
      >
        {mounted &&
          (currentTheme === "dark" ? (
            <RiMoonClearLine className="text-xl text-[--text-color] group-hover:text-accent transition-all" />
          ) : (
            <BsSun className="text-xl text-[--text-color]  group-hover:text-accent transition-all" />
          ))}
      </button>
    </div>
  );
};

export default DarkModeToggle;
