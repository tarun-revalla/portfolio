import React from "react";
import { FloatingNav } from "./ui/FloatingNav";

import {
  IconHome,
  IconMessage,
  IconUser,
  IconCodeCircle2,
} from "@tabler/icons-react";

const navItems = [
  {
    name: "Home",
    link: "/",
    icon: <IconHome className="h-5 w-5 text-[--text-color]" />,
  },
  {
    name: "About",
    link: "/about",
    icon: <IconUser className="h-5 w-5 text-[--text-color]" />,
  },
  {
    name: "Services",
    link: "/services",
    icon: <IconCodeCircle2 className="h-5 w-5 text-[--text-color]" />,
  },
];

const FloatNavbar = () => {
  return <div className="px-10">
  <FloatingNav navItems={navItems} className={"relative  w-full"} />
  </div>;
};

export default FloatNavbar;
