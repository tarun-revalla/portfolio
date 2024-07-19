import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

export const linksconstants = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/resume", label: "Resume" },
];


export const socialconstants = [
  { href: "https://github.com/tarun-revalla", icon: <FaGithub /> },
  { href: "https://x.com/____tarun", icon: <FaTwitter /> },
  { href: "https://www.linkedin.com/in/revalla-tarun/", icon: <FaLinkedin /> },
];

export const statsconstants = [
  { label: "Projects", value: "10" },
  { label: "Hours", value: "300" },
  { label: "Languages", value: "10" },
  { label: "commits", value: "600" },
];

export const servicesconstants = [
  {
    num: "01",
    title: "Web Development",
    description:
      "Building responsive and dynamic websites tailored to your needs.",
    href: "/",
  },
  {
    num: "02",
    title: "UI/UX Design",
    description: "Crafting intuitive and engaging user experiences.",
    href: "/",
  },
  {
    num: "03",
    title: "Logo Design",
    description: "Creating memorable and impactful brand identities.",
    href: "/",
  },
  {
    num: "04",
    title: "SEO",
    description: "Optimizing your online presence for maximum visibility.",
    href: "/",
  },
];
