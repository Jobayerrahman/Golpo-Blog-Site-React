import '../src/assets/css/bootstrap.min.css'
import '../src/assets/css/style.css';
import '../src/assets/css/blog.css';
import '../src/assets/css/cetagory.css';
import Golpo from "./components/Golpo";
import ThemeContext from './components/Library/ThemeContext';
import useLocalStorage from 'use-local-storage-state';
function App() {
  const [theme,setTheme] = useLocalStorage('theme'? 'dark' : 'light')

  const switchTheme = () =>{
    if(theme === 'light'){
      setTheme('dark');
    }else{
      setTheme('light');
    }
  }

  return (
    <div className="App" data-theme={theme}>
      <ThemeContext.Provider value={{ theme: theme, switchTheme: switchTheme }}>
        <Golpo/>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
