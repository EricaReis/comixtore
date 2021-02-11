import axios from 'axios';

const api = axios.create({
    baseURL: "https://5ef9303cbc5f8f0016c66903.mockapi.io/"
})

export default api;