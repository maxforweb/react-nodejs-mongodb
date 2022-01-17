import { axios } from 'core';

export default {
    loginUser: loginData => axios.post("/user/login", loginData),
    registerUser: registerData => axios.post("/user/create", registerData),
    refreshToken: () => axios.get('/refreshToken'),
    logout: () => axios.post('user/logout'),
}