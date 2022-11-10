<template>
  <el-row class="back">
    <div class="cal">
      <el-form @submit.prevent="cal">
        <div class="demo-date-picker"> </div>
        <el-row>
          <el-col :lg="4" :sm="24" :xs="24">
            <h3 class="demonstration">開始日</h3>
            <el-date-picker v-model="startdate" type="date" placeholder="Pick a day" />
          </el-col>
          <el-col :lg="4" :sm="24" :xs="24">
            <h3 class="demonstration">結束日</h3>
            <el-date-picker v-model="enddate" type="date" placeholder="Pick a day" />
          </el-col>
          <el-col :lg="4" :sm="24" :xs="24">
            <h3 class="demonstration">相差日(實際開盤天)</h3>
            <el-select v-model="diff" filterable placeholder="請選擇數字">
              <el-option v-for="diff in diffs" :key="diff" :label="diff" :value="diff">
              </el-option>
            </el-select>
          </el-col>
          <el-col :lg="4" :sm="24" :xs="24">
            <h3 class="demonstration">股票種類</h3>
            <el-select v-model="stock_category_id" filterable placeholder="請選擇">
              <el-option v-for="category in stock_category_options" :key="category.id" :label="category.category"
                :value="category.id">
              </el-option>
            </el-select>
          </el-col>
          <el-col :lg="4" :sm="24" :xs="24">
            <h3 class="demonstration">股票A</h3>
            <el-select v-model="stockA_id" filterable placeholder="請選擇">
              <el-option v-for="stock in stockA_options" :key="stock.stock_id"
                :label="stock.stock_name + '(' + stock.stock_id + ')'" :value="stock.stock_id">
              </el-option>
            </el-select>
          </el-col>
          <el-col :lg="4" :sm="24" :xs="24">
            <h3 class="demonstration">股票B</h3>
            <el-select v-model="stockB_id" filterable placeholder="請選擇">
              <el-option v-for="stock in stockB_options" :key="stock.stock_id"
                :label="stock.stock_name + '(' + stock.stock_id + ')'" :value="stock.stock_id">
              </el-option>
            </el-select>

          </el-col>

        </el-row>


        <el-button plain type="primary" native-type="submit">送出</el-button>
        <h3 style="margin-bottom: 2%;">{{ result }}</h3>
        <div class="pcchart" v-if="stockA_datas.length != 0">
          <Chart :stockA_datas="stockA_datas" :stockB_datas="stockB_datas" :real_diff="real_diff" :move="move"
            :key="componentKey" />
        </div>
      </el-form>
    </div>
  </el-row>
</template>

<script>
import Chart from "@/components/Chart.vue";

export default {
  name: "CalculateView",
  data() {
    return {
      token: this.$cookies.get("token"),
      startdate: "2018-01-01",
      enddate: "2022-10-01",
      diff: "0",
      stock_category_id: 0,
      stockA_id: "",
      stockB_id: "",
      result: "",
      move: false,
      stock_category_options: [],
      stockA_options: [],
      stockB_options: [],
      stockA_datas: [],
      stockB_datas: [],
      componentKey: 0,
      real_diff: 0,
      diffs: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    };
  },
  created() {
    const get_stock_category = this.axios.get(
      "/api/stock/get_stock_category"
    );
    const get_stock_name = this.axios.post(
      "/api/stock/get_stock_name", {
      stock_category_id: this.stock_category_id,
    }
    );

    this.axios.all([get_stock_category, get_stock_name]).then(
      this.axios.spread((res1, res2) => {
        this.stock_category_options = res1.data.success;
        this.stockA_options = res2.data.success;
        this.stockB_options = res2.data.success;
        this.stock_category_options.unshift({
          "id": 0,
          "category": "全部，不分類",
        });
      })
    );
  },
  watch: {
    async stock_category_id() {
      this.stockA_id = "";
      this.stockB_id = "";
      this.axios.post(
        "/api/stock/get_stock_name", {
        stock_category_id: this.stock_category_id,
      }).then((response) => {
        console.log(response.data);
        this.stockA_options = response.data.success;
        this.stockB_options = response.data.success;
      });
    }
  },
  methods: {
    cal() {
      this.axios
        .post("/api/stock/cal_stock", {
          startdate: this.startdate,
          enddate: this.enddate,
          diff: this.diff,
          stock_category_id: this.stock_category_id,
          stockA_id: this.stockA_id,
          stockB_id: this.stockB_id,
        })
        .then((response) => {
          console.log(response.data);

          this.result = response.data.success;
          this.stockA_datas = response.data.stockA_datas;
          this.stockB_datas = response.data.stockB_datas;
          this.real_diff = response.data.real_diff;


          this.componentKey += 1;
        });
    },
  },
  components: {
    Chart,
  },
};
</script>
<style scoped>
@media only screen and (max-width: 768px) {
  .cal {
    height: 85vh;
    background-color: #ffffff5e;
    border-radius: 30px;
    width: 100%;
  }

  .el-col,
  .el-button {
    margin-top: 2%;
  }
}

@media only screen and (min-width: 768px) {
  .pcchart {
    width: 50%;
    margin: auto;
  }

  .cal {
    height: 85vh;
    background-color: #ffffff5e;
    border-radius: 30px;
    width: 100%;
  }

  .el-col,
  .el-button {
    margin-top: 5%;
  }
}


.demo-date-picker {
  display: flex;
  width: 100%;
  padding: 0;
  flex-wrap: wrap;
}

.demo-date-picker .block {
  padding: 30px 0;
  text-align: center;
  border-right: solid 1px var(--el-border-color);
  flex: 1;
}

.demo-date-picker .block:last-child {
  border-right: none;
}

.demo-date-picker .demonstration {
  display: block;
  color: var(--el-text-color-secondary);
  font-size: 14px;
  margin-bottom: 20px;
}

.back {
  padding: 0 1% 15% 1%;
}
</style>
