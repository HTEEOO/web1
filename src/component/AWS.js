
import Header from "./Header";
import './style.css';
import And from "./And";
import { Link } from 'react-router-dom'
import { useContext } from "react";
import { ThemeContext } from "../App";
function AWS() {

    const theme = useContext(ThemeContext)

    return (
        <div className={theme}>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
            <main>
                <Header />
                <div id="background-img">
                    <img
                        id="bg-image"
                        src="./img/background_AWS.jpg"
                        alt="ispace"
                        className="responsive-image"
                    />
                </div>

                <section className="content">
                    <div className="container mt-5">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="text-box">
                                    <div>
                                        <div className="cf-title-01">
                                            <h3>
                                                <b style={{ color: "#F68836" }}>THÔNG TIN KHÓA HỌC AWS CLOUD FOUNDATION</b>
                                            </h3>
                                        </div>
                                        <ul style={{ fontSize: 22,  textAlign: "left" }}>
                                            <li>
                                                <strong>Tên khóa học:</strong>  AWS Cloud Foundation
                                            </li>
                                            <li>
                                                <strong>Giảng viên: </strong><b>Ths. Lê Hoàng Bình Nguyên</b>
                                            </li>
                                            <li>
                                                <strong>Thời lượng:</strong> 20h, mỗi buổi 2h
                                            </li>
                                            <li>
                                                <strong>Lịch học:</strong>tối hai – tư – sáu (18h30 đến 20h30)
                                            </li>
                                            <li>
                                                <strong>Yêu cầu học viên:</strong> có kiến thức CNTT cơ bản, có máy tính hoặc laptop
                                            </li>
                                            <li>
                                                <strong>Hình thức:</strong> online/offline
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 d-flex align-items-center justify-content-center">
                                <img
                                    style={{ width: '50%', height: 'auto', maxHeight: '300px' }}
                                    src="/img/cc1.jpg"
                                    alt="Hình ảnh"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="container mt-5">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="column1">
                                    <h2 style={{ textAlign: "left", color: "#F68836" }}>
                                        <b>ĐỐI TƯỢNG HỌC VIÊN</b>
                                    </h2>
                                    <ul style={{ textAlign: "left" }}>
                                        <li>
                                            Sinh viên muốn học thêm về điện toán đám mây để nâng cao kiến thức và lấy chứng chỉ.
                                        </li>
                                        <li>Những người yêu thích và muốn tìm hiểu về Cloud (AWS)</li>
                                        <li>Người muốn học để nâng cao kiến thức. </li>
                                        <li>
                                            Những người làm về dịch vụ Cloud (Sale, tư vấn viên, marketing, chủ doanh nghiệp…)
                                        </li>
                                        <li>
                                            Người muốn lấy chứng chỉ để nâng cao cơ hội việc làm, tăng lương.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="column1">
                                    <h2 style={{ textAlign: "left", color: "#F68836" }}>
                                        <b>VÌ SAO NÊN HỌC AWS</b>
                                    </h2>
                                    <ul style={{ textAlign: "left" }}>
                                        <li>
                                            Là một trong những dịch vụ cloud computing lớn nhất thế giới hiện nay.{" "}
                                        </li>
                                        <li>
                                            Cung cấp cái nhìn tổng quan về các dịch vụ, những điều nên làm (và không nên làm) để xây dựng một hệ thống tốt trên cloud.
                                        </li>
                                        <li>
                                            Các doanh nghiệp dịch chuyển dần lên Cloud với tốc độ chóng mặt.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <br />
                    <br />
                    <br />
                    <div>
                        <h2 style={{ textAlign: "center", color: "#F68836" }}>
                            <b>LỢI THẾ KHI HỌC AWS CLOUD FOUNDATION TẠI iSPACE</b>
                        </h2>
                        <div className="container mt-5">
                            <div className="row">
                                <div className="col-md-12 d-flex flex-column align-items-center">
                                    <img
                                        style={{ width: '50%', height: 'auto', maxHeight: '300px' }}
                                        src="/img/loithee.jpg"
                                        alt="Hình ảnh"
                                    />
                                    <img
                                        style={{ width: '50%', height: 'auto', maxHeight: '300px' }}
                                        src="/img/loithee1.jpg"
                                        alt="Hình ảnh"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <br />
                    <br />
                    <br />
                    <div>
                        <h1 style={{ textAlign: "center", color: "#F68836" }}>
                            <b>GIÁ TRỊ NHẬN ĐƯỢC SAU KHÓA HỌC</b>
                        </h1>
                        <div className="container mt-5">

                            <div className="row">
                                <div className="col-md-3" >
                                    <img
                                        src="/img/giatri1.jpg"
                                        alt="Hình ảnh"
                                        className="img-fluid"
                                        style={{ height: '90%', width: '90%', objectFit: 'cover' }}
                                    />
                                </div>
                                <div className="col-md-9">
                                    <div className="text-box" style={{ fontSize: 22, textAlign: "left" }}>
                                        <ul>
                                            <li>
                                                Hiểu biết về cơ sở hạ tầng toàn cầu AWS
                                            </li>
                                            <li>
                                                Hiểu biết về các nguyên tắc kiến trúc cơ bản của việc xây dựng trên AWS
                                            </li>
                                            <li>
                                                Khả năng xác định dịch vụ AWS đáp ứng yêu cầu kỹ thuật nhất định
                                            </li>
                                            <li>
                                                Kiến thức về các phương pháp hay được đề xuất để xây dựng các ứng dụng an toàn và đáng tin cậy trên nền tảng AWS
                                            </li>
                                            <li>
                                                Có đủ kiến thức để thi lấy chứng chỉ AWS Certified Cloud Practitioner.
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div>
                                <h1 style={{ textAlign: "center", color: "#F68836", paddingTop: 50 }}>
                                    <b>THÔNG TIN GIẢNG VIÊN</b>
                                </h1>
                                <div className="container mt-5">

                                    <div className="row">
                                        <div className="col-md-3" >
                                            <img
                                                src="/img/thay2.jpg"
                                                alt="Hình ảnh"
                                                className="img-fluid"
                                                style={{ height: '100%', width: '60%', objectFit: 'cover' }}
                                            />
                                        </div>
                                        <div className="col-md-9">
                                            <div className="text-box" style={{ fontSize: 22, textAlign: "left" }}>
                                                <ul>
                                                    <li>
                                                        Phó trưởng khoa Công nghệ thông tin
                                                    </li>
                                                    <li>
                                                        Có hơn 5 năm giảng dạy tại nhiều trường Đại học danh tiếng ở Việt Nam.
                                                    </li>
                                                    <li>
                                                        Là huấn luyện viên của nhiều cuộc thi chuyên môn uy tín dành cho sinh viên.
                                                    </li>
                                                    <li>
                                                        Sở hữu chứng chỉ AWS Certified Solutions Architect và AWS Certified Developer – Associate về điện toán đám mây.
                                                    </li>
                                                    <li>
                                                        Từng chiến thắng các cuộc thi chuyên môn uy tín như từ khi còn là sinh viên: Olympic Tin học sinh viên Việt Nam, Lập trình sinh viên quốc tế ICPC.
                                                    </li>
                                                    <li>Giảng dạy điện toán đám mây AWS cho gần một ngàn sinh viên, giảng viên các trường đại học, cao đẳng của Việt Nam và hiện là giảng viên chính thức
                                                        của chương trình AWS/ReStart Việt Nam.</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="container mt-5" style={{ textAlign: "left", color: "#F68836", paddingTop: 50 }}>
                                <h3>HỌC PHÍ VÀ ƯU ĐÃI</h3>
                                <h3>Học phí trọn khóa: 2.500.000 VNĐ</h3>
                            </div>

                            <div className="hmv-box">
                                <div className="container">
                                    <div className="row">

                                        <div className="col-lg-4 col-md-6 col-12">
                                            <div className="inner-hmv">

                                                <img
                                                    className="img-fluid rounded mb-4 mb-lg-0"
                                                    src="./img/02.jpg"
                                                    alt="" />

                                                <h6>Giảm giá 20% cho 5 bạn đăng ký đầu tiên</h6>

                                                <Link to="https://docs.google.com/forms/d/e/1FAIpQLSc1SRZCLUKdeDyZRWRTudEfxeOtkKXha1D_gap4Kt73NQM26g/viewform" className="btn btn-primary py-md-2 px-md-4 font-weight-semi-bold mt-2">
                                                    Đăng ký ngay
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-12">
                                            <div className="inner-hmv">
                                                <img
                                                    className="img-fluid rounded mb-4 mb-lg-0"
                                                    src="./img/05.jpg"
                                                    alt="" />
                                                <h6>Giảm giá 5% cho học viên đăng ký nhóm 2 người</h6>

                                                <Link to="https://docs.google.com/forms/d/e/1FAIpQLSc1SRZCLUKdeDyZRWRTudEfxeOtkKXha1D_gap4Kt73NQM26g/viewform" className="btn btn-primary py-md-2 px-md-4 font-weight-semi-bold mt-2">
                                                    Đăng ký ngay
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-12">
                                            <div className="inner-hmv">
                                                <img
                                                    className="img-fluid rounded mb-4 mb-lg-0"
                                                    src="./img/01.jpg"
                                                    alt="" />
                                                <h6>Giảm giá 10% cho học viên đăng ký nhóm 3 người</h6>

                                                <Link to="https://docs.google.com/forms/d/e/1FAIpQLSc1SRZCLUKdeDyZRWRTudEfxeOtkKXha1D_gap4Kt73NQM26g/viewform" className="btn btn-primary py-md-2 px-md-4 font-weight-semi-bold mt-2">
                                                    Đăng ký ngay
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>



                            <div>
                                <div>
                                    <br />
                                    <h1 style={{ textAlign: "center", color: "#F68836" }}>
                                        <b>NỘI DUNG CHƯƠNG TRÌNH HỌC</b>
                                    </h1>

                                    <div >
                                        <div>
                                            <div className="row" >
                                                <div className="col-md-12 d-flex flex-column align-items-center">
                                                    <img src="/img/noidung1.jpg" alt="" />

                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>


                            </div>

                            <div className="container mt-5">
                                <div className="row">
                                    <div className="col-md-12 d-flex flex-column align-items-center">
                                        <h1 style={{ textAlign: "center", color: "#F68836" }}>
                                            <b>THÔNG TIN LIÊN HỆ</b>
                                        </h1>
                                    </div>
                                    <div className="col-md-12 d-flex flex-column " style={{ fontSize: 23, textAlign: "left" }}>
                                        <li>Liên hệ Hotline: 0938 205 966</li>
                                        <li>Địa chỉ: 240 Võ Văn Ngân, Phường Bình Thọ, Thành phố Thủ Đức, Thành phố Hồ Chí Minh.</li>
                                        <li>
                                            <a href="https://www.facebook.com/ispace.vn/">Fanpage Trường cao đẳng An ninh mạng iSPACE</a>
                                        </li>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <And />
        </div>
    )
}
export default AWS;