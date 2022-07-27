<template>
  <nav v-if="currentroute!='/'">
    <router-link to="/home"> home </router-link> |
    <router-link to="/calculate">
      <el-button plain type="primary" native-type="submit">calculate</el-button>
    </router-link>
    |
    <router-link to="/pm25">
      <el-button plain type="primary" native-type="submit">pm25</el-button>
    </router-link>
    |
    <router-link to="/aboutstock">
      <el-button plain type="primary" native-type="submit">關於股票</el-button>
    </router-link>
    |
    <router-link to="/register">
      <el-button plain type="primary" native-type="submit">註冊</el-button>
    </router-link>
    |
    <router-link to="/login">
      <el-button plain type="primary" native-type="submit">登入</el-button>
    </router-link>
    |
    <router-link to="/login">
      <el-button plain type="primary" native-type="submit">登出</el-button>
    </router-link>
    |
  </nav>
</template>

<script>
export default {
   props: ["currentroute"],
};
</script>

<style>
#app {
  font-family: "Noto Sans TC", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  border-bottom: 3px solid;
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #000000;
}

@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+TC&display=swap");
.word {
  font-family: "Noto Sans TC", sans-serif;
}
.bak {
  background-color: #6ea5e9;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 100 60'%3E%3Cg %3E%3Crect fill='%236ea5e9' width='11' height='11'/%3E%3Crect fill='%2371a6e8' x='10' width='11' height='11'/%3E%3Crect fill='%2374a7e8' y='10' width='11' height='11'/%3E%3Crect fill='%2377a8e7' x='20' width='11' height='11'/%3E%3Crect fill='%237aaae6' x='10' y='10' width='11' height='11'/%3E%3Crect fill='%237dabe5' y='20' width='11' height='11'/%3E%3Crect fill='%2380ace5' x='30' width='11' height='11'/%3E%3Crect fill='%2383ade4' x='20' y='10' width='11' height='11'/%3E%3Crect fill='%2386aee3' x='10' y='20' width='11' height='11'/%3E%3Crect fill='%2388b0e3' y='30' width='11' height='11'/%3E%3Crect fill='%238bb1e2' x='40' width='11' height='11'/%3E%3Crect fill='%238db2e1' x='30' y='10' width='11' height='11'/%3E%3Crect fill='%2390b3e0' x='20' y='20' width='11' height='11'/%3E%3Crect fill='%2392b4e0' x='10' y='30' width='11' height='11'/%3E%3Crect fill='%2395b5df' y='40' width='11' height='11'/%3E%3Crect fill='%2397b7de' x='50' width='11' height='11'/%3E%3Crect fill='%239ab8de' x='40' y='10' width='11' height='11'/%3E%3Crect fill='%239cb9dd' x='30' y='20' width='11' height='11'/%3E%3Crect fill='%239ebadc' x='20' y='30' width='11' height='11'/%3E%3Crect fill='%23a1bcdb' x='10' y='40' width='11' height='11'/%3E%3Crect fill='%23a3bddb' y='50' width='11' height='11'/%3E%3Crect fill='%23a5beda' x='60' width='11' height='11'/%3E%3Crect fill='%23a7bfd9' x='50' y='10' width='11' height='11'/%3E%3Crect fill='%23aac0d8' x='40' y='20' width='11' height='11'/%3E%3Crect fill='%23acc2d8' x='30' y='30' width='11' height='11'/%3E%3Crect fill='%23aec3d7' x='20' y='40' width='11' height='11'/%3E%3Crect fill='%23b0c4d6' x='10' y='50' width='11' height='11'/%3E%3Crect fill='%23b2c5d5' x='70' width='11' height='11'/%3E%3Crect fill='%23b4c7d5' x='60' y='10' width='11' height='11'/%3E%3Crect fill='%23b6c8d4' x='50' y='20' width='11' height='11'/%3E%3Crect fill='%23b8c9d3' x='40' y='30' width='11' height='11'/%3E%3Crect fill='%23bacad2' x='30' y='40' width='11' height='11'/%3E%3Crect fill='%23bccbd1' x='20' y='50' width='11' height='11'/%3E%3Crect fill='%23becdd1' x='80' width='11' height='11'/%3E%3Crect fill='%23c0ced0' x='70' y='10' width='11' height='11'/%3E%3Crect fill='%23c2cfcf' x='60' y='20' width='11' height='11'/%3E%3Crect fill='%23c4d1ce' x='50' y='30' width='11' height='11'/%3E%3Crect fill='%23c6d2ce' x='40' y='40' width='11' height='11'/%3E%3Crect fill='%23c8d3cd' x='30' y='50' width='11' height='11'/%3E%3Crect fill='%23cad4cc' x='90' width='11' height='11'/%3E%3Crect fill='%23ccd6cb' x='80' y='10' width='11' height='11'/%3E%3Crect fill='%23ced7ca' x='70' y='20' width='11' height='11'/%3E%3Crect fill='%23d0d8c9' x='60' y='30' width='11' height='11'/%3E%3Crect fill='%23d1d9c9' x='50' y='40' width='11' height='11'/%3E%3Crect fill='%23d3dbc8' x='40' y='50' width='11' height='11'/%3E%3Crect fill='%23d5dcc7' x='90' y='10' width='11' height='11'/%3E%3Crect fill='%23d7ddc6' x='80' y='20' width='11' height='11'/%3E%3Crect fill='%23d9dec5' x='70' y='30' width='11' height='11'/%3E%3Crect fill='%23dbe0c5' x='60' y='40' width='11' height='11'/%3E%3Crect fill='%23dce1c4' x='50' y='50' width='11' height='11'/%3E%3Crect fill='%23dee2c3' x='90' y='20' width='11' height='11'/%3E%3Crect fill='%23e0e4c2' x='80' y='30' width='11' height='11'/%3E%3Crect fill='%23e2e5c1' x='70' y='40' width='11' height='11'/%3E%3Crect fill='%23e4e6c0' x='60' y='50' width='11' height='11'/%3E%3Crect fill='%23e5e7bf' x='90' y='30' width='11' height='11'/%3E%3Crect fill='%23e7e9bf' x='80' y='40' width='11' height='11'/%3E%3Crect fill='%23e9eabe' x='70' y='50' width='11' height='11'/%3E%3Crect fill='%23ebebbd' x='90' y='40' width='11' height='11'/%3E%3Crect fill='%23ecedbc' x='80' y='50' width='11' height='11'/%3E%3Crect fill='%23EEB' x='90' y='50' width='11' height='11'/%3E%3C/g%3E%3C/svg%3E");
  position: fixed;
  width: 100%;
  height: 100%;
  background-attachment: fixed;
  background-size: cover;
}
body {
  margin: 0;
  padding: 0;
}
</style>
