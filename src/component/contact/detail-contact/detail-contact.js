
import React, { useState,useRef,useEffect } from 'react';
import {
    Input,Table
  } from 'reactstrap';
import { useSelector } from 'react-redux';
import userApi from "../../../api/userAPI";

function DetailContact() {
    const acc = useSelector(state => state.Login.acc);
    const [_data,_setData] = useState([]);
    const [_dataRollCall,_setDataRollCall] = useState([]);
    const [_course,_setCourse] = useState('0');
    const [_schedule,_setSchedule] = useState(0);
    const takeDataCourse = async() => {
        try{
            const response = await userApi.getCourseofStudent(acc.studentId);
            console.log(response);
            _setData(response);
        }catch(error){
            console.log("Failed to call API data detail contact", error);
        }
    }
    useEffect(()=>{
        takeDataCourse();
    },[acc.studentId])
    //-----------------------------------------------------------//
    const handleChange = async(event) => {
        _setCourse(event.target.value);
        if(event.target.value!=='0'){
            try{
                const response1 = await userApi.getRollCallStudent(acc.studentId ,event.target.value);
                console.log(response1);
                if(response1.tests){
                    _setDataRollCall(response1.tests);
                }
                else _setDataRollCall([]);
            }catch(error){
                console.log("Failed to call API data detail contact", error);
            }
        }
    }
    //-------------------- render -----------------------------//
    const renderCourse = () => {
        return _data.map((e) => {
            return(
                <option key={e.courseId} value={e.courseId}>{e.courses.name}</option>
            )
        })
    }
    const renderattend = () => {
        return _dataRollCall.map((e,index) => {
            return(
                <tr key={index}>
                    <td className="text-center">({e.startDay.slice(0,10)}) đến ({e.finishDay.slice(0,10)})</td>
                    <td className="text-center">{(e.score!==0)?e.score:e.status}</td>
                    {renderattenchild(e.attendances)}
                    <td></td>
                </tr>
            )
        })
    }
    const renderattenchild = (e1) => {
        return e1.map((e) => {
            return(
                <td className="text-center">
                    {(e)
                        ?((e.absent)
                            ?<span className="span-CM-rollcall">Có mặt</span>
                            :<span className="span-V-rollcall">Vắng</span>)
                        :<span className="span-C-rollcall">Chưa</span>}
                </td>
            )
        })
    }
    const renderColum = () => {
        let count;
        for (let index = 0; index < _data.length; index++) {
            if(_data[index].courseId==_course){
                count=_data[index];
                break;
            }
        }
        if(count.courses)
            return count.courses.schedules.map((e,index) => {
                    return(
                        <th key={index} className="text-center">{e.timeStart} - {e.day}</th>
                    )
            })
        
    }
    return (
        <div className="detail-contact">
            {(_data.length!==0)?<div className="header-detail-contact">
                <h5></h5>
                    <Input type="select" name="select" id="exampleSelect" onChange={(event)=>handleChange(event)}>
                        <option value="0">Chọn khóa học</option>
                        {renderCourse()}
                    </Input>
            </div>:<h5>Học viên chưa đăng ký lớp học nào</h5>}
            {(_dataRollCall.length!==0) && <div className="body-detail-contact">
                <Table striped>
                    <thead>
                        <tr>
                            <th className="text-center">Tuần</th>
                            <th className="text-center">Điểm bài test</th>
                            {renderColum()}
                            <th className="text-center">Ghi chú</th>
                        </tr>
                    </thead>
                    <tbody>
                        {renderattend()}
                        {/* <tr>
                            <td className="text-center">(23/1/2021-25/1/2021)</td>
                            <td className="text-center">10</td>
                            <td className="text-center"><span className="span-V-rollcall">Vắng</span></td>
                            <td className="text-center"><span className="span-V-rollcall">Vắng</span></td>
                            <td className="text-center"><span className="span-V-rollcall">Vắng</span></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td className="text-center">(23/1/2021-25/1/2021)</td>
                            <td className="text-center">7</td>
                            <td className="text-center"><span className="span-CM-rollcall">Có mặt</span></td>
                            <td className="text-center"><span className="span-CM-rollcall">Có mặt</span></td>
                            <td className="text-center"><span className="span-CM-rollcall">Có mặt</span></td>
                            <td></td>
                        </tr> */}
                    </tbody>
                </Table>
            </div>}
        </div>
    )
}

export default DetailContact;
