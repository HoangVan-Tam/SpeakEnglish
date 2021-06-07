import React, { useState,useEffect } from 'react';
import { Link,useHistory,useLocation} from "react-router-dom";
import { Card, CardImg,CardBody,CardFooter,CardTitle,CardText, Container, Label} from 'reactstrap';

import v0 from '../../../../assets/img/ctdaotao-1.jpg';
import webAPI from '../../../../api/webAPI';
import {setcourse} from '../../../../redux/actions/course';
import { useDispatch } from 'react-redux';
import Loading from '../../../loading';

function Education() {
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
            if(index<=3)
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
        <div className="education" data-aos="fade-up">
            {(_data.length===0)?<Loading/>:
                <div className="education-1">
                    <h3>Chương trình đào tạo</h3>
                    <div className="education-list-card">
                        {renderCard()}
                    </div>
                </div>
            }
        </div>
    );
}

export default Education;
