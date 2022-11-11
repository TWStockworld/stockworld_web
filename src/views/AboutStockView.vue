<template>
  <el-row>
    <el-col class="leftcol high" :lg="9" :sm="24" :xs="24">
      <KlineChart :res1="res1" :stock_id="stock_id" />
    </el-col>

    <el-col class="rightcol" :lg="15" :sm="24" :xs="24">
      <StockProbability :res2="res2" :res3="res3" :stock_id="stock_id" @pageupdate="pageupdate"
        :stock_calculate_groups_id="stock_calculate_groups_id" />
    </el-col>
  </el-row>
</template>

<script>
import StockProbability from "@/components/StockProbability.vue";
import KlineChart from '@/components/KlineChart.vue'
export default {
  props: ["stock_calculate_groups_id"],
  data() {
    return {
      token: this.$cookies.get("token"),
      stock_id: this.$route.params.stockid,
      page: 0,
      stock_category_id: '',
      res1: '',
      res2: '',
      res3: '',
      abortController: new AbortController()
    };
  },
  name: "aboutstock",
  components: {
    StockProbability, KlineChart
  },
  methods: {
    pageupdate() {
      this.page++
      console.log(this.page)
    }
  },
  beforeDestroy() {
    this.abortController.abort()
  },
  watch: {
    // stock_id: function () {
    //   this.abortController.abort()

    // },
    '$route.params.stockid': {
      handler: function (stock_id) {

        if (this.$route.name != "aboutstock") {
          return;
        }
        this.page = 0
        this.stock_id = stock_id
        this.res1 = ''
        this.res2 = ''
        this.res3 = ''
        if (this.stock_id < 34) {
          this.stock_category_id = this.stock_id;
        }

        const get_stock = this.axios
          .post("/api/stock/get_stock", {
            stock_id: this.stock_id,
          }, {
            signal: this.abortController.signal
          });
        const get_stock_probability = this.axios
          .post("/api/stock/get_stock_probability", {
            stock_id: this.stock_id,
            show_zero_diff: 0,
            stock_category_id: this.stock_category_id,
            stock_calculate_groups_id: this.stock_calculate_groups_id
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
    },
    'stock_calculate_groups_id': {
      handler: function () {
        if (this.$route.name != "aboutstock") {
          return;
        }
        this.page = 0
        if (this.stock_id < 34) {
          this.stock_category_id = this.stock_id;
        }

        const get_stock_probability = this.axios
          .post("/api/stock/get_stock_probability", {
            stock_id: this.stock_id,
            show_zero_diff: 0,
            stock_category_id: this.stock_category_id,
            stock_calculate_groups_id: this.stock_calculate_groups_id
          });
        const get_category_last_stock = this.axios
          .post("/api/stock/get_category_last_stock", {
            stock_id: this.stock_id,
            stock_category_id: this.stock_category_id,
            page: 0
          });

        this.axios.all([get_stock_probability, get_category_last_stock]).then(
          this.axios.spread((res2, res3) => {
            this.res2 = res2
            this.res3 = res3
          })
        );

      },
      deep: true,
    },
    page: function (page) {
      this.axios
        .post("/api/stock/get_category_last_stock", {
          stock_id: this.stock_id,
          stock_category_id: this.stock_category_id,
          page: this.page
        }).then((res3) => {
          this.res3 = res3
        })
    },
  }

}

</script>
<style scoped>
@media only screen and (max-width: 768px) {
  .rightcol {
    margin-top: 5%;
  }
}

@media only screen and (min-width: 768px) {
  .el-row {
    padding: 0 1% 15% 1%;
    height: 100vh;
  }

}

.rightcol {
  background-color: #ffffff5e;
  border-radius: 30px;

}

.leftcol {
  background-color: #ffffff5e;
  border-radius: 30px;
}
</style>