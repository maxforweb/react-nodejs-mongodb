import { withFormik } from 'formik';
import RegisterForm from '../components/RegisterForm';
import validate from 'utils/validate';

export default withFormik({
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

  handleSubmit: (values, {props, setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(props, null, 2));
      setSubmitting(false);
    }, 1000);
  },

  displayName: 'RegisterForm ', 
})(RegisterForm);

