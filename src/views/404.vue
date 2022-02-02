<template>
  <div >
    <div class="p4044">
      <img alt="" :src="imgUrl">
    </div>
      <h2>您要找的页面消失了......</h2>
  </div>


</template>

<script>

export default {
  components: {},
  data() {
    return {
      imgUrl: require('/src/assets/images/404.png')

    }
  },
  computed: {},
  watch: {},
  methods: {}
}
</script>
<style>
.p4044 {
  display: flex;
  justify-content: center;
  align-items: center;
}

h2 {
  color: #0033ff;
  text-align: center;
}

</style>

