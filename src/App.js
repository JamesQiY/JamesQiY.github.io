import React, { useRef, useEffect, useState } from 'react';

import Sidebar from './component/sidebar';
import Main from './component/Main';
import Background from './component/Background';

import enableDarkMode from './hooks/darkmode';

function App() {
  let [darkTheme, setDarkTheme] = enableDarkMode();
  const targetRef = useRef();
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    function handleResize() {
      if (targetRef.current) {
        setDimensions({
          width: targetRef.current.scrollWidth,
          height: targetRef.current.scrollHeight
        });
      }
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, [darkTheme]);

  return (
    <div className='h-full flex flex-row' id='app' ref={targetRef}>
      <Background darkTheme={darkTheme} width={dimensions.width} height={dimensions.height} key={darkTheme} />
      <Sidebar darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
      <Main />
    </div>
  );
}

export default App;
