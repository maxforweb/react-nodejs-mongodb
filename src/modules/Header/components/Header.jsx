import React from 'react';
import { connect } from 'react-redux';
import {Link, useHistory} from 'react-router-dom';

import { userActions } from '../../../redux/actions';

import { Menu, Row, Col, Avatar  } from "antd";
import { UserOutlined } from '@ant-design/icons';
import './header.scss';

import logo from 'assets/logo3.png';


const  Header = ({selectedKey, userInfo, isLoading, userAuthToken, logout}) => {

    let history = useHistory();

    async function logoutUser() {
        const logoutFunc = await logout();

        if( logoutFunc ) {

            history.push('/posts');
        }
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
                            
                                <Menu.Item key="1" > <Link to='/posts' className='link' > Домой </Link> </Menu.Item>
                                <Menu.Item key="2"> <Link to='/createad' className='link' > Создать объявление </Link> </Menu.Item>
                                <Menu.Item key="4"> <Link to="/calendar" className='link' > Calendar </Link> </Menu.Item>
                                <Menu.Item key="5"> <Link to="/" className='link' > Option 4 </Link> </Menu.Item>
                                
                            </Menu>
                        </Col>
                            <Col
                                span={ userAuthToken ? '3' : '6' } 
                            >
                        
                            <div className="user">
                                { userAuthToken ? (
                                    <div className="header_auth_container d-flex justify-content-between" >
                                        <Link to='/user'>
                                            {
                                                userInfo.avatar ? (<Avatar size={40} src={`http://localhost:3000/avatars/${userInfo.avatar}`} />) : (<UserOutlined className='user-avatar'/>)
                                            }
                                            
                                        </Link>
                                        <button 
                                            className="btn login_btn" 
                                            onClick={logoutUser}
                                        > 
                                            Выйти 
                                        </button>
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