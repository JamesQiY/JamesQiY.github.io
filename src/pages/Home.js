import React from "react";
import { Link } from "react-router-dom";
import Header from "../component/header";

// import profile_pic from ''

const Home = () => {
  return (
    <div className="flex flex-grow  m-0 p-0 sm:p-4 lg:p-8 items-center justify-center">
      <div
        className="flex flex-col m-0 sm:mx-4 p-4 max-w-lg
          items-center justify-center overflow-auto
        bg-neutral-300 bg-opacity-50 dark:bg-gray-400 dark:bg-opacity-25 
          sm:rounded-3xl z-10 fade-in"
      >
        <Header className="bg-transparent" />
        <div className="p-2 mt-2 text-center dark:text-white">
          <div> Recent Graduate </div>
          <span>(Developer / Amateur Artist)</span>
        </div>

        <div className="p-4 text-center dark:text-white max-w-lg px-auto">
          My name is Qi Hang Yang but I can also be called James.<br></br>I am a
          recent graduate from University of Toronto with a major in computer science.
          I&apos;m always trying to learn new ideas and
          expand my knowledge. Outside of coding, I&apos;m passionate about the
          world of board games and concept art.
        </div>

        <div className="grid grid-cols-3 grid-rows-1 gap-2 m-1 p-2 shadow-inner rounded-xl dark:bg-gray-300 dark:bg-opacity-25">
          <a
            href={"https://github.com/JamesQiY"}
            target="_blank"
            rel="noopener noreferrer"
            className="link_buttons"
          >
            Github
          </a>
          <Link
            to={"./projects"}
            className="link_buttons"
          >
            Projects
          </Link>
          <Link
            to={"/blog"}
            className="link_buttons"
          >
            Blog
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
