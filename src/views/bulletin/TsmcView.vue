<template>
  <div>
    <LeftBulletin />
    <div class="RB1 ">
      <el-button @click="dialogTableVisible = true" class="corrbutton"
        >半導體製程設備</el-button
      >
      <el-dialog v-model="dialogTableVisible" title="相關度排行" width="50%">
        <Competition />
      </el-dialog>
    </div>
    <div class="RB2 ">
      <el-button @click="dialogTableVisible = true" class="corrbutton"
        >電力工程</el-button
      >
    </div>
    <div class="RB3 ">
      <el-button @click="dialogTableVisible = true" class="corrbutton"
        >無塵室工程</el-button
      >
    </div>
    <div class="RB4 ">
      <el-button @click="dialogTableVisible = true" class="corrbutton"
        >探針</el-button
      >
    </div>
    <div class="RB5 ">
      <el-button @click="dialogTableVisible = true" class="corrbutton"
        >光罩</el-button
      >
    </div>
    <div class="RB6 ">
      <el-button @click="dialogTableVisible = true" class="corrbutton"
        >矽晶圓</el-button
      >
    </div>
    <div class="RB7 ">
      <el-button @click="dialogTableVisible = true" class="corrbutton"
        >耗材&化學品</el-button
      >
    </div>
    <div class="RB8 ">
      <el-button @click="dialogTableVisible = true" class="corrbutton"
        >IC封測</el-button
      >
    </div>
    <div class="RB9 ">
      <el-button @click="dialogTableVisible = true" class="corrbutton"
        >高階SOC前端</el-button
      >
    </div>
    <div class="RB10 ">
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
import LeftBulletin from "@/components/LeftBulletin.vue";
import Competition from "@/components/Competition.vue";

export default {
  name: "tsmc",
  components: {
    LeftBulletin,
    Competition,
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
  display: inline-block;
  animation: movepoint1 8s infinite;
	-webkit-animation: movepoint1 8s infinite;
}
.RB2 {
  position: absolute;
  top: 33%;
  width: 36%;
  left: 13%;
  display: inline-block;
  animation: movepoint2 8s infinite;
	-webkit-animation: movepoint2 8s infinite;
}
.RB3 {
  position: absolute;
  top: 58%;
  width: 36%;
  left: 13%;
  display: inline-block;
  animation: movepoint3 8s infinite;
	-webkit-animation: movepoint3 8s infinite;
}
.RB4 {
  position: absolute;
  top: 78%;
  width: 36%;
  left: 24%;
  display: inline-block;
  animation: movepoint4 8s infinite;
	-webkit-animation: movepoint4 8s infinite;
}
.RB5 {
  position: absolute;
  top: 78%;
  width: 36%;
  left: 52%;
  display: inline-block;
  animation: movepoint4 8s infinite;
	-webkit-animation: movepoint4 8s infinite;
}
.RB6 {
  position: absolute;
  top: 58%;
  width: 36%;
  left: 62%;
  display: inline-block;
  animation: movepoint3 8s infinite;
	-webkit-animation: movepoint3 8s infinite;
}
.RB7 {
  position: absolute;
  top: 33%;
  width: 36%;
  left: 62%;
  display: inline-block;
  animation: movepoint2 8s infinite;
	-webkit-animation: movepoint2 8s infinite;
}
.RB8 {
  position: absolute;
  top: 20%;
  width: 36%;
  left: 52%;
  display: inline-block;
  animation: movepoint1 8s infinite;
	-webkit-animation: movepoint1 8s infinite;
}
.RB9 {
  position: absolute;
  top: 80%;
  width: 36%;
  left: 38%;
  display: inline-block;
  animation: movepoint5 8s infinite;
	-webkit-animation: movepoint5 8s infinite;
}
.RB10 {
  position: absolute;
  top: 18%;
  width: 36%;
  left: 38%;
  display: inline-block;
  animation: movepoint6 8s infinite;
	-webkit-animation: movepoint6 8s infinite;
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
@keyframes movepoint1 {
	70% {
		top: 19%;
	}
	100%
	 {
		top: 21%;
	}
}
@keyframes movepoint2{
  70% {
		top: 32%
	}
	100%
	 {
		top: 34%
	}
}
@keyframes movepoint3{
  70% {
		top: 57%
	}
	100%
	 {
		top: 59%
	}
}
@keyframes movepoint4{
  70% {
		top: 77%
	}
	100%
	 {
		top: 79%
	}
}
@keyframes movepoint5{
  70% {
		top: 79%
	}
	100%
	 {
		top: 81%
	}
}
@keyframes movepoint6{
  70% {
		top: 17%
	}
	100%
	 {
		top: 19%
	}
}
</style>