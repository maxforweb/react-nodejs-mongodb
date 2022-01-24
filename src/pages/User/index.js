import React from "react";
import { Header } from 'modules';
import { UserInfo } from 'containers'

import './User.scss';

const UserPage = () => {
    return(
        <>
            <Header selectedKey={""} />
            <UserInfo />
        </>
    );
}


export default UserPage;