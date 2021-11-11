import React from 'react';
import {FaDiscord, FaLanguage} from 'react-icons/fa';
import PropTypes from 'prop-types';
const CardInfo = require('./CardInfo.json')

const Projects = () => {
  return (
    <div>
      <CardContainer />
    </div>
  )
};

const CardContainer = () => {
  return (
    <div className="flex flex-col items-center justify-center ">
      <Card icon={<FaDiscord size="3em"/>} project={CardInfo.bot}/>
      <Card icon={<FaLanguage size="3em"/>} project={CardInfo.ai}/>
      {/* <Card icon={<FaNewspaper size="3em"/>} project={CardInfo.site}/> */}
    </div>
  )
}

const Card = ({icon, project={name:"", desc: ""}}) => {
  return (
    <div className="m-3 p-2 flex flex-col items-center max-w100 rounded-lg border-truegray-800 dark:border-yellow-100 border-2">
      <div className="mb-5 rounded-full h-16 w-16 flex items-center justify-center bg-red-300 bg-opacity-100">
        {icon}
      </div>
      <h2 className="mb-5 dark:text-white text-xl font-bold" >{project.name}</h2>
      <span className="p-1 dark:text-white">{project.desc}</span>
    </div>
  )
}
Card.propTypes = {
  icon: PropTypes.any,
  project: PropTypes.object
}

export default Projects;