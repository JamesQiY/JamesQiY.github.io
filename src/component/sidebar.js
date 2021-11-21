import { FaCode, FaHome, FaSun, FaMoon, FaGithub, FaFile, FaInstagram, FaChessKnight} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import React from 'react';
import PropTypes from 'prop-types';

// globals
const iconSize = '2rem'

const Sidebar = ({darkTheme, setDarkTheme}) => {
  return (
    <div className='top-0 left-0 w-16 h-full m-0 pt-4 flex flex-col flex-none bg-white dark:bg-gray-700 text-white shadow-lg'>
      <Link to="/">
        <SideBarIcon icon={<FaHome size={iconSize} />} text='Home' />
      </Link>
      <Link to="/projects">
        <SideBarIcon icon={<FaCode size={iconSize} />} text='Projects'/>
      </Link>
      <Link to="/blog">
        <SideBarIcon icon={<FaChessKnight size={iconSize} />} text='Board Game Blog'/>
      </Link>
      
      <LinkIcon link='https://github.com/JamesQiY' icon={<FaGithub size={iconSize} />} text='Github' />
      <LinkIcon link='/Resume.pdf' icon={<FaFile size={iconSize} />} text='Resume' download={true} />
      <LinkIcon link='https://www.instagram.com/reddishjam/' icon={<FaInstagram size={iconSize} />} text='Instagram'/>

      <ThemeIcon darkTheme={darkTheme} setDarkTheme={setDarkTheme}/>
    </div>
  )
};

const SideBarIcon = ({ icon, text = 'tooltip' }) => (
  <div className='sidebar_icon group'>
    {icon}
    <span className='sidebar_text group-hover:scale-100 group-active:scale-100'>
      {text}
    </span>
  </div>
);

const LinkIcon = ({ link = '', icon, text = 'tooltip', download = false }) => {
  return (
    <a href={link} {...download} target="_blank" rel="noopener noreferrer">
      <SideBarIcon icon={icon} text={text} />
    </a>
  );
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

Sidebar.propTypes = {
  darkTheme: PropTypes.bool,
  setDarkTheme: PropTypes.func,
};
SideBarIcon.propTypes = {
  icon: PropTypes.any,
  text: PropTypes.string,
};
LinkIcon.propTypes = {
  link: PropTypes.string,
  icon: PropTypes.any,
  text: PropTypes.string,
  download: PropTypes.bool
};
ThemeIcon.propTypes = {
  darkTheme: PropTypes.bool,
  setDarkTheme: PropTypes.func,
};

export default Sidebar;