import Link from "next/link";
import { Button } from "./ui/button";
import Navdesk from "./Navdesk";
import Mobilenav from "./Mobilenav";
import DarkModeToggle from "./Darkmodetoggle";

const Header = () => {
  return (
    <header className="py-4 xl:py-5 text-white dark:text-black transition-all duration-180">
      <div className="container mx-auto flex justify-between items-center ">
        <Link href="/">
          <h1 className="text-4xl font-semibold px-4">
            Tarun<span className="text-accent">.</span>
          </h1>
        </Link>
        <div className="hidden lg:flex items-center gap-8">
          <Navdesk />
          <Link href="/contact" className="px-2">
            <Button className="transition-all ease-in-out duration-600 hover:scale-110 rounded-full shadow-sm">
              Contact me
            </Button>
          </Link>
          <DarkModeToggle />
        </div>

        <div className="flex lg:hidden">
          <Mobilenav />
        </div>
      </div>
    </header>
  );
};

export default Header;
