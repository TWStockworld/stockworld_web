<template>
  <el-row>
    <el-col :lg="10" :sm="24" :xs="24" class="high">
      <Tradingtest :stockid="stockid" />
    </el-col>
    <el-col :lg="14" :sm="24" :xs="24">
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
      stockid: this.$route.params.stockid,
      token: this.$Cookies.get("token"),
    };
  },
  name: "aboutstock",
  components: {
    AboutStock, Tradingtest
  },
};
</script>