import CreateAdForm from '../components/CreateAdForm';
import { withFormik } from 'formik';
import validate from 'utils/validate';
import { connect } from 'react-redux';

import {adsActions} from 'actions';

const createAd =  withFormik({
    enableReinitialize: true,
    mapPropsToValues: () => ({
        adress: '',
        area: 'first',
        price: '',
        title: '',
        description: '',
        pictures: [],
    }),

    validate: values => {
        let errors = {};

        validate({ values, errors })
        
        return errors;
    },

    handleSubmit: async (values, {props, setSubmitting }) => {
        const newAd = {
            owner: props.userInfo.id,
            ...values,
        }

        await props.createAd(newAd);

        setSubmitting(false);
    },

    displayName: 'CreateAdForm ', 

})(CreateAdForm);

export default connect(
    ({user}) => ({
        isAuth: user.isAuthenticated,
        userInfo: user.userInfo
    }),
    adsActions
)(createAd);