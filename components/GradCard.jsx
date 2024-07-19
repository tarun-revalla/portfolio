import Link from "next/link";
import React from "react";
import { BsArrowDownRight } from "react-icons/bs";
import { NeonGradientCard } from "./magicui/neon-gradient-card";

const GradCard = ({ service }) => {
  return (
    <div className="flex-1 flex flex-col justify-center gap-6 group border-2 border-[--text-color] rounded-lg p-5 hover:scale-110 hover:rounded-3xl hover:border-accent hover:shadow-2xl transition-all duration-500 bg-[--bg-color] opacity-1 ">
      <div className="w-full flex justify-between items-center ">
        <div className="text-5xl font font-extrabold group-hover:text-accent transition-all duration-500">
          {service.num}
        </div>
        <Link
          href={service.href}
          className="w-[70px] h-[70px] rounded-full group-hover:bg-accent transition-all duration-500 flex justify-center items-center group-hover:-rotate-45 hover:scale-110  "
        >
          <BsArrowDownRight className="text-[--text-color] group-hover:text-[--bg-color] text-3xl transition-all duration-500" />
        </Link>
      </div>
      <h2 className="text-[42px] font-bold leading-none group-hover:text-accent transition-all duration-500">
        {service.title}
      </h2>
      <p className="text-white/80 dark:text-black/80">{service.description}</p>
    </div>
  );
};

export default GradCard;
