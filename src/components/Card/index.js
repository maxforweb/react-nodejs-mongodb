import React from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames';
import { Card } from 'antd';

import './card.scss';
import flatImg from 'assets/flat.jpg';

const Cards = ( props ) => {
    return (
        <Card 
        hoverable
        style={{borderRadius: 15, marginTop: 20}}
        {...props} 
        className={classNames('card', props.className, {'card--small': props.size === "small"})}>
            <h1>{props.cardtitle}</h1>
            <h3>{props.subtitle}</h3>
            <img src={flatImg} alt='flat Image' />
            <p>Price: <span> {props.price} </span></p>
        </Card>
    )
}
Card.propTypes = {
    className: PropTypes.string
}

export default Cards;