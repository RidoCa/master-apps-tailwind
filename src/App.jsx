import ReactSwitch from 'react-switch';
import './App.css';
import { useEffect, useState } from 'react';


function App() {

  const [theme, setTheme] = useState(null);

  const themeSwitch = () => {
    if (theme === 'dark') {
      setTheme('light');
      localStorage.setItem("theme", "light");
    } else {
      setTheme('dark');
      localStorage.setItem("theme", "dark");
    }

  }

  useEffect(() => {
    if (localStorage.getItem("theme") === 'dark') {
      setTheme('dark');
    }
    else {
      setTheme('light');
    }
  }, [])

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <div className="h-screen flex items-center justify-center px-8">
      <div className='max-w-[600px] shadow-md p-6 rounded-md bg-white dark:bg-gray-600'>
        <div className="flex items-start sm:items-center mb-4">
          <h1 className="text-4xl flex-1 dark:text-white">Tailwind Dark/Light Mode</h1>
          <ReactSwitch onChange={themeSwitch} checked={theme === 'dark'} />
        </div>
        <p className="text-md mb-4 dark:text-white">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem totam ipsum id laudantium rerum voluptas et aspernatur impedit eaque fugit. Aperiam error officia libero, odit labore ex ipsa beatae! Enim.
        </p>
        <button className="py-2 px-4 bg-black dark:bg-white text-white rounded-md dark:text-black ">
          lets go
        </button>
      </div>
    </div>

  );
}

export default App;
