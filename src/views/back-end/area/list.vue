<template>

  <div class="areaTable">
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
      dataSource: dataSource,
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
      SysAreaParams: {
        currentPage: '',
        pageSize: ''
      },
      areaList: {
        id: '',
        name: '',
        code: '',
        parentCode: '',
        sort: '',
        deleted: ''
      },
      columns: [
        {
          title: 'id',
          dataIndex: 'id',
          key: 'id',
        }, {
          title: 'name',
          dataIndex: 'name',
          key: 'name',
        }, {
          title: 'code',
          dataIndex: 'code',
          key: 'code',
        }, {
          title: 'parentCode',
          dataIndex: 'parentCode',
          key: 'parentCode',
        }, {
          title: 'sort',
          dataIndex: 'sort',
          key: 'sort',
        }, {
          title: 'deleted',
          dataIndex: 'deleted',
          key: 'deleted',
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
    getAreaList() {
      queryData({
        'SysAreaParams.currentPage': this.pagination.current,
        'SysAreaParams.pageSize': this.pagination.pageSize
      }, 'sys/area/list')
          .then(response => {
            const data = response.data;
            if (data && data.code === '200') {
              this.dataSource = data.data.list;
              this.pagination.total = data.data.page.allRows;
              message.success(response.data.msg)
            } else {
              message.error(response.data.msg)
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
    this.getAreaList()
  }
}
</script>
<style>
.areaTable {
  margin-top: 25px;
}
</style>
