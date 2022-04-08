import Api from '@/services/api'
import {METHOD, request} from "@/utils/request";

/**
 * 登录服务
 * @param userName 账户名
 * @param password 账户密码
 */
export async function login(userName, password) {
    return request(Api.LOGIN, METHOD.POST, {
        userName: userName,
        password: password
    })
}

export default {
    login
}
