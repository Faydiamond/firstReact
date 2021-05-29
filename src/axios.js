import axios from 'axios'

const instance = axios.create({
    baseURL = "http://localhost:9000", //url api
});

export default instance;