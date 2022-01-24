import { withFormik } from 'formik';
import RegisterForm from '../components/RegisterForm';
import validate from 'utils/validate';

import { userActions } from '../../../redux/actions';
import { connect } from 'react-redux';

const RegisterWithFormik =  withFormik({
  enableReinitialize: true,
  mapPropsToValues: () => ({
    name: '',
    email: '',
    password: '',
    repeatPassword: ''
  }),
  
  validate: values => {
    let errors = {};

    validate({ isAuth: false, values, errors })
    
    return errors;
  },

  handleSubmit: async (values, {props, setSubmitting }) => {
    const newUserData = values;
    
    await props.createUser(newUserData);

    setSubmitting(false);
  },

  displayName: 'RegisterForm ', 
})(RegisterForm);

export default connect(
  null,
  userActions
)(RegisterWithFormik)