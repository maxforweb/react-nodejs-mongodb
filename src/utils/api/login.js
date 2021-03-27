import {axios} from "core";

export default {
    getUser: email => axios.get("/user?email=" + email)
}