<template>
  <div class="RB1">
    <el-button @click="dialogTableVisible = true">相關度排行</el-button>
    <el-dialog v-model="dialogTableVisible" title="相關度排行" width="50%" class="dialog">
      <correlation />
    </el-dialog>
  </div>
  <div class="RB2">
    <el-button @click="dialogTableVisible = true">SU3CL3RWEER</el-button>
  </div>
  <div class="RB3">
    <el-button @click="dialogTableVisible = true">SU3CL3RWEER</el-button>
  </div>
  <div class="RB4">
    <el-button @click="dialogTableVisible = true">SU3CL3RWEER</el-button>
  </div>
  <div class="RB5">
    <el-button @click="dialogTableVisible = true">SU3CL3RWEER</el-button>
  </div>
  <div class="RB6">
    <el-button @click="dialogTableVisible = true">SU3CL3RWEER</el-button>
  </div>
  <div class="RB7">
    <el-button @click="dialogTableVisible = true">SU3CL3RWEER</el-button>
  </div>
  <div class="RB8">
    <el-button @click="dialogTableVisible = true">SU3CL3RWEER</el-button>
  </div>
  <div class="picture">
    <img alt="tsmc logo" src="../assets/tsmc.png" />
  </div>
</template>
<script>
import correlation from "@/components/correlation.vue";
export default {
  components: {
    correlation,
  },
   data() {
    return {
       dialogTableVisible: false
    };
  },
}
</script>

<style>
.RB1 {
  position: absolute;
  top: 20%;
  width: 36%;
  left: 24%;
}
.RB2 {
  position: absolute;
  top: 33%;
  width: 36%;
  left: 13%;
}
.RB3 {
  position: absolute;
  top: 58%;
  width: 36%;
  left: 13%;
}
.RB4 {
  position: absolute;
  top: 78%;
  width: 36%;
  left: 24%;
}
.RB5 {
  position: absolute;
  top: 78%;
  width: 36%;
  left: 52%;
}
.RB6 {
  position: absolute;
  top: 58%;
  width: 36%;
  left: 62%;
}
.RB7 {
  position: absolute;
  top: 33%;
  width: 36%;
  left: 62%;
}
.RB8 {
  position: absolute;
  top: 20%;
  width: 36%;
  left: 52%;
}
.picture {
  position: absolute;
  top: 35%;
  width: 700px;
  left: 38%;
}
.dialog {
  position: fixed;
  background-color: transparent;
}
</style>
