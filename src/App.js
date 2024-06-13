import { Routes, Route } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun } from '@fortawesome/free-solid-svg-icons';
import './App.css';
import Home from './component/Home';
import FormDK from './Dangkykhoahoc';
import AnNinhMang from './component/AnNinhMang';
import PhatTrienPhanMem from './component/PhatTrienPhanMem';
import ThietKeDoHoa from './component/ThietKeDoHoa';
import CEH from './component/CEH';
import AWS from './component/AWS';
import NotFound from './component/NotFound';
import Content from './component/Content';
import Background from './component/Background';
import React, { createContext, useState } from 'react';
import Dashboard from './component/Dashboard';
import AdminChart from './component/AdminChart';
export const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <ThemeContext.Provider value={theme}>
      <div className={`App ${theme}`}>
        <div className="toggle-theme" onClick={toggleTheme} style={{backgroundColor:'#544536',textAlign:'right',paddingRight:70}}>
          <FontAwesomeIcon icon={faSun} />
        </div>

        <Routes>
        
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Background" element={<Background />} />
          <Route path="/Content" element={<Content />} />
          <Route path="/" element={<Home />} />
          <Route path="/Dangkykhoahoc" element={<FormDK />} />
          <Route path="/AnNinhMang" element={<AnNinhMang />} />
          <Route path="/PhatTrienPhanMem" element={<PhatTrienPhanMem />} />
          <Route path="/ThietKeDoHoa" element={<ThietKeDoHoa />} />
          <Route path="/CEH" element={<CEH />} />
          <Route path="/AWS" element={<AWS />} />
          <Route path="/NotFound" element={<NotFound />} />
        </Routes>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
