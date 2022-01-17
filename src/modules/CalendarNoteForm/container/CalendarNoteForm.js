import CalendarNoteForm from "../components/CalendarNoteForm";
import { withFormik } from "formik";
import validate from 'utils/validate';
import { connect } from "react-redux";
import { calendarNotesActions } from "../../../redux/actions";

const EditNote =  withFormik({
    enableReinitialize: true,
    mapPropsToValues: (props) => (
        {
            type: props.item ? props.item.type : 'success',
            content: props.item ? props.item.content : ''
        }
    ),

    validate: values => {
        let errors = {};

        validate({ values, errors });

        return errors;
    },

    handleSubmit: async( values, { props, setSubmitting } ) => {
        if ( !props.item ) {
            
            const newNote = {
                ...values,
                date: props.date,
            };

            await props.createNote(newNote);
            setSubmitting(false);

            props.updateNoteList(newNote);
            props.closeEdittitng()

        } else {

            const editNoteData = {
                id: props.item ? props.item.id : '',
                ...values
            }

            await props.editNote(editNoteData);
            setSubmitting(false);

            props.updateNoteList(editNoteData);
            props.closeEdittitng()

        }
        
    }, 

})(CalendarNoteForm);

export default connect(
    null, 
    calendarNotesActions
)(EditNote);