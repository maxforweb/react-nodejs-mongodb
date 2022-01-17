const initialState = {
    notes: []
}

export default ( state = initialState, { type, payload } ) => {
    switch ( type ) {

        case "NOTES:SET_ITEMS":
            return {
                ...state,
                notes: payload,
            }

        default:
            return state;
    }
}