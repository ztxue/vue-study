<!--模板-->
<template>
  <div class="main" id="home">
    <template>
      <section class="app-container">
        <a-affix :offset-top="0">
          <Header/>
        </a-affix>
        <Footer/>
      </section>
    </template>
  </div>
</template>

<script>

import Header from "@/views/front-end/layout/header";
import Footer from "@/views/front-end/layout/footer";

export default {
  components: {Header, Footer,},
  data() {
    return {

    }
  },
  computed: {},
  watch: {},
  methods: {
  },
  created() {
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

