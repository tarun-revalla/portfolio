"use client";
import React, { useState, useEffect } from "react";
import { ArrowLeft, Frown, Loader } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import Stairs from "../components/Layout/Stairs";
import FloatNavbar from "../components/FloatNavbar";

const Custom404 = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 20,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  if (!isClient) {
    return null; // Return null on server-side
  }

  return (
    <div>
      <FloatNavbar />
      <Stairs>
        <div className="flex items-center justify-center min-h-screen bg-[--bg-color]">
          {isLoading ? (
            <Loader className="w-16 h-16 text-[--text-color] animate-spin" />
          ) : (
            <motion.div
              className="text-center p-8 bg-[--bg-color] rounded-xl"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div variants={itemVariants}>
                <Frown className="w-24 h-24 mx-auto text-red-500 mb-4" />
              </motion.div>
              <motion.h1
                variants={itemVariants}
                className="text-4xl font-bold mb-2"
              >
                Oops! 404
              </motion.h1>
              <motion.p variants={itemVariants} className="text-xl mb-4">
                Page not found
              </motion.p>
              <motion.p variants={itemVariants} className="mb-8">
                The page you&apos;re looking for doesn&apos;t exist or
                isn&apos;t published yet. any way, you can go back to the home
                page.
              </motion.p>
              <Link href="/">
                <motion.a
                  className="inline-flex items-center px-4 py-2 bg-[--color-accent] text-black rounded transition duration-300"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Go back home
                </motion.a>
              </Link>
            </motion.div>
          )}
        </div>
      </Stairs>
    </div>
  );
};

export default Custom404;
