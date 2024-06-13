import React from "react";
import { Link } from 'react-router-dom'
import { useContext } from "react";
import { ThemeContext } from "../App";
import { useState } from "react";
import './style.css';
import Dashboard from "./Dashboard";


const Navigation = () => {

    const [isActive, setIsActive] = useState(false);

    const toggleMenu = () => {
        setIsActive(!isActive);
    };

    const theme = useContext(ThemeContext)
    return (


        <div className={theme}>

            <nav className={`nav ${isActive ? 'active' : ''}`}>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
                <div className="navigation">
                   
                        <img src="/img/logo.png" alt="" />
                    
                    <ul className="nav-item">
                        <li>
                            <Link to="/Background">
                                <span>TRANG CHỦ</span>
                                <i className="fa-solid fa-house txt_deco"></i>
                            </Link>
                        </li>
                        <li>
                            <Link to="/Content">
                                <span>TỔNG QUAN</span>
                                <i className="fa fa-angle-down"></i>
                            </Link>
                            
                                
                           
                        </li>
                        
                        <li>
                            <a href="#">
                                <span>CHƯƠNG TRÌNH ĐÀO TẠO</span>
                                <i className="fa fa-angle-down"></i>
                            </a>
                            <ul className="submenu">
                                <li>
                                    <a href="#">Cao Đẳng Chính Quy</a>
                                    <ul className="submenu2">
                                        <li><Link to="/AnNinhMang">An Ninh Mạng</Link></li>
                                        <li><Link to="/PhatTrienPhanMem">Phát Triển Phần Mềm</Link></li>
                                        <li><Link to="/ThietKeDoHoa">Thiết Kế Đồ Họa</Link></li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#">Khóa Học Ngắn Hạn</a>
                                    <ul className="submenu2">
                                        <li><Link to="/CEH">Khóa học CEH</Link></li>
                                        <li><Link to="/AWS">Khóa học AWS</Link></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        
                        <li>
                            <Link to="/Dangkykhoahoc"><span>LIÊN HỆ</span></Link>
                        </li>

                        <li>
                            <Link to="/Dashboard"><span>DASHBOARD</span></Link>
                        </li>
                       



                        {/* <i className="fa-sharp fa-solid fa-magnifying-glass search-icon" id="searchIcon"></i>
                <div className="search-box">
                    <i className="fa-sharp fa-solid fa-magnifying-glass search-icon" ></i>
                    <input type="text" placeholder="Search here..." />
                </div> */}
                    </ul>
                    <div className="hamburger" onClick={toggleMenu}>
                        <div className="line"></div>
                        <div className="line"></div>
                        <div className="line"></div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navigation;
