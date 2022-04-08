//跨域代理前缀
// const API_PROXY_PREFIX='/api'
// const BASE_URL = process.env.NODE_ENV === 'production' ? process.env.VUE_APP_API_BASE_URL : API_PROXY_PREFIX
// const BASE_URL = process.env.VUE_APP_API_BASE_URL;
const axios = require("axios");
const BASE_URL = axios.defaults.baseURL = 'http://localhost:8011';
module.exports = {
    //login
    LOGIN: `${BASE_URL}/login`,
    //博客列表
    ARTICLE_INFO: `${BASE_URL}/article/info/list`,
    //博客详情
    ARTICLE_INFO_SHOW: `${BASE_URL}/article/info/show`,



    //根据id获取作者信息
    USER_INFO: `${BASE_URL}/sys/user/info/show`,
    //作者列表信息
    USER_LIST_INFO: `${BASE_URL}/sys/user/info/list`,
};
