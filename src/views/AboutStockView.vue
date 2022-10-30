<template>
  <el-row>
    <el-col :lg="9" :sm="24" :xs="24" class="high">
      <Tradingtest :res1="res1" />
    </el-col>
    <el-col :lg="15" :sm="24" :xs="24">
      <AboutStock :res2="res2" :res3="res3" />
    </el-col>
  </el-row>
</template>

<script>
import AboutStock from "@/components/AboutStock.vue";
import Tradingtest from '@/components/Tradingtest.vue'
export default {
  data() {
    return {
      token: this.$cookies.get("token"),
      stock_id: this.$route.params.stockid,
      res1: '',
      res2: '',
      res3: '',
      now_stock_category_id: '',
    };
  },
  name: "aboutstock",
  components: {
    AboutStock, Tradingtest
  },

  created() {
    if (this.stock_id > 33) {
      this.axios
        .post("/api/stock/get_stock", {
          stock_id: this.stock_id,
        })
        .then((res1) => {
          this.res1 = res1;
          this.now_stock_category_id = res1.data.stock_category_id;
        })
    } else {
      this.stock_category_id = this.stock_id;
      this.now_stock_category_id = this.stock_category_id;
    }

    this.axios
      .post("/api/stock/get_stock_probability", {
        stock_id: this.stock_id,
        show_zero_diff: 0,
        stock_category_id: this.stock_category_id
      }).then((res2) => {
        this.res2 = res2
      });

  },
  watch: {
    '$route.params.stockid': {
      handler: function (stockid) {
        this.stock_id = stockid
      },
      deep: true,
      immediate: true
    },
    async stock_id() {
      if (this.stock_id > 33) {
        this.axios
          .post("/api/stock/get_stock", {
            stock_id: this.stock_id,
          })
          .then((res1) => {
            this.res1 = res1;
            this.now_stock_category_id = res1.data.stock_category_id;
          })
      } else {
        this.stock_category_id = this.stock_id;
        this.now_stock_category_id = this.stock_category_id;
      }

      this.axios
        .post("/api/stock/get_stock_probability", {
          stock_id: this.stock_id,
          show_zero_diff: 0,
          stock_category_id: this.stock_category_id
        }).then((res2) => {
          this.res2 = res2
        });
    },
    async now_stock_category_id() {
      this.axios
        .post("/api/stock/get_category_last_stock", {
          stock_category_id: this.now_stock_category_id,
          page: 0
        }).then((res3) => {
          this.res3 = res3
        })
    },
  }
}
</script>
