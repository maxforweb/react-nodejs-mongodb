const intialState = {
    items: [],
    currentAd: window.location.pathname.split('/ad')[1],
    isLoading: false
}

export  default ( state = intialState, { type, payload }) => {
    switch (type) {
        case "ADS:SET_ITEMS":
            return {
                ...state,
                items: payload,
                isLoading: false
            }
        
        case "ADS:SET_IS_LOADING":
            return {
                ...state,
                isLoading: payload
            }    
        case "ADS:SET_CURRENT_AD" :
            return{
                ...state,
                currentAd: payload
            }
            
        default:
            return state
    }
}