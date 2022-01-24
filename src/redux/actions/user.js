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
            console.log(err);
        }) 
    },

    loginUser: (userData) => dispatch => {
        dispatch( actions.setIsLoading( true ) );

        // const user = await userApi.loginUser(userData);

        // console.log(user);
        return(
            userApi
            .loginUser( userData )
            .then( ( { data } ) => {
                // console.log(data)
                if ( data.status === 200 ) {
                    localStorage.setItem('token', data.tokens.accessToken); 
                    dispatch( actions.setUserDto( data ) );
                    dispatch( actions.setTokens( data.tokens ) );
                    return data 
                } else {
                    dispatch(actions.setIsLoading( false ) );
                    return data
                }
                
            })
            .catch( (error) => {
                dispatch(actions.setIsLoading( false ) );
                console.log(error)
                return error;
            } )
        );
    },

    logout: () => dispatch => {
        dispatch( actions.setIsLoading ( true ) );

        return(
            userApi
                .logout()
                .then( () => {
                    localStorage.removeItem('token');
                    dispatch( actions.setTokens( '' ) );
                    dispatch ( actions.setUserDto( {user: null} ) );
                    dispatch( actions.setIsLoading ( false ) );
                    return true;
                })
                .catch( err => {
                    dispatch( actions.setIsLoading ( false ) );
                    console.log( err );
                    return false;
                })
        )
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
    },

    editUserInfo: (user) => dispatch => {
        dispatch( actions.setIsLoading(true) );

        return(
            userApi
                .editUserInfo(user)
                .then( (data) => {
                    console.log(data);
                    return data
                } )
                .catch( (err) => {
                    dispatch( actions.setIsLoading(false) );
                    return err;
                })
        )
    },
}

export default actions;