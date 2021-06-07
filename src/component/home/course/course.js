import React, { useState,useEffect } from 'react';
import { Link,useLocation,useHistory} from "react-router-dom";
import { Card, CardImg,CardBody,CardFooter,CardTitle,CardText, Label } from 'reactstrap';
import { useTranslation, withTranslation, Trans } from 'react-i18next';
import Aos from "aos";
import { useDispatch } from 'react-redux';

import Employee from './employy/employee';
import {setcourse} from '../../../redux/actions/course';
import webAPI from '../../../api/webAPI';
import v0 from '../../../assets/img/ctdaotao-0.jpg';
import Loading from '../../loading';

function Course() {
    const History = useHistory();
    const dispatch = useDispatch();
    const [_data,_setData] = useState([]);
    const handleSelectCourse = (e) => {
        const action = setcourse(e);
        dispatch(action);
        History.push(`/pages/chi-tiet-khoa-hoc/${e.id}`);
    }
    const takeDataCourse = async() =>{
        try{      
            const response = await webAPI.getAllCourse();
            _setData(response);
        } catch (error){
              console.log("Failed to call API get info user profile",error);
        }
    }
    useEffect(()=>{
        takeDataCourse();
    },[])
    const renderCard = () => {
        return _data.map((e,index) => {
            return(
                <Card key={e.id} onClick={() => handleSelectCourse(e)}>
                    {(e.discount!==0) && <Label className="card-discount">{e.discount}%</Label>}
                    <CardImg top width="100%" src={v0} alt="Card image cap" />
                    <CardBody>
                        <CardTitle tag="h5">{e.title}</CardTitle>
                        <CardText>{e.headContent}</CardText>
                    </CardBody>
                    <CardFooter>
                        <div><span className="material-icons">schedule</span>&ensp;{e.numberOfMonths}&ensp;Tháng</div>
                        <div>XEM THÊM</div>
                    </CardFooter>
                </Card>
            )
        })
    }
    return (
        <>
            <div className="course">
            {(_data.length===0)?<Loading/>:
                <div className="course-1">
                    <h3>Chương trình đào tạo</h3>
                    <div className="course-list-card">
                        {renderCard()}
                    </div>
                </div>
            }
            </div>
            <Employee/>
        </>
    );
}

export default Course;
