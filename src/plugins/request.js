import axios from 'axios'
import NProgress from 'nprogress'
import cookie from 'js-cookie'

import qs from 'qs'
import config from './config'
var instance = axios.create({
    baseURL: config.BASE_URL
});

function log(...args) {
    if (process.env.NODE_ENV === 'development')
        console.log(...args)
}

function fmtParams(method, params, data) {
    if (method === 'get') {
        if (!params) return ''
        return decodeURIComponent(qs.stringify(params))
    } else {
        if (!data) return ''
        return decodeURIComponent(qs.stringify(data))
    }
}

// 添加请求拦截器
instance.interceptors.request.use(function (config) {
    config.headers.common['token'] = cookie.get('token');
    NProgress.start()
    let { method, url, params, data } = config
    // 在发送请求之前做些什么
    let str = fmtParams(method, params, data)
    log('='.repeat(20));
    log(`${method}了${url},参数为${str}`);
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
    NProgress.done()
    log('='.repeat(20), response.data);
    return response;
}, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});

export const get = async (url, params) => {
    let res = await instance.get(url, { params })
    return res.data
}
export const post = async (url, params) => {
    let res = await instance.post(url, params)
    return res.data
}

export default instance