import {axios} from "core";


export default {
    getAll: (sort) =>  axios.get(`/posts?sort=${sort}`),
    create: (ad) => axios.post('/posts/create/', ad),
    getCurrent: (id) => axios.get(`/posts/${id}`),
    getByUser: (id) => axios.get(`/posts/${id}`),
}