import React, { useState,useEffect } from 'react';
import { Link,useLocation} from "react-router-dom";
import { Button, Form,FormGroup,Input, Row } from 'reactstrap';
import Swal from 'sweetalert2';

function FormAdmission() {
    const location= useLocation();
    const [_firstName,_setFirstName] = useState('');
    const [_lastName,_setLastName] = useState('');
    const [_mail,_setEmail] = useState('');
    const [_phone,_setPhone] = useState('');
    const handle = () =>{
        let string = "Nhân viên tư vấn sẽ liên lạc với bạn trong giây lát";
        if(_firstName.trim()==='')
            string="Họ và tên không được để trống";
        else if (_lastName.trim()==='')
            string="Họ và tên không được để trống";
        else if (_mail.trim()==='')
            string="email không được để trống";
        else if (_phone.trim()==='')
            string="Số điện thoại không được để trống"
        Swal.fire({
            text: string,
            showConfirmButton: false,
            icon: 'warning',
            timer: 2500,
            timerProgressBar: true,
            toast: true,
            position: 'bottom-left'
        });
    }
    return (
        <div className="form-admission" data-aos="fade-up" id="form-adimission">
            <div className="img-form"></div>
            <div className="input-form"><div className="input-form-1">
                <Form>
                    <span>Đăng ký tư vấn</span>
                    <Row>
                        <FormGroup>
                                <Input 
                                    type="text" 
                                    placeholder="Họ" 
                                    value={_firstName}
                                    onChange={(event) => _setFirstName(event.target.value)}
                                />
                        </FormGroup>
                        <FormGroup>
                                <Input 
                                    type="text" 
                                    placeholder="Tên"
                                    value={_lastName}
                                    onChange={(event) => _setLastName(event.target.value)}
                                />
                        </FormGroup>
                    </Row>
                    <Row>
                        <FormGroup>
                                <Input 
                                    type="text" 
                                    placeholder="Số điện thoại" 
                                    value={_phone}
                                    onChange={(event) => _setPhone(event.target.value)}
                                />
                        </FormGroup>
                        <FormGroup>
                                <Input 
                                    type="text" 
                                    placeholder="Địa chỉ email"
                                    value={_mail}
                                    onChange={(event) => _setEmail(event.target.value)}
                                />
                        </FormGroup>
                    </Row>
                    <Button onClick={()=>handle()}>Liên hệ</Button>
                </Form>
            </div></div>
        </div>
    );
}

export default FormAdmission;
