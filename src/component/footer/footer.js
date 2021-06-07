import React, { useState,useEffect } from 'react';
import { Link,useLocation} from "react-router-dom";
import { Container, ListGroup, ListGroupItem,Button, Row, Col } from 'reactstrap';


function Footer() {
    return (
        <div className="footer">
            <div className="ft footer-logo">
                <img src={require("../../assets/img/logo.png").default} alt="logo"/>
                <div>
                    <i className="fab fa-instagram"></i>
                    <i className="fab fa-facebook-f"></i>
                    <i className="fab fa-twitter"></i>
                    <i className="fab fa-youtube"></i>
                </div>
            </div>
            <div className="ft footer-list">
                <h3>Khóa Học</h3>
                <ul>
                    <li>&emsp;Mẫu giáo SPEAK ENGLISH Ontario</li>
                    <li>&emsp;Tiếng Anh dành cho thiếu nhi</li>
                    <li>&emsp;Tiếng Anh dành cho thiếu niên</li>
                    <li>&emsp;Tiếng Anh giao tiếp dành cho người lớn</li>
                    <li>&emsp;TOEIC dành cho người đi làm</li>
                    <li>&emsp;IELTS dành cho người đi làm</li>
                </ul>
            </div>
            <div className="ft footer-contact">
                <h3>Liên Hệ SPEAK ENGLISH</h3>
                <div>
                    <p><span className="material-icons">apartment</span>&ensp;619 Lê Trọng Tấn, Quận Bình Tân</p>
                    <p><span className="material-icons">phone</span>&ensp;1900986800 - 02822479595</p>
                    <p><span className="material-icons">mail</span>&ensp;info@SPEAKENGLISH.edu.vn</p>
                    <p>TRUNG TÂM ANH NGỮ WINDSOR ESSEX CANADA</p>
                    <p>Công ty Cổ phần Phát triển Giáo dục Phúc Tấn</p>
                    <p>MST: 0315656148 do Sở Kế Hoạch Và Đầu Tư Tp.HCM cấp ngày 02/05/2019</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;
