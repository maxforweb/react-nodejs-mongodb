import { axios } from 'core';

export default {
    loginUser: loginData => axios.post("/user/login", loginData),
    registerUser: registerData => axios.post("/user/create"),
    refreshToken: token => axios.post('/user/refresh'),
    logout: logout => axios.post('user/logout'),
}