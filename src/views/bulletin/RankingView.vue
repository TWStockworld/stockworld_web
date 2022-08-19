<template>
<el-row>
  <el-col :xs="24" :sm="24" :lg="4">
  <LeftBulletin />
  </el-col>
  <el-col :xs="24" :sm="24" :lg="20">
  <Stockkind />
  </el-col>
</el-row>
</template>

<script>
import LeftBulletin from "@/components/LeftBulletin.vue";
import Stockkind from "@/components/Stockkind.vue";

export default {
  components: {
    LeftBulletin,
    Stockkind,
  },
};
</script>
