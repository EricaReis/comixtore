import axios from 'axios';

const api = axios.create({
    baseURL: "https://gateway.marvel.com/v1/public/"
})

// api.interceptors.request.use(config => {
//     config.url.query.ts = 1;
//     config.url.query.apikey = 'aef082249bc234fb888c4e9cccfc3b66&hash=fe1f6685d77d08d039f7158e284fbd91';
// });

export default api;