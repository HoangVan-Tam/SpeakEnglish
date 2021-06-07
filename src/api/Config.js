  
import axios from 'axios';

const axiosApi = axios.create({
    baseURL: 'https://englishschool.azurewebsites.net',
    headers: {
        'content-type': 'application/json',
    },
});
axiosApi.interceptors.request.use(async (config) => {
    // Handle token here ...
    let token = localStorage.getItem('token');
    if (!token)
        token = sessionStorage.getItem('token');
    if(token)
        config.headers.Authorization = `Bearer ${token}`;
    return config;
})
axiosApi.interceptors.response.use(async(response) => {
    if (response && response.data) {
        return response.data;
    }
    return response;
}, (error) => {
    // Handle errors
    throw error;
});
export default axiosApi;