import axios from 'axios';

const instance = axios.create({
    baseURL: "https://api.spacexdata.com/v4",
})

export default instance;