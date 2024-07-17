import React from "react";
import Link from "next/link";
import { socialconstants } from "../constants/links";

const sociallinks = socialconstants;

const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {sociallinks.map((Item, index) => (
        <Link target="_blank" rel="noopener noreferrer" href={Item.href} key={index} className={iconStyles}>
          {Item.icon}
        </Link>
      ))}
    </div>
  );
};

export default Socials;
