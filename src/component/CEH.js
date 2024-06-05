import Background from "./Background";
import Header from "./Header";
import './style.css';
import And from "./And";
import { useContext } from "react";
import { ThemeContext } from "../App";

function CEH() {

    const theme = useContext(ThemeContext)

    return (
        <div className={theme}>
        <div>
            <main>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
                <Header />
                <div id="background-img">
                    <img
                        id="bg-image"
                        src="./img/background_CEH.jpg"
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
                                            <h1>
                                                <b style={{ color: "#F68836" }}>THÔNG TIN KHÓA HỌC</b>
                                            </h1>
                                        </div>
                                        <ul style={{ fontSize: 22 }}>
                                            <li>
                                                <strong>Tên khóa học:</strong> CEH (V12) Certified Ethical Hacker
                                            </li>
                                            <li>
                                                <strong>Giảng viên:</strong> Thầy <b>Trương Phạm Hoài Thương</b>
                                            </li>
                                            <li>
                                                <strong>Thời lượng:</strong> 40h, mỗi buổi 2h
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
                                    src="/img/Group.jpg"
                                    alt="Hình ảnh"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="container mt-5">
                        <h1 style={{ textAlign: 'center', color: '#F68836' }}>
                            <b>ĐỐI TƯỢNG HỌC VIÊN</b>
                        </h1>
                        <div className="row">
                            <div className="col-md-6" style={{ fontSize: 22, textAlign: "left" }}>
                                <ul>
                                    <li>Nhân viên và học viên bảo mật mạng.</li>
                                    <li>Chuyên viên công nghệ thông tin.</li>
                                    <li>Chuyên viên quản trị hệ thống mạng + máy chủ.</li>
                                    <li>Người quản trị Website + Forum.</li>
                                </ul>
                            </div>
                            <div className="col-md-6" style={{ fontSize: 22 }}>
                                <ul>
                                    <li>Quản lý các doanh nghiệp, nhân viên kinh doanh, quản lý tài chính có liên quan đến CNTT</li>
                                    <li>Các đối tượng yêu thích công việc về bảo mật, an ninh mạng.</li>
                                    <li>Người muốn lấy chứng chỉ để nâng cao cơ hội việc làm, tăng lương.</li>
                                </ul>
                            </div>
                        </div>
                        <br />
                        <br />
                        <br />
                        <div>
                            <h1 style={{ textAlign: 'center', color: '#F68836' }}>
                                <b>VÌ SAO BẠN NÊN HỌC CEH?</b>
                            </h1>
                            <ul style={{ textAlign: 'left', fontSize: 22 }}>
                                <li>
                                    CEH là chứng chỉ bảo mật thông tin hàng đầu thế giới, được công nhận rộng rãi và có giá trị cao trên thị trường.
                                </li>
                                <li>
                                    Giúp bạn hiểu rõ về các kỹ thuật tấn công và phòng thủ mạng, trang bị cho bạn các kiến thức, kỹ năng cần thiết để bảo vệ mạng của tổ chức, doanh nghiệp.
                                </li>
                                <li>
                                    Chứng chỉ CEH được các tổ chức uy tín trên thế giới, như DoD 8570, ANSI và NICE, công nhận và đánh giá cao, giúp bạn nâng cao cơ hội tìm kiếm việc làm, thăng tiến trong sự nghiệp.
                                </li>
                                <li>
                                    Giúp bạn có thể phát triển mạng lưới quan hệ và kết nối với các chuyên gia bảo mật thông tin khác trên toàn thế giới.
                                </li>
                                <li>
                                    Giúp bạn nắm bắt được những xu hướng mới nhất trong lĩnh vực bảo mật thông tin, từ đó giúp bạn trở thành một chuyên gia bảo mật thông tin hàng đầu.
                                </li>
                            </ul>
                        </div>
                        <br />
                    </div>
                    <div>
                        <h1 style={{ textAlign: "center", color: "#F68836" }}>
                            <b>LỢI THẾ KHI HỌC CEH TẠI iSPACE CENTER</b>
                        </h1>
                        <div className="container mt-5">
                            <div className="row">
                                <div className="col-md-12 d-flex flex-column align-items-center">
                                    <img
                                        style={{ width: '50%', height: 'auto', maxHeight: '300px', marginBottom: '20px' }}
                                        src="/img/loithe.jpg"
                                        alt="Hình ảnh"
                                    />
                                    <img
                                        style={{ width: '50%', height: 'auto', maxHeight: '300px' }}
                                        src="/img/loithe1.jpg"
                                        alt="Hình ảnh"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <br />
                    <br />
                    <br />
                    <div className="container mt-5">
                        <h1 style={{ textAlign: 'center', color: '#F68836' }}>
                            <b>GIÁ TRỊ NHẬN ĐƯỢC SAU KHÓA HỌC</b>
                        </h1>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="text-box" style={{ fontSize: 22, textAlign: "left" }}>
                                    <ul>
                                        <li>
                                            Học viên được trang bị các kiến thức từ cơ bản đến chuyên sâu về bảo mật.
                                        </li>
                                        <li>
                                            Sử dụng thành thạo các công cụ và phương thức tấn công của các Hacker, có khả năng ngăn chặn, phòng chống các hành vi xâm nhập trái phép và phá hoại hệ thống mạng.
                                        </li>
                                        <li>
                                            Có kiến thức về quản trị việc đăng nhập nâng cao dùng cho việc đảm bảo thông tin và cho phép bạn quản lý bảo mật thông tin một cách rõ ràng hơn.
                                        </li>
                                        <li>
                                            Có đủ kiến thức và kỹ năng trở thành chuyên gia an toàn thông tin, kiểm toán hệ thống thông tin, tư vấn an toàn thông tin…cho các doanh nghiệp.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <img
                                    src="/img/amazon-w.jpg"
                                    alt="Hình ảnh"
                                    className="img-fluid mt-4"
                                />
                            </div>
                        </div>
                    </div>
                    <div>
                        <h1 style={{ textAlign: "center", color: "#F68836", paddingTop: 50 }}>
                            <b>THÔNG TIN GIẢNG VIÊN</b>
                        </h1>
                        <div className="container mt-5">

                            <div className="row">
                                <div className="col-md-3" >
                                    <img
                                        src="/img/thay1.jpg"
                                        alt="Hình ảnh"
                                        className="img-fluid"
                                        style={{ height: '100%', width: '60%', objectFit: 'cover' }}
                                    />
                                </div>
                                <div className="col-md-9">
                                    <div className="text-box" style={{ fontSize: 22, textAlign: "left" }}>
                                        <ul>
                                            <li>
                                                Thầy Trương Phạm Hoài Thương – giảng viên tại khoa An ninh mạng ở trường iSPACE, đảm nhận việc giảng dạy các môn học chuyên ngành
                                                về an toàn thông tin,
                                                chia sẻ kiến thức và kinh nghiệm thực tiễn cho sinh viên…
                                            </li>
                                            <li>
                                                05 năm kinh nghiệm trong lĩnh vực an ninh mạng và có các chứng chỉ bảo mật từ EC-council và CompTIA.
                                            </li>
                                            <li>
                                                Thầy Trường Phạm Hoài Thương đã tham gia vào nhiều dự án đánh giá an toàn thông tin, triển khai các giải pháp bảo mật hiệu quả
                                                và thực hiện ứng cứu sự cố bảo mật.
                                            </li>
                                            <li>
                                                Từ lúc còn là sinh viên, thầy Hoài Thương đã tham gia xây dựng và phát triển cộng đồng AdminVietNam – một blog chuyên về chia
                                                sẻ kiến thức an ninh mạng và quản trị mạng.
                                            </li>
                                            <li>
                                                Đạt loại giỏi trong cuộc thi tay nghề thành phố Hồ Chí Minh – WorldSkills Viet Nam 2018.
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h1 style={{ textAlign: "center", color: "#F68836", paddingTop: 50 }}>
                            <b>HỌC PHÍ KHÓA HỌC</b>
                        </h1>
                        <p style={{ textAlign: "center", fontSize: 22 }}>
                            Học phí trọn khóa: <b>6.500.000 VND</b> (chưa bao gồm lệ phí thi)
                        </p>
                        <div style={{ textAlign: "center" }}>
                            <a href="https://forms.gle/EqjpkEfFGgD1EmrdA">
                                {" "}
                                <button
                                    type="button"
                                    style={{
                                        width: 164,
                                        height: 64,
                                        border: 1,
                                        backgroundColor: "#F68836"
                                    }}
                                >
                                    Đăng kí ngay
                                </button>
                            </a>
                        </div>
                    </div>
                    <div>
                        <br />
                        <h1 style={{ textAlign: "center", color: "#F68836" }}>
                            <b>NỘI DUNG CHƯƠNG TRÌNH HỌC</b>
                        </h1>
                        <div className="container mt-5">
                            <div className="row">
                                <div className="col-md-12 d-flex flex-column align-items-center">
                                    <img

                                        src="/img/noidung.jpg"
                                        alt="Hình ảnh"
                                    />

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
                            <div className="col-md-12 d-flex flex-column " style={{fontSize:23, textAlign:"left"}}>
                                <li>Liên hệ Hotline: 0938 205 966</li>
                                <li>Địa chỉ: 240 Võ Văn Ngân, Phường Bình Thọ, Thành phố Thủ Đức, Thành phố Hồ Chí Minh.</li>
                                <li>
                                    <a href="https://www.facebook.com/ispace.vn/">Fanpage Trường cao đẳng An ninh mạng iSPACE</a>
                                </li>
                            </div>
                        </div>
                    </div>


                    <br />
                    <br />
                    <br />
                </section>
            </main>
            <And />
        </div>
        </div>
    )
}
export default CEH;