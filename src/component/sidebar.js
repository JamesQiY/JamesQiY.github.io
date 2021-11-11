import { FaCode, FaHome, FaSun, FaMoon, FaGithub, FaFile } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import React from 'react';
import PropTypes from 'prop-types';

// globals
const iconSize = '2rem'

const Sidebar = ({darkTheme, setDarkTheme}) => {
  return (
    <div className='relative top-0 left-0 w-16 m-0 pt-4 flex flex-col flex-none bg-white dark:bg-gray-700 text-white shadow-lg'>
      <Link to="/Website">
        <SideBarIcon icon={<FaHome size={iconSize} />} text='Home' />
      </Link>
      <Link to="/Website/projects">
        <SideBarIcon icon={<FaCode size={iconSize} />} text='Projects' />
      </Link>
      <LinkIcon link='https://github.com/JamesQiY' icon={<FaGithub size={iconSize} />} text='Github' />
      <LinkIcon link='/RESUME_JAMES_YANG.pdf' icon={<FaFile size={iconSize} />} text='Resume' download={true} />
      <ThemeIcon darkTheme={darkTheme} setDarkTheme={setDarkTheme}/>
    </div>
  )
};

Sidebar.propTypes = {
  darkTheme: PropTypes.bool,
  setDarkTheme: PropTypes.func,
};

const SideBarIcon = ({ icon, text = 'tooltip' }) => (
  <div className='sidebar_icon group'>
    {icon}
    <span className='sidebar_text group-hover:scale-100'>
      {text}
    </span>
  </div>
);

SideBarIcon.propTypes = {
  icon: PropTypes.any,
  text: PropTypes.string,
};


const LinkIcon = ({ link = '', icon, text = 'tooltip', download = false }) => {
  var optional = {}
  if (download) optional['download'] = download;
  return (
    <a href={link} {...download}>
      <SideBarIcon icon={icon} text={text} />
    </a>
  );
};

LinkIcon.propTypes = {
  link: PropTypes.string,
  icon: PropTypes.any,
  text: PropTypes.string,
  download: PropTypes.bool
};

const ThemeIcon = ({darkTheme, setDarkTheme}) => {
  const toggle = () => setDarkTheme(!darkTheme);
  return (
    <div onClick={toggle}>
      {darkTheme ? (
        <SideBarIcon icon={<FaSun size={iconSize} />} text='Light mode' />
      ) : (
        <SideBarIcon icon={<FaMoon size={iconSize} />} text='Dark mode' />
      )}
    </div>
  );
};

ThemeIcon.propTypes = {
  darkTheme: PropTypes.bool,
  setDarkTheme: PropTypes.func,
};

export default Sidebar;