import LoginForm from '../components/LoginForm';
import auth from 'utils/auth';
import { withFormik } from 'formik';

export default withFormik({
  
    validate: values => {
      let errors = {};
  
      Object.keys(values).forEach( 
        key => auth[ key ] && auth[ key ](errors, values[key]) 
      );
      
      return errors;
    },
  
    handleSubmit: (values, { setSubmitting }) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
      }, 1000);
    },
  
    displayName: 'LoginForm ', 
  })(LoginForm);
  
