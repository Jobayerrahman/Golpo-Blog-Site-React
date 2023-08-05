import '../src/assets/css/bootstrap.min.css'
import '../src/assets/css/style.css';
import '../src/assets/css/blog.css';
import '../src/assets/css/cetagory.css';
import Golpo from "./components/Golpo";
import ThemeContext from './components/Library/ThemeContext';
import useLocalStorage from 'use-local-storage-state';
import { useState } from 'react';
import { faMoon, faSun  } from '@fortawesome/free-solid-svg-icons';
function App() {
  const [mode, setMode] = useState(faMoon)
  const [theme,setTheme] = useLocalStorage('theme'? 'dark' : 'light')

  const switchTheme = () =>{
    if(mode === faMoon){
      setMode(faSun);
      setTheme('dark');
    }else{
      setMode(faMoon);
      setTheme('light');
    }
  }
  return (
    <div className="App" data-theme={theme}>
      <ThemeContext.Provider value={{ mode: mode, switchTheme: switchTheme }}>
        <Golpo/>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
