import axios from 'axios';
import { toast } from 'react-toastify';

axios.defaults.headers.post['Content-Type'] = 'x-www-form-urlencoded';

axios.interceptors.request.use(async (request) => {
    // document.body.classList.add('loading-indicator');
    //console.log(request.url);
    let token = localStorage.getItem('token');
    let token2 = localStorage.getItem('token2');
    if (token && request.url.startsWith("https://zzls.hubgrade-dev.de")) {
        // request.headers['Authorization'] = "Bearer " + token;
    } else if (token2 && request.url.startsWith("https://")) {
        // request.headers['Authorization'] = "Bearer " + token2;
    }
    return request;
});

axios.interceptors.response.use(function (response) {
    // document.body.classList.remove('loading-indicator');
    return response;
}, function (error) {
    // document.body.classList.remove('loading-indicator');
    toast.error(error.response?.data?.error);
    throw error
});

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    get: axios.get,
    post: axios.post,
    put: axios.put,
    delete: axios.delete,
    patch: axios.patch,
    head: axios.head,
};
