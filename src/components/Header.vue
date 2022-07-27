<template>
  <nav v-if="currentroute != '/'">
    <router-link to="/home"> home </router-link>
    <router-link to="/calculate"> calculate </router-link>
    <router-link to="/pm25"> pm25 </router-link>
    <router-link to="/aboutstock"> 關於股票 </router-link>
    <router-link to="/register"> 註冊 </router-link>
    <router-link to="/login"> 登入 </router-link>
    <router-link to="/login"> 登出 </router-link>
  </nav>
</template>

<script>
export default {
  props: ["currentroute"],
};
</script>

<style>
a {
  text-decoration: none;
}

nav {
  border-bottom: 1px solid;
  padding: 10px;
  background-color: white;
}

nav a {
  margin-left: 20px;
  font-size: 20px;
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #000000;
}
</style>
