import Api from "@/services/api";
import {METHOD, request} from "@/utils/request";

export async function article(param) {
    return request(Api.ARTICLE_INFO, METHOD.POST, param)
}

export async function articleInfo(params) {
    return request(Api.ARTICLE_INFO_SHOW, METHOD.GET, params)
}

export default {
    article, articleInfo
}
