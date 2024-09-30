import React from 'react';
import Header from '../../components/Home/Header/index';
import BlogList from '../../components/Home/BlogList';
import { blogList } from '../../config/data';
const Home = () => {
  return (
    <>
    <Header />
 
    <BlogList blogs={blogList} />
    </>
  )
}

export default Home