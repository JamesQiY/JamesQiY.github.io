import React from 'react';
import PropTypes from 'prop-types';

const Blog = () => {
  return (
    <div className="flex flex-col flex-grow
    max-h-full items-center
    overflow-auto p-1.5 fade-in">
      <Post3 />
      <Post2 />
      <Post1 />
    </div>
  )
};

const Post = ({ id, date, title, body }) => {
  return (
    <div className="card xl:min-w-full">
      <h2 className="my-1 py-2 text-center align-middle justify-center dark:text-white text-xl font-bold" >Post {id}</h2>
      <span className="m-2 p-2 px-auto dark:text-white text-lg">{title}</span>
      <span className="m-2 p-2 px-auto dark:text-white">{body}</span>
      <div className="flex flex-grow flex-1 
        w-full px-4 py-1 text-black justify-center bg-red-300 rounded-b-3xl ">{date}</div>
    </div>
  )
}

Post.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  date: PropTypes.string,
  text: PropTypes.any
}

const Post1 = () => {
  return (
      <Post id={1} date={"Nov 19 2021"} title={"Step 1: Learning the game"} body={<>
        There's an interesting phenomenon when someone is first introduced to board games.
        Players are first flooded with rules and instructions. They have to learn almost everything about the game just to start, let alone have fun.
        It's weird because most (video) games gradually introduce more mechanics and gameplay elements as more time is spent in the game.
        For board games, the roles of the player and the game is reversed. All the information for the game is introduced right at the start and the players
        will have to gradually find comfort with the system. Various games will have various learning curves (just look at gloomhaven vs the mind),
        but if you want to play a bigger, bulkier, (and often prettier) game, then you are going to have to essentially study the rules for quite a while.
        Because of that, how-to-play videos and recommended first game setups are becoming more and more popular in the board game scene.
        <br />
        This is where teaching the game becomes a very handy tool to have for a group. Instead of requiring the entire group to study the rules, only a single (or a few)
        person is needed to learn the bulk of the rules. The aggregator can reduce the load by summerizing and using common terms to teach the rules. Rule books can't always
        rely on the reader to understand common terms like 'burn', 'banish', or 'mill', but a teacher from the group can use familiar terms to speed up the learning process.
        This works because so many mechanics are shared between games. As a player plays more games, especially from the same genre, newer games will become easier and easier to teach.
        <br />
        <br />
        From my experience, this is the order to how a game should be taught (works for most games):<br />
        1. Win conditions<br />
        2. How to get to the win condition (what to do on player turns, what actions will help)<br />
        3. Phases of the game (the structure of the turns)<br />
        4. Game components and their interactions<br />
        5. Exceptional rules<br />
        <br />
        I will go details about these steps in the future, but I hope this can help someone out there.
        <br />
        Until then, have fun with your cardboard :)
      </>} />)
}

const Post2 = () => {
  return (
      <Post id={2} date={"Nov 21 2021"} title={"Step 2: Having Fun"} body={<>
        I think the number one reason why people play board games is because it is fun. One of my favourite quotes is from Reggie, when he said "If it's not fun, why bother".
        This perfectly describes any form of games that we play on the table. We gather around and enjoy the time we spend at that occasion. Even if the game itself is not fun
        (looking at you Monopoly), the game can still act as a catalyst for people to enjoy each other's company.
        <br />
        A board game can be as deep and well-designed as any analogy, but if the people there aren't interacting with each other or having fun being there, then what's the point?
        A game is not a game without the people (yes, solo games included). I think that is the defining life-blood of board games; the people and the social interactions between them.
        This why I value party games and what they can do. Even though I have played some of the most mechanically intensive games out there, party games are still just as fun as those games.
        Hardcore or experienced gamers might rate/view party games as cheap and shallow games that do not offer a "true" board game experience, but I think they missed the point.
        Party games can be taught in matter of minutes and no one has to be burdened with a 30 min how-to-play video + references to the 40 page rulebook.
        There is a time and place for everything and party games are here to stay (at least for my collection).
        <br />
        <br />
        Speaking of fun, here are my top games that I had the most fun with (not necessarily in any order or relevant to the topic above!)
        <ul>
          <li>Cosmic Encounters</li>
          <li>Dune (Not the same as Dune Imperium; Dune Imperium still a great game though)</li>
          <li>Terraforming Mars</li>
          <li>Bang! The dice game</li>
          <li>Root</li>
        </ul>
        <br />
        Until then, have fun with your cardboard :)
      </>} />)
}

