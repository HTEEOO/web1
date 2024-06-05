import React, { useState } from 'react';
import Header from '../component/Header';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faYoutube, faTiktok } from '@fortawesome/free-brands-svg-icons'; // Import các biểu tượng từ thư việns
import { useContext } from "react";
import { ThemeContext } from "../App";


function Dangkykhoahoc() {

    const theme = useContext(ThemeContext)

    function Submit(e) {
        const formEle = document.querySelector("form")
        e.preventDefault()
        console.log("Submitted")
        const formData = new FormData(formEle)
        fetch("https://script.google.com/macros/s/AKfycby4nQrtsXnc5R3INfbwUF7DhKDJKmYzwWCj-OP7j5DJw4yzIxKSu1B0W6OpUqSFtyO5bg/exec", {
          method: "POST",
          body: formData
        }).then((res) => res.json()).then((data) =>{
          console.log(data)
        }).catch((error) => console.log(error));
      }
      const handleReset = () => {
        window.location.reload(); // Reload the page
      };


  return (
    
    <div >
      <Header />
      <div id="background-img">
        <img
          id="bg-image"
          src="./img/lienhe.jpg"
          alt="ispace"
          className="responsive-image"
        />
      </div>
      {/* Đăng ký */}
      <div className={theme}>
      <section className="h-150 bg-white">
        <div className="container py-5 h-150">
        <div className="container-fluid bg-registration py-5" style={{ margin: "10px 0", background: "linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(../img/bg_ispace.jpg), no-repeat center center" }}>
                <div className="container py-5">
                    <div className="row align-items-center">
                        <div className="col-lg-7 mb-5 mb-lg-0">
                            <div className="mb-4">
                                <h1 className="text-orange">
                                    Đăng Ký Ngay</h1>
                                <h5
                                    className="text-primary text-uppercase text-white mb-3"
                                    style={{ letterSpacing: 7 }}
                                >
                                    <img src="./img/nhanngay.jpg" alt="" style={{ width: '100%', height: '400px' }} />
                                </h5>

                            </div>

                        </div>
                        <div className="col-lg-5">
                            <div className="card border-0">
                                <div className="card-header bg-light text-center p-4">
                                    <h1 className="m-0">Điền thông tin bên dưới</h1>
                                </div>
                                <div className="card-body rounded-bottom bg-orange p-5">
                                <form autoComplete='off' onSubmit={(e) => Submit(e)} >
                                      <div className="form-group">
                                        <input type="text" name="Name" className="form-control border-0 p-4" placeholder="Họ Tên Bạn*" required="required"/>
                                      </div>
                                      <div className="form-group">
                                        <input type="text" name="Phone" className="form-control border-0 p-4" placeholder="Số điện thoại*" required="required"/>
                                      </div>
                                      <div className="form-group">
                                        <input type="email" name="Email" className="form-control border-0 p-4" placeholder="Email*" required="required"/>
                                      </div>
                                      <div className="form-group">
                                        <select className="custom-select border-0 px-4" name="Chuongtrinh" style={{ height: 47 }} placeholder="Ngành học">
                                        <option selected="">--Chương trình học--</option>
                                          <option>An Ninh Mạng</option>
                                          <option>Phát Triển Phần Mềm</option>
                                          <option>Thiết kế đồ Họa</option>
                                        </select>
                                      </div>
                                      <div className="form-group">
                                        <select className="custom-select border-0 px-4" name="Doituong" style={{ height: 47 }} placeholder="Email của bạn">
                                          <option selected="">Đối Tượng Đăng Ký</option>
                                          <option>Học sinh đang học 12(đăng ký giữ chỗ)</option>
                                          <option>Học sinh tốt nghiệp THPT</option>
                                          <option>Sinh viên</option>
                                          <option>Người đi làm</option>
                                        </select>
                                      </div>
                                      
                                      <div>
                                          <button className="btn btn-dark btn-block border-0 py-3" onClick={handleReset} type="submit">
                                            Đăng ký ngay
                                          </button>
                                      </div>
                                  </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div>
            <div className="container" style={{backgroundColor: 'rgb(135, 42, 42)', paddingTop:20, maxWidth:2000}}>
            <div className="row ">
                <div className="col-sm-6 ">
                    <h2 className="mb-0 text-center" style={{paddingLeft: '50px'}}>KẾT NỐI VỚI CHÚNG TÔI</h2>
                </div>
                <div className="col-sm-6 ">
                    <a href="https://www.facebook.com/ispace.vn" style={{fontSize: '24px'}}>
                        <FontAwesomeIcon icon={faFacebookF} className="text-info mr-3" />
                    </a>
                    <a href="https://www.youtube.com/user/ispacechannel" style={{fontSize: '24px'}}>
                        <FontAwesomeIcon icon={faYoutube} className="text-danger mr-3" />
                    </a>
                    <a href="https://www.tiktok.com/@caodanganninhmangispace" style={{fontSize: '24px'}}>
                        <FontAwesomeIcon icon={faTiktok} className="text-dark" />
                    </a>
                </div>
            </div>
        </div>
        </div>
        <div style={{backgroundColor: 'rgb(255, 255, 150)', height: '59px'}}></div>

      </section>
      <div className="overlay-container" style={{ background: "#f55 url('./img/ca2.jpeg')" }}>
        <div className="overlay-text" style={{ backgroundColor: "rgb(255, 255, 255, 0)" }}>
          <h3 className="overlay-title">Bạn muốn trở thành chuyên gia Công NGHỆ?</h3>
          <p className="overlay-content">
          Hãy đến với chúng tôi - Trường Cao đẳng An ninh mạng iSPACE - Đơn vị trực thuộc NGS Group.
          </p>
          <a className="overlay-title">
          <Link to="/Dangkykhoahoc" className="btn btn-primary py-md-2 px-md-4 font-weight-semi-bold mt-2">
                                   Đăng ký ngay {'>>'}
                                </Link>
                    
          </a>
        </div>
      </div>
    </div>
    </div>

  );
};

export default Dangkykhoahoc;
