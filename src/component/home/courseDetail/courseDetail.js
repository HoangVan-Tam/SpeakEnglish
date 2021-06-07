import React, { useState,useEffect } from 'react';
import { Link,useLocation} from "react-router-dom";
import { Button, Container, Form,FormGroup,Input, Row } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';

import {setcourse} from '../../../redux/actions/course';
import webAPI from '../../../api/webAPI';
function CourseDetail() {
    const location= useLocation();
    const dispatch = useDispatch();
    const course = useSelector(state=> state.Course.course);
    const [_data,_setData] = useState([]);
    const takeDataCourse = async() =>{
        try{      
            const response = await webAPI.getAllCourse();
            const action = setcourse(response[location.pathname.slice(25)-1]);
            dispatch(action);
        } catch (error){
              console.log("Failed to call API get info user profile",error);
        }
    }
    useEffect(()=>{
        if(!course.id)
            takeDataCourse();
    },[])
    return (
        <div className="CourseDetail">
            <div className="CourseDetail-1">
                {(course.id) && <div className="CourseDetail-content">
                    <h2>{course.title}</h2>
                    <p>{course.headContent}</p><br/>
                    <p>{course.bodyContent}.</p>
                    <div className="additional-CourseDetail">
                        <div><strong>Thời gian:</strong></div>
                        <div>&ensp;{course.numberOfMonths}</div>
                        <div><strong>Thời khóa biểu:</strong></div><
                            div>&ensp;{course.schedule}</div>
                        <div><strong>Khuyến mãi:</strong></div>
                        <div>&ensp;{(course.discount===0)?"Không":(course.discount+'%')}</div>
                        <div><strong>Ngày chiêu sinh:</strong></div>
                        <div>&ensp;{course.theOpeningDay.slice(0,10)}</div>
                    </div><br/>
                </div>}
                <div className="img-intro">
                    <img src={require('../../../assets/img/chtrinh-daotao.png').default} alt='...'></img>
                </div>
            </div>
        </div>
    );
}

export default CourseDetail;