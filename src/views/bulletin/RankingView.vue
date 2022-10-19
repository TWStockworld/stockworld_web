<template>
  <el-row class="bulletin_el-row">
    <el-col :xs="24" :sm="24" :lg="4">
      <LeftBulletin />
    </el-col>
    <el-col :xs="24" :sm="24" :lg="20" class="bulletin_right-col">
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
  data() {
    return {
      timer: '',
      value: false
    };
  },
  mounted() {
    window.addEventListener("wheel", this.onScroll);
    this.timer = setTimeout(this.get, 1000);
  },
  unmounted() {
    window.removeEventListener("wheel", this.onScroll);
    clearTimeout(this.timer);
  },
  methods: {
    get() {
      this.value = true;
    },
    onScroll(e) {
      if (this.value == true) {
        if (e.deltaY < 0) {
          console.log("scrolling up")
        } else if (e.deltaY > 0) {
          this.$router.push("/tsmc");
        }
      }
    },
  },
};
</script>
<style lang="css" src="@/assets/css/bulletin_margintop.css" scoped>

</style>

<style scoped>

</style>