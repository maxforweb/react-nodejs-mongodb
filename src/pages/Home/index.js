import React from 'react';

import {Header} from 'modules'
import {CardsContainer} from 'containers';

import './Home.scss';   

const Home = () => {
    return (
        <> 
            <Header selectedKey={'1'} />
            <CardsContainer />
        </>
    )
}

export default Home;