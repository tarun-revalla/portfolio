import React from "react";
import { motion } from "framer-motion";
import FloatNavBar from "../../components/FloatNavbar";
import Stairs from "../../components/Layout/Stairs";

const index = () => {
  return (
    <div>
      <FloatNavBar />
      <Stairs>
        <div className="flex flex-col items-center justify-center my-auto max-h-10">
          <motion.h1>About</motion.h1>
          <motion.p>Hello</motion.p>
        </div>
      </Stairs>
    </div>
  );
};

export default index;
