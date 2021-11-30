import React from 'react';
import { FaDiscord, FaLanguage, FaNewspaper, FaFileImage } from 'react-icons/fa';
import {BsCollection, BsFillSignpostFill} from 'react-icons/bs'
import PropTypes from 'prop-types';
import CardInfo from './resource/CardInfo.json';

const Projects = () => {
  const iconsize = '3rem'
  return (
    <div className="card_container fade-in">
      <Card icon={<FaDiscord size={iconsize} />} project={CardInfo.bot} />
      <Card icon={<BsCollection size={iconsize} />} project={CardInfo.wardex} />
      <Card icon={<BsFillSignpostFill size={iconsize} />} project={CardInfo.wguides} />
      <Card icon={<FaNewspaper size={iconsize} />} project={CardInfo.site} />
      <Card icon={<FaFileImage size={iconsize} />} project={CardInfo.image} />
      <Card icon={<FaLanguage size={iconsize} />} project={CardInfo.ai} />

    </div>
  )
};

const Card = ({ icon, project = { name: "", tech: [], desc: "" } }) => {
  return (
    <div className="card">
      <div className="flex flex-col items-center justify-center">
        <a className="mt-5 mb-5 rounded-full h-16 w-16 
          flex items-center justify-center 
        bg-red-300  bg-opacity-100 cursor-pointer
          transition-transform hover:bg-red-400 hover:shadow-md 
          group transform hover:-translate-y-1 hover:scale-150 "
          href={project.link}>

          {icon}
          <div target="_blank" rel="noopener noreferrer" 
            className="absolute align-bottom px-5 py-1 
            text-white bg-gray-700 rounded-lg text-sm
            transition-all scale-0 duration-100 origin-top 
            group-hover:translate-y-12 group-hover:scale-100 group-active:scale-100">Link</div>
        </a>
        
      </div>

      <h2 className="mb-1 text-center align-middle justify-center dark:text-white text-xl font-bold" >{project.name}</h2>

      <span className="m-1 text-center dark:text-white text-md" >{project.date}</span>
      <Tech tech={project.tech} />
      <span className="m-2 p-2 px-auto dark:text-white">{project.desc}</span>
      <a className="flex flex-grow flex-1 
        w-full px-4 py-4 text-black justify-center bg-red-300 rounded-b-3xl 
        transition duration-300 hover:bg-red-500 font-semibold text-lg" href={project.link}>Link to Project</a>
    </div>
  )
}
Card.propTypes = {
  icon: PropTypes.any,
  project: PropTypes.object
}

const Tech = ({ tech = [] }) => {
  return (
    <div className="flex flex-row">
      {tech.map(str => <div className="
      m-1.5 px-2 py-1 rounded-full 
      text-xs
      flex text-center items-center justify-center
      text-white dark:text-black bg-gray-700 dark:bg-gray-100" key={str}>{str}</div>)}
    </div>
  )
}

Tech.propTypes = {
  tech: PropTypes.array
}

export default Projects;