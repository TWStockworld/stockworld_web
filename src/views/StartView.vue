<template>
  <div class="start">
    股票分析
    <el-link type="primary" class="startbutton" @click="start" :underline="false">
      START
    </el-link>
  </div>
  <div class="slide"></div>
</template>
<script>
export default {
  methods: {
    start() {
      this.$router.push({
        name: 'bulletin',
        params: {
          name: 'ranking',
        }
      });
    },
  },
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+TC&family=Press+Start+2P&display=swap");

@media only screen and (max-width: 768px) {
  .start {
    font-size: 1000%;
    height: 100vh;
  }

  .startbutton {
    height: auto;
    font-size: 55px;
    cursor: pointer;
    font-family: "Press Start 2P", cursive !important;
    animation: OpacityBreath 2s ease-in-out infinite;
    opacity: 0.3;
  }
}

@media only screen and (min-width: 768px) {
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
    font-family: "Press Start 2P", cursive !important;
    animation: OpacityBreath 2s ease-in-out infinite;
    opacity: 0.3;
  }



  .start:active {
    position: relative;
    width: 100%;
    height: 100%;
    animation-name: slide;
    animation-duration: 2s;
  }

  @keyframes slide {
    0% {
      left: 0%;
    }

    100% {
      left: 100%;
    }
  }
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
