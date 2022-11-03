<template>
  <div class="Ranking_computer" :class="[this.$route.path == '/ranking' ? 'move' : '']">
    <el-row>
      <el-col :lg="12" :sm="24" :xs="24">
        <el-row>

        </el-row>
        <el-row class="AllrankData_A2">
          <el-table :data="probability_up">
            <el-table-column prop="order" label="排行" sortable />

            <el-table-column prop="stockA_name" label="股票A">
              <template v-slot="scope">
                <router-link :to="{ path: '/aboutstock/' + scope.row.stockA_id }">{{ scope.row.stockA_name }}
                </router-link>
              </template>

            </el-table-column>

            <el-table-column prop="stockB_name" label="股票B">
              <template v-slot="scope">
                <router-link :to="{ path: '/aboutstock/' + scope.row.stockB_id }">{{ scope.row.stockB_name }}
                </router-link>
              </template>

            </el-table-column>

            <el-table-column prop="diff" label="天數" />

            <el-table-column prop="up" label="漲" />
            <el-table-column label="操作">
              <template #default="scope">
                <el-button size="mini" @click="setchartvalue(scope.row.diff, scope.row.stockA_id, scope.row.stockB_id)">
                  圖表
                </el-button>
              </template>
            </el-table-column>
            <el-table-column prop="follow" label="追蹤" width="180" />
          </el-table>
        </el-row>
      </el-col>
      <el-col :lg="12" :sm="24" :xs="24">
        <el-row>

        </el-row>
        <el-row class="AllrankData_B2">
          <el-table :data="probability_down">
            <el-table-column prop="order" label="排行" sortable />

            <el-table-column prop="stockA_name" label="股票A">
              <template v-slot="scope">
                <router-link :to="{ path: '/aboutstock/' + scope.row.stockA_id }">{{ scope.row.stockA_name }}
                </router-link>
              </template>

            </el-table-column>

            <el-table-column prop="stockB_name" label="股票B">
              <template v-slot="scope">
                <router-link :to="{ path: '/aboutstock/' + scope.row.stockB_id }">{{ scope.row.stockB_name }}
                </router-link>
              </template>

            </el-table-column>

            <el-table-column prop="diff" label="天數" />

            <el-table-column prop="down" label="跌" />
            <el-table-column label="操作">
              <template #default="scope">
                <el-button size="mini" @click="setchartvalue(scope.row.diff, scope.row.stockA_id, scope.row.stockB_id)">
                  圖表
                </el-button>
              </template>
            </el-table-column>
            <el-table-column prop="follow" label="追蹤" />
          </el-table>
        </el-row>
      </el-col>
    </el-row>
  </div>
  <el-dialog v-model="dialogTableVisible" title="圖表" width="60%" destroy-on-close="true">
    <CompareChart :startdate="data_start_date" :enddate="data_end_date" :diff="chart_diff" :stockA_id="chart_stockA_id"
      :stockB_id="chart_stockB_id" :componentKey="componentKey" />
  </el-dialog>
</template>
<script>
import CompareChart from "@/components/CompareChart.vue";

export default {

  name: "Ranking",
  components: {
    CompareChart,
  },
  data() {
    return {
      probability_up: [],
      probability_down: [],
      dialogTableVisible: false,
      data_start_date: '',
      data_end_date: '',
      chart_diff: 0,
      chart_stockA_id: '',
      chart_stockB_id: '',
      componentKey: 0
    };
  },
  mounted() {
    this.axios
      .post("https://stock.bakerychu.com/api/stock/get_all_stock_probability")
      .then((res) => {
        this.data_start_date = res.data.data_start_date
        this.data_end_date = res.data.data_end_date
        res.data.probability_up.forEach((probability_up) => {
          this.probability_up.push({
            stockA_id: probability_up.stockA_id,
            stockA_name: probability_up.stockA_name + "\n(" + probability_up.stockA_id + ")",
            stockB_id: probability_up.stockB_id,
            stockB_name: probability_up.stockB_name + "\n(" + probability_up.stockB_id + ")",
            diff: probability_up.diff,
            up: probability_up.up,
            order: probability_up.order,
          })
        })
        res.data.probability_down.forEach((probability_down) => {
          this.probability_down.push({
            stockA_id: probability_down.stockA_id,
            stockA_name: probability_down.stockA_name + "\n(" + probability_down.stockA_id + ")",
            stockB_id: probability_down.stockB_id,
            stockB_name: probability_down.stockB_name + "\n(" + probability_down.stockB_id + ")",
            diff: probability_down.diff,
            down: probability_down.down,
            order: probability_down.order,
          })
        })
      })
  },
  methods: {
    setchartvalue(chart_diff, chart_stockA_id, chart_stockB_id) {
      this.chart_diff = chart_diff;
      this.chart_stockA_id = chart_stockA_id;
      this.chart_stockB_id = chart_stockB_id;
      this.dialogTableVisible = true;
      this.componentKey += 1;
    }
  },

};
</script>
<style scoped>
@media only screen and (min-width: 1200px) {
  .Ranking_computer {
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

  .Ranking_cellphone {
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
  .Ranking_computer {
    display: none;
  }

  .Ranking_cellphone {
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



 