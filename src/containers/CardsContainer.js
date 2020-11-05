import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import {CardsContainer as Container } from 'components';
import { adsActions } from '../redux/actions';

const CardsContainer = ({ getAds, items }) => {
    const [ selectValue, setValue ] = useState('');
    const [ filtred, setFilteredItems] = useState( Array.from(items) );

    const onSelectChange = (value) =>{
        setValue(value);  
    }


    useEffect( () => {
        if( !items.length ) {
            getAds();
        }
    }, [items] );

    return(
        <Container 
            items={items}
            onSelectChange={onSelectChange}
            selectValue={selectValue}
        />
    );
};

export default connect( 
    ({ ads }) => ads,
    adsActions
)(CardsContainer);