const Post3 = () => {
  return (
    <Post id={3} date={"Nov 22 2021"} title={"Sleeving cards"} body={<>
      If you have never seen a sleeve for a card before, they are plastic coverings for the cards that is meant to protect your cards.
      There are plenty of types and size so I'll give a brief introduction to these useful things.<br/>
      <br/>
      <h3>0. Prelude </h3>
      In my area (Canada), sleeves for the most common size and the most common type goes for about 2 Cad per 50 sleeves. Some are more expensive, some are less.
      The important thing to know is that they are not always necessary. They may help with shuffling and keeping cards undamaged, but the limiting factor is still the price point.
      A game that contains 200 cards can go for $25 and I think that it's very reasonable for that value. However, if you add sleeve prices on top of the base price tag, then it becomes $33.
      That is almost a 33% increase in price. If you want get more premium sleeves, that percentage goes up even further. PLEASE, always reconsider if you need sleeves or not.
      As a guy who sleeves almost all his games, I strongly encourage you to think about the following aspects before purchasing sleeves: <br/>
      <ul> 
      <li>- How often are you going to play this game?</li>
      <li>- What is your budget?</li>
      <li>- Can you replace the cards easily?</li>
      <li>- Can your cards hold up to long term use?</li>
      <li>- Where are you going to play and how sweaty are you/your friends' hands (I'm serious about this one)?</li>
      </ul>
      <br/>

      <h1>1. Size of your Cards and Size of your Sleeves </h1>
      If the size of your cards and sleeves don't match, then the sleeves loses most of it's function. Make sure you know what your card sizes are and which sleeve size you are going to buy.
      There are plenty of online resources that will help you with this. Main ones I use are Board Game Geek and Sleeve Your Games.
      <br/>
      The most common size for cards is 'Standard Sized' (2.5" x 3.5"). This size is used for your poker decks and common card games like Pokemon and MTG.
      <br/>
      After standard size, you have 'Standard American' (2-1/4" x 3.5"), which is also commonly used for games. This is also called the japanese size for games like YuGiOh.
      <br/>
      There are also more niche cards sizes such as Tarot, Small, Mini, Square, and so on.
      <br/><br/>

      <h3>2. Backs and Textures </h3>
      There are 2 main finishes; glossy and matte (think normal glass and frosted glass).
      For board games, most people tend to enjoy the glossy finish with transparent backs. This allows the artwork and text to be seen easily. 
      Other people will choose to use sleeves with a solid colour back to differentiate different card types.
      There are also card backs that have graphic images or textured finishes, often offered by kick starter exclusives or third-party company (Anime backs are very popular).
      I prefer the matte finishing for cards, as it feels much better in the hand. These type of sleeves usually come with a premium price. Use wisely (aka, use it on your prized possessions).
      <br/><br/>

      <h3>3. Double Sleeving and Triple Sleeving (Mainly for TCG and CCG)</h3>
      This is reserved for the most elite of protective gamers. The practice is to use a inner sleeve with an larger outer sleeve (and maybe even a third sleeve) for one card.
      To maximize the protection, the direction of the sleeves are alternating. If the card was inserted into the inner sleeve from the top, then the next sleeve will be inserted from the bottom.
      People do this to protect their cards and often their graphic back sleeves. Mainly seen in TCG communities where one card cost hundreds.
      I've not done this before because it just makes your deck like 4 times thicker.
      <br/><br/>

      <h3>4. Buying</h3>
      Amazon is not always the best place to buy. Your local shop that carries sleeves will usually be priced better than large online retailers. 
      It will also help your local business, which is always a good thing. If you are unsure about your card sizes, bring it to the shop and match it in person (if able).
      Buying in bulk also will help reduce the price, but that will depend on your situation.<br/>
      Brands are do make a difference in buying because of the pricing and the quality that they offer. 
      I buy Mayday for cheap and quantity, Ultimate Guards for quality, Ultra Pros for matte fronts and coloured backs, and Dragon Shield for premium textured matte.
      I've also tried many other brands and all of them have a purpose they fulfill. Bad sleeves do exist and you need some experience with the product line to know (aka buying and trying them).
      <br/><br/>

      I think I still have a bit more to say about sleeving and what they can do for the games, but I've written plenty already. Maybe in the future I will come back to this topic.
      <br/>
      Until then, have fun with your cardboard :)
    </>} />)
}

export default Blog;