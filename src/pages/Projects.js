import React from 'react';
import {FaDiscord, FaLanguage, FaNewspaper} from 'react-icons/fa';
import PropTypes from 'prop-types';
const CardInfo = require('./CardInfo.json')

const Projects = () => {
  return (
    <CardContainer />
  )
};

const CardContainer = () => {
  return (
    <div className="flex flex-row flex-grow flex-wrap items-center justify-center">
      <Card icon={<FaDiscord size="3em"/>} project={CardInfo.bot}/>
      <Card icon={<FaLanguage size="3em"/>} project={CardInfo.ai}/>
      <Card icon={<FaNewspaper size="3em"/>} project={CardInfo.site}/>

    </div>
  )
}

const Card = ({icon, project={name:"", tech:[], desc: ""}}) => {
  return (
    <div className="m-2 mb-2 p-1 max-w-lg flex flex-col items-center justify-center rounded-3xl bg-gray-100 dark:bg-truegray-700 shadow-md">
      <div className="mt-5 mb-5 rounded-full h-16 w-16 flex items-center justify-center bg-red-300 bg-opacity-100">
        {icon}
      </div>
      <div></div>

      <h2 className="mb-5 text-center dark:text-white text-xl font-bold" >{project.name}</h2>
      <Tech tech={project.tech}/>
      <span className="m-2 p-2 px-auto dark:text-white">{project.desc}</span>
    </div>
  )
}
Card.propTypes = {
  icon: PropTypes.any,
  project: PropTypes.object
}

const Tech = ({tech=[]}) =>{
  return (
    <div className="flex flex-row">
      {tech.map(str => <div className="m-1.5 px-2 py-1 rounded-full text-center text-white font-light
      dark:text-black bg-gray-700 dark:bg-gray-100" key={str}>{str}</div>)}
    </div>
  )
}

Tech.propTypes = {
  tech: PropTypes.array
}

export default Projects;