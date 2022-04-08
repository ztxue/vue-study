<!--博客首页-->
<template>
  <div class="main" id="home">
    <template>
      <section class="app-container">
        <a-affix :offset-top="0">
          <Header @materials="getMaterials"/>
        </a-affix>
        <section class="contentArea">
          <!--内容插槽-->
          <a-row>
            <a-col :span="16">
              <!--头部卡片-->
              <a-card :bordered="false" :hoverable="true"
                      style="height: auto;margin: 10px 0 10px 10%">
                <a style="color: #001b44;font-size: 18px">最新博客&nbsp;</a>
                <a-icon style="font-size: 15px" type="read"/>
                <a-button style="width: 100px;float: right">创作
                  <a-icon type="edit" theme="twoTone"/>
                </a-button>
              </a-card>
              <!--没数据就固定一个卡片-->
              <a-card v-show="!articleList.length>0" :loading="loading" :bordered="false" :hoverable="true"
                      style="height: 200px;margin: 10px 0 10px 10%">
                <a-empty/>
              </a-card>
              <!--数据list卡片-->
              <a-row>
                <a-col>
                  <div
                      v-infinite-scroll="handleInfiniteOnLoad"
                      class="demo-infinite-container">
                    <a-list :data-source="articleList" :split="false"
                            style="font-family: '华文楷体', serif;text-align: center; color: #7293C7FF"
                            footer="没有啦 ~￣▽￣~ 没有啦">
                      <a-list-item slot="renderItem" slot-scope="item" :key="item.id">
                        <a-col :span="24">
                          <router-link :to="{path:'articleInfo',query:{id:item.id}}" target="_blank" tag="a"
                                       rel="noopener noreferrer">
                            <a-card :bordered="false" :loading="loading" :hoverable="true">
                              <!--博客图片-->
                              <a-tooltip>
                                <template slot="title">博客图片</template>
                                <a-col :span="6"><img :src="item.cover" alt="图片加载失败"
                                                      style="float:left;width: 200px;height: 100px"/></a-col>
                              </a-tooltip>
                              <a-col :span="16" style="text-align: left; margin: 0 0 0 30px">
                                <!--博客内容-->
                                <a-tooltip>
                                  <template slot="title">标题</template>
                                  <strong style="font-size: 18px">{{ item.title }}</strong>
                                </a-tooltip>
                                <a-tooltip placement="left">
                                  <template slot="title">内容预览</template>
                                  <p style="color: #616b7a; margin-left: 20px">{{
                                      item.content.substring(0, 50) + "......"
                                    }}</p>
                                </a-tooltip>
                                <a-avatar style="margin-top: -5px" :size="24" :src="item.avatar" alt="图片加载失败"/>
                                <a-tooltip placement="bottom">
                                  <template slot="title">作者</template>
                                  <a style="color: #7293c7; margin: 0 30px 0 5px"
                                     @click="showDrawer(item.authorId)">{{ item.nickName }}</a>
                                </a-tooltip>
                                <a-tooltip placement="bottom">
                                  <template slot="title">创作时间</template>
                                  <a style="color: #7293c7; margin: 0 30px 0 0">时间：{{ item.createTime }}</a>
                                </a-tooltip>
                                <a-tooltip placement="bottom">
                                  <template slot="title">分类</template>
                                  <a style="color: #7293c7; margin: 0 30px 0 0">分类：{{ item.name }}</a>
                                </a-tooltip>
                              </a-col>
                            </a-card>
                          </router-link>
                        </a-col>
                      </a-list-item>
                      <div v-if="loading2 && !busy" class="demo-loading-container">
                        <a-spin/>
                      </div>
                    </a-list>
                    <!--博主-抽屉信息-->
                    <a-drawer width="640" placement="right" title="博主信息" :closable="true" :visible="visible"
                              @close="onClose">
                      <a-row>
                        <a-col :span="12" style="height: 200px">
                          <img :src="user.avatar" alt="图片加载失败"
                               style="width: 200px;height: 200px"/>
                        </a-col>
                        <a-col :span="12" style="height: 200px">
                          <p>编号：{{ user.id }}</p>
                          <p>笔名：{{ user.nickName }}</p>
                          <p>用户名：{{ user.userName }}</p>
                          <p>邮箱：{{ user.email }}</p>
                          <p>手机号：{{ user.phone }}</p>
                        </a-col>
                      </a-row>
                      <a-row>
                        <a-col :span="12">
                          <p>住址：{{ user.position }}</p>
                          <p>注册时间：{{ user.createTime }}</p>
                          <p>最后一次登录时间：{{ user.lastOnlineTime }}</p>
                        </a-col>
                        <a-col :span="12">
                          <p>个人网站：{{ user.site }}</p>
                          <p>登录地址：{{ user.address }}</p>
                          <p>是否禁用：{{ user.isEnabled }}</p>
                        </a-col>
                      </a-row>
                      <a-row>
                        <a-col :span="24">
                          <p>座右铭：{{ user.introduce }}</p>
                        </a-col>
                      </a-row>
                      <a-row>
                        <a-col :span="24">
                          <a-button :block="true" @click="showChildrenDrawer(user.id)">查看他的博客</a-button>
                        </a-col>
                      </a-row>
                      <a-drawer width="400" placement="right" :title="childrenTitle" :closable="true"
                                :visible="childrenDrawer"
                                @close="onChildrenDrawerClose">
                        <a-row>
                          <a-col :span="24" v-for="item in articleList" :key="item.id">
                            <a-card style="background-color: #eff3f5;margin: 10px"
                                    :bordered="false" :hoverable="true">
                              <img :src="item.cover" alt="图片加载失败"
                                   style="width: 50px;height: 50px"/>
                              <a>{{ item.title }}</a>
                            </a-card>
                          </a-col>
                        </a-row>
                      </a-drawer>
                    </a-drawer>
                  </div>
                </a-col>
              </a-row>
            </a-col>
            <!--侧边栏-->
            <a-col :span="6" style="text-align: center;margin: 10px 5% 0 30px">
              <a-affix :offset-top="50">
                <a-card type="inner" title="博主榜单" style="height: 300px;width: 350px" :bordered="false"
                        :hoverable="true">
                </a-card>
              </a-affix>
              <a-card type="inner" title="阅读榜单" style="height: 400px;width: 350px;margin: 10px 0 10px 0"
                      :bordered="false"
                      :hoverable="true">
              </a-card>
            </a-col>
          </a-row>
        </section>
        <Footer/>
      </section>
    </template>
  </div>
