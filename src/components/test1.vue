<template>
  <div>
    <td width="180">
      <el-table :data="stockkind" class="table2">
        <el-table-column prop="stockname" label="股票種類" />
      </el-table>
    </td>
    <td>
      <el-table :data="rankData" class="table1">
        <el-table-column prop="rank" label="排行" sortable />

        <el-table-column prop="code1" label="代號" />

        <el-table-column prop="name1" label="名稱" />

        <el-table-column prop="VS" label="VS" />

        <el-table-column prop="code2" label="代號" />

        <el-table-column prop="name2" label="名稱" />

        <el-table-column prop="day" label="天數" />

        <el-table-column prop="follow" label="追蹤" width="180" />
      </el-table>
    </td>
  </div>
</template>

<script>
export default {
  data() {
    return {
      rankData: [
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
      ],
      stockkind: [
        {
          stockname: "1711 永光",
        },
        {
          stockname: "1717 長興",
        },
        {
          stockname: "5434 崇越",
        },
        {
          stockname: "1773 剩一化學",
        },
        {
          stockname: "8091 翔名",
        },
        {
          stockname: "4755 三福化",
        },
      ],
    };
  },
};
</script>
<style>
.table1 {
  position: relative;
  width: 180%;
}
.table2 {
  position: relative;
}
</style>
