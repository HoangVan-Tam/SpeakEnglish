
import React, { useState,useRef,useEffect } from 'react';
import {
    Modal, ModalBody, ModalHeader,Form,FormGroup,InputGroup,Input,InputGroupAddon,
    InputGroupText,Label,Button, CustomInput
  } from 'reactstrap';


function Register(props) {
    const [_remember,_setRemember] = useState(true);
    const [_email, _setEmail] = useState('');
    const [_password, _setPassword] = useState('');
    const [_name,_setName] = useState('');
    const [_phone,_setPhone] = useState('');
    const [_birth,_setBirth] = useState();
    //------------------ handle login ---------------------//
    const handleLogin = () => {
        props.setOpenFormRegister(false)
    }
    return (
        <Modal
            modalClassName="modal-black register-form"
            isOpen={props.openFormRegister}
            toggle={() => props.setOpenFormRegister(false)}
        >
            <ModalHeader>
                <div className="avatar-icon">
                    <img alt="avatar" src={require("../../assets/img/avatar.png").default}/>
                </div>
            </ModalHeader>
            <ModalBody>
                <p>Hiện tại trung tâm chưa hổ trợ chức năng đăng ký online. Bạn vui lòng đến cơ sở gần nhất của TRUNG TÂM SPEAK ENGLISH
                    để đăng ký tài khoản nhập học của SPEAK ENGLISH
                </p>
            {/* <Form role="form">
                    <FormGroup>
                        <Label>Họ và tên</Label>
                            <Input
                                placeholder="Họ và tên"
                                type="text"
                                value={_name}
                                onChange={(event) => _setName(event.target.value)}
                            />
                    </FormGroup>
                    <FormGroup>
                        <Label>Số điện thoại</Label>
                            <Input
                                placeholder="Email"
                                type="text"
                                value={_phone}
                                onChange={(event) => _setPhone(event.target.value)}
                            />
                    </FormGroup>
                    <FormGroup>
                        <Label>Ngày sinh</Label>
                        <Input 
                            type="date"
                            name="date"
                            id="exampleDate"
                            value={_birth}
                            onChange={(event) => _setBirth(event.target.value)}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label>Địa chỉ email</Label>
                            <Input
                                placeholder="Email"
                                type="text"
                                value={_email}
                                onChange={(event) => _setEmail(event.target.value)}
                            />
                    </FormGroup>
                    <FormGroup>
                            <Label>Mật khẩu</Label>
                            <Input
                                placeholder="Password"
                                type="password"
                                value={_password}
                                onChange={(event) => _setPassword(event.target.value)}
                            />
                    </FormGroup>
                    {/* <FormGroup>
                        <Label>Bạn là</Label>
                        <div className="d-flex flex-row justify-content-around">
                        <CustomInput type="radio" id="exampleCustomRadio" name="customRadio" label="Phụ huynh" />
                        <CustomInput type="radio" id="exampleCustomRadio2" name="customRadio" label="Học viên" />
                        </div>
                    </FormGroup> */}
                    <div className="text-center">
                        <Button type="button" onClick={() => handleLogin()}>
                            Đóng
                        </Button>
                    </div>
            </ModalBody>
            
        </Modal> 
    )
}

export default Register;
