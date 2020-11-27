import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';


import { CurrentAd } from 'components';
import { currentAdActions } from '../redux/actions';


const CurrentAdContainer = ({getCurrentAd, user, currentAdId}) => {


    useEffect( () => {
        if(currentAdId) {
            getCurrentAd(currentAdId);
        }
    },[currentAdId])

    return(
        <div>Hello</div>
    )
} 

export default connect(  
    ({ ads, currentAd }) => ({
        currentAdId: ads.currentAd,
        ads: ads,
        currentAdInfo: currentAd.items
    }),
    currentAdActions
)(CurrentAdContainer) ;