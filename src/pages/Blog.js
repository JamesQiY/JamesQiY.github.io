import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getPosts } from '../hooks/queries';
import { RichText } from '@graphcms/rich-text-react-renderer';

const Blog = () => {
  // hooks
  const [posts, setposts] = useState({})
  useEffect(() => {
    const fetchData = async () => {
      const data = await getPosts()
      setposts(data)
    }
    fetchData();
  }, []);


  const getAllPostsComponents = posts => {
    if (posts === undefined || Object.keys(posts).length === 0) return;

    return posts.map(
      (post, index) => {
        return <Post post={post.node} key={index} />
      }
    );
  }

  return (
    <div className="page_container flex flex-col flex-grow
    max-h-full items-center
    overflow-auto fade-in">
      {getAllPostsComponents(posts)}
    </div>
  )
};

const Post = ({ post }) => {
  return (
    <div className="card xl:min-w-full">
      <h2 className="my-1 py-2 text-center align-middle justify-center dark:text-white text-xl font-bold" >Post {post.postId}</h2>
      <span className="m-2 p-2 px-auto dark:text-white text-lg">{post.title}</span>
      <div className="rich-text m-2 p-2 px-auto dark:text-white">
        <RichText content={post.content ? post.content.raw : { children: [] }}
          renderers={{
            h1: ({ children }) => <h1 className='text-3xl font-bold my-2'>{children}</h1>,
            h2: ({ children }) => <h2 className='text-2xl font-bold my-2'>{children}</h2>,
            h3: ({ children }) => <h3 className='text-xl font-bold my-2'>{children}</h3>,
            h4: ({ children }) => <h4 className='text-lg font-bold my-2'>{children}</h4>,
            h5: ({ children }) => <h5 className='text-md font-bold my-2'>{children}</h5>,
            h6: ({ children }) => <h6 className='text-md my-2'>{children}</h6>,
            bold: ({ children }) => <strong>{children}</strong>,
            ul: ({ children }) => <ul className='list-disc list-inside p-2'>{children}</ul>,
            ol: ({ children }) => <ol className='list-disc list-inside '>{children}</ol>,
            li: ({ children }) => <li>{children}</li>,
            table: ({ children }) => <div className='overflow-scroll'><table className='my-2 border-2 '>{children}</table></div>,
            table_cell: ({ children }) => <td className='p-1 border-2'>{children}</td>,
          }} />
      </div>
      <div className="w-full mt-auto mb-0 px-4 py-1 text-black justify-center bg-red-300 rounded-b-3xl ">{post.date}</div>
    </div>
  )
}

Post.propTypes = {
  post: PropTypes.object
}

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