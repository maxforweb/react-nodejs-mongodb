import React from 'react';
import {Link} from 'react-router-dom';

import './header.scss';

import logo from 'assets/logo3.png';


export default class Header extends React.Component {
    render(){

        return (
            <header>
                <img src={logo} alt='logo' />
            </header>
        )
    }
}