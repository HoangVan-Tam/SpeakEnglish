
import React, { useState,useRef,useEffect } from 'react';
import { useSelector } from 'react-redux';
import {
    Modal, ModalBody, ModalHeader,Form,FormGroup,InputGroup,Input,InputGroupAddon,
    InputGroupText,Label,Button, CustomInput, Col, Table, ModalFooter
  } from 'reactstrap';
import Swal from 'sweetalert2';

import Schedule from "./schedule/schedule";

import userApi from "../../api/userAPI";

function InfoAccount(props) {
    const acc = useSelector(state => state.Login.acc);
    const [_remember,_setRemember] = useState(true);
    const [_email, _setEmail] = useState(acc.email);
    const [_password, _setPassword] = useState('');
    const [_showPass,_setShowPass] = useState(false);
    const [_name,_setName] = useState(acc.lastName+' '+acc.firstName);
    const [_phone,_setPhone] = useState(acc.phoneNumber);
    const [_birth,_setBirth] = useState(acc.birthday.slice(0,10));
    const [_openForm,_setOpenForm] = useState(false);
    const [_data,_setData] = useState([]);
    const [_dataNotLearn,_setDataNotlearn] = useState([]);
    const takeDataStudent = async() => {
        try{
            if(acc.studentId){
                const response = await Promise.all([userApi.getCourseofStudent(acc.studentId),userApi.getCourseNotLearn(acc.studentId)]);
                _setData(response[0]);
                console.log(response[0])
                _setDataNotlearn(response[1]);
            }
            else{
                const response = await userApi.getCourseofTeacher(acc.userId);
                console.log(response)
                _setData(response);
            }
        }catch(error){
            console.log("Failed to call API data ", error);
        }
    }
    useEffect(()=>{
        takeDataStudent();
    },[acc.studentId])
    const rendernotLearn = () => {
        return _dataNotLearn.map((e) => {
            return(
                <Label check key={e.id}>
                    <Input type="checkbox" />{' '}
                    {e.name}
                </Label>
            )
        })
    }
    return (
        <div className="info-account">
            <div className="header-info-account">
                <h4>Thông tin tài khoản</h4>
            </div>
            <div className="body-info-account">
                {(acc.studentId && _dataNotLearn.length!==0) && <div className="info-member">
                    <div className="header-infor-member">
                        Khóa học đề xuất
                    </div>
                    <div className="body-infor-member">
                        <FormGroup check>
                            {rendernotLearn()}
                        </FormGroup>
                    </div>
                    <div className="footer-infor-member" onClick={()=>_setOpenForm(true)}>
                        Đăng ký học
                    </div>
                </div>}
                <div className="info-private">
                    <div className="header-info-private">
                        Thông tin cá nhân
                    </div>
                    <Form role="form">
                        <FormGroup row>
                            <Label>Họ và tên</Label>
                            <Col>
                                <Input
                                    disabled
                                    placeholder="Họ và tên"
                                    type="text"
                                    value={_name}
                                    onChange={(event) => _setName(event.target.value)}
                                />
                            </Col>
                        </FormGroup>
                        <FormGroup row className="mb-3">
                            <Label>Số điện thoại</Label>
                            <Col>
                                <Input
                                    disabled
                                    placeholder="Email"
                                    type="text"
                                    value={_phone}
                                    onChange={(event) => _setPhone(event.target.value)}
                                />
                            </Col>
                        </FormGroup>
                        <FormGroup row className="mb-3">
                            <Label>Ngày sinh</Label>
                            <Col>
                            <Input 
                                disabled
                                type="date"
                                name="date"
                                id="exampleDate"
                                value={_birth}
                                onChange={(event) => _setBirth(event.target.value)}
                            />
                            </Col>
                        </FormGroup>
                        <FormGroup row className="mb-3">
                            <Label>Địa chỉ email</Label>
                            <Col>
                                <Input
                                    disabled
                                    placeholder="Email"
                                    type="text"
                                    value={_email}
                                    onChange={(event) => _setEmail(event.target.value)}
                                />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label>Loại</Label>
                            <Col>
                                <Input
                                    disabled
                                    placeholder="Password"
                                    type="text"
                                    value={(acc.studentId)?"Học viên":"Giảng viên"}
                                />
                            </Col>
                        </FormGroup>
                            {/* <FormGroup>
                                <Label>Bạn là</Label>
                                <div className="d-flex flex-row justify-content-around">
                                <CustomInput type="radio" id="exampleCustomRadio" name="customRadio" label="Phụ huynh" />
                                <CustomInput type="radio" id="exampleCustomRadio2" name="customRadio" label="Học viên" />
                                </div>
                            </FormGroup> */}
                    </Form>
                </div>
                {(!acc.studentId && acc.userId) && <div className="info-member">
                    <div className="header-infor-member">
                        Thông tin thêm
                    </div>
                    <div className="body-infor-member" style={{height: "320px",borderRadius: "0 0 15px 15px"}}>
                        <Table borderless>
                            <thead></thead>
                            <tbody>
                                <tr>
                                    <th>Trạng thái</th>
                                    <td>Nhân viên chính thức</td>
                                </tr>
                                <tr>
                                    <th>Điểm thành tích</th>
                                    <td>8/10đ</td>
                                </tr>
                                <tr>
                                    <th>Khóa học đang dạy</th>
                                    <td>3</td>
                                </tr>
                                <tr>
                                    <th>Giờ dạy trong tháng</th>
                                    <td>30h</td>
                                </tr>
                                <tr>
                                    <th>Lương mỗi giờ</th>
                                    <td>200.000 vnđ</td>
                                </tr>
                            </tbody>
                        </Table>
                        <div className="hr"></div>
                        <p><strong>Tổng</strong>&ensp;&emsp;&emsp;&emsp;&emsp;&emsp; 6.000.000 vnđ</p>
                    </div>
                </div>}
            </div>
            <Schedule
                _data={_data}
                acc={acc}
            />
            <Modal
                modalClassName="modal-black dialog-register-cours"
                isOpen={_openForm}
                toggle={() => _setOpenForm(false)}
            >
                <ModalHeader>
                    ĐĂNG KÝ KHÓA HỌC
                </ModalHeader>
                <ModalBody>
                    <Table borderless>
                        <tbody>
                            <tr>
                                <th>IELTS dành cho người đi làm</th>
                            </tr>
                            <tr>
                                <th>Số buổi học</th>
                                <td>144 Tuần</td>
                            </tr>
                            <tr>
                                <th>Thời khóa biểu</th>
                                <td>T7,Cn</td>
                            </tr>
                            <tr>
                                <th>Số tiền</th>
                                <td>10.000.000 vnđ</td>
                            </tr>
                        </tbody>
                    </Table>
                </ModalBody>
                <ModalFooter>
                    <Button
                        onClick={() =>
                            Swal.fire({
                                text: "Tính năng đang phát triển",
                                showConfirmButton: false,
                                icon: 'warning',
                                timer: 1500,
                                timerProgressBar: true,
                                toast: true,
                                position: 'bottom-left'
                            })
                        }
                    >
                        Thanh Toán</Button>
                </ModalFooter>
            </Modal> 
        </div>
    )
}

export default InfoAccount;
