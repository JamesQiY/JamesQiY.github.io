import React from 'react';
import {FaDiscord, FaLanguage} from 'react-icons/fa';
import Background from '../component/Background';
import PropTypes from 'prop-types';
const CardInfo = require('./CardInfo.json')

const Projects = ({darkTheme}) => {
  return (
    <div>
      <Background dark={darkTheme} key={darkTheme} />
      <CardContainer />
    </div>
  )
};

Projects.propTypes = {
  darkTheme: PropTypes.bool
}


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
    <div className="mb-2 p-1 w-3/6 flex flex-shrink flex-col items-center rounded-3xl bg-gray-100 dark:bg-truegray-700 shadow-md">
      <div className="mt-5 mb-5 rounded-full h-16 w-16 flex items-center justify-center bg-red-300 bg-opacity-100">
        {icon}
      </div>
      <div></div>

      <h2 className="mb-5 text-center dark:text-white text-xl font-bold" >{project.name}</h2>
      <span className="m-2 p-2  dark:text-white">{project.desc}</span>
    </div>
  )
}
Card.propTypes = {
  icon: PropTypes.any,
  project: PropTypes.object
}

export default Projects;