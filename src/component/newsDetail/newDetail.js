import React, { useState,useEffect } from 'react';
import { Link,useLocation,useHistory} from "react-router-dom";
import { Card, CardImg,CardBody,CardFooter,CardTitle,CardText, Label } from 'reactstrap';
import { useTranslation, withTranslation, Trans } from 'react-i18next';
import Aos from "aos";
import { useDispatch } from 'react-redux';

import {setcourse} from '../../redux/actions/course';
import webAPI from '../../api/webAPI';
import v0 from '../../assets/img/uu-dai-he.jpg';
import Loading from '../loading';

function NewsDetail() {
    const History = useHistory();
    const location = useLocation();
    const dispatch = useDispatch();
    const [_data,_setData] = useState([]);
    const [_detail,_setdetail] = useState({});
    const takeDataNews = async() =>{
        try{      
            const response = await Promise.all([webAPI.getAllNews(),webAPI.getDetailNews(location.pathname.slice(9))]);
            if(response[0][0].id && response[1].id)
            _setData(response[0]);
            _setdetail(response[1]);
        } catch (error){
              console.log("Failed to call API get info user profile",error);
        }
    }
    useEffect(()=>{
        _setData([]);
        _setdetail({});
        takeDataNews();
    },[location.pathname.slice(9)])
    const renderCard = () => {
        return _data.map((e,index) => {
            if(e.id!==location.pathname.slice(9) && index<=2)
                return(
                    <Link exact to={`/tin-tuc/${e.id}`} className="card-elementA">
                    <Card key={e.id}>  
                        <CardImg top width="100%" src={"http://englishschool.azurewebsites.net/uploads/"+e.image} alt="Card image cap" />
                        <CardBody>
                            <div className="time-news">{e.postDate.slice(0,10)}</div>
                            <CardTitle tag="h5">{e.title}</CardTitle>
                            <CardText>{e.detail}</CardText>
                        </CardBody>
                    </Card></Link>
                )
        })
    }
    return (
        <>
            <div className="NewsDetail">
            {(_data.length===0 || !_detail.id)?<Loading/>:
                <div className="container-newsdetail">
                    <Card className="main-card-newsdetail">  
                        <CardBody>
                            <CardTitle tag="h3">{_detail.title}</CardTitle>
                            <div className="time-news">{_detail.postDate.slice(0,10)}</div>
                            <div className="hr"></div>
                            <CardText>{_detail.headContent}</CardText>
                            <CardText>{_detail.bodyContent}</CardText>
                            <CardImg top width="100%" height="40%" src={"http://englishschool.azurewebsites.net/uploads/"+_detail.image} alt="Card image cap" />
                        </CardBody>
                    </Card>
                    <div className="newsdetail-list-card">
                        <div className="header-newsdetail-list-card">BÀI VIẾT KHÁC</div>
                        <div className="body-newsdetail-list-card">
                            {renderCard()}
                        </div>
                    </div>
                </div>
            }
            </div>
        </>
    );
}

export default NewsDetail;
