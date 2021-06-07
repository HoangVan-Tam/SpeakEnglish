import React, { useState,useEffect } from 'react';
import { Link,useHistory,useLocation} from "react-router-dom";
import { Card, CardImg,CardBody,CardFooter,CardTitle,CardText, Container, Label,Button} from 'reactstrap';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import SwiperCore, {
    Autoplay
} from 'swiper/core';

import v0 from '../../../../assets/img/ctdaotao-1.jpg';
import webAPI from '../../../../api/webAPI';
import {setcourse} from '../../../../redux/actions/course';
import { useDispatch } from 'react-redux';
import Loading from '../../../loading';

function News() {
    SwiperCore.use([Autoplay]);
    const History = useHistory();
    const dispatch = useDispatch();
    const [_data,_setData] = useState([]);
    const takeDataNews = async() =>{
        try{      
            const response = await webAPI.getAllNews();
            _setData(response.concat(response));
        } catch (error){
              console.log("Failed to call API get info user profile",error);
        }
    }
    useEffect(()=>{
        takeDataNews();
    },[])
    const renderCard = () => {
        return _data.map((e,index) => {
            if(index<=3)
                return(
                    <SwiperSlide key={e.id}>
                    <Link exact to={`/tin-tuc/${e.id}`}>
                    <Card>  
                        <CardImg top width="100%" height="50%" src={"http://englishschool.azurewebsites.net/uploads/"+e.image} alt="Card image cap" />
                        <CardBody>
                            <div className="time-news">{e.postDate.slice(0,10)}</div>
                            <CardTitle tag="h5">{e.title}</CardTitle>
                            <CardText>{e.headContent}</CardText>
                        </CardBody>
                    </Card></Link>
                    </SwiperSlide>
                )
        })
    }
    return (
        <div className="news" data-aos="fade-up">
            {(_data.length===0)?<Loading/>:
                <>
                    <h3>Tin tức - Sự kiện</h3>
                    <div className="news-list-card">
                        <Swiper 
                            slidesPerView={3} 
                            spaceBetween={30} 
                            className="mySwiper" 
                            autoplay={{
                                "delay": 2000,
                                "disableOnInteraction": false
                            }}
                        >
                            {renderCard()}
                        </Swiper>
                    </div>
                    <Link exact to="/pages/tin-tuc"><Button color="info">Xem tất cả</Button></Link>
                </>
            }
        </div>
    );
}

export default News;
