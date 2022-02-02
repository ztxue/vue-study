<!--  -->
<template>
  <div id='home'>
    <img src="../assets/logo.webp" alt="">
    <HelloWorld msg="Welcome to My First Vue App"/>
    <router-link to="/login">
      <span class="reLogin">
        返回登录
      </span>
    </router-link>
  </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld";

export default {
  components: {
    HelloWorld
  },
  data() {
// 这里存放数据
    return {}
  },
// 监听属性 类似于data概念
  computed: {},
// 监控data中的数据变化
  watch: {},
// 方法集合
  methods: {}
}
</script>
<style scoped>
#home {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.reLogin {

}
</style>

