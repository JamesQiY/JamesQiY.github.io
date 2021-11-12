import React from 'react';
import Header from '../component/header'
// import profile_pic from ''

const Home = () => {
  return (
    <div className="flex-1">
      <div className='flex flex-1 justify-center '>
        <div className='flex flex-col mt-4 items-center bg-truegray-300 bg-opacity-50 dark:bg-gray-400 dark:bg-opacity-25 rounded-3xl z-10 shadow-md'>
        <Header className='bg-transparent'/> 
        <div className='p-5 mt-5 text-center dark:text-white'> Recent Graduate ( Developer / Learner / Amateur Artist )</div>
        <img className='flex items-center justify-center m-5 rounded-full border-2 border-red-400 min-w-100 w-1/6 h-auto' src={'/profile_pic.png'} alt="pic of me :)" />
        <div className='p-5 text-center dark:text-white max-w-lg px-auto'>
          My name is Qi Hang Yang but I can also be called James.<br></br>
          I am a recent graduate from University of Toronto under the Software Engineering Stream.
          I&apos;m always trying to learn new ideas and expand my knowledge.
          Outside of coding, I&apos;m passionate about the world of board games and concept art </div>
          </div>
      </div>
    </div>
  )
};

export default Home;