import React, { useState, useEffect, useRef } from "react";
import { getPosts } from "../hooks/queries";
import Post from "../component/Post";
import TopButton from "../component/TopButton";

const Blog = () => {
  let container = useRef(null);
  const [posts, setposts] = useState(null);

  // fetch post data from CMS
  useEffect(() => {
    const fetchData = async () => {
      const data = await getPosts();
      setposts(data);
    };
    fetchData();
  }, []);

  const getAllPostsComponents = (posts) => {
    if (posts === null || Object.keys(posts).length === 0) return;

    return posts.map((post, index) => {
      return <Post post={post.node} key={index} />;
    });
  };

  return (
    <div
      className="py-2 h-screen flex flex-col flex-grow items-center fade-in overflow-auto"
      ref={container}
    >
      {" "}
      <TopButton container={container} />
      {getAllPostsComponents(posts)}
    </div>
  );
};

export default Blog;

/* 
****************************************************************************
  Updated ---
  this has been updated to use a CMS
  previous iterations used a post component that passed it all of its values using props
  worst one is that the large text blocks are are also past in the props and hard coded here as instances of Posts


  outdated, but kept as a reminder
  BIG NOTE --- REMINDER TO ME AND OTHERS
  This is a horrible, unscalable implementation for a blog. This is just a placeholder until I learned how to make a proper blog.
  I now have a MUCH better implementation that uses a CMS to run a blog.
  see https://wguide.vercel.app/.

  This section will soon be updated
  ****************************************************************************
  ****************************************************************************
*/
