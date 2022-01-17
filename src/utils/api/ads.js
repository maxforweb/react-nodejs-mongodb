import {axios} from "core";


export default {
    getAll: () =>  axios.get("/ads"),
    create: (ad) => axios.post('/ads/create/', ad),
}