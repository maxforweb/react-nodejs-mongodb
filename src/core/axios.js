import axios from "axios";

const baseURL = 'http://localhost:3000/api';

const app = axios.create({
    baseURL,
    withCredentials: true
})

app.interceptors.response.use(
    response => (response), 
    error => (Promise.reject(error.response.data.err))
)

export default app;