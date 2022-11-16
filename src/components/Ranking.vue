<template>
  <div class="">
    <el-row style="    padding: 1% 0% 0% 0%">
      <el-col :lg="4" :sm="24" :xs="24">
        <div class="select">
          <el-button class="select-el-button" size="default" @click="show('up')" :class="[cur == 'up' ? 'color' : '']">
            漲機率
          </el-button>
          <el-button class="select-el-button" size="default" @click="show('down')"
            :class="[cur == 'down' ? 'color' : '']">
            跌機率
          </el-button>
        </div>
      </el-col>
      <el-col :lg="19" :sm="24" :xs="24">
        <el-row>
          <RankingChart :startdate="data_start_date" :enddate="data_end_date" :diff="first_left_diff"
            :stockA_id="first_left_stockA_id" :stockB_id="first_left_stockB_id" :componentKey=0
            :result="first_left_result" :stock_calculate_groups_id="stock_calculate_groups_id" :cur="cur" />
        </el-row>
        <div v-show="cur == 'up'">
          <el-row class="ranking">

            <el-table :data="probability_up" height="100%" v-loading="loading2" element-loading-text="讀取資料中"
              element-loading-background="rgba(0, 0, 0, 0.1)">
              <el-table-column prop="order" label="排行" sortable />

              <el-table-column prop="stockA_name" label="股票A">
                <template v-slot="scope">
                  <router-link :to="{ path: '/aboutstock/' + scope.row.stockA_id }">{{ scope.row.stockA_name }}
                  </router-link>
                </template>

              </el-table-column>

              <el-table-column prop="stockA_category" label="主類別">
                <template v-slot="scope">
                  <router-link :to="{ path: '/aboutstock/' + scope.row.stockA_category_id }">{{
                  scope.row.stockA_category
                  }}
                  </router-link>
                </template>
              </el-table-column>

              <el-table-column prop="stockB_name" label="股票B">
                <template v-slot="scope">
                  <router-link :to="{ path: '/aboutstock/' + scope.row.stockB_id }">{{ scope.row.stockB_name }}
                  </router-link>
                </template>
              </el-table-column>

              <el-table-column prop="stockB_category" label="主類別">
                <template v-slot="scope">
                  <router-link :to="{ path: '/aboutstock/' + scope.row.stockB_category_id }">{{
                  scope.row.stockB_category
                  }}
                  </router-link>
                </template>
              </el-table-column>

              <el-table-column prop="result" label="A->B漲" />
              <el-table-column label="操作">
                <template #default="scope">
                  <el-button size="default"
                    @click="setchartvalue(scope.row.diff, scope.row.stockA_id, scope.row.stockB_id, 1)">
                    圖表
                  </el-button>
                </template>
              </el-table-column>

            </el-table>
          </el-row>
        </div>
        <el-row>
          <RankingChart :startdate="data_start_date" :enddate="data_end_date" :diff="first_right_diff"
            :stockA_id="first_right_stockA_id" :stockB_id="first_right_stockB_id" :componentKey=1
            :result="first_right_result" :stock_calculate_groups_id="stock_calculate_groups_id" :cur="cur" />
        </el-row>
        <div v-show="cur == 'down'">

          <el-row class="ranking">

            <el-table :data="probability_down" height="100%" v-loading="loading2" element-loading-text="讀取資料中"
              element-loading-background="rgba(0, 0, 0, 0.1)">
              <el-table-column prop="order" label="排行" sortable />

              <el-table-column prop="stockA_name" label="股票A">
                <template v-slot="scope">
                  <router-link :to="{ path: '/aboutstock/' + scope.row.stockA_id }">{{ scope.row.stockA_name }}
                  </router-link>
                </template>

              </el-table-column>

              <el-table-column prop="stockA_category" label="主類別">
                <template v-slot="scope">
                  <router-link :to="{ path: '/aboutstock/' + scope.row.stockA_category_id }">{{
                  scope.row.stockA_category
                  }}
                  </router-link>
                </template>
              </el-table-column>

              <el-table-column prop="stockB_name" label="股票B">
                <template v-slot="scope">
                  <router-link :to="{ path: '/aboutstock/' + scope.row.stockB_id }">{{ scope.row.stockB_name }}
                  </router-link>
                </template>
              </el-table-column>

              <el-table-column prop="stockB_category" label="主類別">
                <template v-slot="scope">
                  <router-link :to="{ path: '/aboutstock/' + scope.row.stockB_category_id }">{{
                  scope.row.stockB_category
                  }}
                  </router-link>
                </template>
              </el-table-column>

              <el-table-column prop="result" label="A->B跌" />
              <el-table-column label="操作">
                <template #default="scope">
                  <el-button size="default"
                    @click="setchartvalue(scope.row.diff, scope.row.stockA_id, scope.row.stockB_id, 2)">
                    圖表
                  </el-button>
                </template>
              </el-table-column>
            </el-table>
          </el-row>
          <div class="box">
          </div>
        </div>
      </el-col>
      <el-col :lg="1" :xs="24" :sm="24">
      </el-col>
    </el-row>
  </div>
  <el-dialog customClass="el-dialog-width" v-model="dialogTableVisible" title="圖表" width="60%" destroy-on-close=true
    center=true>
    <CompareChart :startdate="data_start_date" :enddate="data_end_date" :diff="chart_diff" :stockA_id="chart_stockA_id"
      :stockB_id="chart_stockB_id" :componentKey="componentKey" :upordown="upordown" />
  </el-dialog>
