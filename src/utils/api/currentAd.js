import {axios} from "core";


export default {
    getCurrentById: id =>  axios.get(`/posts/${id}` )
}