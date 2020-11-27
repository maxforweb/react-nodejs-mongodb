const intialState = {
    item: {}
}

export  default ( state = intialState, { type, payload }) => {
    switch (type) {
        
        case "CURRENT_AD:SET_AD_INFO":
            return {
                ...state,
                item: payload
            }
            
        default:
            return state
    }
}