</template>
<script>
import CompareChart from "@/components/CompareChart.vue";
import RankingChart from "@/components/RankingChart.vue";

export default {
  props: ["stock_calculate_groups_id"],

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
      upordown: 0,
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
      loading1: true,
      loading2: true,
      cur: 'up'
    };
  },

  created() {
    this.$watch(
      () => ({
        stock_calculate_groups_id: this.stock_calculate_groups_id,
      }),
      () => {
        this.loading1 = true
        this.loading2 = true
        this.axios
          .post("/api/stock/get_all_stock_probability", {
            stock_calculate_groups_id: this.stock_calculate_groups_id
          })
          .then((res) => {
            this.probability_up = []
            this.probability_down = []
            this.data_start_date = res.data.data_start_date
            this.data_end_date = res.data.data_end_date
            res.data.probability_up.forEach((probability_up) => {
              this.probability_up.push({
                stockA_id: probability_up.stockA_id,
                stockA_name: probability_up.stockA_name + "\n(" + probability_up.stockA_id + ")",
                stockA_category_id: probability_up.stockA_category_id,
                stockA_category: probability_up.stockA_category,
                stockB_id: probability_up.stockB_id,
                stockB_name: probability_up.stockB_name + "\n(" + probability_up.stockB_id + ")",
                stockB_category_id: probability_up.stockB_category_id,
                stockB_category: probability_up.stockB_category,
                diff: probability_up.diff,
                up: probability_up.up,
                order: probability_up.order,
                result: probability_up.diff + "天後 " + probability_up.up
              })
            })
            res.data.probability_down.forEach((probability_down) => {
              this.probability_down.push({
                stockA_id: probability_down.stockA_id,
                stockA_name: probability_down.stockA_name + "\n(" + probability_down.stockA_id + ")",
                stockA_category_id: probability_down.stockA_category_id,
                stockA_category: probability_down.stockA_category,
                stockB_id: probability_down.stockB_id,
                stockB_name: probability_down.stockB_name + "\n(" + probability_down.stockB_id + ")",
                stockB_category_id: probability_down.stockB_category_id,
                stockB_category: probability_down.stockB_category,
                diff: probability_down.diff,
                down: probability_down.down,
                order: probability_down.order,
                result: probability_down.diff + "天後 " + probability_down.down

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
            this.first_right_result = this.probability_down[0].stockA_name + "黃線跌，" + this.probability_down[0].stockB_name + "藍線，" + this.first_right_diff + "天後也跟著跌機率為" + this.probability_down[0].down

            this.loading1 = false
            this.loading2 = false
          })

      },
      { deep: true, immediate: true }
    );
  },
  methods: {
    setchartvalue(chart_diff, chart_stockA_id, chart_stockB_id, upordown) {
      this.chart_diff = chart_diff;
      this.chart_stockA_id = chart_stockA_id;
      this.chart_stockB_id = chart_stockB_id;
      this.dialogTableVisible = true;
      this.upordown = upordown;
      this.componentKey += 1;
    }
    ,
    show(input) {
      switch (input) {
        case 'up':
          this.cur = 'up'
          break;
        case 'down':
          this.cur = 'down'
          break;
      }
    }
  },

};
</script>
<style scoped>
.color {
  border-radius: 10px;
  background: linear-gradient(to left, #72b6fa 50%, lightblue 50%) right;
  background-size: 200%;
  transition: .5s ease-in-out;
  animation: movepoint1 1s;
  color: white;
}

@keyframes movepoint1 {
  0% {
    background-position: left;
  }
}

@media only screen and (min-width: 1200px) {
  .el-row {
    justify-content: center;

  }

  .el-row .ranking {
    margin-top: 3%;
    height: 30vh;
  }

  .select {
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
  }

  .select-el-button {
    background-color: #ffffff69;
    height: 50px;
    font-size: 2.5vh;
    width: 55%;
  }

}

@media only screen and (max-width: 1200px) {
  .el-button {
    background-color: #ffffff69;
    height: 40px;
    font-size: 2vh;
  }

  .select {
    margin-top: 20px;
  }

  .el-row .ranking {
    margin-top: 5%;
    height: 40vh;
  }

  .line {
    margin: 10% 0 5% 0;
    height: 3px;
    background-color: black;
  }
}
</style>



 