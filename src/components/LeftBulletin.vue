<template>
  <div class="LB1">
    <el-main
      ><el-button
        @click="ranking"
        style="width: 100%; height: 50px; font-size: 19px"
        >關係度總排行</el-button
      ></el-main
    >
    <el-main
      ><el-button
        @click="tsmc"
        style="width: 100%; height: 50px; font-size: 20px"
        >台積電</el-button
      ></el-main
    >
    <el-main
      ><el-button style="width: 100%; height: 50px; font-size: 20px"
        >鴻海電動車</el-button
      ></el-main
    >
    <el-main
      ><el-button style="width: 100%; height: 50px; font-size: 20px"
        >電動車</el-button
      ></el-main
    >
  </div>
</template>
<script>
export default {
  methods: {
    ranking() {
      this.$router.push("/ranking");
    },
    tsmc() {
      this.$router.push("/tsmc");
    },
    sort() {
      this.$router.push("/sort");
    },
  },
};
</script>

<style>
.LB1 {
  position: absolute;
  left: 5%;
  width: 8%;
  line-height: 100px;
}
</style>
