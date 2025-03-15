import './App.css';
import '../src/index.css';
import { useContext } from 'react';
import ThemeContext from './context/ThemeContext';
import { CgDarkMode } from 'react-icons/cg';

function App() {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <div className={`header ${theme === 'dark' ? theme : ''}`}>
      <div className="themeContainer">
        {theme === 'dark' ? (
          <CgDarkMode className="themeIcon" onClick={() => setTheme('')} />
        ) : (
          <CgDarkMode className="themeIcon" onClick={() => setTheme('dark')} />
        )}
      </div>
    </div>
  );
}

export default App;
