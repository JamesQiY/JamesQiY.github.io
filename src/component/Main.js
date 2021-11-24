import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import Home from '../pages/Home.js';
import Projects from '../pages/Projects';
import Blog from '../pages/Blog.js';

const Main = () => {
  return (
    <Routes> {/* The Routes decides which component to show based on the current URL.*/}
      <Route exact path='/' element={<Home/>}></Route>
      <Route exact path='/projects' element={<Projects/>}></Route>
      <Route exact path='/blog' element={<Blog/>}></Route>
    </Routes>
  );
}

Main.propTypes = {
  darkTheme: PropTypes.bool
}

export default Main;