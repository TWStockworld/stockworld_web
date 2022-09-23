<template>
  <div class="LB1">
    <ul class="leftbulletin_ul" @scroll="scrollevent">
      <li class="leftbulletin_li">
        <el-button @click="ranking" style="width: auto; height: 50px; font-size: 2vh">關係度總排行</el-button>
      </li>
      <li class="leftbulletin_li">
        <el-button @click="tsmc" style="width: auto; height: 50px; font-size: 2vh">台積電</el-button>
      </li>
      <li class="leftbulletin_li">
        <el-button style="width: auto; height: 50px; font-size: 2vh">鴻海電動車</el-button>
      </li>
      <li class="leftbulletin_li">
        <el-button style="width: auto; height: 50px; font-size: 2vh">電動車</el-button>
      </li>
      <li class="leftbulletin_li">
        <el-button style="width: auto; height: 50px; font-size: 2vh">電動車</el-button>
      </li>
      <li class="leftbulletin_li">
        <el-button style="width: auto; height: 50px; font-size: 2vh">電動車</el-button>
      </li>
      <li class="leftbulletin_li">
        <el-button style="width: auto; height: 50px; font-size: 2vh">電動車</el-button>
      </li>
      <li class="leftbulletin_li">
        <el-button style="width: auto; height: 50px; font-size: 2vh">電動車</el-button>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  methods: {
    scrollevent(){
      const li = getElementById("li")
      li.addEventListener("scroll", () => {
        const scrolled = document.getElementsById("li").scrollY;
        console.log(scrolled);      
      })
    },
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

<style scoped>
@media only screen and (max-width: 1200px) {
  .leftbulletin_ul {
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: 8rem ;
    grid-gap: 3rem;
    list-style-type: none;
    width: 100%;
    overflow-x: scroll;
  }

  .leftbulletin_li {
    display: inline;
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
