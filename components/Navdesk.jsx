"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { linksconstants } from "../constants/links";

const links = linksconstants
const Navdesk = () => {
  const pathname = usePathname();
  return (
    <nav className="flex gap-8">
      {links.map((link, index) => (
        <Link
          key={index}
          href={link.href}
          className={`${
            link.href === pathname && "text-accent border-b-2 border-accent "
          } capitalize font-medium hover:text-accent transistion-all}`}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  )
};

export default Navdesk;
