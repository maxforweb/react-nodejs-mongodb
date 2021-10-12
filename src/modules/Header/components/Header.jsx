import React from 'react';
import { connect } from 'react-redux';

import {Link} from 'react-router-dom';
import { Menu } from "antd";
import { UserOutlined } from '@ant-design/icons';


import './header.scss';

import logo from 'assets/logo3.png';


const  Header = ({selectedKey, userInfo, isLoading, userAuthToken}) => {

        return (
            <header className="d-flex">
                <div className="container">
                    <div className="d-flex align-items-center justify-content-between">
                    
                        <div className='title d-flex'>
                            <p className='title-name'>Go-Clean</p>
                            <img src={logo} alt='logo' />
                        </div>
                        <Menu mode="horizontal"
                        className='menu'
                        defaultSelectedKeys={selectedKey}>
                            <Menu.Item key="1" > <Link to='/' className='link' > Домой </Link> </Menu.Item>
                            <Menu.Item key="2"> <Link to='/createad' className='link' > Создать объявление </Link> </Menu.Item>
                            <Menu.Item key="4"> <Link to="/" className='link' > Option 4 </Link> </Menu.Item>
                        </Menu>
                        <div className="user">
                            { userAuthToken ? (
                                <UserOutlined className='user-avatar'/>
                            ) : (
                                <div className="header_auth_container d-flex justify-content-between">
                                    <Link to="/login" className="btn btn-default login_btn">Войти в аккаунт</Link>        
                                    <Link to="/register" className="btn btn-default register_btn">Зарегистрироваться</Link>        
                                </div>
                            )}
                        </div>
                    </div>
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
)(Header);