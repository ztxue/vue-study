<!--模板-->
<template>
  <div class="main" id="home">
    <template>
      <section class="app-container">
        <a-affix :offset-top="0">
          <Header/>
        </a-affix>
        <section class="contentArea">
          <a-row>
            <a-col>
              <a>
                {{ article }}
              </a>
            </a-col>
          </a-row>
        </section>
        <Footer/>
      </section>
    </template>
  </div>
</template>

<script>

import Header from "@/views/front-end/layout/header";
import Footer from "@/views/front-end/layout/footer";
import {articleInfo} from "@/services/article/article";
import {message} from "ant-design-vue";

export default {
  components: {Header, Footer,},
  data() {
    return {
      article: {}
    }
  },
  computed: {},
  watch: {},
  methods: {
    getArticleInfo() {
      let arg = {}
      arg.id = this.id;
      articleInfo(arg).then(response => {
        console.log("id===", arg)
        const params = response.data;
        if (params.code === "200") {
          this.article = params.data;
          setTimeout(() => {
            message.success(params.msg);
          }, 300)
        } else {
          setTimeout(() => {
            message.error("数据获取失败")
          }, 1234)
        }
      })
    }
  },
  created() {
    //获取路由参数
    this.id = this.$route.query.id;
    this.getArticleInfo();
  },
}
</script>
<style scoped>
.contentArea {
  width: 100%;
  height: auto;
  background-color: #eff3f5;
}
</style>

