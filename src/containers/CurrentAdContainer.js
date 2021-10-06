import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';


import { CurrentAd } from 'components';
import { currentAdActions } from '../redux/actions';


const CurrentAdContainer = ({getCurrentAd, currentAdId, currentAdInfo}) => {

    useEffect( () => {
        if(!currentAdInfo._id) {
            getCurrentAd(currentAdId);
        }
    },{currentAdInfo})
    
    return(
        <div>{currentAdInfo.title}</div>
    )
} 

export default connect(  
    ({ ads, currentAd }) => ({
        currentAdId: ads.currentAd,
        ads: ads,
        currentAdInfo: currentAd.item
    }),
    currentAdActions
)(CurrentAdContainer) ;