<template>
  <div class="LB1">
    <el-row>
      <el-col :xs="6" :sm="6" :lg="24">
        <el-main
          ><el-button
            @click="ranking"
            style="width: auto; height: 50px; font-size: 2vh"
            >關係度總排行</el-button
          ></el-main
        >
      </el-col>
      <el-col :xs="6" :sm="6" :lg="24">
        <el-main
          ><el-button
            @click="tsmc"
            style="width: auto; height: 50px; font-size: 2vh"
            >台積電</el-button
          ></el-main
        >
      </el-col>
      <el-col :xs="6" :sm="6" :lg="24">
        <el-main
          ><el-button style="width: auto; height: 50px; font-size: 2vh"
            >鴻海電動車</el-button
          ></el-main
        >
      </el-col>
      <el-col :xs="6" :sm="6" :lg="24">
        <el-main
          ><el-button style="width: auto; height: 50px; font-size: 2vh"
            >電動車</el-button
          ></el-main
        >
      </el-col>
      
    </el-row>
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
@media only screen and (min-width: 1200px) {
  .LB1 {
    position: relative;
    left: 0%;
    line-height: 100px;
    overflow: hidden
  }
}
</style>
