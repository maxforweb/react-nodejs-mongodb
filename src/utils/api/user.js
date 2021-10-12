import { axios } from 'core';

export default {
    loginUser: loginData => axios.post("/user/login"),
    registerUser: registerData => axios.post("/user/create"),
    refreshToken: token => axios.post('/user/refresh'),
}