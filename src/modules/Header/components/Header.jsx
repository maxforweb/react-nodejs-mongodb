import React from 'react';
import {Link} from 'react-router-dom';
import { Menu } from "antd";
import { UserOutlined } from '@ant-design/icons';


import './header.scss';

import logo from 'assets/logo3.png';


const  Header = (props) => {

        return (
            <header>
                <div className='title'>
                    <p className='title-name'>Go-Clean</p>
                    <img src={logo} alt='logo' />
                </div>
                <Menu mode="horizontal"
                className='menu'
                defaultSelectedKeys={props.selectedKey}>
                    <Menu.Item key="1" > <Link to='/' className='link' > Домой </Link> </Menu.Item>
                    <Menu.Item key="2"> <Link to='/createad' className='link' > Создать объявление </Link> </Menu.Item>
                    <Menu.Item key="4"> <Link to="/" className='link' > Option 4 </Link> </Menu.Item>
                </Menu>
                <div className="user">
                    <UserOutlined className='user-avatar'/>
                </div>
            </header>
        )
}

export default Header