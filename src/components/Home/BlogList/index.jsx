import React from 'react'
import BlogItem from './BlogItem/index';
import './index.css'
const BlogList = ({blogs}) => {
  return (
    <>
      <div className='blogList-wrap'>
      {blogs.map((blog) => (
        <BlogItem blog={blog} />
      ))}
    </div>
    </>
  )
}

export default BlogList