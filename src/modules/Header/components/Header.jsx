import React from 'react';
import {Link} from 'react-router-dom';
import { Menu, Input } from "antd";
import {SearchOutlined} from '@ant-design/icons';

import './header.scss';

import logo from 'assets/logo3.png';


export default class Header extends React.Component {
    render(){

        return (
            <header>
                <img src={logo} alt='logo' />
                <Menu mode="horizontal"
                className='menu'
                defaultSelectedKeys={['1']}>
                    <Menu.Item key="1" >Домой </Menu.Item>
                    <Menu.Item key="2">Создать объявление </Menu.Item>
                    <Menu.Item key="3"> Аккаунт </Menu.Item>
                    <Menu.Item key="4">Option 4</Menu.Item>
                </Menu>
                <Input className="search-input" prefix={<SearchOutlined />} />
            </header>
        )
    }
}