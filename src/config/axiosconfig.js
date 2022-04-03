import axios from "axios";

export const axiosConfig = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    timeout: 1000,
    headers: {
        "Content-Type": "application/json"
    }
})

axiosConfig.interceptors.response.use(
    function (response){
        return response;
    },

    function(error){
        return Promise.reject(error.response);
    }
)