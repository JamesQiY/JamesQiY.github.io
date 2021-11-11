import React from 'react';
import Sidebar from './component/sidebar';
import Main from './component/Main';

import enableDarkMode from './hooks/darkmode';

function App() {
  let [darkTheme, setDarkTheme] = enableDarkMode();

  return (
    <div className='flex flex-row body'>
      <Sidebar darkTheme={darkTheme} setDarkTheme={setDarkTheme}/>
      <Main darkTheme={darkTheme}/>
    </div>
  );
}

export default App;
