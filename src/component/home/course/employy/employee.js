import React, { useState,useEffect } from 'react';
import { Link,useLocation} from "react-router-dom";
import { Button, Container, Form,FormGroup,Input, Row } from 'reactstrap';
function Employee() {
    const location= useLocation();
    return (
        <div className="employee">
            <h3>Đội ngũ nhân viên</h3>
            <div className="employee-content">
                <p>Đội ngũ giáo viên giàu kinh nghiệm và trình độ chuyên môn cao, chúng tôi cam kết sẽ mang đến
                cho học viên một chương trình giảng dạy và phương pháp học  tiếng Anh đẳng cấp quốc tế.</p>
                <p>Đội ngũ giáo viên nòng cốt là giảng viên bản ngữ, đến từ các quốc gia sử dụng tiếng Anh, 
                là những người đã đạt được các chứng chỉ tiếng Anh quốc tế và chuyên môn về ESL. </p>
            </div>
            <img src={require("../../../../assets/img/doingu.jpg").default} alt='...'></img>
        </div>
    );
}

export default Employee;
