
import React, { useState,useRef,useEffect, lazy } from 'react';
import ReactCountdownClock from "react-countdown-clock";
import {
    Modal, ModalBody, ModalHeader,Form,FormGroup,InputGroup,Input,InputGroupAddon,
    InputGroupText,Label,Button, ModalFooter,Table
  } from 'reactstrap';
import { useHistory,} from 'react-router';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { setShowFormTest } from "../../redux/actions/openForm";
import { setTestID } from "../../redux/actions/account";
import userApi from '../../api/userAPI';

function Dialog_test() {
    const openForm = useSelector(state => state.openForm.openDialogTest);
    const acc = useSelector(state => state.Login.acc);
    const dispatch = useDispatch();
    const History = useHistory();
    const [_data,_setData] = useState([]);
    const [_list, _setList] = useState([]);
    //------------------ handle open form test -------------------------//
    const handleOpenFormTest = (e) =>{
        const action = setShowFormTest(e);
        dispatch(action);
    }
    //------------------ handle go test-------------------------//
    const handleGoTest = (e1) =>{
        console.log(e1);
        const action1 = setTestID(e1);
        dispatch(action1);
        const action = setShowFormTest(false);
        dispatch(action);
        History.push('/kiem-tra');
    }
    const handleChange = async(event) => {
        if(event.target.value!=='0'){
            try{
                const response1 = await userApi.getAllTest(acc.studentId ,event.target.value);
                console.log(response1);
                    _setList(response1);
            }catch(error){
                console.log("Failed to call API data detail contact", error);
            }
        }
    }
    useEffect(() =>{
        const takeData = async() => {
            try{
                const response = await userApi.getCourseofStudent(acc.studentId);
                console.log(response);
                _setData(response);
            }catch(error){
                console.log("Failed to call API data detail contact", error);
            }
        }
        if(acc.studentId)
            return takeData();
    },[openForm])
    const renderCourse = () => {
        return _data.map((e) => {
            return(
                <option key={e.courseId} value={e.courseId}>{e.courses.name}</option>
            )
        })
    }
    const renderButtontest = (e,e1) =>{
        if(e=='L??m b??i')
            return(
                <td className="joinning-test" onClick={() => handleGoTest(e1)}>??ang thi</td>
            )
        else if (e=='Ch??a ???????c l??m')
            return(
                <td className="not-yet-time-test">Ch??a thi</td>
            )
        else if (e=='???? thi')
            return(
                <td className="complete-test">???? thi</td>
            )
        else return(
            <td className="not-join-test">Kh??ng tham gia</td>
        )
    }
    const renderColum = () =>{
        return _list.map((e,index) => {
            return(
                <tr key={index}>
                    <td scope="row">Tu???n {e.week}</td>
                    <td>(T??? {e.startDay.slice(0,10)} ?????n {e.finishDay.slice(0,10)})</td>
                    <td>{(e.score===0)?"#":e.score}</td>
                    {renderButtontest(e.status,e)}
                </tr>
            )
        })
    }
    return (
        <Modal
            modalClassName="modal-black dialog-test"
            isOpen={openForm}
            toggle={() => handleOpenFormTest(false)}
        >
            <ModalHeader>
                KI???M TRA KI???N TH???C
            </ModalHeader>
            <ModalBody>
                <Input type="select" name="select" id="exampleSelect" onChange={(event)=>handleChange(event)}>
                    <option value="0">Ch???n kh??a h???c</option>
                    {renderCourse()}
                </Input>
                <Table bordered>
                    <thead>
                        <tr>
                            <th>Tu???n h???c</th>
                            <th>T??? ng??y - ?????n ng??y</th>
                            <th>??i???m</th>
                            <th>Tr???ng th??i</th>
                        </tr>
                    </thead>
                    <tbody>
                        {renderColum()}
                    </tbody>
                </Table>
            </ModalBody>
        </Modal> 
    )
}

export default Dialog_test;
