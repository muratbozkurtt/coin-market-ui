import axios from 'axios'
import notify from '../../utils/notify.js';

const qs = require('qs')

const success = (res) => {
    notify.showNotification("Success");
    return res.data;
};

const error = (err) => {
    if (err.response.status === 401) {
        notify.showNotification("Authorization Error");
    }
    else {
        notify.showNotification(err.response);
    }
    return Promise.reject(err)
}

let token = "";
if (localStorage.TokenParibu) {
    token = localStorage.TokenParibu;
}

const adminGateway = axios.create({
    baseURL: "http://localhost:5090",
    headers: { 'TokenParibu' : token },
    paramsSerializer: (params) => qs.stringify(params, { arrayFormat: 'comma' })
})



adminGateway.interceptors.response.use((res) => success(res), (err) => error(err))

export default adminGateway


