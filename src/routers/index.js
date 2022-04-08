import Vue from "vue";
import VueRouter from "vue-router";
import {message} from "ant-design-vue";

Vue.use(VueRouter)

const router = new VueRouter({
    routes: [
        {
            path: "/", component: () => import('../views/front-end/home'), meta: {
                title: "博客首页"
            }
        },
        {
            path: "/articleInfo", component: () => import('../views/front-end/article/articleInfo'), meta: {
                title: "内容"
            }
        },
        {
            path: "/login", component: () => import('../views/back-end/user/signIn'), meta: {
                title: "登录"
            }
        },
        {
            path: "/layout", component: () => import('/src/views/back-end/layout/index'), name: 'layout'
            , children: [
                {
                    path: "/login", component: () => import('../views/back-end/user/signIn'), meta: {
                        title: "登录"
                    }
                },
                {
                    path: "/home", component: () => import('/src/views/Home'), name: 'home', meta: {
                        title: "首页"
                    }
                },
                {
                    path: "/dept", component: () => import('/src/views/back-end/dept/dept'), meta: {
                        title: "部门管理"
                    }
                },
                {
                    path: "/dept-list", component: () => import('/src/views/back-end/dept/list'), meta: {
                        title: "列表",
                        module: "部门管理"
                    }
                },
                {
                    path: "/dept-tree", component: () => import('/src/views/back-end/dept/tree'), meta: {
                        title: "部门树",
                        module: "部门管理"
                    }
                },
                {
                    path: "/area", component: () => import('/src/views/back-end/area/SysArea'), meta: {
                        title: "区划管理",
                    }
                },
                {
                    path: "/area-list", component: () => import('/src/views/back-end/area/list'), meta: {
                        title: "区划列表",
                        module: "区划管理"

                    }
                },
                {
                    path: "/area-tree", component: () => import('/src/views/back-end/area/tree'), meta: {
                        title: "区划树",
                        module: "区划管理"

                    }
                },
                {
                    path: "/user", component: () => import('/src/views/back-end/user/user'), meta: {
                        title: "用户管理"
                    }
                },
                // {path: "/*", component: () => import('/src/views/404')},

            ]
        },
        {
            path: "*", component: () => import('/src/views/404'), meta: {
                title: "出错了"
            }
        },


    ]
})

// 设置token过期时间
// const EXPIRESTIME = 15 * 60 * 1000

//导航守卫
router.beforeEach((to, from, next) => {
    if (to.path === '/' || to.path === '/login') {
        next()
    } else {
        let token = window.localStorage.token
        token ? next() : next({path: '/'}, message.error('无用户认证信息,请重新登录'))
    }
    document.title = 'WE_BLOG-' + to.meta.title;
    next()
})


export default router

