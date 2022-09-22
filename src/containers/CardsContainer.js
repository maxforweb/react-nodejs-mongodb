import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import {CardsContainer as BaseContainer } from 'components';
import { adsActions } from '../redux/actions';

const CardsContainer = ( { id, getAds, setCurrentAd, getByUser, removePosts, items, isLoading, user } ) => {
    
    const [ sortValue, setSortValue ] = useState('NEW');

    const onSelectChange = (value) =>{
        setSortValue(value);  
    }


    useEffect( () => {
        if( !id ) {
            getAds(sortValue);
        } else if ( id ) {
            getByUser(id);
        }

        return function cleanup() {
            removePosts();
        }
    }, [sortValue] );

    return(
        <BaseContainer 
            items={items}
            onSelectChange={onSelectChange}
            sortValue={sortValue}
            onSelectAd={setCurrentAd}
            isLoading={isLoading}
        />
    );
};

export default connect( 
    ({ ads, user }) => ({
        items: ads.items,
        isLoading: ads.isLoading,
        user: user.userInfo
    }),
    adsActions
)(CardsContainer);