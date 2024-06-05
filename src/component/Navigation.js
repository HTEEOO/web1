import React from "react";
import { Link } from 'react-router-dom'
import { useContext } from "react";
import { ThemeContext } from "../App";
import { useState } from "react";
import './style.css';


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
                <div className="hamburger" onClick={toggleMenu}>
                        <div className="line"></div>
                        <div className="line"></div>
                        <div className="line"></div>
                    </div>
                <div className="navigation">
                    <a href="#">
                        <img src="/img/logo.png" alt="" />
                    </a>
                  

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
                            <ul className="submenu">
                                <li><Link to="/NotFound">Giới Thiệu</Link></li>
                                <li><Link to="/NotFound">Thư Hiệu Trưởng</Link></li>
                                <li><Link to="/NotFound">Đến Với ISPACE</Link></li>
                                <li><Link to="/NotFound">Hợp Tác Quốc Tế</Link></li>
                            </ul>
                        </li>
                        <li>
                            <Link to="/NotFound">
                                <span>TUYỂN SINH</span>
                                <i className="fa fa-angle-down"></i>
                            </Link>
                            <ul className="submenu">
                                <li>
                                    <Link to="/NotFound">Tuyển Sinh 2023</Link>
                                </li>
                                <li>
                                    <Link to="/NotFound">Học phí Cao đẳng chính quy</Link>
                                </li>
                                <li><Link to="/NotFound">Câu Hỏi Thường Gặp</Link></li>
                            </ul>
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
                            <Link to="/NotFound">
                                <span>TIN TỨC</span>
                                <i className="fa fa-angle-down"></i>
                            </Link>
                            <ul className="submenu">
                                <li><Link to="/NotFound">Tin Tức</Link></li>
                                <li><Link to="/NotFound">Sự Kiện</Link></li>
                                <li><Link to="/NotFound">Mẹo Công Nghệ</Link></li>
                            </ul>
                        </li>
                        <li>
                            <Link to="/Dangkykhoahoc"><span>LIÊN HỆ</span></Link>
                        </li>

                        {/* <i className="fa-sharp fa-solid fa-magnifying-glass search-icon" id="searchIcon"></i>
                <div className="search-box">
                    <i className="fa-sharp fa-solid fa-magnifying-glass search-icon" ></i>
                    <input type="text" placeholder="Search here..." />
                </div> */}
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Navigation;
