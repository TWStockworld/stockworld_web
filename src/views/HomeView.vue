<template>
  <div class="home">
    <el-row class="home1">
      <el-col :xs="24" :sm="24" :lg="4">
        <LeftBulletin />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import LeftBulletin from "@/components/LeftBulletin.vue";
export default {
  name: "HomeView",
  components: {
    LeftBulletin,
  },
};
</script>

<style>
.home1{
  z-index: -1;
}
</style>