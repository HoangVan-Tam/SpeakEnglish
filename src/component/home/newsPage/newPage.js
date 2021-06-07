import React, { useState,useEffect } from 'react';
import { Link,useLocation,useHistory} from "react-router-dom";
import { Card, CardImg,CardBody,CardFooter,CardTitle,CardText, Label } from 'reactstrap';
import { useTranslation, withTranslation, Trans } from 'react-i18next';
import Aos from "aos";
import { useDispatch } from 'react-redux';

import {setcourse} from '../../../redux/actions/course';
import webAPI from '../../../api/webAPI';
import v0 from '../../../assets/img/uu-dai-he.jpg';
import Loading from '../../loading';

function NewsPage() {
    const History = useHistory();
    const dispatch = useDispatch();
    const [_data,_setData] = useState([]);
    const takeDataNews = async() =>{
        try{      
            console.log(1111);
            const response = await webAPI.getAllNews();
            _setData(response);
        } catch (error){
              console.log("Failed to call API get info user profile",error);
        }
    }
    useEffect(()=>{
        takeDataNews();
    },[])
    const renderCard = () => {
        return _data.map((e,index) => {
            if(index!==0)
                return(
                    <Link exact to={`/tin-tuc/${e.id}`}>
                    <Card key={e.id}>  
                        <CardImg top width="100%" height="50%" src={"http://englishschool.azurewebsites.net/uploads/"+e.image} alt="Card image cap" />
                        <CardBody>
                            <div className="time-news">{e.postDate.slice(0,10)}</div>
                            <CardTitle tag="h5">{e.title}</CardTitle>
                            <CardText>{e.headContent}</CardText>
                        </CardBody>
                    </Card></Link>
                )
        })
    }
    return (
        <>
            <div className="NewsPage">
                <h3>Tin tức - Sự kiện</h3>
            {(_data.length===0)?<Loading/>:
                <div className="container-newpage">
                    <Link exact to={`/tin-tuc/${_data[0].id}`} className="main-card-newPage-elementA">
                    <Card className="main-card-newPage">  
                        <CardImg top width="100%" height="50%" src={"http://englishschool.azurewebsites.net/uploads/"+_data[0].image} alt="Card image cap" />
                        <CardBody>
                            <div className="time-news">{_data[0].postDate.slice(0,10)}</div>
                            <CardTitle tag="h5">{_data[0].title}</CardTitle>
                            <CardText>{_data[0].headContent}</CardText>
                        </CardBody>
                    </Card></Link>
                    <div className="newspage-list-card">
                        {renderCard()}
                    </div>
                </div>
            }
            </div>
        </>
    );
}

export default NewsPage;
