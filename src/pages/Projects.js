import React, {useEffect, useState} from "react";
import {
  FaDiscord,
  FaLanguage,
  FaNewspaper,
  FaFileImage,
} from "react-icons/fa";
import { BsCollection, BsFillSignpostFill } from "react-icons/bs";
import { getProjects } from "../hooks/queries"; 
import CardInfo from "./resource/CardInfo.json";


function processProjectList (arr) {
  const n = arr.length;
  const info = {}
  if (n <= 0) return;

  for (let i = 0; i < n; i ++){
    let curr = arr[i]
    info[curr.shortname] = {
      title : curr.title,
      desc : curr.description,
      link : curr.link,
      tech : curr.tech,
      date : curr.date
    }
  }
  
  return info
}

const Projects = () => {
  const iconsize = "3rem";
  const [projectList, setprojectList] = useState([])

  useEffect(() => {
    async function fetchData() {
      const result = await getProjects();
      setprojectList(result);
    }
    fetchData();
    return () => {
    }
  }, [])

  const CardInfo = processProjectList(projectList);
  console.log(CardInfo, projectList)

  if (CardInfo === undefined)
    return <></>

  return (
    <div
      className="grid grid-cols-1 xl:grid-cols-2 grid-row-2 gap-y-2 sm:gap-4
      grid-flow-row-dense justify-center justify-items-center items-center
      w-full h-screen 
      p-0 sm:p-2 overflow-auto fade-in"
    >
      <Card icon={<BsFillSignpostFill size={iconsize} />} project={CardInfo.wguides}/>
      <Card icon={<BsCollection size={iconsize} />} project={CardInfo.wardex} />
      <Card icon={<FaDiscord size={iconsize} />} project={CardInfo.bot} />
      <Card icon={<FaNewspaper size={iconsize} />} project={CardInfo.site} />
      <Card icon={<FaFileImage size={iconsize} />} project={CardInfo.image} />
      <Card icon={<FaLanguage size={iconsize} />} project={CardInfo.ai} />
    </div>
  );
};

const Card = ({ icon, project = { title: "", tech: [], desc: "" } }) => {
  return (
    <div
      className=" sm:m-2 md:max-w-xl h-full row-span-1 col-span-1
      flex flex-col
      rounded-b-3xl sm:rounded-3xl 
      bg-gray-100 dark:bg-truegray-700 shadow-inner"
    >
      <div className="flex flex-col p-2 items-center justify-center">
        <a
          className="my-5 rounded-full h-16 w-16 
          flex items-center justify-center 
        bg-red-300 bg-opacity-100 cursor-pointer
          transition-transform hover:bg-red-400 hover:shadow-md 
          group transform hover:-translate-y-1 hover:scale-150 "
          href={project.link}
        >
          {icon}
          <div
            target="_blank"
            rel="noopener noreferrer"
            className="absolute align-bottom px-5 py-1 
            text-white bg-gray-700 rounded-lg text-sm
            transition-all scale-0 duration-100 origin-top 
            group-hover:translate-y-12 group-hover:scale-100 group-active:scale-100"
          >
            Link
          </div>
        </a>
      </div>

      <h2 className="mb-1 text-center align-middle justify-center dark:text-white text-xl font-bold">
        {project.title}
      </h2>

      <span className="m-1 text-center dark:text-white text-md">
        {project.date}
      </span>

      <Tech tech={project.tech} />
      <span className="m-2 p-2 px-auto text-center dark:text-white">
        {project.desc}
      </span>
      <a
        className="flex justify-center
        w-full mt-auto p-4 text-black font-semibold text-lg
        bg-red-300 rounded-b-3xl shadow-inner
        transition duration-300 hover:bg-red-500 "
        href={project.link}
      >
        Link to Project
      </a>
    </div>
  );
};

const Tech = ({ tech = [] }) => {
  return (
    <div className="flex items-center justify-center">
      {tech.map((str) => (
        <div
          className="
          m-1.5 px-2 py-1 l text-xs caret-transparent
          flex text-center items-center justify-center rounded-full
          text-white dark:text-black bg-gray-700 dark:bg-gray-100"
          key={str}
        >
          {str}
        </div>
      ))}
    </div>
  );
};

export default Projects;
