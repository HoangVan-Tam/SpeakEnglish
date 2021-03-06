import React, { useState,useEffect, lazy } from 'react';
import { Link,Route,Switch,useLocation} from "react-router-dom";
import { Container, ListGroup, ListGroupItem,Button, Row, Col } from 'reactstrap';
import Aos from "aos";
import { useDispatch } from 'react-redux';
import { setShowFormTest } from "../../redux/actions/openForm";

const IntroducCenter = lazy(() => import('./IntroducCenter/introducCenter'));
const Main = lazy(() => import('./main/main'));
const Course = lazy(() => import('./course/course'));
const NewPage = lazy(() => import('./newsPage/newPage'));
const CourseDetail = lazy(() => import('./courseDetail/courseDetail'));
const Method = lazy(() => import('./courseDetail/method/method'));



function Home() {
    const location= useLocation();
    const dispatch = useDispatch();
    useEffect(()=>{
        Aos.init({duration: 1000});
        window.scrollTo(0,0);
    },[location]);
    //------------------ handle open form test -------------------------//
    const handleOpenFormTest = () =>{
        const action = setShowFormTest(true);
        dispatch(action);
    }
    //-------------- render page ------------------------//
    const renderPage = () => {
        return(
            <Switch>
                    <Route path="/pages/trang-chu" component={() => 
                                                                <Main/>
                    }/>
                    <Route path="/pages/khoa-hoc" component={() => 
                                                                <Course/>
                    }/>
                    <Route path="/pages/chi-tiet-khoa-hoc/:str" component={() => 
                                                                <>
                                                                    <CourseDetail/>
                                                                    <Method/>
                                                                </>
                    }/>
                    <Route path="/pages/tin-tuc" component={() => 
                                                                <NewPage/>
                    }/>
                    <Route path="/pages/gioi-thieu" component={() => 
                                                                <IntroducCenter/>
                    }/>
            </Switch>
        )
    }
    return (
        <div className="home">
            <div className="brandcam">
                <Container>
                    <h3>N??ng cao k??? n??ng c???a b???n<br/>v???i 1 c??ch h???c t???p<br/>ho??n to??n m???i</h3>
                    <Button onClick={() => handleOpenFormTest()}>B???t ?????u</Button>
                    <Button>Xem chi ti???t</Button>
                </Container>
            </div>
            <Container className="ads-quality">
                <Row>
                    <div><span className="material-icons">psychology</span><p>Ph????ng ph??p gi???ng d???y</p></div>
                    <div><span className="material-icons">local_library</span><p>N???i dung gi???ng d???y</p></div>
                    <div><span className="material-icons">school</span><p>?????i ng?? gi??o vi??n</p></div>
                    <div><span className="material-icons">flight_takeoff</span><p>Con ???????ng ??i du h???c</p></div>
                </Row>
            </Container>
            {renderPage()}
        </div>
    );
}

export default Home;
