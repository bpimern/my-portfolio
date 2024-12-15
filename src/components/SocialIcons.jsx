import React from "react";
import { BsFacebook } from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiInstagram, FiMail } from "react-icons/fi";
import { SiYoutubemusic } from "react-icons/si";
import { RiTwitterXLine } from "react-icons/ri";

const socialItems = [
  {
    title: "Github",
    href: "https://www.youtube.com/@reactjsBD",
    icon: <FaGithub />,
  },
  {
    title: "Linkedin",
    href: "https://www.youtube.com/@reactjsBD",
    icon: <FaLinkedin />,
  },
  {
    title: "Youtube",
    href: "https://www.youtube.com/@reactjsBD",
    icon: <SiYoutubemusic />,
  },
  {
    title: "Facebook",
    href: "https://www.youtube.com/@reactjsBD",
    icon: <BsFacebook />,
  },
  {
    title: "Instagram",
    href: "https://www.youtube.com/@reactjsBD",
    icon: <FiInstagram />,
  },
  {
    title: "Twitter",
    href: "https://www.youtube.com/@reactjsBD",
    icon: <RiTwitterXLine />,
  },
  {
    title: "Mail",
    href: "https://www.youtube.com/@reactjsBD",
    icon: <FiMail />,
  },
];

const SocialIcons = () => {
  return (
    <div className="flex justify-center gap-2.5 mt-2">
      {socialItems?.map((item) => (
        <a
          key={item?.title}
          href={item?.href}
          className="hover:text-designColor duration-300 cursor-pointer text-xl"
        >
          {item?.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialIcons;
