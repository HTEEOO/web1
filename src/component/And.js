import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faYoutube, faTiktok } from '@fortawesome/free-brands-svg-icons'; // Import các biểu tượng từ thư viện

const And = () => {
    return (
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

        <div style={{backgroundColor: 'rgb(255, 255, 150)', height: '59px'}}></div>

            <div className="overlay-container" style={{background: "url('./img/ca2.jpeg')"}}>
                <div className="overlay-text">
                    <h3 className="overlay-title">Bạn muốn là chuyên gia An Ninh Mạng?</h3>
                    <p className="overlay-content">
                        Hãy đến với chúng tôi - Trường Cao đẳng An ninh mạng iSPACE!
                    </p>
                    <div className="overlay-title">
                    <Link to="/Dangkykhoahoc" className="btn btn-primary py-md-2 px-md-4 font-weight-semi-bold mt-2">
                                   Đăng ký ngay {'>>'}
                                </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default And;
