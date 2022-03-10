import axios from 'axios';
import { toast } from 'react-toastify';
axios.defaults.headers.post['Content-Type'] = 'x-www-form-urlencoded';
axios.interceptors.request.use(async (request) => {
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
