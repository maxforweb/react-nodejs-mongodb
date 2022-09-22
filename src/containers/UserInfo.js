import React, { useState } from 'react'
import { connect } from 'react-redux'

import { UserInfo as UserInfoComponent } from 'components';
import { userActions } from '../redux/actions';

const UserInfo = ({ user, }) => {
    const [ isEditting, setIsEditting ] = useState(false);

    const changeEditMode = () => {
        setIsEditting( prev => !prev );
    }

    return (
        <div>
            <UserInfoComponent 
                isEditting={isEditting}
                user={user}
                setEditting={changeEditMode}
            />
        </div>
    )
}

export default connect(
    ( {user} ) => ({user: user}),
    userActions,
)(UserInfo);