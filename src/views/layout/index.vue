<template>
  <a-layout class="MyLayout">
    <a-layout-sider class="left-menu test-1 scrollbar" v-model="collapsed" :trigger="null" collapsible="">
      <div class="logo">{{ collapsed ? 'ADV' : 'Ant-Design-Vue' }}</div>

      <a-menu theme="dark" mode="inline" defaultOpenKeys>
        <a-menu-item key="home">
          <router-link to="home" tag="div">
            <a-icon type="user"/>
            <span>首页</span>
          </router-link>
        </a-menu-item>
        <a-menu-item key="user">
          <router-link to="user" tag="div">
            <a-icon type="user"/>
            <span>用户管理</span>
          </router-link>
        </a-menu-item>

        <a-sub-menu key="dept" @titleClick="titleClick">
          <span slot="title">
            <router-link to="/dept" tag="div">
            <a-icon type="appstore"/>
            <span>部门管理</span>
            </router-link>
          </span>
          <a-menu-item key="dept-list">
            <router-link to="dept-list" tag="div">
              <a-icon type="appstore"/>
              <span>部门列表</span>
            </router-link>
          </a-menu-item>
          <a-menu-item key="dept-tree">
            <router-link to="dept-tree" tag="div">
              <a-icon type="appstore"/>
              <span>部门树</span>
            </router-link>
          </a-menu-item>
        </a-sub-menu>

        <a-sub-menu key="area" @titleClick="titleClick">
           <span slot="title">
            <router-link to="/area" tag="div">
            <a-icon type="appstore"/>
            <span>区划管理</span>
            </router-link>
          </span>
          <a-menu-item key="area-list">
            <router-link to="/area-list" tag="div">
              <a-icon type="appstore"/>
              <span>区划列表</span>
            </router-link>
          </a-menu-item>
          <a-menu-item key="area-tree">
            <router-link to="/area-tree" tag="div">
              <a-icon type="appstore"/>
              <span>区划树</span>
            </router-link>
          </a-menu-item>
        </a-sub-menu>
      </a-menu>

    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <a-icon class="trigger" :type="collapsed ? 'menu-unfold' : 'menu-fold'"
                @click="() => (collapsed = !collapsed)"/>
        <!--头像下拉框-->
        <a-dropdown style="float: right;margin-right: 30px" :trigger="['click']">
          <a class="ant-dropdown-link" @click="e => e.preventDefault()">
            <a-icon type="smile" style="font-size: 20px;" spin=""/>&nbsp;
            <a-icon type="smile" style="font-size: 20px; color: #eb2f96" spin=""/>&nbsp;
            <a-icon type="smile" style="font-size: 20px;color: #52c41a" spin=""/>&nbsp;
            <a-icon type="down"/>
          </a>
          <a-menu slot="overlay">
            <a-menu-item key="0">
              <a href="http://www.alipay.com/">
                <a-icon type="heart" theme="twoTone"/>&nbsp;个人信息</a>
            </a-menu-item>
            <a-menu-item key="1">
              <a href="http://www.taobao.com/">
                <a-icon type="heart" theme="twoTone" two-tone-color="#eb2f96"/>&nbsp;修改密码</a>
            </a-menu-item>
            <a-menu-item key="2">
              <a href="" @click="loginOut">
                <a-icon type="heart" theme="twoTone" two-tone-color="#52c41a"/>&nbsp;退出登录</a>
            </a-menu-item>
          </a-menu>
        </a-dropdown>
      </a-layout-header>
      <a-layout-content :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }">
        <bread/>
        <a-divider class="myDivider" dashed=""/>
        <router-view></router-view>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script>
import Bread from "@/components/bread";

export default {
  components: {Bread},
  data() {
    return {
      collapsed: false,
      defaultOpenKeys: [],
      OpenKeys: []
    };
  },
  watch: {},
  methods: {
    loginOut() {
      this.$router.push({path: '/login'})
      console.log('login')
    },
    titleClick(e) {
      console.log('titleClick', e);
    },
  },
  created() {
    console.log('-----------', this.$route.path)
  }
};
</script>
<style>
.MyLayout {
  height: 100vh;
}

/*滚动条start*/
.left-menu {
  width: 50px;
  height: 100vh;
  overflow-y: scroll;
  float: left;
  margin: 5px;
}

.scrollbar {
  width: 30px;
  height: 100vh;
  margin: 0 auto;
}

.test-1::-webkit-scrollbar {
  /*滚动条整体样式*/
  width: 10px; /*高宽分别对应横竖滚动条的尺寸*/
  height: 1px;
}

.test-1::-webkit-scrollbar-thumb {
  /*滚动条里面小方块*/
  box-shadow: inset 0 0 5px rgba(4, 49, 114, 0.98);
  background: rgba(1, 8, 17, 0.98);
}

/*.test-1::-webkit-scrollbar-track {*/
/*  !*滚动条里面轨道*!*/
/*  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);*/
/*  background: #ededed;*/
/*}*/
/*滚动条end*/

.trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

.MyLayout .trigger:hover {
  color: #1890ff;
}

.MyLayout .logo {
  height: 32px;
  line-height: 32px;
  color: #ffffff;
  margin: 15px;
  text-align: center;
  letter-spacing: 2px;
  font-size: 20px;
  font-family: '华文楷体', serif;
  font-weight: bold;
}

/*分割线*/
.myDivider {
  margin: 5px;
}
</style>
