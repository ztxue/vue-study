<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {},
  mounted() {
    // 关闭浏览器窗口的时候清空浏览器缓存在localStorage的数据
    // window.addEventListener('beforeunload', () => {
    //   localStorage.clear()
    // })
  }

}
</script>

<style>
@import "assets/css/reset.css";

</style>