</template>

<script>

import {article} from "@/services/article/article";
import {message} from "ant-design-vue";
import Header from "@/views/front-end/layout/header";
import Footer from "@/views/front-end/layout/footer";
import infiniteScroll from 'vue-infinite-scroll';
import {userInfo} from "@/services/user/user";

export default {
  directives: {infiniteScroll},
  components: {Header, Footer,},
  data() {
    return {
      //搜索框参数
      article: '',
      //文章列表
      articleList: [],
      //博主信息
      user: '',
      //加载参数
      loading: true,
      loading2: false,
      busy: false,
      //抽屉参数
      visible: false,
      childrenDrawer: false,
      childrenTitle: '',
    }
  },
  computed: {},
  watch: {},
  methods: {
    //抽屉开
    showDrawer(id) {
      this.getUserInfoById(id)
      this.visible = true;
    },
    //抽屉关
    onClose() {
      this.visible = false;
    },
    //子抽屉开
    showChildrenDrawer(id) {
      this.getArticleInfoByUserId(id)
      this.childrenDrawer = true;
    },
    //子抽屉关
    onChildrenDrawerClose() {
      this.childrenDrawer = false;
    },
    //列表下拉
    handleInfiniteOnLoad() {
      const data = this.articleList;
      this.loading2 = true;
      if (data.length > 4) {
        message.warning('到底了');
        this.busy = true;
        this.loading2 = false;
      }
    },
    //父子组件函数
    getMaterials(childValue) {
      // childValue就是子组件传过来的值
      this.article = childValue
      this.getArt()
    },
    //通过判断有无数据控制卡片加载状态
    cartLoad() {
      if (this.articleList != null) {
        setTimeout(() => {
          this.loading = false;
        }, 1234);
      } else {
        this.loading = true;
      }
    },
    //根据作者id获取作者所有博客
    getArticleInfoByUserId(id) {
      let args = {}
      args.authorId = id
      article(args)
          .then(response => {
            const params = response.data;
            if (params.code === "200" && params.data.list.length > 0) {
              this.articleList = params.data.list;
              this.childrenTitle = this.articleList[0].nickName + "的所有博客"
              setTimeout(() => {
                message.success(params.msg);
              }, 300)
            } else {
              setTimeout(() => {
                message.error("数据获取失败")
              }, 1234)
            }
          })
    },
    //根据作者id获取作者信息
    getUserInfoById(id) {
      let arg = {}
      arg.id = id
      userInfo(arg).then((response) => {
        const params = response.data;
        if (params.code === "200") {
          this.user = params.data
          console.log("获取的用户信息--", this.user);
          message.success("打开抽屉");
        } else {
          setTimeout(() => {
            message.error("数据获取失败")
          }, 500)
        }
      })
    },
    //获取文章列表
    getArt() {
      let args = {}
      args.title = this.article
      article(args)
          .then(response => {
            const params = response.data;
            if (params.code === "200" && params.data.list.length > 0) {
              this.articleList = params.data.list;
              console.log("数据列表--", this.articleList);
              setTimeout(() => {
                message.success(params.msg);
              }, 300)
            } else {
              setTimeout(() => {
                message.error("数据获取失败")
              }, 1234)
            }
          })
    },
  },
  created() {
    this.cartLoad()
    this.getArt()
  },
}
</script>
<style scoped>
.contentArea {
  width: 100%;
  height: auto;
  background-color: #eff3f5;
}

.demo-infinite-container {
  margin: 0 0 2% 10%;
  overflow: auto;
  height: 600px;
}

.demo-loading-container {
  position: absolute;
  bottom: 40px;
  width: 100%;
  text-align: center;
}
</style>

