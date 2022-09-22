
import { withFormik } from 'formik';
import { connect } from 'react-redux';

import ForgotPasswordEmailPartForm from '../components/ForgotPass';

import { userActions } from "actions";
import validate from 'utils/validate';

const ForgotPasswordEmailPart = withFormik ({
    
    enableReinitialize: true,

    mapPropsToValues: (props) =>({
        email: ''
    }),

    validate: values => {
        let errors = {};

        validate({ isAuth: false, values, errors })

        return errors;
    },

    handleSubmit: async (values, {props, setSubmitting, setStatus} ) => {

        const email = values;

        const action = await props.forgotPassword(email);

        console.log(action)

        setSubmitting(false);
    },
    
    displayName: 'ForgotPasswordEmail',

})(ForgotPasswordEmailPartForm)

export default connect(
    null,
    userActions,
)(ForgotPasswordEmailPart);