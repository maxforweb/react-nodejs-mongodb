import {axios} from "core";


export default {
    getCurrentById: id =>  axios.get("/ads?_id=" + id)
}