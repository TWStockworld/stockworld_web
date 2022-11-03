<template>
  <div class="">
    <el-row style="    padding: 1% 1% 0% 1%">
      <el-col :lg="11" :sm="24" :xs="24">
        <el-row>
          <RankingChart :startdate="data_start_date" :enddate="data_end_date" :diff="first_left_diff"
            :stockA_id="first_left_stockA_id" :stockB_id="first_left_stockB_id" :componentKey=0
            :result="first_left_result" />
        </el-row>
        <el-row class="" style="    margin-top:1%;">
          <el-table :data="probability_up" height="100%">
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
      <el-col :lg="1">
      </el-col>
      <el-col :lg="11" :sm="24" :xs="24">
        <el-row>
          <RankingChart :startdate="data_start_date" :enddate="data_end_date" :diff="first_right_diff"
            :stockA_id="first_right_stockA_id" :stockB_id="first_right_stockB_id" :componentKey=1
            :result="first_right_result" />
        </el-row>
        <el-row class="" style="    margin-top:1%;">
          <el-table :data="probability_down" height="100%">
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
import RankingChart from "@/components/RankingChart.vue";

export default {

  name: "Ranking",
  components: {
    CompareChart,
    RankingChart
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
      componentKey: 0,
      firstcomponentKey: 0,
      first_left_diff: 0,
      first_left_stockA_id: '',
      first_left_stockB_id: '',
      first_left_result: '',
      first_right_diff: 0,
      first_right_stockA_id: '',
      first_right_stockB_id: '',
      first_right_result: '',

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
        console.log(this.probability_up[0].stockA_id)
        this.first_left_diff = this.probability_up[0].diff
        this.first_left_stockA_id = this.probability_up[0].stockA_id
        this.first_left_stockB_id = this.probability_up[0].stockB_id
        this.first_left_result = this.probability_up[0].stockA_name + "黃線漲，" + this.probability_up[0].stockB_name + "藍線，" + this.first_left_diff + "天後也跟著漲機率為" + this.probability_up[0].up

        this.first_right_diff = this.probability_down[0].diff
        this.first_right_stockA_id = this.probability_down[0].stockA_id
        this.first_right_stockB_id = this.probability_down[0].stockB_id
        this.first_right_result = this.probability_down[0].stockA_name + "黃線漲，" + this.probability_down[0].stockB_name + "藍線，" + this.first_right_diff + "天後也跟著跌機率為" + this.probability_down[0].down

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
  .el-row {
    justify-content: center;

  }
}

@media only screen and (max-width: 1200px) {}
</style>



 