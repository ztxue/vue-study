<!--  -->
<template>
  <div class=''>
    <template>
      <a-breadcrumb separator=">">
        <a-breadcrumb-item>ADV系统</a-breadcrumb-item>
        <a-breadcrumb-item v-if="$route.meta.module">
          <a href="">{{ $route.meta.module }}</a>
        </a-breadcrumb-item>
        <a-breadcrumb-item>
          <a href="">{{ $route.meta.title }}</a>
        </a-breadcrumb-item>
      </a-breadcrumb>
    </template>

  </div>
</template>

<script>

export default {
  components: {},
  data() {
    return {}
  },
  computed: {},
  watch: {},
  methods: {}
}
</script>
<style scoped>

</style>

