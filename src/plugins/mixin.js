import simbajs from "simba-awesome-js";
import cookie from 'js-cookie'
import axios from './utils/request'
import {encrypt} from './utils/ecrypt'
import config from './utils/config'
import {UserType} from '~cfg/enum'

export default {
    data() {
        return {
            sb: simbajs,
            cookie,
            ...config,
            UserType
        }
    },
    methods: {
        $setCookie(cookieObj, options) {
            Object.keys(cookieObj).forEach(k => {
                cookie.set(k, cookieObj[k], options)
            })
        },
        $removeCookie(keys) {
            keys.forEach(k => {
                cookie.remove(k)
            })
        },
        $encrypt(val) {
            return encrypt(val)
        },
        $getStaticPath(str) {
            return this.STATIC_URL + str
        },
        $get(url, params) {
            return axios.get(url, {params})
        },
        $post(url, params) {
            return axios.post(url, params)
        },
        $ms(msg, onClose, duration = 1) {
            this.$message.success(msg, duration, onClose);
        },
        $me(msg) {
            this.$message.error(msg);
        },
        $mc(content, onOk) {
            this.$confirm({
                title: "系统提示",
                content,
                okText: "确认",
                cancelText: "取消",
                onOk
            })
        }
    },
}
