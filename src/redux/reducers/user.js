const initialState = {
    userInfo: [],
    isLoading: false,
    userAuthToken: '',
    userRefreshToken: '',
}

export default ( state = initialState, { type, payload } ) => {
    switch (type) {
        case "USER:SET_USER_DTO":
            return {
                ...state, 
                user: payload,
                isLoading: false
            }

        case "USER:SET_IS_LOADING":
            return {
                ...state,
                isLoading: payload
            }
        
            default: return state;
    }
}