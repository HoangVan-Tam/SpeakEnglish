
import React, { useState,useRef,useEffect } from 'react';
import { Collapse,Navbar,NavbarToggler,NavbarBrand,Nav,NavItem,NavLink,DropdownItem,UncontrolledDropdown,DropdownToggle,
    DropdownMenu,Button,Modal,ModalBody,ModalFooter,ModalHeader,FormGroup,Label,Col,Input
  } from 'reactstrap';

import { RiAccountBoxFill,RiContactsBookFill,RiSettings3Fill} from "react-icons/ri";
import {FiLogOut} from "react-icons/fi";
import {GiOpenBook} from "react-icons/gi";
import { FaCalendarCheck } from "react-icons/fa";

import { Link, NavLink as RRNavLink, useHistory} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { setShowFormTest } from '../../redux/actions/openForm';

function Header(props) {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const acc = useSelector(state=> state.Login.acc);
    const dispatch = useDispatch();
    //------------------ handle open form test -------------------------//
    const handleOpenFormTest = () =>{
        const action = setShowFormTest(true);
        dispatch(action);
    }
    //------------------- handle log out -------------------//
    const handleLogOut = () => {
        localStorage.removeItem('id');
        localStorage.removeItem('token');
        sessionStorage.removeItem('id');
        sessionStorage.removeItem('token');
        window.location.reload();
    }
    //------------------ set logged or not ---------------------//
    const renderLogin = () => {
        if(acc.studentId || acc.userId)
            return(
                <UncontrolledDropdown>
                    <DropdownToggle nav caret tag="span">
                        Chào, {acc.firstName}
                    </DropdownToggle>
                    {renderMenu()}
                </UncontrolledDropdown>
            )
        else 
            return(
                <UncontrolledDropdown>
                    <DropdownToggle nav caret tag="span">
                        Đăng nhập
                    </DropdownToggle>
                        <DropdownMenu right>
                            <DropdownItem onClick={() => props.handleLogin(true,true)}>
                                Học viên
                            </DropdownItem>
                            <DropdownItem onClick={() => props.handleLogin(true,false)}>
                                Giảng viên
                            </DropdownItem>
                        </DropdownMenu>
                </UncontrolledDropdown>
            )
    }
    //------------------ render menu sort by type ---------------//
    const renderMenu = () => {
        if(acc.studentId)
            return(
                <DropdownMenu right>
                    <Link to='/thong-tin'>
                        <DropdownItem >
                            <RiAccountBoxFill/>&emsp;<span>Thông tin</span>
                        </DropdownItem>
                    </Link>
                    <Link to='/so-lien-lac'>
                        <DropdownItem>
                            <RiContactsBookFill/>&emsp;<span>Sổ liên lạc</span>
                        </DropdownItem>
                    </Link>
                    <DropdownItem onClick={() => handleOpenFormTest()}>
                        <GiOpenBook/>&emsp;<span>Kiểm tra </span>
                    </DropdownItem>
                    <DropdownItem onClick={()=>props.setOpenChangePass(true)}>
                        <RiSettings3Fill/>&emsp;<span>Đổi mật khẩu</span>
                    </DropdownItem>
                    <DropdownItem className="log-out-header-head" onClick={()=>handleLogOut()}>
                        <FiLogOut/>&emsp;<span>Đăng xuất</span>
                    </DropdownItem>
                </DropdownMenu>
            )
        else if(acc.userId)
            return(
                <DropdownMenu right>
                    <Link to='/thong-tin'>
                        <DropdownItem>
                            <RiAccountBoxFill/>&emsp;<span>Thông tin</span>
                        </DropdownItem>
                    </Link>
                    <Link to='/diem-danh'>
                        <DropdownItem>
                            <FaCalendarCheck/>&emsp;<span>Điểm danh</span>
                        </DropdownItem>
                    </Link>
                    <DropdownItem onClick={()=>props.setOpenChangePass(true)}>
                        <RiSettings3Fill/>&emsp;<span>Đổi mật khẩu</span>
                    </DropdownItem>
                    <DropdownItem className="log-out-header-head" onClick={()=>handleLogOut()}>
                        <FiLogOut/>&emsp;<span>Đăng xuất</span>
                    </DropdownItem>
                </DropdownMenu>
        )
    }
    return (
        <div className="header">
            <div className="header-head">
                <div>+840 935 628 946 info@speakenglish.com</div>
                <div className="info-acc-header-head">
                    {renderLogin()}
                </div>
            </div>
            <Navbar color="light" light expand="md">
                <NavbarBrand href="/">TRUNG TÂM SPEAK ENGLISH</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="me-auto" navbar>
                    <NavItem>
                        <NavLink exact to="/pages/trang-chu/" tag={RRNavLink} activeClassName="active-nav-link">
                            Trang chủ
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink exact to="/pages/khoa-hoc" tag={RRNavLink} activeClassName="active-nav-link"> 
                            Khóa học
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink exact to="/pages/tin-tuc" tag={RRNavLink} activeClassName="active-nav-link">
                        Tin tức
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink exact to="/pages/gioi-thieu" tag={RRNavLink} activeClassName="active-nav-link">
                            Trung Tâm SPEAK ENGLISH
                        </NavLink>
                    </NavItem>
                        <a href="tel:+85935628946"><Button>Liên Hệ</Button></a>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    )
}

export default Header;
