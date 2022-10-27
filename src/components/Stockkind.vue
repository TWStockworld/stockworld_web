<template>
  <div class="stockkind_computer" :class="[this.$route.path == '/ranking' ? 'move' : '']">
    <el-row>
      <el-col :lg="12" :sm="24" :xs="24">
        <el-row class="AllrankData_A1" border stripe height="200" :default-sort="{ prop: 'rank' }">
          <el-table :data="AllrankData_A1_UP">
            <el-table-column prop="order" label="排行" sortable />

            <el-table-column prop="stockA_name" label="股票A" />

            <el-table-column prop="stockB_name" label="股票B" />

            <el-table-column prop="diff" label="天數" />

            <el-table-column prop="up" label="機率" />

            <el-table-column prop="follow" label="追蹤" />
          </el-table>
        </el-row>
        <el-row class="AllrankData_A2">
          <el-table :data="probability_up">
            <el-table-column prop="order" label="排行" sortable />

            <el-table-column prop="stockA_id" label="代號" />

            <el-table-column prop="stockA_name" label="名稱" />

            <el-table-column prop="stockA_id" label="代號" />

            <el-table-column prop="stockB_name" label="名稱" />

            <el-table-column prop="up" label="漲" />

            <el-table-column prop="follow" label="追蹤" width="180" />
          </el-table>
        </el-row>
      </el-col>
      <el-col :lg="12" :sm="24" :xs="24">
        <el-row class="AllrankData_B1" border stripe height="200" :default-sort="{ prop: 'rank' }">
          <el-table :data="AllrankData_B1_DOWN">
            <el-table-column prop="order" label="排行" sortable />

            <el-table-column prop="stockA_name" label="股票A" />

            <el-table-column prop="stockB_name" label="股票B" />

            <el-table-column prop="diff" label="天數" />

            <el-table-column prop="up" label="機率" />

            <el-table-column prop="follow" label="追蹤" />
          </el-table>
        </el-row>
        <el-row class="AllrankData_B2">
          <el-table :data="probability_down">
            <el-table-column prop="order" label="排行" sortable />

            <el-table-column prop="stockA_id" label="代號" />

            <el-table-column prop="stockA_name" label="名稱" />

            <el-table-column prop="stockA_id" label="代號" />

            <el-table-column prop="stockB_name" label="名稱" />

            <el-table-column prop="diff" label="天數" />

            <el-table-column prop="down" label="跌" />

            <el-table-column prop="follow" label="追蹤" />
          </el-table>
        </el-row>
      </el-col>
    </el-row>

  </div>
</template>
<script>

export default {
  name: "Stockkind",
  data() {
    return {
      probability_up:[],
      probability_down:[],
    };
  },
  mounted() {
    this.axios
      .get("https://stock.bakerychu.com/api/stock/get_all_stock_probability")
        .then((res) => {
          console.log(res.data.probability_up,res.data.probability_down);
          this.probability_up=res.data.probability_up;
          this.probability_down=res.data.probability_down;

        })
  }

};
</script>
<style scoped>
@media only screen and (min-width: 1200px) {
  .stockkind_computer {
    box-shadow: 5px 7px #00000026;
    position: absolute;
    width: 60%;
    top: 5%;
    left: 25%;
    font-size: 20px;
  }

  .AllrankData_A1 {
    top: 0%;
  }

  .AllrankData_A2 {
    top: 10%;
  }

  .AllrankData_B1 {
    top: 0%;
    left: 25%;
  }

  .AllrankData_B2 {
    top: 10%;
    left: 25%;
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
      left: 25%;
    }

  }
}

@media only screen and (max-width: 1200px) {
  .stockkind_computer {
    display: none;
  }

  .stockkind_cellphone {
    /* position: absolute;
    width: 70%;
    top: 25vh;
    left: 15%;
    font-size: 20px; */
  }

  .move1 {
    animation: movepoint2 2s ease-in-out;
  }

  @keyframes movepoint2 {
    0% {
      left: 100%;
    }

    50% {
      left: 15%;
    }

  }
}
</style>



 