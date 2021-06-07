
import React, { useState,useRef,useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Button,Modal,ModalBody,ModalFooter,ModalHeader,FormGroup,Label,Col,Input
  } from 'reactstrap';
import Swal from 'sweetalert2';

import userApi from '../../api/userAPI';

function ChangePass(props) {
    const [_oldPass,_setOldPass] = useState('');
    const [_newPass,_setNewPass] = useState('');
    const [_newPassAgain,_setNewPassAgain] = useState('');
    const acc = useSelector(state=> state.Login.acc);
    //----------------- handle save when change pass ------------------------//
    const handleChangePass = async() =>{
        if(_newPass!==_newPassAgain)
            Swal.fire({
                text: "Mật khẩu xác nhân không trùng khớp",
                showConfirmButton: false,
                icon: 'error',
                timer: 1500,
                timerProgressBar: true,
                toast: true,
                position: 'bottom-left'
            });
        else{
            try{
                if(acc.studentId){
                    const params={
                        userName: acc.studentId,
                        oldPassword: _oldPass,
                        newPassword: _newPassAgain
                    }
                    const response = await userApi.ChangePassStudent(params);
                }
                else{
                    const params={
                        userName: acc.userId,
                        oldPassword: _oldPass,
                        newPassword: _newPassAgain
                    }
                    const response = await userApi.ChangePassEmployee(params);
                }
                Swal.fire({
                    text: "Đổi mật khẩu thành công",
                    showConfirmButton: false,
                    icon: 'success',
                    timer: 1500,
                    timerProgressBar: true,
                    toast: true,
                    position: 'bottom-left'
                });
                props.setOpenChangePass(false);

            }catch(error){
                console.log("Failed to call API data ", error);
            }
        }
    }
    return (
        <Modal
            modalClassName="modal-black dialog-change-pass"
            isOpen={props.openChangePass}
            toggle={() => props.setOpenChangePass(false)}
        >
            <ModalHeader>
                ĐỔI MẬT KHẨU
            </ModalHeader>
            <ModalBody>
                <FormGroup row>
                    <Label sm={5}>Mật khẩu hiện tại</Label>
                        <Col >
                            <Input 
                                type="password" 
                                placeholder=" Nhập mật khẩu hiện tại" 
                                value={_oldPass}
                                onChange={(event) => _setOldPass(event.target.value)}
                            />
                        </Col>
                    </FormGroup>
                <FormGroup row>
                    <Label sm={5}>Mật khẩu mới</Label>
                    <Col >
                        <Input 
                            type="password" 
                            placeholder="Nhập mật khẩu mới" 
                            value={_newPass}
                            onChange={(event) => _setNewPass(event.target.value)}
                        />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label sm={5}>Xác nhận mật khẩu</Label>
                    <Col >
                        <Input 
                            type="password" 
                            placeholder="Xác nhận mật khẩu" 
                            value={_newPassAgain}
                            onChange={(event) => _setNewPassAgain(event.target.value)}
                        />
                    </Col>
                </FormGroup>
            </ModalBody>
            <ModalFooter>
                <Button color="info" onClick={()=> handleChangePass()}>Xác nhận</Button>
            </ModalFooter>
        </Modal> 
    )
}

export default ChangePass;
