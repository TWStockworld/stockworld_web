<template>
  <div class="start">
    股票分析
    <el-link
      type="primary"
      class="startbutton"
      @click="start"
      :underline="false"
      >START</el-link
    >
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
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+TC&family=Press+Start+2P&display=swap");
.start {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 200px;
}
.startbutton {
  height: auto;
  font-size: 100px;
  cursor: pointer;
  font-family: "Press Start 2P", cursive;
  animation: OpacityBreath 2s ease-in-out infinite;
  opacity: 0.3;
}
@keyframes OpacityBreath {
  0% {
    opacity: 0.3;
  }

  50% {
    opacity: 0.65;
  }

  100% {
    opacity: 0.3;
  }
}
</style>
