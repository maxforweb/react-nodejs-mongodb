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

  handleSubmit: async (values, { props, setSubmitting, setStatus }) => {
    
    const data = await props.loginUser(values);
    
    if ( data.status === 403 || data.status === 404 ) {

      setStatus({type: data.status, message: data.message})
    
    }
    
    setSubmitting(false);
  },
  
    displayName: 'LoginForm ', 
})(LoginForm);


export default connect(
  ({user}) => ({user: user,}),
  userActions
)(LoginWithFormik)