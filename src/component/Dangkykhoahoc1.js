import React, { useState, useEffect } from "react";
import { gapi } from "gapi-script";
const CLIENT_ID = "722143859292-pmv3lviq7llak29ok5qna1fii31mlaql.apps.googleusercontent.com";
const API_KEY = "AIzaSyCISnNxCImw1MT8J7GQg0oxemiV--aItrs";
const SPREADSHEET_ID = "1TC3COaRc1KxzoqMVH5Smr8YMw_OQsx4Mz9-9AUzzoI0";

function Dangky() {
    const [data, setData] = useState({
        Name: "",
        Email: "",
        PhoneNumber: "",
        TypeStudent: "",
        Specialized: "",
    });
    const [successMessage, setSuccessMessage] = useState("");

    useEffect(() => {
        function start() {
            gapi.client
                .init({
                    apiKey: API_KEY,
                    clientId: CLIENT_ID,
                    discoveryDocs: [
                        "https://sheets.googleapis.com/$discovery/rest?version=v4",
                    ],
                    scope:
                        "https://www.googleapis.com/auth/drive https://www.googleapis.com/auth/drive.file https://www.googleapis.com/auth/spreadsheets",
                })
                .then(
                    () => {
                        console.log("GAPI client loaded for API");
                    },
                    (error) => {
                        console.error("Error loading GAPI client for API", error);
                    }
                );
        }

        gapi.load("client:auth2", start);
    }, []);

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const currentDate = new Date();
        const formattedDate = `${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${currentDate.getDate()}`;
        const newData = { ...data, Date: formattedDate };
        await execute(newData);
        setSuccessMessage("Gửi thành công!");
        setData({
            Name: "",
            Email: "",
            PhoneNumber: "",
            TypeStudent: "",
            Specialized: "",
        });
    };

    const execute = (newData) => {
        const spreedData = Object.values(newData);
        console.log(spreedData);
        gapi.client.sheets.spreadsheets.values
            .append({
                spreadsheetId: SPREADSHEET_ID,
                range: "Test1",
                insertDataOption: "INSERT_ROWS",
                valueInputOption: "USER_ENTERED",
                resource: {
                    values: [spreedData],
                },
            })
            .then(
                (response) => {
                    console.log("Response", response);
                },
                (error) => {
                    console.error("Execute error", error);
                }
            );
    };

    return (

        <div>

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
                            <div className="card border-0 bg-white">
                                <div className="card-header bg-light text-center p-4">
                                    <h1 className="m-0">Điền thông tin bên dưới</h1>
                                </div>
                                <div className="card-body rounded-top rounded-bottom bg-orange p-5">
                                    <form onSubmit={handleSubmit}>
                                        <div className="form-group">
                                            <input
                                                type="text"
                                                name="Name"
                                                className="form-control border-0 p-4"
                                                placeholder="Họ và Tên"
                                                required="required"
                                                value={data.Name}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <input
                                                type="email"
                                                name="Email"
                                                className="form-control border-0 p-4"
                                                placeholder="Email"
                                                required="required"
                                                value={data.Email}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <input
                                                type="tel"
                                                name="PhoneNumber"
                                                className="form-control border-0 p-4"
                                                placeholder="Số điện thoại"
                                                required="required"
                                                value={data.PhoneNumber}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <select
                                                name="TypeStudent"
                                                className="custom-select border-0 px-4"
                                                style={{ height: "47px" }}
                                                value={data.TypeStudent}
                                                onChange={handleChange}
                                            >
                                                <option value="">Đối tượng</option>
                                                <option value="Hs12">Học sinh lớp 12(đăng kí giữ chỗ)</option>
                                                <option value="DaTotNghiepC3">Học sinh đã tốt nghiệp THPT/lớp 12</option>
                                                <option value="SinhVien">Sinh viên</option>
                                                <option value="NguoiDilam">Người đi làm</option>
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <select
                                                name="Specialized"
                                                className="custom-select border-0 px-4"
                                                style={{ height: "47px" }}
                                                value={data.Specialized}
                                                onChange={handleChange}
                                            >
                                                <option value="">Chương trình học</option>
                                                <option value="ANM">An ninh mạng</option>
                                                <option value="LTW">Phát triển phần mềm</option>
                                                <option value="TKDH">Thiết kế đồ họa</option>
                                                <option value="QTM">Quản trị mạng</option>
                                                <option value="TMDT">Thương mại điện tử</option>
                                                <option value="CEH">Khóa học CEH</option>
                                                <option value="AWS">Khóa học AWS Cloud Foundation</option>
                                            </select>
                                        </div>
                                        <div>
                                            <button className="btn btn-dark btn-block border-0 py-3" type="submit" value="Submit" >
                                                Gửi ngay
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
    );
}

export default Dangky;