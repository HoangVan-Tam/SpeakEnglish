
import React, { useState,useRef,useEffect } from 'react';
import {
    Modal, ModalBody, ModalHeader,Form,FormGroup,InputGroup,Input,InputGroupAddon,
    InputGroupText,Label,Button, CustomInput, Col
  } from 'reactstrap';
  import parse from 'html-react-parser';
import { FaAccessibleIcon } from 'react-icons/fa';

function Schedule(props) {
    const renderschedule = (e1) => {
        let count="";
        return e1.map((e) =>{
            count=e.day+" - ("+e.timeStart+"->"+e.timeEnd+")";
            return(
                <>
                    {count}<br/>
                </>
            )
        })
    }
    const renderCourse = () => {
        if(props.acc.studentId)
            return props._data.map((e) => {
                return(
                    <tr>
                        <td>{e.courses.name}</td>
                        <td>{renderschedule(e.courses.schedules)}</td>
                        <td>{e.dayStart.slice(0,10)}</td>
                        <td>{e.dayFinish.slice(0,10)}</td>
                        <td>{(e.finish)?"Đã hoàn thành":"Đang học"}</td>
                    </tr>
                )
            })
        else return props._data.map((e) => {
            return(
                <tr>
                    <td>{e.courses.name}</td>
                    <td>{renderschedule(e.courses.schedules)}</td>
                    <td>{e.courses.theOpeningDay.slice(0,10)}</td>
                    <td>Đang dạy</td>
                </tr>
            )
        })
    }
    return (
        <div className="schedule">
            <div className="header-schedule">
                <h5>Thời khóa biểu</h5>
            </div>
            {(props._data.length!==0) && <div className="body-schedule">
                <table>
                    {(props.acc.studentId)
                        ?<tr>
                            <th>Tên lớp</th>
                            <th>Ngày học</th>
                            <th>Ngày bắt đầu</th>
                            <th>Ngày kết thúc</th>
                            <th>Trạng thái</th>
                        </tr>
                        :<tr>
                            <th>Tên lớp</th>
                            <th>Ngày dạy</th>
                            <th>Ngày khai giảng</th>
                            <th>Trạng thái</th>
                        </tr>
                    }       
                    {renderCourse()}
                </table>
            </div>}
        </div>
    )
}

export default Schedule;
