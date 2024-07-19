"use client";
import React from "react";
import { motion } from "framer-motion";
import FloatNavBar from "../../components/FloatNavbar";
import Stairs from "../../components/Layout/Stairs";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const info = [
  {
    name: "Phone",
    value: "Tarun",
    icon: <FaPhoneAlt className="w-5 h-5 text-gray-500" />,
  },
  {
    name: "Email",
    value: "tarun@tarun.com",
    icon: <FaEnvelope className="w-5 h-5 text-gray-500" />,
  },
  {
    name: "Address",
    value: "Hyderabad, India",
    icon: <FaMapMarkerAlt className="w-5 h-5 text-gray-500" />,
  },
];

const index = () => {
  return (
    <div>
      <FloatNavBar />
      <Stairs>
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 2.4, ease: "easeIn" }}
          className="py-6"
        >
          <div className="container mx-auto">
            <div className="flex flex-col xl:flex-row gap-[30px]">
              <div className="xl:h-[55%] order-2 xl:order-none">
                <form className="flex flex-col gap-6 p-10 rounded-xl">
                  <h3 className="text-2xl font-bold text-accent">
                    Lets get to know each other
                  </h3>
                  <p className="text-md text-gray-500"></p>
                  <div>
                    <input
                      type="text"
                      placeholder="Name"
                      className="w-full rounded-lg border-2 border-gray-300 p-4 text-gray-900 focus:border-accent focus:ring-accent focus:ring-opacity-50"
                    />
                  </div>
                  <div className="flex flex-col gap-4">
                    <input
                      type="text"
                      placeholder="Email"
                      className="w-full rounded-lg border-2 border-gray-300 p-4 text-gray-900 focus:border-accent focus:ring-accent focus:ring-opacity-50"
                    />
                    <input
                      type="text"
                      placeholder="Phone"
                      className="w-full rounded-lg border-2 border-gray-300 p-4 text-gray-900 focus:border-accent focus:ring-accent focus:ring-opacity-50"
                    />
                  </div>
                  <div className="flex flex-col gap-4">
                    <textarea
                      placeholder="Address"
                      className="w-full rounded-lg border-2 border-gray-300 p-4 text-gray-900 focus:border-accent focus:ring-accent focus:ring-opacity-50"
                    ></textarea>
                    <textarea
                      placeholder="Bio"
                      className="w-full rounded-lg border-2 border-gray-300 p-4 text-gray-900 focus:border-accent focus:ring-accent focus:ring-opacity-50"
                    ></textarea>
                  </div>
                  <div className="flex flex-col gap-4">
                    <select className="w-full rounded-lg border-2 border-gray-300 p-4 text-gray-900 focus:border-accent focus:ring-accent focus:ring-opacity-50">
                      <option value="option1">Option 1</option>
                      <option value="option2">Option 2</option>
                      <option value="option3">Option 3</option>
                    </select>
                    <select className="w-full rounded-lg border-2 border-gray-300 p-4 text-gray-900 focus:border-accent focus:ring-accent focus:ring-opacity-50">
                      <option value="option1">Option 1</option>
                      <option value="option2">Option 2</option>
                      <option value="option3">Option 3</option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-4">
                    <select className="w-full rounded-lg border-2 border-gray-300 p-4 text-gray-900 focus:border-accent focus:ring-accent focus:ring-opacity-50">
                      <option value="option1">Option 1</option>
                      <option value="option2">Option 2</option>
                      <option value="option3">Option 3</option>
                    </select>
                    <input
                      type="text"
                      placeholder="Website"
                      className="w-full rounded-lg border-2 border-gray-300 p-4 text-gray-900 focus:border-accent focus:ring-accent focus:ring-opacity-50"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </motion.section>
      </Stairs>
    </div>
  );
};

export default index;
