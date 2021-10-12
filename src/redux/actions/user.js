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

    createUser: newUserData => dispatch => {
       dispatch(actions.setIsLoading(true));
       
       userApi
        .registerUser(newUserData)
        .then( ( { user } ) => {
            dispatch( setUserDto( user ) );
        })
        .catch( (err) => {
            dispatch( actions.setIsLoading( false ) );
            errorHelper.adMessage(error);
        }) 
    },

    loginUser: userData => dispacth => {
        dispatch( actions.setIsLoading( true ) );

        userApi
            .loginUser( userData )
            .then( ( { user } ) => {
                dispatch( actions.setUserDto( user ) );
            })
            .catch( (err) => {
                dispatch(actions.setIsLoading( false ) );
                console.log(err);
            } )
    }
}