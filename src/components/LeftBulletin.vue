<template>
  <div class="LB1">
    <ul>
      <li>
        <el-button @click="ranking" style="width: auto; height: 50px; font-size: 2vh">關係度總排行</el-button>
      </li>
      <li>
        <el-button @click="tsmc" style="width: auto; height: 50px; font-size: 2vh">台積電</el-button>
      </li>
      <li>
        <el-button style="width: auto; height: 50px; font-size: 2vh">鴻海電動車</el-button>
      </li>
      <li>
        <el-button style="width: auto; height: 50px; font-size: 2vh">電動車</el-button>
      </li>
      <li>
        <el-button style="width: auto; height: 50px; font-size: 2vh">電動車</el-button>
      </li>
      <li>
        <el-button style="width: auto; height: 50px; font-size: 2vh">電動車</el-button>
      </li>
      <li>
        <el-button style="width: auto; height: 50px; font-size: 2vh">電動車</el-button>
      </li>
      <li>
        <el-button style="width: auto; height: 50px; font-size: 2vh">電動車</el-button>
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
  },
};
</script>

<style>
@media only screen and (max-width: 1200px) {
  ul {
    list-style-type: none;
    width: 100%;
    overflow-x: scroll;
  }

  li {
    display: inline;

  }
}

@media only screen and (min-width: 1200px) {
  ul {
    list-style-type: none;
    height: 100vh;
    overflow-y: scroll;
  }

  .LB1 {
    position: relative;
    left: 0%;
    line-height: 100px;
    overflow: hidden
  }
}
</style>
