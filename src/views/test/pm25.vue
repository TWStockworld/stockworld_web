<!-- <template>
  <div>
    <h1>menutest</h1>
    <taichung />
  </div>
</template>

<script>
import taichung from "@/components/test/taichung.vue";

export default {
  name: "pm25",
  components: {
    taichung,
  },
};
</script> -->
<template>
  <div class="element-main">
    <div> Element-ui 官方提供 table Demo</div>
    <div>行列转换后的 Demo</div>
    <el-table style="width: 100%" :data="getValues" :show-header="false">
      <el-table-column v-for="(item, index) in getHeaders" :key="index" :prop="item">
      </el-table-column>
    </el-table>
    </div>
    <div>===================================== 分割线 =====================================</div>
    <el-table style="width: 100%" :data="tableData">
      <el-table-column prop="rank" label="排行" width="180">
      </el-table-column>
      <el-table-column prop="code1" label="代號" width="180">
      </el-table-column>
      <el-table-column prop="name1" label="名稱" width="180">
      </el-table-column>
      <el-table-column prop="VS" label="VS" width="180">
      </el-table-column>
      <el-table-column prop="code2" label="代號" width="180">
      </el-table-column>
      <el-table-column prop="name2" label="名稱" width="180">
      </el-table-column>
      <el-table-column prop="day" label="天數" width="180">
      </el-table-column>
      <el-table-column prop="follow" label="追蹤" width="180">
    </el-table-column>
  </el-table>


</template>

<script>
export default {
  data() {
    return {
      headers: [
        {
          prop: 'rank',
          label: '排行',
        },
        {
          prop: 'code1',
          label: '代號',
        },
        {
          prop: 'name1',
          label: '名稱',
        },
        {
          prop: 'VS',
          label: 'VS',
        },
        {
          prop: 'code2',
          label: '代號',
        },
        {
          prop: 'name2',
          label: '名稱',
        },
        {
          prop: 'day',
          label: '天數',
        },
        {
          prop: 'follow',
          label: '追蹤',
        },
      ],
      tableData: [
        {
          rank: "1",
          code1: "1171",
          name1: "永光",
          code2: "3010",
          name2: "華立",
          day: "3",
          follow: "",
        },
        {
          rank: "2",
          code1: "1717",
          name1: "長興",
          code2: "1711",
          name2: "永光",
          day: "3",
          follow: "",
        },
        {
          rank: "3",
          code1: "5434",
          name1: "崇越",
          code2: "1717",
          name2: "長興",
          day: "3",
          follow: "",
        },
        {
          rank: "4",
          code1: "8091",
          name1: "翔名",
          code2: "5434",
          name2: "崇越",
          day: "3",
          follow: "",
        },
        {
          rank: "8",
          code1: "1171",
          name1: "永光",
          code2: "3010",
          name2: "華立",
          day: "3",
          follow: "",
        },
        {
          rank: "6",
          code1: "1171",
          name1: "永光",
          code2: "3010",
          name2: "華立",
          day: "3",
          follow: "",
        },
        {
          rank: "7",
          code1: "1171",
          name1: "永光",
          code2: "3010",
          name2: "華立",
          day: "3",
          follow: "",
        },
      ]
    }
  },
  computed: {
    getHeaders() {
      return this.tableData.reduce((pre, cur, index) => pre.concat(`value${index}`), ['title'])
    },
    getValues() {
      return this.headers.map(item => {
        return this.tableData.reduce((pre, cur, index) => Object.assign(pre, { ['value' + index]: cur[item.prop] }), { 'title': item.label, });
      });
    }
  },
}
</script>