import React from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';

import { userActions } from '../../../redux/actions';

import { Menu, Row, Col, Button  } from "antd";
import { UserOutlined } from '@ant-design/icons';
import './header.scss';

import logo from 'assets/logo3.png';


const  Header = ({selectedKey, userInfo, isLoading, userAuthToken, logout}) => {
    function logoutUser() {
        console.log(logout())
    }
        return (
            <header className="d-flex">
                <div className="container">
                    <Row
                        align="middle"
                        justify="center"
                        gutter={16}>
                        
                        <Col className="gutter-row" span={4} >
                            <div className="title d-flex">
                                <p className='title-name'>Go-Clean</p>
                                <img src={logo} alt='logo' />
                            </div>
                        </Col>

                        <Col
                            span={8} >
                            <Menu 
                                mode="horizontal"
                                className='menu'
                                defaultSelectedKeys={selectedKey}>
                            
                                <Menu.Item key="1" > <Link to='/' className='link' > Домой </Link> </Menu.Item>
                                <Menu.Item key="2"> <Link to='/createad' className='link' > Создать объявление </Link> </Menu.Item>
                                <Menu.Item key="4"> <Link to="/" className='link' > Option 4 </Link> </Menu.Item>
                                
                            </Menu>
                        </Col>
                        <Col
                            span="6" >
                            <div className="user">
                                { userAuthToken ? (
                                    <div className="header_auth_container d-flex justify-content-between" >
                                        <UserOutlined className='user-avatar'/>
                                        <span 
                                        className="btn login_btn" 
                                        onClick={logoutUser}> 
                                            Выйти 
                                        </span>
                                    </div>  
                                ) : (
                                    <div className="header_auth_container d-flex justify-content-between">
                                        <Link to="/login" className="btn login_btn">Войти в аккаунт</Link>        
                                        <Link to="/register" className="btn register_btn">Зарегистрироваться</Link>        
                                    </div>
                                )}
                            </div>
                        </Col>
                    </Row>
                </div>
            </header>
        )
}

export default connect(
    ({user}) => ({
        userInfo: user.userInfo,
        isLoading: user.isLoading,
        userAuthToken: user.userAuthToken,
    }),
    userActions
)(Header);