import { createContext,} from 'react';
import enableDarkMode from './darkmode';
import useWindowDimensions from './useWindowDimensions';

export const PageContext = createContext();

const PageProvider = (props) => {
  const [darkTheme, setDarkTheme] = enableDarkMode();
  const {height, width} = useWindowDimensions();
  const states = {darkTheme, setDarkTheme, width, height}

  return (
    <PageContext.Provider value={states}>
      {props.children}
    </PageContext.Provider>
  );
}

export default PageProvider;