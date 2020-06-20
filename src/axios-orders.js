import axios from "axios";


const axiosInstance = axios.create({
    baseURL:"https://burger-builder-3de04.firebaseio.com/",
});


export default axiosInstance;