<template>
  <el-row>
    <el-col :lg="9" :sm="24" :xs="24" class="high">
      <Tradingtest :stock_id="stock_id" />
    </el-col>
    <el-col :lg="15" :sm="24" :xs="24">
      <AboutStock />
    </el-col>
  </el-row>
</template>

<script>
import AboutStock from "@/components/AboutStock.vue";
import Tradingtest from '@/components/Tradingtest.vue'
export default {
  data() {
    return {
      stock_id: this.$route.params.stock_id,
      token: this.$Cookies.get("token"),
    };
  },
  name: "aboutstock",
  components: {
    AboutStock, Tradingtest
  },
};
</script>
