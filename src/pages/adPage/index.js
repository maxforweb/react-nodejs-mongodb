import React from 'react';
import {connect} from 'react-redux';
import { withRouter } from "react-router";
import { useParams } from 'react-router-dom';

import {Header} from 'modules'
import {CurrenatAdContainer} from 'containers';

import './adPage.scss';   

const AdPage = () => {

    let params = useParams();

    return (
        <> 
            <Header selectedKey={'0'} />
            <CurrenatAdContainer id={params.id}/>
        </>
    )
}

 export default //withRouter(
//     connect(

//     )
// ) 
AdPage;