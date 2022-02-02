import Vue from 'vue'
import App from './App.vue'
import router from './routers'
import axios from "axios";
import {setAntDesign} from "@/plugins/antDesign";

// 后台地址
axios.defaults.baseURL = 'http://localhost:8011/';
let AUTH_TOKEN;
axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';


Vue.config.productionTip = false

setAntDesign()
new Vue({
    render: h => h(App),
    router
}).$mount('#app')
