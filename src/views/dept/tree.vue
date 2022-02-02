<!--  -->
<template>
  <div class=''>
    <a-tree
        :tree-data="treeData"




    />
  </div>
</template>

<script>

import {message} from "ant-design-vue";
import {getRequest} from "@/utils/common";

export default {
  components: {
  },
  data() {
    return {
      treeData: [],

    }
  },
  computed: {},
  watch: {},
  methods: {
    getList() {
      getRequest(
          {}, 'listTree2')
          .then(response => {
            const data = response.data;
            if (data && data.code === '200') {
              this.treeData = data.data;
              console.log('data.data.length====',data.data.length)
              message.success(response.data.msg)
            } else {
              message.error(response.data.msg)
            }
          })

    },
  },
  created() {
    this.getList()
  }
}
</script>
<style scoped>

</style>

