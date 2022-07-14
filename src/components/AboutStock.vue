<template>
  <el-table
    :data="tableData"
    border
    stripe
    style="width: 50%"
    max-height="200"
    :default-sort = "{prop: 'date'}">
    <el-table-column
      prop="date"
      label="代號"
      sortable
      width="110">
    </el-table-column>
    <el-table-column
      prop="name"
      label="名稱"
      width="110">
    </el-table-column>
    <el-table-column
      prop="address"
      label="成交價"
       width="110">
    </el-table-column>
    <el-table-column
      prop="address"
      label="漲跌"
       width="110">
    </el-table-column>
    <el-table-column
      prop="address"
      label="漲跌幅"
       width="110">
    </el-table-column>
    <el-table-column
      prop="address"
      label="買進"
       width="110">
    </el-table-column>
    <el-table-column
      prop="address"
      label="賣出"
       width="110">
    </el-table-column>
    <el-table-column
      prop="address"
      label="開盤"
       width="110">
    </el-table-column>
    <el-table-column
      prop="address"
      label="昨收"
       width="110">
    </el-table-column>
    <el-table-column
      prop="address"
      label="成交量"
       width="100">
    </el-table-column>
    <el-table-column
      prop="address"
      label="時間"
       width="110">
    </el-table-column>



  </el-table>
</template>
<script>
  export default {
    data() {
      return {
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }]
      }
    }
  }
</script>