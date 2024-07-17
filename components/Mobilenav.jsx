"use client";
import { usePathname } from "next/navigation";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "../components/ui/sheet";
import Link from "next/link";
import { IoMenu } from "react-icons/io5";
import { linksconstants } from "../constants/links";
import DarkModeToggle from "./Darkmodetoggle";
import Socials from "./Socials";

const links = linksconstants;
const Mobilenav = () => {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger className="flex justify-center px-4">
        <IoMenu className="text-[32px] text-[--text-color]" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <div className="mt-32 mb-40 text-center text-2xl">
          <Link href="/">
            <h1 className="text-4xl font semi-bold">
              <SheetClose>Tarun</SheetClose>
            </h1>
          </Link>
        </div>
        <nav className="flex flex-col justify-center items-center gap-8">
          <DarkModeToggle />
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className={`${
                link.href === pathname &&
                "text-accent border-b-2 border-accent "
              } text-xl capitalize hover:text-accent transisition-all`}
            >
              <SheetClose>{link.label}</SheetClose>
            </Link>
          ))}
          <div className="py-4"></div>
          <Socials
            containerStyles="flex gap-6"
            iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transistion-all duration-500"
          />
          <div className="py-2"></div>
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default Mobilenav;
