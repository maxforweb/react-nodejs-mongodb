export default { 
    
    email: ( errors, value ) => {
        console.log(value)
        if (!value) {
            errors.email = 'Required';
        } else if ( !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test( value ) ) {
            errors.email = 'Invalid email address';
        }

    },

    password: ( errors, value ) => {
        
        if ( !value ) {
            errors.password = 'Required'
        } 
            else if ( !/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{6,}/.test( value ) ) { 
            errors.password = 'Password should contain at least 1 digit, upper case and lower case letters and more than 6 symbols'
        }

    }
}

