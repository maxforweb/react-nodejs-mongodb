export default {

    email: (errors, value) => {
        console.log(value)
        if (!value) {
            errors.email = 'Required';
        }
    },

    password: (value, errors) => {

        if (!value) {
            errors.password = 'Required';
        }

    }
}