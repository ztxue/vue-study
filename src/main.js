import Vue from 'vue'
import App from './App.vue'
import router from './routers'
import axios from "axios";
import {setAntDesign} from "@/plugins/antDesign";
import VueVirtualScroller from 'vue-virtual-scroller'
import infiniteScroll from 'vue-infinite-scroll'

Vue.use(infiniteScroll)
Vue.use(VueVirtualScroller)

axios.interceptors.request.use(
    config => {
        // 判断是否存在token，如果存在的话，则每个http header都加上token
        if (localStorage.token) {
            config.headers.Authorization = localStorage.token
        }
        return config
    })
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';


Vue.config.productionTip = false

setAntDesign();
new Vue({
    render: h => h(App),
    router
}).$mount('#app')
