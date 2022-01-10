import React from 'react'
import { RichText } from '@graphcms/rich-text-react-renderer';

const Post = ({ post }) => {
  return (
    <div className="mb-4 mx-2 border-2 rounded-b-3xl dark:border-neutral-600
    bg-neutral-200 dark:bg-neutral-500 bg-opacity-50 ">
      <h2 className="my-1 py-2 text-center align-middle justify-center dark:text-white text-xl font-bold">Post {post.postId}</h2>
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


export default Post
