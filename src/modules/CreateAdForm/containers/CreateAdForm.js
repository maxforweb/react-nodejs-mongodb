import CreateAdForm from '../components/CreateAdForm';
import { withFormik } from 'formik';
import validate from 'utils/validate';

export default withFormik({
    enableReinitialize: true,
    mapPropsToValues: () => ({
        phone: '',
        name: '',
        adress: '',
        email: ''
    }),

    validate: values => {
        let errors = {};

        validate({ values, errors })
        
        return errors;
    },

    handleSubmit: (values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 1000);
    },

    displayName: 'CreateAdForm ', 

})(CreateAdForm);