import { userApi  } from 'utils/api';
import { errorHelper } from 'utils/helpers';


const actions = {

    setUserDto: user => ({
        type: "USER:SET_USER_DTO",
        payload: user
    }),

    setIsLoading: bool => ({
        type: "USER:SET_IS_LOADING",
        payload: bool
    }),

    setTokens: tokens => ({
        type: "USER:SET_USER_TOKENS",
        payload: tokens
    }),

    createUser: newUserData => dispatch => {
       dispatch(actions.setIsLoading(true));
       
       userApi
        .registerUser(newUserData)
        .then( ( { user } ) => {
            dispatch( setUserDto( user ) );
        })
        .catch( (err) => {
            dispatch( actions.setIsLoading( false ) );
            errorHelper.adMessage(err);
        }) 
    },

    loginUser: userData => dispatch => {
        dispatch( actions.setIsLoading( true ) );

        userApi
            .loginUser( userData )
            .then( ( { data } ) => {
                localStorage.setItem('token', data.tokens.accessToken);
                dispatch( actions.setUserDto( data ) );
                dispatch( actions.setTokens( data.tokens ) );
            })
            .catch( (err) => {
                dispatch(actions.setIsLoading( false ) );
                errorHelper.adMessage(err);
            } )
    },

    logout: () => dispatch => {
        dispatch( actions.setIsLoading ( true ) );

        userApi
            .logout()
            .then( () => {
                localStorage.removeItem('token');
                dispatch ( actions.setUserDto( '' ) );
                dispatch( actions.setTokens( '' ) );
            })
            .catch( err => {
                console.log( err );
            })
    }
}

export default actions;