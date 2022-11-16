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
          <el-col :lg="1" :sm="24" :xs="24" />

          <el-col :lg="4" :sm="24" :xs="24">
            <h3 class="demonstration">結束日</h3>
            <el-date-picker v-model="enddate" type="date" placeholder="Pick a day" />
          </el-col>
          <el-col :lg="1" :sm="24" :xs="24" />

          <el-col :lg="4" :sm="24" :xs="24">
            <h3 class="demonstration">股票主類別</h3>
            <el-select v-model="stock_category_id" filterable placeholder="請選擇">
              <el-option v-for="category in stock_category_options" :key="category.id" :label="category.category"
                :value="category.id">
              </el-option>
            </el-select>
          </el-col>
          <el-col :lg="1" :sm="24" :xs="24" />

          <el-col :lg="4" :sm="24" :xs="24">
            <h3 class="demonstration">股票A</h3>
            <el-select v-model="stockA_id" filterable placeholder="請選擇">
              <el-option v-for="stock in stockA_options" :key="stock.stock_id"
                :label="stock.stock_name + '(' + stock.stock_id + ')'" :value="stock.stock_id">
              </el-option>
            </el-select>
          </el-col>
          <el-col :lg="1" :sm="24" :xs="24" />

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
        <h3>{{ result }}</h3>
        <el-row v-loading="loading" element-loading-text="讀取資料中" element-loading-background="rgba(0, 0, 0, 0.1)">
          <el-col :xs="24" :sm="24" :lg="12">
            <h3 style="margin-bottom: 2%;">{{ result1 }}</h3>
            <div class="pcchart" v-if="this.out_up_stockA_datas != null">
              <Chart :stockA_datas="out_up_stockA_datas" :stockB_datas="out_up_stockB_datas" :componentKey="0" />
            </div>
            <h3 v-html="up_list"></h3>

          </el-col>
          <el-col :xs="24" :sm="24" :lg="12">
            <h3 style="margin-bottom: 2%;">{{ result2 }}</h3>
            <div class="pcchart" v-if="this.out_down_stockA_datas != null">
              <Chart :stockA_datas="out_down_stockA_datas" :stockB_datas="out_down_stockB_datas" :componentKey="1" />
            </div>
            <h3 v-html="down_list"></h3>
          </el-col>
        </el-row>
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
      stockA_id: "2330",
      stockB_id: "1101",
      result: "",
      result1: "",
      result2: "",
      move: false,
      stock_category_options: [],
      stockA_options: [],
      stockB_options: [],
      out_up_stockA_datas: null,
      out_up_stockB_datas: [],
      out_down_stockA_datas: null,
      out_down_stockB_datas: [],
      up_list: '',
      down_list: '',
      componentKey: 0,
      diffs: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      vv: 0,
      loading: false
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
      this.result = "";
      this.result1 = "";
      this.result2 = "";
      this.out_up_stockA_datas = null;
      this.out_down_stockA_datas = null;
      this.up_list = "";
      this.down_list = "";
      if (this.stockA_id != "" && this.stockB_id != "") {
        this.loading = true;
        this.axios
          .post("/api/stock/cal_stock_withoutdiff", {
            startdate: this.startdate,
            enddate: this.enddate,
            stockA_id: this.stockA_id,
            stockB_id: this.stockB_id,
          })
          .then((response) => {
            console.log(response.data);
            if (response.data.out_up_stockA_datas == "") {
              this.vv++;
              if (this.vv % 2 == 1) {
                this.result = '兩股筆數不同 無法比較';

              } else {
                this.result = '無法比較 因兩股筆數不同';
              }


            } else {
              this.result1 = response.data.up_sendresult;
              this.result2 = response.data.down_sendresult;
              this.out_up_stockA_datas = response.data.out_up_stockA_datas;
              this.out_up_stockB_datas = response.data.out_up_stockB_datas;
              this.out_down_stockA_datas = response.data.out_down_stockA_datas;
              this.out_down_stockB_datas = response.data.out_down_stockB_datas;
              var key = 0;
              response.data.up_list.map((data) => {
                if (key % 4 == 0) {
                  this.up_list += key + "天:" + data + "%<br>";
                } else {
                  this.up_list += key + "天:" + data + "%   ";
                }
                key++;
              });
              key = 0
              response.data.down_list.map((data) => {
                if (key % 4 == 0) {
                  this.down_list += key + "天:" + data + "%<br>";
                } else {
                  this.down_list += key + "天:" + data + "%   ";
                } key++;
              });
            }


            this.loading = false;
          });
      } else {
        this.result = "請選擇股票A 與 股票B";
      }
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
    width: 80%;
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
    margin-top: 1%;
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
