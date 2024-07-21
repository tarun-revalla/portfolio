import React from "react";
import { motion } from "framer-motion";
import FloatNavBar from "../components/FloatNavbar";
import Stairs from "../components/Layout/Stairs";

const index = () => {
  return (
    <div>
      <FloatNavBar />
      <Stairs>
        <div>{/* content goes here */}</div>
      </Stairs>
    </div>
  );
};

export default index;

