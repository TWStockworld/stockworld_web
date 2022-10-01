<template>
  <div class="stockkind_computer" :class="[ this.$route.path=='/ranking' ? 'move': '']">
    <el-table :data="AllrankData">
      <el-table-column prop="rank" label="排行" sortable />

      <el-table-column prop="code1" label="代號" />

      <el-table-column prop="name1" label="名稱" />

      <el-table-column prop="VS" label="VS" />

      <el-table-column prop="code2" label="代號" />

      <el-table-column prop="name2" label="名稱" />

      <el-table-column prop="day" label="天數" />

      <el-table-column prop="follow" label="追蹤" width="180" />
    </el-table>
  </div>
  <div class="stockkind_cellphone">
    <el-table :data="getValues" :show-header="false">
      <el-table-column v-for="(item, index) in getHeaders" :key="index" :prop="item">
      </el-table-column>
    </el-table>
  </div>
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
      AllrankData: [
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
    };
  },
  computed: {
    getHeaders() {
      return this.AllrankData.reduce((pre, cur, index) => pre.concat(`value${index}`), ['title'])
    },
    getValues() {
      return this.headers.map(item => {
        return this.AllrankData.reduce((pre, cur, index) => Object.assign(pre, { ['value' + index]: cur[item.prop] }), { 'title': item.label, });
      });
    }
  },
};
</script>
<style scoped>
@media only screen and (min-width: 1200px) {
  .stockkind_computer {
    box-shadow: 5px 7px #00000026;
    position: absolute;
    width: 60%;
    top: 20%;
    left: 30%;
    font-size: 20px;
  }

  .stockkind_cellphone {
    display: none;
  }

  .move {
    animation: movepoint1 2s ease-in-out;
  }

  @keyframes movepoint1 {
    0% {
      left: 100%;
    }

    50% {
      left: 30%;
    }

  }
}

@media only screen and (max-width: 1200px) {
  .stockkind_computer {
    display: none;
  }

  .stockkind_cellphone {
    position: absolute;
    width: 70%;
    top: 40vh;
    left: 15%;
    font-size: 20px;
  }
}
</style>