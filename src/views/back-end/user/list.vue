<template>

  <div class="tableTop">
    <a-table
        rowKey="id"
        bordered
        size="small"
        :columns="columns"
        :data-source="list"
        :scroll="{ y: 500 ,x:100 }"
        scrollToFirstRowOnChange
    />
  </div>

</template>
<script>
import {queryData} from "@/utils/common";
import {message} from "ant-design-vue";

export default {
  components: {},
  data() {
    // 这里存放数据
    return {
      deptBean: {
        name: '',
        userName: ''
      },
      list: {
        name: '',
        userName: '',
        tel: '',
        descr: '',
        gmtCreate: '',
        gmtModified: ''
      },
      columns: [
        {
          title: '部门名称',
          dataIndex: 'name',
          key: 'name',
        }, {
          title: '姓名',
          dataIndex: 'userName',
          key: 'userName',
        }, {
          title: '手机号',
          dataIndex: 'tel',
          key: 'tel',
        }, {
          title: '描述',
          dataIndex: 'descr',
          key: 'descr',
        }, {
          title: '创建时间',
          dataIndex: 'gmtCreate',
          key: 'gmtCreate',
        }, {
          title: '修改时间',
          dataIndex: 'gmtModified',
          key: 'gmtModified',
        }, {
          title: '操作',
          dataIndex: 'action',
          scopedSlots: {customRender: 'action'},
          width: 250,
          fixed: 'right'
        },
      ]
    }
  },
  methods: {
    getList() {
      queryData({
        'userName': this.list.userName
      }, 'dept/selecListPage')
          .then(response => {
            const data = response.data;
            if (data && data.code === '200') {
              message.success(response.data.msg)
            } else {
              message.error(response.data.msg)
              console.log(response)
            }
            this.list = response.data.data
          })

    }

  },
  created() {
    this.getList()
  }
}
</script>
<style>
.tableTop {
  margin-left: 25%;
  height: 70%;
}
</style>
