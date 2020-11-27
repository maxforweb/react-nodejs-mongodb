import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import {CardsContainer as BaseContainer } from 'components';
import { adsActions } from '../redux/actions';

const CardsContainer = ({ getAds, setCurrentAd, items, isLoading }) => {
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
        <BaseContainer 
            items={items}
            onSelectChange={onSelectChange}
            selectValue={selectValue}
            onSelectAd={setCurrentAd}
            isLoading={isLoading}
        />
    );
};

export default connect( 
    ({ ads }) => ads,
    adsActions
)(CardsContainer);