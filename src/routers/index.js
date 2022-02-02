import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter)

const router = new VueRouter({
    routes: [
        {
            path: "/", component: () => import('../views/user/signIn'), meta: {
                title: "登录"
            }
        },
        {
            path: "/layout", component: () => import('/src/views/layout/index'), name: 'layout'
            , children: [
                {
                    path: "/login", component: () => import('../views/user/signIn'), meta: {
                        title: "登录"
                    }
                },
                {
                    path: "/home", component: () => import('/src/views/Home'), name: 'home', meta: {
                        title: "首页"
                    }
                },
                {
                    path: "/dept", component: () => import('/src/views/dept/dept'), meta: {
                        title: "部门管理"
                    }
                },
                {
                    path: "/dept-list", component: () => import('/src/views/dept/list'), meta: {
                        title: "列表",
                        module: "部门管理"
                    }
                },
                {
                    path: "/dept-tree", component: () => import('/src/views/dept/tree'), meta: {
                        title: "部门树",
                        module: "部门管理"
                    }
                },
                {
                    path: "/area", component: () => import('/src/views/area/SysArea'), meta: {
                        title: "区划管理",
                    }
                },
                {
                    path: "/area-list", component: () => import('/src/views/area/list'), meta: {
                        title: "区划列表",
                        module: "区划管理"

                    }
                },
                {
                    path: "/area-tree", component: () => import('/src/views/area/tree'), meta: {
                        title: "区划树",
                        module: "区划管理"

                    }
                },
                {
                    path: "/user", component: () => import('/src/views/user/user'), meta: {
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
//导航守卫
router.beforeEach((to, from, next) => {
    document.title = 'ADV-' + to.meta.title;
    next()
})


export default router

