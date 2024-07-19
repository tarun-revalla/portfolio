"use client";
import React, { useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "../../lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import DarkModeToggle from "../Darkmodetoggle";
import { IconMessage } from "@tabler/icons-react";

export const FloatingNav = ({ navItems, className }) => {
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const pathname = usePathname();

  useMotionValueEvent(scrollY, "change", (current) => {
    if (typeof current === "number") {
      if (current < lastScrollY || current <= 0) {
        setVisible(true);
      } else if (current > 100 && current > lastScrollY) {
        setVisible(false);
      }
      setLastScrollY(current);
    }
  });

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: 0,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
          duration: 1,
          ease: "easeInOut",
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex max-w-fit lg:max-w-7xl fixed top-8 lg:top-5 inset-x-0 mx-auto border dark:border-transparent border-white/[0.2] rounded-full bg-[--bg-color] shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] px-4 py-2 items-center justify-between w-full",
          className
        )}
      >
        <div id="name" className="mr-7 lg:mx-7">
          <Link href="/">
            <h1 className="text-xl font-semibold">
              Tarun<span className="text-accent">.</span>
            </h1>
          </Link>
        </div>
        <div id="nav" className="flex items-center space-x-4">
          {navItems.map((navItem, idx) => (
            <Link
              key={`link-${idx}`}
              href={navItem.link}
              className={cn(
                "relative text-sm font-medium items-center flex space-x-1 hover:text-accent hover:scale-110 transition-all duration-300",
                pathname === navItem.link
                  ? "text-accent"
                  : "text-[--text-color]"
              )}
            >
              <span className="block sm:hidden">
                {React.cloneElement(navItem.icon, {
                  className: cn(
                    navItem.icon.props.className,
                    pathname === navItem.link
                      ? "text-accent"
                      : "text-[--text-color]"
                  ),
                })}
              </span>
              <span className="hidden sm:block">{navItem.name}</span>
            </Link>
          ))}
          <DarkModeToggle />
          <button className="border text-sm font-medium border-accent px-4 py-2 rounded-full flex items-center justify-center hover:scale-110 hover:bg-accent hover:text-primary transistion-all duration-500">
            <span className="hidden sm:block">Contact me</span>
            <span className="block sm:hidden">
              <IconMessage className="h-4 w-4 text-[--text-color]" />
            </span>
            <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-accent to-transparent h-px" />
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
