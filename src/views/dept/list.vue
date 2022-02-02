<template>

  <div class="tableTop">
    <a-table
        rowKey="id"
        size="small"
        :columns="columns"
        :data-source="dataSource"
        :scroll="{ y: 500 ,x:100 }"
        scrollToFirstRowOnChange
        :pagination="pagination"
    />

  </div>

</template>
<script>
import {queryData} from "@/utils/common";
import {message} from "ant-design-vue";

//查询列表数据源
const dataSource = [];
export default {
  components: {},
  data() {
    // 这里存放数据
    return {
      pagination: {
        current: 1,
        pageSize: 20,
        showSizeChanger: true,
        showQuickJumper: true,
        pageSizeOptions: ['20', '40', '60', '80', '100'],
        showTotal: total => `总共有 ${total} 条记录`,
        onShowSizeChange: (current, pageSize) => this.onPageShowSizeChange(current, pageSize),
        onChange: (current, pageSize) => this.onPageChange(current, pageSize),
        total: 0
      },
      dataSource: dataSource,
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
        'userName': this.list.userName,
        'name': this.list.name,
      }, 'dept/selecListPage')
          .then(response => {
            const data = response.data;
            if (data && data.code === '200') {
              this.dataSource = data.data;
              this.pagination.total = data.data.page.allRows;
              console.log('data.data.length====',data.data.length)
              message.success(response.data.msg)
            } else {
              message.error(response.data.msg)
              console.log(response)
            }
          })

    },
    onPageChange(current, pageSize) {
      this.pagination.current = current;
      this.pagination.pageSize = pageSize;
    },
    onPageShowSizeChange(current, pageSize) {
      this.pagination.current = current;
      this.pagination.pageSize = pageSize;
    },
  },
  created() {
    this.getList()

  },

}
</script>
<style>
.tableTop {
  margin-top: 25px;
}
</style>
