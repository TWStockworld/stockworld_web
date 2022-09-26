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
  mounted() {
    window.addEventListener("wheel", this.onScroll)
  },
  beforeDestroy() {
    window.removeEventListener("wheel", this.onScroll)
  },
  methods: {
    onScroll(e) {
      if (e.deltaY < 0) {
        console.log("scrolling up")
      } else if (e.deltaY > 0) {
        this.$router.push("/tsmc");
      }
    },
  },
};
</script>
<style lang="css" src="@/assets/css/bulletin_margintop.css" scoped>

</style>

<style scoped>

</style>