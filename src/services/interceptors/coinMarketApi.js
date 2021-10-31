import axios from 'axios'
import authorization from '../../utils/authorization.js'
import notify from '../../utils/notify.js';

const qs = require('qs')

const success = (res) => {
    notify.showNotification(res.data.message);
    return res.data;
};

const error = (err) => {
    if (err.response.status === 401) {
        authorization.logout()
        notify.showNotification("Authorization Error");
    }
    else {
        notify.showNotification(err.response);
    }
    return Promise.reject(err)
}

const common = {};
if (localStorage.authUser) {
  common.Authorization = localStorage.authUser;
}

const adminGateway = axios.create({
    baseURL: process.env.VUE_COIN_MARKET_API,
    headers: { common },
    paramsSerializer: (params) => qs.stringify(params, { arrayFormat: 'comma' })
})

adminGateway.interceptors.response.use((res) => success(res), (err) => error(err))

export default adminGateway


