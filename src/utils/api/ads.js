import {axios} from "core";


export default {
    getAll: () =>  axios.get("/posts"),
    create: (ad) => axios.post('/posts/create/', ad),
    getCurrent: (id) => axios.get(`/posts/${id}`),
}