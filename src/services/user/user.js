import Api from "@/services/api";
import {METHOD, request} from "@/utils/request";

export async function userInfo(param) {
    return request(Api.USER_INFO,METHOD.GET,param)
}
export async function userListInfo(param) {
    return request(Api.USER_LIST_INFO,METHOD.POST,param)
}
export default {
    userInfo,userListInfo
}
