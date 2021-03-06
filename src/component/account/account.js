
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
                <h4>Th??ng tin t??i kho???n</h4>
            </div>
            <div className="body-info-account">
                {(acc.studentId && _dataNotLearn.length!==0) && <div className="info-member">
                    <div className="header-infor-member">
                        Kh??a h???c ????? xu???t
                    </div>
                    <div className="body-infor-member">
                        <FormGroup check>
                            {rendernotLearn()}
                        </FormGroup>
                    </div>
                    <div className="footer-infor-member" onClick={()=>_setOpenForm(true)}>
                        ????ng k?? h???c
                    </div>
                </div>}
                <div className="info-private">
                    <div className="header-info-private">
                        Th??ng tin c?? nh??n
                    </div>
                    <Form role="form">
                        <FormGroup row>
                            <Label>H??? v?? t??n</Label>
                            <Col>
                                <Input
                                    disabled
                                    placeholder="H??? v?? t??n"
                                    type="text"
                                    value={_name}
                                    onChange={(event) => _setName(event.target.value)}
                                />
                            </Col>
                        </FormGroup>
                        <FormGroup row className="mb-3">
                            <Label>S??? ??i???n tho???i</Label>
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
                            <Label>Ng??y sinh</Label>
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
                            <Label>?????a ch??? email</Label>
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
                            <Label>Lo???i</Label>
                            <Col>
                                <Input
                                    disabled
                                    placeholder="Password"
                                    type="text"
                                    value={(acc.studentId)?"H???c vi??n":"Gi???ng vi??n"}
                                />
                            </Col>
                        </FormGroup>
                            {/* <FormGroup>
                                <Label>B???n l??</Label>
                                <div className="d-flex flex-row justify-content-around">
                                <CustomInput type="radio" id="exampleCustomRadio" name="customRadio" label="Ph??? huynh" />
                                <CustomInput type="radio" id="exampleCustomRadio2" name="customRadio" label="H???c vi??n" />
                                </div>
                            </FormGroup> */}
                    </Form>
                </div>
                {(!acc.studentId && acc.userId) && <div className="info-member">
                    <div className="header-infor-member">
                        Th??ng tin th??m
                    </div>
                    <div className="body-infor-member" style={{height: "320px",borderRadius: "0 0 15px 15px"}}>
                        <Table borderless>
                            <thead></thead>
                            <tbody>
                                <tr>
                                    <th>Tr???ng th??i</th>
                                    <td>Nh??n vi??n ch??nh th???c</td>
                                </tr>
                                <tr>
                                    <th>??i???m th??nh t??ch</th>
                                    <td>8/10??</td>
                                </tr>
                                <tr>
                                    <th>Kh??a h???c ??ang d???y</th>
                                    <td>3</td>
                                </tr>
                                <tr>
                                    <th>Gi??? d???y trong th??ng</th>
                                    <td>30h</td>
                                </tr>
                                <tr>
                                    <th>L????ng m???i gi???</th>
                                    <td>200.000 vn??</td>
                                </tr>
                            </tbody>
                        </Table>
                        <div className="hr"></div>
                        <p><strong>T???ng</strong>&ensp;&emsp;&emsp;&emsp;&emsp;&emsp; 6.000.000 vn??</p>
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
                    ????NG K?? KH??A H???C
                </ModalHeader>
                <ModalBody>
                    <Table borderless>
                        <tbody>
                            <tr>
                                <th>IELTS d??nh cho ng?????i ??i l??m</th>
                            </tr>
                            <tr>
                                <th>S??? bu???i h???c</th>
                                <td>144 Tu???n</td>
                            </tr>
                            <tr>
                                <th>Th???i kh??a bi???u</th>
                                <td>T7,Cn</td>
                            </tr>
                            <tr>
                                <th>S??? ti???n</th>
                                <td>10.000.000 vn??</td>
                            </tr>
                        </tbody>
                    </Table>
                </ModalBody>
                <ModalFooter>
                    <Button
                        onClick={() =>
                            Swal.fire({
                                text: "T??nh n??ng ??ang ph??t tri???n",
                                showConfirmButton: false,
                                icon: 'warning',
                                timer: 1500,
                                timerProgressBar: true,
                                toast: true,
                                position: 'bottom-left'
                            })
                        }
                    >
                        Thanh To??n</Button>
                </ModalFooter>
            </Modal> 
        </div>
    )
}

export default InfoAccount;
