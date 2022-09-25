<template>
  <div>
    <el-form @submit.prevent="cal">
      <div class="form-group">
        <div class="demo-date-picker">
          <div class="block">
            <span class="demonstration">開始日</span>
            <el-date-picker v-model="startdate" type="date" placeholder="Pick a day" />
          </div>
          <div class="block">
            <span class="demonstration">結束日</span>
            <el-date-picker v-model="enddate" type="date" placeholder="Pick a day" />
          </div>
          <div class="block">
            <span class="demonstration">相差日(實際開盤天)</span>
            <el-input v-model="diff" placeholder="輸入數字" />
          </div>
          <div class="block">
            <span class="demonstration">股票種類</span>
            <el-select v-model="stock_category_id" filterable placeholder="請選擇">
              <el-option v-for="category in stock_category_options" :key="category.id" :label="category.category"
                :value="category.id">
              </el-option>
            </el-select>
          </div>
          <div class="block">
            <span class="demonstration">股票A</span>
            <el-select v-model="stockA" filterable placeholder="請選擇">
              <el-option v-for="stock in stockA_options" :key="stock.stock_id"
                :label="stock.stock_name + '(' + stock.stock_id + ')'" :value="stock.stock_id">
              </el-option>
            </el-select>
          </div>
          <div class="block">
            <span class="demonstration">股票B</span>
            <el-select v-model="stockB" filterable placeholder="請選擇">
              <el-option v-for="stock in stockB_options" :key="stock.stock_id"
                :label="stock.stock_name + '(' + stock.stock_id + ')'" :value="stock.stock_id">
              </el-option>
            </el-select>
          </div>
        </div>
        <el-button plain type="primary" native-type="submit">送出</el-button>
      </div>
      <p>{{ result }}</p>
      <div v-if="stockA_datas.length != 0">
        <Chart :stockA_datas="stockA_datas" :stockB_datas="stockB_datas" :key="componentKey" />
      </div>
    </el-form>
  </div>
</template>

<script>
import Chart from "@/components/Chart.vue";

export default {
  name: "CalculateView",
  data() {
    return {
      token: this.$Cookies.get("token"),
      startdate: "2021-01-01",
      enddate: "2021-12-01",
      diff: "2",
      stock_category_id: 1,
      stockA: "",
      stockB: "",
      result: "test",
      stock_category_options: [],
      stockA_options: [],
      stockB_options: [],
      stockA_datas: [],
      stockB_datas: [],
      componentKey: 0,
    };
  },
  mounted() {
    const get_stock_category = this.axios.get(
      "https://stock.bakerychu.com/api/stock/get_stock_category"
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
      })
    );
  },
  watch: {
    async stock_category_id() {
      this.stockA = "";
      this.stockB = "";
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
          stockA: this.stockA,
          stockB: this.stockB,
        })
        .then((response) => {
          console.log(response.data);

          this.result = response.data.success;
          this.stockA_datas = response.data.stockA_datas;
          this.stockB_datas = response.data.stockB_datas;
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
.block {
  z-index: 1;
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
</style>
