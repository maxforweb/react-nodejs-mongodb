import React from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames';
import { Card } from 'antd';

import './card.scss';

const Cards = ( props ) => {
    return (
        <Card 
        {...props} 
        className={classNames('card', props.className, {'card--small': props.size === "small"})}>
            
        </Card>
    )
}
Card.propTypes = {
    className: PropTypes.string
}

export default Cards;