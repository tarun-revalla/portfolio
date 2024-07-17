import React from "react";
import CountUp from "react-countup";
import { statsconstants } from "../constants/links";

const stat = statsconstants;
const Stats = () => {
  return (
    <section>
      <div className="continer mx-auto py-10 lg:pt-0">
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
          {stat.map((stat, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex gap-4 items-center justify-center xl:justify-start"
              >
                <CountUp
                  end={stat.value}
                  duration={2.75}
                  delay={3}
                  suffix="+"
                  className="text-xl md:text-5xl font-extrabold text-accent"
                />
                <p
                  className={`${
                    stat.label.length < 15 ? "max-w-[100px]" : "max-w-[150px]"
                  } leading-snug text-[--text-color] `}
                >
                  {stat.label}
                </p> 
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
