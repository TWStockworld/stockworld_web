<template>
  <div class="LB1">
    <ul class="leftbulletin_ul">
      <p>{{this.$route.path}}</p>
      <li class="leftbulletin_li" :class="[ this.$route.path=='/ranking' ? 'select': '']">
        <el-button @click="ranking" style="width: auto; height: 50px; font-size: 2vh">關係度總排行</el-button>
      </li>
      <li class="leftbulletin_li">
        <el-button @click="tsmc" style="width: auto; height: 50px; font-size: 2vh">台積電</el-button>
      </li>
      <li class="leftbulletin_li">
        <el-button @click="HHcar" style="width: auto; height: 50px; font-size: 2vh">鴻海電動車</el-button>
      </li>
      <li class="leftbulletin_li">
        <el-button @click="car" style="width: auto; height: 50px; font-size: 2vh">電動車</el-button>
      </li>
      <li class="leftbulletin_li">
        <el-button @click="meta" style="width: auto; height: 50px; font-size: 2vh">元宇宙概念股</el-button>
      </li>
      <li class="leftbulletin_li">
        <el-button @click="ic" style="width: auto; height: 50px; font-size: 2vh">IC設計產業</el-button>
      </li>
      <li class="leftbulletin_li">
        <el-button @click="cloud" style="width: auto; height: 50px; font-size: 2vh">雲端相關</el-button>
      </li>
      <li class="leftbulletin_li">
        <el-button @click="city" style="width: auto; height: 50px; font-size: 2vh">智慧城市</el-button>
      </li>
      <li class="leftbulletin_li">
        <el-button @click="internet" style="width: auto; height: 50px; font-size: 2vh">互聯網</el-button>
      </li>
    </ul>
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
    HHcar(){
      this.$router.push("/HHcar");
    },
    car(){
      this.$router.push("/car");
    },
    meta(){
      this.$router.push("/meta");
    },
    ic(){
      this.$router.push("/IC");
    },
    cloud(){
      this.$router.push("/cloud");
    },
    city(){
      this.$router.push("/city");
    },
    internet(){
      this.$router.push("/internet");
    },
  },
};
</script>

<style scoped>
.select {
  background-color: red;
  background: linear-gradient(to left, salmon 50%, lightblue 50%) right;
  background-size: 200%;
  transition: .5s ease-in-out;
  animation: movepoint1 1s;
}


@keyframes movepoint1 {
  0% {
    background-position: left;
  }

}

@media only screen and (max-width: 1200px) {
  .leftbulletin_ul {
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: 8rem;
    grid-gap: 3rem;
    list-style-type: none;
    width: 100%;
    overflow-x: scroll;
  }

  .leftbulletin_li {
    display: inline;

  }
  .leftbulletin_li1 {
    display: inline;
    background-color: brown;
  }
}

@media only screen and (min-width: 1200px) {
  .leftbulletin_ul {
    list-style-type: none;
    height: 100vh;
    overflow-y: scroll;
  }

  .LB1 {
    position: relative;
    left: 0%;
    line-height: 100px;

  }
}
</style>
