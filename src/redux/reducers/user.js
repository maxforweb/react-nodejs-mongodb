const initialState = {
    userInfo: [],
    isLoading: false,
    userAuthToken: localStorage.getItem('token'),
    userRefreshToken: '',
    isAuthenticated: false,
}

export default ( state = initialState, { type, payload } ) => {

    if ( state.userAuthToken ) {
        state.isAuthenticated = true;
    }

    switch (type) {
        case "USER:SET_USER_DTO":
            if ( payload.user == null ){
                state.isAuthenticated = false;
            } else {
                state.isAuthenticated = true;
            }
            return {
                ...state, 
                userInfo: payload.user,
                isLoading: false,
            }

        case "USER:SET_IS_LOADING":
            return {
                ...state,
                isLoading: payload
            }

        case "USER:SET_USER_TOKENS":
            return {
                ...state,
                userAuthToken: payload.accessToken,
                userRefreshToken: payload.refreshToken,
            }

            default: return state;
    }
}