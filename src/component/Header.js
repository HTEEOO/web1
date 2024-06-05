// Header.js
import Navigation from './Navigation';
import { useContext } from "react";
import { ThemeContext } from "../App";

const Header = () => {
  const theme = useContext(ThemeContext)
  return (
    <div className={theme}>
      <header>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <div id="header1">
          <div className="menu" style={{ paddingTop: 10 }}>
            
            <span>Learning By Doing</span>
            <i className="fa-solid fa-phone"></i>
            <a href="tel:02862678999">0938 205 966</a>
            <i className="fa-solid fa-envelope"></i>
            <a href="mailto:lienhe@ispace.edu.vn">quangcao@ispace.edu.vn</a>
            <div style={{ padding: 20 }}>
            </div>
          </div>
        </div>
        <Navigation />
      </header>
    </div>

  );
};

export default Header;