<template>
  <div>
    <h5>股票分析</h5>
    <el-button type="text" class="startbutton" @click="start">START</el-button>
  </div>
</template>
<script>
export default {
  methods: {
    start() {
      this.$router.push("/home");
    },
  },
};
</script>
<style>
.startbutton {
  position: absolute;
  font-size: 200px;
  top: 65%;
  left: 37%;
  cursor: pointer;
}
h5{
  position: absolute;
  font-size: 180px;
  top: 0;
  left: 33%;
}
</style>
