<template>
  <div class="areaTree">
    <a-input-search style="margin-top: 4px;width: 15%" placeholder="搜一下" @change="onChange"/>
    <a-tree
        blockNode=""
        checkable=""
        :tree-data="treeData"
        :default-expanded-keys="[]"
        :default-selected-keys="[]"
        :default-checked-keys="[]"
        @select="onSelect"
        @check="onCheck"
    >
      <span slot="title0010" style="color: #1890ff">sss</span>
    </a-tree>
  </div>
</template>
<script>
import {getRequest} from "@/utils/common";
import {message} from "ant-design-vue";

export default {
  data() {
    return {
      treeData: [],
    };
  },
  methods: {
    getAreaTree() {
      getRequest({}, '/sys/area/tree')
          .then(response => {
            const data = response.data;
            if (data && data.code === '200') {
              this.treeData = data.data;
              message.success(response.data.msg)
            } else {
              message.error(response.data.msg)
            }
          })
    },
    onSelect(selectedKeys, info) {
      console.log('selected', selectedKeys, info);
    },
    onCheck(checkedKeys, info) {
      console.log('onCheck', checkedKeys, info);
    },
    onChange() {
      console.log('6666')
    }
  },
  created() {
    this.getAreaTree()
  }
};
</script>
