import './App.css';
import '../src/index.css';
import { useContext } from 'react';
import ThemeContext from './context/ThemeContext';
import { IoIosSunny } from 'react-icons/io';
import { IoMoonOutline } from 'react-icons/io5';

function App() {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <div className={`header ${theme === 'dark' ? theme : ''}`}>
      <div className="themeContainer">
        {theme === 'dark' ? (
          <IoIosSunny className="themeIcon" onClick={() => setTheme('')} />
        ) : (
          <IoMoonOutline
            className="themeIcon"
            onClick={() => setTheme('dark')}
          />
        )}
      </div>
    </div>
  );
}

export default App;
