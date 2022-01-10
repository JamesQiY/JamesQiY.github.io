import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { PageContext } from "../hooks/pageContext";
import {
  FaCode,
  FaHome,
  FaSun,
  FaMoon,
  FaGithub,
  FaFile,
  FaChessKnight,
} from "react-icons/fa";

// globals
const iconSize = "2rem";

const Sidebar = () => {
  return (
    <div className="flex flex-col p-2 w-16 h-screen bg-white dark:bg-gray-700 text-white">
      <Link to="/">
        <SideBarIcon icon={<FaHome size={iconSize} />} text="Home" />
      </Link>
      <Link to="/projects">
        <SideBarIcon icon={<FaCode size={iconSize} />} text="Projects" />
      </Link>
      <Link to="/blog">
        <SideBarIcon
          icon={<FaChessKnight size={iconSize} />}
          text="Board Game Blog"
        />
      </Link>

      <LinkIcon
        link="https://github.com/JamesQiY"
        icon={<FaGithub size={iconSize} />}
        text="Github"
      />
      <LinkIcon
        link="/Resume.pdf"
        icon={<FaFile size={iconSize} />}
        text="Resume"
        download={true}
      />

      <ThemeIcon />
    </div>
  );
};

// group-active:scale-100 group-hover:scale-100

const SideBarIcon = ({ icon, text = "tooltip" }) => (
  <div className="sidebar_icon group">
    {icon}
    <div className="sidebar_text group-active:scale-100 group-hover:scale-100">
      {text}
    </div>
  </div>
);

const LinkIcon = ({ link = "", icon, text = "tooltip", download = false }) => {
  return (
    <a href={link} {...download} target="_blank" rel="noopener noreferrer">
      <SideBarIcon icon={icon} text={text} />
    </a>
  );
};

const ThemeIcon = () => {
  const states = useContext(PageContext);
  let darkTheme = states.darkTheme;
  let setDarkTheme = states.setDarkTheme;
  const toggle = () => setDarkTheme(!darkTheme);
  return (
    <div onClick={toggle}>
      {darkTheme ? (
        <SideBarIcon icon={<FaSun size={iconSize} />} text="Light mode" />
      ) : (
        <SideBarIcon icon={<FaMoon size={iconSize} />} text="Dark mode" />
      )}
    </div>
  );
};

export default Sidebar;
