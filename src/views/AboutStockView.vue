<template>
  <el-row>
    <el-col :lg="9" :sm="24" :xs="24" class="high">
      <KlineChart :res1="res1" :stock_id="stock_id" />
    </el-col>
    <el-col :lg="15" :sm="24" :xs="24">
      <StockProbability :res2="res2" :res3="res3" :stock_id="stock_id" />
    </el-col>
  </el-row>
</template>

<script>
import StockProbability from "@/components/StockProbability.vue";
import KlineChart from '@/components/KlineChart.vue'
export default {
  data() {
    return {
      token: this.$cookies.get("token"),
      stock_id: this.$route.params.stockid,
      res1: '',
      res2: '',
      res3: '',

    };
  },
  name: "aboutstock",
  components: {
    StockProbability, KlineChart
  },

  watch: {
    '$route.params.stockid': {
      handler: function (stockid) {
        if (this.$route.name != "AboutStock") {
          return;
        }
        this.stock_id = stockid
        if (this.stock_id < 34) {
          this.stock_category_id = this.stock_id;
        }

        const get_stock = this.axios
          .post("/api/stock/get_stock", {
            stock_id: this.stock_id,
          });
        const get_stock_probability = this.axios
          .post("/api/stock/get_stock_probability", {
            stock_id: this.stock_id,
            show_zero_diff: 0,
            stock_category_id: this.stock_category_id
          });
        const get_category_last_stock = this.axios
          .post("/api/stock/get_category_last_stock", {
            stock_id: this.stock_id,
            stock_category_id: this.stock_category_id,
            page: 0
          });

        this.axios.all([get_stock, get_stock_probability, get_category_last_stock]).then(
          this.axios.spread((res1, res2, res3) => {
            this.res1 = res1
            this.res2 = res2
            this.res3 = res3
          })
        );

      },
      deep: true,
      immediate: true
    }
  },


}

</script>
