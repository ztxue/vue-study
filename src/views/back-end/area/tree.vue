<template>
  <a-row>
    <a-col>
      <a-card style="min-height:0;">
        <a-form :form="queryForm">
          <a-row>
            <a-col :md="5" :sm="24">
              <a-form-item style="margin-bottom: 0;" label="名称"
                           :labelCol="{span: 5}"
                           :wrapperCol="{span: 18, offset: 0}">
                <a-input placeholder="搜一搜" :allow-clear="true"/>
              </a-form-item>
            </a-col>
            <a-col :md="14" :sm="24">
              <a-form-item style="margin-bottom: 0;" align="left">
                <a-button icon="search" type="primary" @click="onChange">查询</a-button>
                <a-button icon="redo" type="dashed" style="margin-left: 10px;" @click="onResetQuery">重置</a-button>
                <a-button icon="plus" type="primary" @click="onChange" style="margin-left: 10px;">添加</a-button>
                <a-button icon="delete" type="danger" @click="onChange" style="margin-left: 10px;">删除</a-button>
              </a-form-item>
            </a-col>
          </a-row>
        </a-form>
      </a-card>
      <a-col>
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
        </a-tree>
      </a-col>
    </a-col>
  </a-row>
</template>
<script>
import {getRequest} from "@/utils/common";
import {message} from "ant-design-vue";

export default {
  data() {
    return {
      treeData: [],
      queryForm: this.$form.createForm(this),
      addForm: this.$form.createForm(this),
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
    },
    onResetQuery() {
      this.queryForm.resetFields();
    },
  },
  mounted() {
    // this.getAreaTree()
  }
};
</script>
