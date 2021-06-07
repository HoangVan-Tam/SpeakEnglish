
import React, { useState,useRef,useEffect } from 'react';
import { useSelector } from 'react-redux';
import {
    Modal, ModalBody, ModalHeader,Form,FormGroup,InputGroup,Input,InputGroupAddon,
    InputGroupText,Label,Button, CustomInput, Col, Table
  } from 'reactstrap';
import { nextMonday } from 'date-fns'

import userApi from '../../api/userAPI';
import Swal from 'sweetalert2';

function RollCall(props) {
    const acc = useSelector(state => state.Login.acc);
    const [_data,_setData] = useState([]);
    const [_course,_setCourse] = useState('0');
    const [_list,_setList] = useState([]);
    const [_checkbox,_setCheckBox] = useState([]);
    const takeDataCourse = async() => {
        try{
            const response = await userApi.getCourseofTeacher(acc.userId);
            console.log(response);
            _setData(response);
        }catch(error){
            console.log("Failed to call API data detail contact", error);
        }
    }
    useEffect(()=>{
       return takeDataCourse();
    },[acc.studentId])
    const handleRollCall = async() => {
        //------------------------//
        let d = new Date();
        d.setDate(d.getDate() - 7);
        let result = nextMonday(d);
        let string = result.getFullYear()+"-"+(result.getMonth()+1)+"-"+result.getDate();
        //-----------------sesion --------//
        let sess = 1;
        for (let index = 0; index < _list[0].tests[0].attendances.length; index++) {
            if(_list[0].tests[0].attendances[index]===null){
                sess=index+1;
                break;
            }

        }
        const param = {
            courseId: _course,
            firstDayOfWeek: string,
            session: sess,
            attendances: [
                ..._checkbox
            ]
        }
        console.log(param);
        try{
            const response = await userApi.postRollCall(param);
            console.log(response);
            Swal.fire({
                text: "Điểm danh thành công",
                showConfirmButton: false,
                icon: 'success',
                timer: 1500,
                timerProgressBar: true,
                toast: true,
                position: 'bottom-left'
            });
            handleChange(_course);
        }catch(error){
            console.log("Failed to call API roll call", error);
        }
    }
    //------------------ handle save checkbox -------------------//
    const handleSavecheckbox = (e,id) => {
        let array=[];
        for (let index = 0; index < _checkbox.length; index++) {
            if(_checkbox[index].studentId==id){
                const item1 = {
                    studentId: id,
                    absent: e.target.checked,
                    reason: ""  
                }
                array.push(item1);
            }
            else
                array.push(_checkbox[index])
        }
        _setCheckBox(array);
    }
    //-----------------------------------------------------------//
    const handleChange = async(event) => {
        _setCourse(event);
        
        if(event!=='0'){
            let d = new Date();
            d.setDate(d.getDate() - 7);
            let result = nextMonday(d);
            let string = result.getFullYear()+"-"+(result.getMonth()+1)+"-"+result.getDate();
            const param = {
                courseId: event,
                firstDayOfWeek: string
            }
            console.log(param);
            try{
                const response1 = await userApi.getRollCallteacher(param);
                console.log(response1);
                if(response1[0].students){
                    let item = [];
                    for (let index = 0; index < response1.length; index++) {
                        const element = {
                            studentId: response1[index].students.studentId,
                            absent: false,
                            reason: ""
                        };
                        item.push(element);
                    }
                    _setCheckBox(item);
                    _setList(response1);
                }
                else _setList([]);
            }catch(error){
                console.log("Failed to call API data detail contact", error);
            }
        }
    }
    const renderCourse = () => {
        return _data.map((e) => {
            return(
                <option key={e.courses.id} value={e.courses.id}>{e.courses.name}</option>
            )
        })
    }
    const renderattenchild = (e1,e2) => {
        return e1.map((e,index) => {
            return(
                <td className="text-center" key={index}>
                    {(e)
                        ?((e.absent)
                            ?<span className="span-CM-rollcall">Có mặt</span>
                            :<span className="span-V-rollcall">Vắng</span>)
                        :<Input type="checkbox" value={_checkbox[index].absent} onChange={(event)=>handleSavecheckbox(event,e2)}/>}
                </td>
            )
        })
    }
    const renderList = () => {
        return _list.map((e,index) => {
            return(
                <tr key={index}>
                    <th scope="row" className="text-center">{index+1}</th>
                    <td>{e.students.lastName}&ensp;{e.students.firstName}</td>
                    <td className="text-center">{(e.tests[0].score=='0.0')?e.tests[0].status:e.tests[0].score}</td>
                    {renderattenchild(e.tests[0].attendances,e.students.studentId)}
                    <td></td>
                </tr>
            )
        })
    }
    const renderColum = () => {
        let count=null;
        for (let index = 0; index < _data.length; index++) {
            
            if(_data[index].courses.id==_course){
                count=_data[index];
                break;
            }
        }
        if(count!==null)
            return count.courses.schedules.map((e,index) => {
                    return(
                        <th key={index} className="text-center">{e.timeStart} - {e.day}</th>
                    )
            })
        
    }
    return (
        <div className="rollcall">
            <div className="header-rollcall">
                <h4>Điểm danh học viên</h4>
            </div>
            <div className="detail-rollcall">
                <div className="header-detail-rollcall">
                    <Input type="select" name="select" id="exampleSelect" onChange={(event)=>handleChange(event.target.value)}>
                        <option value="0">Chọn khóa học</option>
                        {renderCourse()}
                    </Input>
                </div>
                <div className="body-detail-rollcall">
                    <Table bordered>
                        <thead>
                            <tr>
                                <th className="text-center">STT</th>
                                <th className="text-center">Họ và tên đệm</th>
                                <th className="text-center">Điểm</th>
                                {renderColum()}
                                <th className="text-center">Ghi chú</th>
                            </tr>
                        </thead>
                        <tbody>
                            {renderList()}
                        </tbody>
                    </Table>
                </div>
                {(_list.length!==0) &&<div className="footer-detail-rollcall d-flex">
                    <Button color="info" onClick={()=>handleRollCall()}>Điểm danh</Button>
                </div>}
            </div>
        </div>
    )
}

export default RollCall;
