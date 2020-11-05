const intialState = {
    items: []
}

export  default ( state = intialState, { type, payload }) => {
    switch (type) {
        case "ADS:SET_ITEMS":
            
            return {
                items: payload
            }
            
        default:
            console.log(type)
            return state
    }
}