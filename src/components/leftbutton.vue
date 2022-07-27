<template>
  <div class="LB1" >
    <el-main><el-button @click="allrank" style="width:100%; height:50px; font-size:19px;">關係度總排行</el-button></el-main>
    <el-main><el-button @click="tsmc" style="width:100%; height:50px; font-size:20px;">台積電</el-button></el-main>
    <el-main><el-button @click="sort" style="width:100%; height:50px; font-size:20px;">類別</el-button></el-main>
    <el-main><el-button style="width:100%; height:50px; font-size:20px;">我是按鈕</el-button></el-main>
  </div>
</template>
<script>
export default {
  methods: {
    allrank() {
      this.$router.push("/allrank");
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
