<template>
  <div>
    <Leftbutton />
    <div class="RB1">
      <el-button @click="dialogTableVisible = true" class="corrbutton"
        >半導體製程設備</el-button
      >
      <el-dialog v-model="dialogTableVisible" title="相關度排行" width="50%">
        <Correlation />
      </el-dialog>
    </div>
    <div class="RB2">
      <el-button @click="dialogTableVisible = true" class="corrbutton"
        >電力工程</el-button
      >
    </div>
    <div class="RB3">
      <el-button @click="dialogTableVisible = true" class="corrbutton"
        >無塵室工程</el-button
      >
    </div>
    <div class="RB4">
      <el-button @click="dialogTableVisible = true" class="corrbutton"
        >探針</el-button
      >
    </div>
    <div class="RB5">
      <el-button @click="dialogTableVisible = true" class="corrbutton"
        >光罩</el-button
      >
    </div>
    <div class="RB6">
      <el-button @click="dialogTableVisible = true" class="corrbutton"
        >矽晶圓</el-button
      >
    </div>
    <div class="RB7">
      <el-button @click="dialogTableVisible = true" class="corrbutton"
        >耗材&化學品</el-button
      >
    </div>
    <div class="RB8">
      <el-button @click="dialogTableVisible = true" class="corrbutton"
        >IC封測</el-button
      >
    </div>
    <div class="RB9">
      <el-button @click="dialogTableVisible = true" class="corrbutton"
        >高階SOC前端</el-button
      >
    </div>
    <div class="RB10">
      <el-button @click="dialogTableVisible = true" class="corrbutton"
        >半導體檢測</el-button
      >
    </div>

    <div class="picture">
      <img alt="tsmc logo" src="@/assets/img/tsmc.png" style="width: 25%" />
    </div>
  </div>
</template>

<script>
import Leftbutton from "@/components/Leftbutton.vue";
import Correlation from "@/components/Correlation.vue";

export default {
  name: "tsmc",
  components: {
    Leftbutton,
    Correlation,
  },
  data() {
    return {
      dialogTableVisible: false,
    };
  },
};
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
.RB9 {
  position: absolute;
  top: 80%;
  width: 36%;
  left: 38%;
}
.RB10 {
  position: absolute;
  top: 18%;
  width: 36%;
  left: 38%;
}

.picture {
  position: absolute;
  top: 35%;
  left: 23%;
}
.corrbutton {
  width: 20%;
  height: 50px;
  font-size: 20px;
}
</style>