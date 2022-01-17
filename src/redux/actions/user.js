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
            console.log(error);
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
                return data
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
                dispatch( actions.setIsLoading ( false ) );
            })
            .catch( err => {
                dispatch( actions.setIsLoading ( false ) );
                console.log( err );
            })
    },

    checkAuth: () => dispatch => {
        dispatch( actions.setIsLoading ( true ) );
        
        userApi
            .refreshToken()
            .then( (userInfo) => {
                localStorage.setItem('token', userInfo.data.tokens.accessToken); 
                dispatch( actions.setUserDto(userInfo.data) );
                dispatch( actions.setTokens(userInfo.data.tokens) );
            })
            .catch( (err) => {
                localStorage.removeItem('token');
                dispatch ( actions.setUserDto( '' ) );
                dispatch( actions.setTokens( '' ) );
                console.log(err)
            })
    }
}

export default actions;