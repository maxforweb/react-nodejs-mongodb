export default ({ isAuth, values, errors }) => { 
    const rules = {
        
        email: ( errors, value ) => {
        
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
            // else if ( !/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{6,}/.test( value ) ) { 
            //     errors.password = isAuth ? 'Wrong password' : 'Password should contain at least 1 digit, upper case and lower case letters and more than 6 symbols'
            // }
    
        },

        repeatPassword: ( errors, value ) => {

            if ( !value ) {
                errors.repeatPassword = 'Required'
            }
            else if( value != password.value ) {
                errors.repeatPassword ='Wrong password'
            }
        
        },

        phone: ( errors, value ) => {

            if( !value ) {
                errors.phone = 'Required';
            }
            else if ( !/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/.test( value ) ) {
                errors.phone = " Wrong phone number ";
            }
        },
        
        adress: ( errors, value ) => {

            if ( !value ) {
                errors.adress = 'Required'; 
            }
            else if ( !/^(?=.*[a-z]).{3,}/ ) {
                errors.adress = 'Wrong adress format';
            }
        },

        name: ( errors, value ) => {

            if ( !value ) {
                errors.name = 'Required';
            }
            else if ( !/^(?=.*[a-z]).{3,}/ ) {
                errors.name = "Name should containn more than 1 symbol"
            }
        },

        content: ( errors, value ) => {
            if ( !value ) {
                errors.noteContent = 'Required';
            }
        }
        
    }
    
    Object.keys(values).forEach( 
        key => rules[ key ] && rules[ key ](errors, values[key]) 
      );
};
