import React from 'react';

import Sidebar from './component/sidebar';
import Main from './component/Main';
import Background from './component/Background';

import enableDarkMode from './hooks/darkmode';

function App() {
  let [darkTheme, setDarkTheme] = enableDarkMode();

  return (
    <div className='h-full flex flex-row' id='app'>
      <Background darkTheme={darkTheme} key={darkTheme}/>
      <Sidebar darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
      <Main />
    </div>
  );
}

export default App;
