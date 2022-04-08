import axios from "axios";


export function queryData(parameter, requestUrl) {
    return axios({
        url: requestUrl,
        method: 'post',
        data: parameter
    })
}

export function getRequest(parameter, requestUrl) {
    return axios({
        url: requestUrl,
        method: "get",
        params: parameter,
    });
}
