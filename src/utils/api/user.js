import { axios } from 'core';

export default {
    loginUser: loginData => axios.post("/user/login", loginData),
    registerUser: registerData => axios.post("/user/create", registerData),
    refreshToken: () => axios.get('/refreshToken'),
    logout: () => axios.post('user/logout'),
    editUserInfo: ( user ) => axios.post('user/update', user), 
    changePass: ( data ) => axios.post('/user/change-pass', data),
    uploadAvatar: ( data ) => axios.post('/user/avatar', data),
    forgotPassword: ( data ) => axios.post('/user/resetPassword', data),
}