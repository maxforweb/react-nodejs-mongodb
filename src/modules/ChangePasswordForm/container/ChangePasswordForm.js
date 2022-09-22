import ChangePasswordForm  from "../component/ChangePasswordForm";
import { withFormik } from "formik";
import { connect } from "react-redux";
import { userActions } from 'actions';

import validate from "utils/validate";
import { message } from "antd";

const ChangePasswordFormWithFormik = withFormik({
    enableReinitialize: true,

    mapPropsToValues: () => ({
        oldPass: '',
        password: '',
        repeatPassword: ''
    }),

    validate: values => {
        let errors = {};

        validate({ values, errors })
        
        return errors;
    },

    handleSubmit: async ( values, {props, setSubmitting, setStatus}) => {

        const data = {
            id: props.user.id,
            ...values
        }

        const updatedUser = await props.changePassword( data );
        
        setSubmitting( false );

        if ( updatedUser.status ) {
            if ( updatedUser.status === 200 ) {
                message.success( updatedUser.message )
            } else {
                message.error( updatedUser.message );
            }
        }

    }

})(ChangePasswordForm);

export default connect(
    ({user}) => ({user: user.userInfo}),
    userActions
)(ChangePasswordFormWithFormik);