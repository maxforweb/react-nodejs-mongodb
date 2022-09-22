// import { withFormik } from "formik";
import React, {useState} from 'react';
import { connect } from 'react-redux'
import { message } from 'antd';

import UserAvatarFormComponent from "../component";
import { userActions } from '../../../redux/actions';
import { validate } from 'utils/validate';

const UserAvatarForm = ({user, uploadUserAvatar}) => {
    const [fileList, setFile] = useState();

    const handleChange = (e) => {
        setFile([]);
        return false;
    }

    const handleSubmit = async ( file ) => {
        const upload = await uploadUserAvatar(file);

        if ( upload.status === 200 ) {
            message.success( upload.message );
        } else {
            message.error( upload.message )
        }
    }  

    return (
        <UserAvatarFormComponent 
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            fileList={fileList}
            user={user}
        />
        // <div></div>
    )

}

export default connect(
    ({ user }) => ({ user: user.userInfo }),
    userActions
)(UserAvatarForm);