import LoginForm from '../components/LoginForm';
import validate from 'utils/validate';
import { withFormik } from 'formik';
import { connect } from 'react-redux';

import { userActions } from '../../../redux/actions';

const LoginWithFormik = withFormik({
  enableReinitialize: true,
  mapPropsToValues: () => ({
    email: '',
    password: ''
  }),

  validate: values => {
    let errors = {};

    validate({ isAuth: true, values, errors})
    
    return errors;
  },

  handleSubmit:  (values, { props, setSubmitting }) => {
    // setTimeout(() => {
    //   alert(JSON.stringify(values, null, 2));
    //   setSubmitting(false);
    // }, 1000);
    
    if ( props.loginUser(values) ) {
      console.log(99);
    } else {
      console.log(88)
    }
    setSubmitting(false);
  },
  
    displayName: 'LoginForm ', 
})(LoginForm);


export default connect(
  null,
  userActions
)(LoginWithFormik)