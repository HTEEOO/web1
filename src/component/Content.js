import React from 'react';
import And from './And';
import { Link } from 'react-router-dom'
import Header from '../component/Header';
import { useContext } from "react";
import { ThemeContext } from "../App";
import Dangky from './Dangkykhoahoc1';



function Content() {

    const theme = useContext(ThemeContext)

    function Submit(e) {
        const formEle = document.querySelector("form")
        e.preventDefault()
        console.log("Submitted")
        const formData = new FormData(formEle)
        fetch("https://script.google.com/macros/s/AKfycby4nQrtsXnc5R3INfbwUF7DhKDJKmYzwWCj-OP7j5DJw4yzIxKSu1B0W6OpUqSFtyO5bg/exec", {
            method: "POST",
            body: formData
        }).then((res) => res.json()).then((data) => {
            console.log(data)
        }).catch((error) => console.log(error));
    }
    const handleReset = () => {
        window.location.reload(); // Reload the page
    };
    return (
        <div className={theme}>
            <div>
                <Header />

                <h3 style={{ color: 'orange', fontWeight: 900, fontSize: 30, paddingTop: 100 }}> TỔNG QUAN TRƯỜNG CAO ĐẲNG AN NINH MẠNG ISPACE </h3>
                <div className="row" style={{ paddingTop: 50 }}>
                    <div className="col-md-1"></div> {/* Cột thứ nhất */}
                    <div className="col-md-4 offset-md-1" style={{ textAlign: 'left' }}> {/* Cột thứ hai */}

                        <p className="bentrai">
                            Trường Cao Đẳng An ninh mạng iSPACE là đơn vị thuộc NGS Group. iSPACE tiên phong trong đào tạo thực
                            hành từ năm 2008 theo tiêu chí tuyển sinh đi liền tuyển dụng.
                        </p>
                        <p className="bentrai">
                            Từ năm 2015, Trường iSPACE thực hiện chương trình tuyển sinh và đào tạo đặc biệt “CNTT- Học để làm việc ngay”.
                            Chương trình mang đến cho các bạn trẻ đam mê CNTT ba giá trị vượt trội: 70% học thực hành, 100% làm việc ngay, 100% thêm nghề phụ.
                        </p>

                        <p className="bentrai">
                            Năm học 2021- 2022, Trường Cao đẳng An ninh mạng iSPACE mở rộng và nâng cấp cơ sở vật chất với quy mô hiện đại và sáng tạo theo
                            xu hướng trường học quốc tế.
                        </p>

                    </div>
                    <div className="col-md-4"> {/* Cột thứ ba */}
                        <img src="./img/gioithieuchung.png" alt="Ảnh" style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px', textAlign: 'center' }} />
                    </div>
                    <div className="col-md-1"></div> {/* Cột thứ tư */}
                </div>

                <h4 style={{ color: 'orange', fontWeight: 900, fontSize: 30, paddingTop: 50 }}>iSPACE VÀ NHỮNG CON SỐ BIẾT NÓI</h4>

                <div>
                    <div className="bonhinhanh" style={{ fontSize: '15px', fontWeight: '700', paddingTop: '10px', paddingLeft: 100 }}>
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

                    <h4 style={{ color: 'orange', fontWeight: 900, fontSize: 30, paddingTop: 20 }}>18 NĂM HÌNH THÀNH VÀ PHÁT TRIỂN</h4>
                    <img src="img/18nam.jpg" alt="" style={{width:"100%"}}/>

                    <h4 style={{ color: 'orange', fontWeight: 900, fontSize: 30, paddingTop: 70 }}>ĐẶC QUYỀN KHI TRỞ THÀNH SINH VIÊN iSPACE</h4>

                    <div className="bonhinhanh" style={{ fontSize: '15px', fontWeight: '700', paddingTop: '10px', paddingLeft: 180, textAlign: 'left' }}>
                        <div className="row">
                            <div className="col-md-1" style={{ textAlign: 'center' }}>

                                <p></p> {/* Thêm chữ dưới cột thứ nhất */}
                            </div>
                            <div className="col-md-2"  >
                                <img src="./img/dacquyen1.png" alt="" style={{ width: '200px', height: '100px' }} />
                                <p style={{ paddingTop: 50, fontSize: 20, color: 'orange' }}>Hơn 300 CLB</p> {/* Thêm chữ dưới cột thứ hai */}
                                <p>Cơ hội tham gia hoạt động ngoại khóa, rèn kỹ năng mềm với hơn 300 CLB tại Làng Đại học Quốc gia TP.HCM</p>
                            </div>
                            <div className="col-md-2" style={{}}>
                                <img src="./img/dacquyen2.jpg" alt="" style={{ width: '200px', height: '100px' }} />
                                <p style={{ paddingTop: 50, fontSize: 20, color: 'orange' }}>Môi trường đẳng cấp</p> {/* Thêm chữ dưới cột thứ ba */}
                                <p>Cao đẳng duy nhất có trung tâm SOC (Security Operation Center). Sinh viên thực hành với dự án thực tế.</p>
                            </div>
                            <div className="col-md-2" style={{}}>
                                <img src="./img/dacquyen3.jpg" alt="" style={{ width: '200px', height: '100px' }} />
                                <p style={{ paddingTop: 50, fontSize: 20, color: 'orange' }}>Việc làm sẵn có</p> {/* Thêm chữ dưới cột thứ tư */}
                                <p>Mô hình giảng dạy theo đặt hàng từ doanh nghiệp, đầu ra hơn 100 doanh nghiệp, cam kết giới thiệu đến khi có việc làm.</p>
                            </div>
                            <div className="col-md-2" style={{}}>
                                <img src="./img/dacquyen4.png" alt="" style={{ width: '200px', height: '100px' }} />
                                <p style={{ paddingTop: 50, fontSize: 20, color: 'orange' }}>Liên thông đại học công TOP đầu</p> {/* Thêm chữ dưới cột thứ năm */}
                                <p>Cơ hội liên thông với đại học công top đầu (ĐH CNTT, ĐH SPKT, ĐH Bách Khoa, ĐH Công nghiệp…)</p>
                            </div>
                            <div className="col-md-2" style={{ textAlign: 'center' }}>

                                <p></p> {/* Thêm chữ dưới cột thứ sáu */}
                            </div>
                        </div>
                    </div>





                </div>
                <div className="hmv-box">
                    <div className="container">
                        <div className="row">
                            <h1 className="text-primar">CHƯƠNG TRÌNH ĐÀO TẠO</h1>
                            <div className="col-lg-4 col-md-6 col-12">
                                <div className="inner-hmv">
                                    <div className="icon-box-hmv">
                                        <img
                                            className="img-fluid rounded mb-4 mb-lg-0"
                                            src="./img/img_2.jpg"
                                            alt="" />
                                    </div>
                                    <h3>AN NINH MẠNG</h3>

                                    <Link to="/AnNinhMang" className="btn btn-primary py-md-2 px-md-4 font-weight-semi-bold mt-2">
                                        Xem Thêm {'>>'}
                                    </Link>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-12">
                                <div className="inner-hmv">
                                    <div className="icon-box-hmv">
                                        <img
                                            className="img-fluid rounded mb-4 mb-lg-0"
                                            src="./img/img_3.jpg"
                                            alt="" />
                                    </div>
                                    <h3>PHÁT TRIỄN PHẦN MỀM</h3>

                                    <Link to="/PhatTrienPhanMem" className="btn btn-primary py-md-2 px-md-4 font-weight-semi-bold mt-2">
                                        Xem Thêm {'>>'}
                                    </Link>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-12">
                                <div className="inner-hmv">
                                    <div className="icon-box-hmv">
                                        <img
                                            className="img-fluid rounded mb-4 mb-lg-0"
                                            src="./img/img_4.jpg"
                                            alt="" />
                                    </div>
                                    <h3>THIẾT KẾ ĐỒ HỌA</h3>

                                    <Link to="/ThietKeDoHoa" className="btn btn-primary py-md-2 px-md-4 font-weight-semi-bold mt-2">
                                        Xem Thêm {'>>'}
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Dangky />

                {/* Registration Start */}
                
                {/* Registration End */}

                <div style={{ paddingTop: 70 }}>
                    <h4 style={{ color: 'orange', fontSize: 32 }}>“Ở iSPACE các em sẽ có những câu trả lời thỏa <br />đáng cho câu hỏi ‘Học để làm gì?’ trong mỗi người.”</h4>
                    <h5>PGS. TS. Nguyễn Duy Hàm, Hiệu trưởng</h5>
                    <hr width="8%" style={{ marginLeft: '405px', color: 'orange', border: 'none', height: '2px', backgroundColor: 'orange' }} />

                </div>

                <div className="container py-5">
                    <div className="text-center mb-5">
                        <h4 style={{ color: 'orange', fontSize: 32 }}>BAN CỐ VẤN - GIẢNG VIÊN</h4   >
                        <div className="h6">Trường Cao đẳng An ninh mạng iSPACE</div>
                        <hr width="8%" style={{ marginLeft: '595px', color: 'orange', border: 'none', height: '2px', backgroundColor: 'orange' }} />
                    </div>

                    <section className="mb-5">
                        <h2 className="h2 font-weight-semibold mb-4 text-center" style={{ color: 'orange' }}>HIỆU TRƯỞNG</h2>
                        <div className="d-flex justify-content-center">
                            <a href="https://ispace.edu.vn/tien-si-nguyen-duy-ham-hieu-truong/">
                                <img
                                    src="https://ispace.edu.vn/wp-content/uploads/2024/02/Ban-co-van-va-chuyen-gia-01-1.jpg"
                                    alt="Hiệu Trưởng"
                                    className="img-fluid"
                                    style={{ maxWidth: '500px' }}
                                />
                            </a>
                        </div>
                    </section>

                    <section className="mb-5" style={{ width: '70%', margin: '0 auto' }}>
                        <h2 className="h2 font-weight-semibold mb-4" style={{ color: 'orange' }}>GIẢNG VIÊN</h2>
                        <div className="row">
                            <div className="col-12 col-sm-6 mb-4">
                                <a href="https://ispace.edu.vn/thac-si-le-hoang-binh-nguyen-gv-ispace/">
                                    <img
                                        src="https://ispace.edu.vn/wp-content/uploads/2024/02/Ban-co-van-va-chuyen-gia-02.jpg"
                                        alt="Giảng Viên 1"
                                        className="img-fluid"
                                    />
                                </a>
                            </div>
                            <div className="col-12 col-sm-6 mb-4">
                                <a href="https://ispace.edu.vn/thay-nguyen-the-phuong-gv-ispace/">
                                    <img
                                        src="https://ispace.edu.vn/wp-content/uploads/2024/02/Ban-co-van-va-chuyen-gia-05-04.jpg"
                                        alt="Giảng Viên 2"
                                        className="img-fluid"
                                    />
                                </a>
                            </div>
                            <div className="col-12 col-sm-6 mb-4">
                                <a href="https://ispace.edu.vn/thay-truong-pham-hoai-thuong/">
                                    <img
                                        src="https://ispace.edu.vn/wp-content/uploads/2024/02/Ban-co-van-va-chuyen-gia-05.jpg"
                                        alt="Giảng Viên 3"
                                        className="img-fluid"
                                    />
                                </a>
                            </div>
                            <div className="col-12 col-sm-6 mb-4">
                                <a href="https://ispace.edu.vn/co-le-kim-ngan/">
                                    <img
                                        src="https://ispace.edu.vn/wp-content/uploads/2024/02/Ban-co-van-va-chuyen-gia-03-1.jpg"
                                        alt="Giảng Viên 4"
                                        className="img-fluid"
                                    />
                                </a>
                            </div>
                            <div className="col-12 col-sm-6 mb-4">
                                <a href="https://ispace.edu.vn/ths-van-minh-dai/">
                                    <img
                                        src="https://ispace.edu.vn/wp-content/uploads/2024/02/Ban-co-van-va-chuyen-gia-06.jpg"
                                        alt="Giảng Viên 5"
                                        className="img-fluid"
                                    />
                                </a>
                            </div>
                            <div className="col-12 col-sm-6 mb-4">
                                <p style={{ textAlign: 'left' }}>
                                    Cùng đội ngũ giảng viên là các thạc sĩ, kỹ sư, chuyên gia trong các lĩnh vực Công nghệ thông tin,
                                    Thiết kế đồ họa, An toàn thông tin… với nhiều năm kinh nghiệm thực hiện các dự án tại doanh nghiệp…
                                </p>
                            </div>
                        </div>
                    </section>
                </div>

                <div>
                    <h2 className="h2 font-weight-semibold mb-4" style={{ color: 'orange' }}>DOANH NGHIỆP</h2>
                </div>

                <div className="bonhinhanh" >
                    <div className="row">
                        <div className="col-md-2">

                        </div>
                        <div className="col-md-2" style={{ textAlign: 'center' }}>
                            <img src="./img/a1.jpg" alt="" style={{ width: '250px', marginBottom: '10px' }} />
                            <img src="./img/a2.jpg" alt="" style={{ width: '250px', marginBottom: '10px' }} />
                            <img src="./img/a3.jpg" alt="" style={{ width: '250px', marginBottom: '10px' }} />
                            <img src="./img/a4.png" alt="" style={{ width: '250px', marginBottom: '10px' }} />


                        </div>
                        <div className="col-md-2" style={{ textAlign: 'center' }}>
                            <img src="./img/b1.jpg" alt="" style={{ width: '250px', marginBottom: '10px' }} />
                            <img src="./img/b2.jpg" alt="" style={{ width: '250px', marginBottom: '10px' }} />
                            <img src="./img/b3.jpg" alt="" style={{ width: '250px', marginBottom: '10px' }} />
                            <img src="./img/b4.jpg" alt="" style={{ width: '250px', marginBottom: '10px' }} />
                        </div>
                        <div className="col-md-2" style={{ textAlign: 'center' }}>
                            <img src="./img/c1.jpg" alt="" style={{ width: '250px', marginBottom: '10px' }} />
                            <img src="./img/c2.jpg" alt="" style={{ width: '250px', marginBottom: '10px' }} />
                            <img src="./img/c3.jpg" alt="" style={{ width: '250px', marginBottom: '10px' }} />
                            <img src="./img/c4.jpg" alt="" style={{ width: '250px', marginBottom: '10px' }} />

                        </div>
                        <div className="col-md-2" style={{ textAlign: 'center' }}>
                            <img src="./img/d1.jpg" alt="" style={{ width: '250px', marginBottom: '10px' }} />
                            <img src="./img/d2.jpg" alt="" style={{ width: '250px', marginBottom: '10px' }} />
                            <img src="./img/d3.jpg" alt="" style={{ width: '250px', marginBottom: '10px' }} />
                            <img src="./img/d4.jpg" alt="" style={{ width: '250px', marginBottom: '10px' }} />

                        </div>

                    </div>
                </div>




                <And />
            </div>
        </div>
    );
};

export default Content;