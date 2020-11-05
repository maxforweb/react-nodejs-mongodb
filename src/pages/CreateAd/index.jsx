import React from 'react';
import { CreateAdForm, Header } from 'modules';
import { Route } from 'react-router-dom';

import './createAd.scss'

const CreateAd = () => {
    return(
        <>
            <Header selectedKey={'2'} />
            <Route exact path='/createad' component={CreateAdForm} /> 
        </>
    )
}

export default CreateAd;