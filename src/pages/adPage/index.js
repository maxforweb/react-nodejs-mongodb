import React from 'react';
import {connect} from 'react-redux';
import { withRouter } from "react-router";


import {Header} from 'modules'
import {CurrenatAdContainer} from 'containers';

import './adPage.scss';   

const AdPage = (props) => {
    console.log(props)
    return (
        <> 
            <Header selectedKey={'0'} />
            <CurrenatAdContainer />
        </>
    )
}

 export default //withRouter(
//     connect(

//     )
// ) 
AdPage;