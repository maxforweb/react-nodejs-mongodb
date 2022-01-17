import { axios } from 'core';

export default {
    getAll: () => axios.get('/calendar-note/getAll'),
    deleteNote: (id) => axios.delete('/calendar-note/deleteNote/' + id),
    editNote: (note) => axios.post('/calendar-note/editNote/', note),
    createNote: (note) => axios.post('/calendar-note/createNote/', note),
}