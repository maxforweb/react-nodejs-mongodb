import { connect } from "react-redux";
import { withFormik } from "formik";

import EditUserForm  from "../component/EditUserForm";
import { userActions } from "actions";
import validate from 'utils/validate';


const EditUserFormFormik = withFormik({
    
    enableReinitialize: true,

    mapPropsToValues: ( props ) => ({
        email: props.user.email,
        name: props.user.name,
        phone: props.user.phone ? props.user.phone :  '',
        avatar: props.user.avatar ? props.user.avatar : '',
        lastName: props.user.lastName ? props.user.lastName  : '',
    }),

    validate: values => {
        let errors = {};

        validate({ isAuth: false, values, errors })
        
        return errors;
    },

    handleSubmit: async (values, {props, setSubmitting, setStatus}) => {
        const updatedData = {
            id: props.user.id,
            ...values,
        }

        const updatedUser = await props.editUserInfo(updatedData);

        if ( updatedUser.data.status === 200 ) {
            setStatus({
                type: updatedUser.data.status,
                message: updatedUser.data.message
            })
        } else if ( updatedUser.data.status === 400 ) {
            setStatus({
                type: updatedUser.data.status,
                message: updatedUser.data.message
            })
        }

        setSubmitting(false);
    },

    displayName: 'EditUserForm',

})(EditUserForm)

export default connect(
    ({user}) => ({user: user.userInfo}),
    userActions
)(EditUserFormFormik)