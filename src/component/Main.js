import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import Home from '../pages/Home.js';
import Projects from '../pages/Projects';

const Main = ({darkTheme}) => {
  return (
    <Routes> {/* The Routes decides which component to show based on the current URL.*/}
      <Route exact path='/Website/' element={<Home darkTheme={darkTheme} key={darkTheme}/>}></Route>
      <Route exact path='/Website/projects' element={<Projects darkTheme={darkTheme} key={darkTheme} />}></Route>
    </Routes>
  );
}

Main.propTypes = {
  darkTheme: PropTypes.bool
}

export default Main;