import { calendarNotesApi } from 'utils/api';

const actions = {
    setNotes: items => ({
        type: "NOTES:SET_ITEMS",
        payload: items
    }),

    getAllNotes: () => dispatch => {
        calendarNotesApi
            .getAll()
            .then( ({ data }) => {
                return dispatch( actions.setNotes(data) );
            })
            .catch( err => { 
                console.log(err);
            })
    },

    deleteNote: (id) => dispatch => {
        
        calendarNotesApi
            .deleteNote( id )
            .then( ({ data }) => {
                if ( data.status === 200 ) {
                    dispatch( actions.getAllNotes() );
                } 
            } )
            .catch( err => {
                console.log(err);
            })
    },

    editNote: (note) => dispatch => {
        calendarNotesApi
            .editNote ( note )
            .then( ({ data }) => {
                if ( data.status === 200 ) {
                    return dispatch( actions.getAllNotes() );
                }
            })
            .catch( err => {
                console.log(err);
            })
    },
    
    createNote: (note) => dispatch => {
        calendarNotesApi
            .createNote( note )
            .then( ({ data }) => {
                if ( data.status === 200 ) {
                    return dispatch( actions.getAllNotes() );
                    
                }
            })
            .catch( err => {
                console.log(err);
            })
    },

}

export default actions;