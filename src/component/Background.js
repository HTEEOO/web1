import React from 'react';
import Header from '../component/Header';
import And from "./And";
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import { Link } from 'react-router-dom'
import { useContext } from "react";
import { ThemeContext } from "../App";

const Background = () => {
  const theme = useContext(ThemeContext)
  return (
    <div className={theme}>
    <main>
      <Header />

      <div id="background-img">

        <img
          id="bg-image"
          src="./img/banner.jpg"
          alt="ispace"
          className="responsive-image"
        />
        <div className="chung">

        
        </div>
        <div className="row">
        

          <div className="col-md-1"></div> {/* Cột thứ nhất */}
          <div className="col-md-4 offset-md-1" style={{ textAlign: 'left' }}> {/* Cột thứ hai */}
          <h2 style={{ textAlign: 'left',  color: 'orange', paddingTop: 100 }}>GIỚI THIỆU CHUNG</h2>
        <p style={{ textAlign: 'left'}}>Trường Cao đẳng An ninh mạng ISPACE</p>
        <hr width="15%" size="1px" style={{ color: 'orange' }} />

            <p className="doimau">
              Trường Cao Đẳng An ninh mạng iSPACE là đơn vị thuộc Công ty Cổ phần Công nghệ An ninh mạng Quốc gia Việt Nam (NCS).
              iSPACE tiên phong trong đào tạo thực hành từ năm 2008 theo tiêu chí tuyển sinh đi liền tuyển dụng. Từ năm 2015, iSPACE
              thực hiện chương trình tuyển sinh và đào tạo đặc biệt “CNTT- Học để làm việc ngay”. Chương trình mang đến cho các bạn
              trẻ đam mê CNTT ba giá trị vượt trội: 70% học thực hành, 100% làm việc ngay, 100% thêm nghề phụ.
            </p>
            <p className="doimau">
              Năm học 2021- 2022, trường Cao đẳng An ninh mạng iSPACE mở rộng và nâng cấp cơ sở vật chất với quy mô hiện đại và sáng tạo
              theo xu hướng trường học quốc tế.
            </p>

            <p>
              Bên cạnh chương trình đào tạo chính quy, iSPACE đào tạo các khóa học ngắn hạn về công nghệ thông tin đồng thời cung cấp dịch
              vào đào tạo về kỹ năng .
            </p>

          </div>
          
          <div className="col-md-4"> {/* Cột thứ ba */}
            <img src="./img/gioithieuchung.png" alt="Ảnh" style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px', textAlign: 'center',paddingTop:200 }} />
          </div>
          <div className="col-md-1"></div> {/* Cột thứ tư */}
        </div>


        <div>
          <div className="bonhinhanh" style={{ fontSize: '15px', fontWeight: '700', paddingTop: '50px',paddingLeft:100 }}>
            <div className="row">
              <div className="col-md-1" style={{ textAlign: 'center' }}>
                <img src="" alt="" />
                <p></p> {/* Thêm chữ dưới cột thứ nhất */}
              </div>
              <div className="col-md-2" style={{ textAlign: 'center' }}>
                <img src="./img/svcvln.png" alt="" />
                <p>99%</p> {/* Thêm chữ dưới cột thứ hai */}
                <p>SINH VIÊN CÓ VIỆC LÀM NGAY</p>
              </div>
              <div className="col-md-2" style={{ textAlign: 'center' }}>
                <img src="./img/svddt.png" alt="" />
                <p>14,987</p> {/* Thêm chữ dưới cột thứ ba */}
                <p>SINH VIÊN ĐƯỢC ĐÀO TẠO</p>
              </div>
              <div className="col-md-2" style={{ textAlign: 'center' }}>
                <img src="./img/th.png" alt="" />
                <p>70%</p> {/* Thêm chữ dưới cột thứ tư */}
                <p>THỰC HÀNH </p>
              </div>
              <div className="col-md-2" style={{ textAlign: 'center' }}>
                <img src="./img/kndt.png" alt="" />
                <p>18 Năm</p> {/* Thêm chữ dưới cột thứ năm */}
                <p>KINH NGHIỆM ĐÀO TẠO</p>
              </div>
              <div className="col-md-2" style={{ textAlign: 'center' }}>
                <img src="image/icon6.png" alt="" />
                <p></p> {/* Thêm chữ dưới cột thứ sáu */}
              </div>
            </div>
          </div>

        </div>


        <div style={{ fontSize: 28, color: 'orange', fontWeight: 700, paddingTop: 100 }}>
          <p>CHƯƠNG TRÌNH ĐÀO TẠO CHỈ 2 NĂM 3 THÁNG</p>
        </div>

        <div className="container">
          <div className="row">
            <div className="col square-container">
              <div className="square">
                <img src="./img/anninhmang.png" alt="Image 1" />
                <p className="description">An ninh mạng</p>
                <Link to="/Dangkykhoahoc" >ĐĂNG KÝ {'>'}</Link>
              </div>
            </div>
            <div className="col square-container">
              <div className="square">
                <img src="./img/ptpm.png" alt="Image 2" />
                <p className="description">Phát triển phần mềm</p>
                <Link to="/Dangkykhoahoc" >ĐĂNG KÝ {'>'}</Link>
              </div>
            </div>
            <div className="col square-container">
              <div className="square">
                <img src="./img/tkdh.png" alt="Image 3" />
                <p className="description">Thiết kế đồ họa</p>
                <Link to="/Dangkykhoahoc" >ĐĂNG KÝ {'>'}</Link>
              </div>
            </div>
            <div className="col square-container">
              <div className="square">
                <img src="./img/qtm.png" alt="Image 4" />
                <p className="description">Quản trị mạng</p>
                <Link to="/Dangkykhoahoc" >ĐĂNG KÝ {'>'}</Link>
              </div>
            </div>
            <div className="col square-container">
              <div className="square">
                <img src="./img/tmdt.png" alt="Image 5" />
                <p className="description">Thương mại điện tử</p>
                <Link to="/Dangkykhoahoc" >ĐĂNG KÝ {'>'}</Link>
              </div>
            </div>
          </div>
        </div>

        <h2 style={{ textAlign: 'left', paddingLeft: 100, color: 'orange', paddingTop: 100,  }}>GIÁ TRỊ CỐT LÕI</h2>


        <div >
        <img src="./img/giatri.png" alt="Image 5" style={{width: '100%'}} />
        </div>

        <h2 style={{ textAlign: 'left', paddingLeft: 100, color: 'orange', paddingTop: 100 }}>LỊCH SỬ HÌNH THÀNH</h2>

        <div >
        <img src="./img/lichsu.png" alt="Image 5" style={{width: '100%', paddingBottom:20,paddingLeft:20}}/>
        </div>
        







        <And />
      </div>
    </main>
    </div>
  );
};

export default Background;
