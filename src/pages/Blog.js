import React from 'react';
import PropTypes from 'prop-types';

const Blog = () => {
  return (
    <div className="flex flex-row flex-grow flex-wrap max-h-full items-center justify-center overflow-auto fade-in">
      <Post id={1} date={"Nov 19 2021"} title={"Step 1: Learning the game"} text={<>
      There's an interesting phenomenon when someone is first introduced to board games.
       Players are first flooded with rules and instructions. They have to learn almost everything about the game just to start, let alone have fun.
       It's weird because most (video) games gradually introduce more mechanics and gameplay elements as more time is spent in the game.
       For board games, the roles of the player and the game is reversed. All the information for the game is introduced right at the start and the players 
       will have to gradually find comfort with the system. Various games will have various learning curves (just look at gloomhaven vs the mind), 
       but if you want to play a bigger, bulkier, (and often prettier) game, then you are going to have to essentially study the rules for quite a while.
       Because of that, how-to-play videos and recommended first game setups are becoming more and more popular in the board game scene.
       <br/>
       This is where teaching the game becomes a very handy tool to have for a group. Instead of requiring the entire group to study the rules, only a single (or a few)
       person is needed to learn the bulk of the rules. The aggregator can reduce the load by summerizing and using common terms to teach the rules. Rule books can't always
       rely on the reader to understand common terms like 'burn', 'banish', or 'mill', but a teacher from the group can use familiar terms to speed up the learning process.
       This works because so many mechanics are shared between games. As a player plays more games, especially from the same genre, newer games will become easier and easier to teach.
       <br/>
       <br/>
       From my experience, this is the order to how a game should be taught (works for most games):<br/>
       1. Win conditions<br/>
       2. How to get to the win condition (what to do on player turns, what actions will help)<br/>
       3. Phases of the game (the structure of the turns)<br/>
       4. Game components and their interactions<br/>
       5. Exceptional rules<br/>
       <br/>
       I will go details about these steps in the future, but I hope this can help someone out there.
        <br/>
       Until then, have fun with your cardboard :)
      </>}/>
    </div>
  )
};

const Post = ({id, date, title, text}) => {
  return (
    <div className="my-4 mx-2 max-w-xl min-w-full sm:min-w-400 lg:min-w-3xl
        flex flex-one flex-col items-center justify-center rounded-3xl 
        bg-gray-100 dark:bg-truegray-700 shadow-md translate-y-12">

      <h2 className="my-1 py-2 text-center align-middle justify-center dark:text-white text-xl font-bold" >Post {id}</h2>
      <span className="m-2 p-2 px-auto dark:text-white">{title}</span>
      <span className="m-2 p-2 px-auto dark:text-white">{text}</span>
      <div className="flex flex-grow flex-1 
        w-full px-4 py-1 text-black justify-center bg-red-300 rounded-b-3xl ">{date}</div>
    </div>
  )
}

Post.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  date: PropTypes.string,
  text: PropTypes.string
}

export default Blog;