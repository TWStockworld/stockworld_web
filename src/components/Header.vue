<template>
  <nav v-if="currentroute != '/'">
    <router-link to="/home">
      <span class="txt"
        >home<span
          class="bar"
          style="left: auto; right: 0px; /* width: calc(0px + 0%); */"
        ></span
      ></span>
    </router-link>

    <router-link to="/calculate">
      <span class="txt"
        >calculate<span
          class="bar"
          style="left: auto; right: 0px; /* width: calc(0px + 0%); */"
        ></span
      ></span>
    </router-link>

    <router-link to="/pm25">
      <span class="txt"
        >pm25<span
          class="bar"
          style="left: auto; right: 0px; /* width: calc(0px + 0%); */"
        ></span
      ></span>
    </router-link>

    <router-link to="/aboutstock">
      <span class="txt"
        >關於股票<span
          class="bar"
          style="left: auto; right: 0px; /* width: calc(0px + 0%); */"
        ></span
      ></span>
    </router-link>

    <router-link to="/register">
      <span class="txt"
        >註冊<span
          class="bar"
          style="left: auto; right: 0px; /* width: calc(0px + 0%); */"
        ></span
      ></span>
    </router-link>

    <router-link to="/login">
      <span class="txt"
        >登入<span
          class="bar"
          style="left: auto; right: 0px; /* width: calc(0px + 0%); */"
        ></span
      ></span>
    </router-link>

    <router-link to="/login">
      <span class="txt"
        >登出<span
          class="bar"
          style="left: auto; right: 0px; /* width: calc(0px + 0%); */"
        ></span
      ></span>
    </router-link>

    <router-link to="/headertest">
      <span class="txt"
        >headertest<span
          class="bar"
          style="left: auto; right: 0px; /* width: calc(0px + 0%); */"
        ></span
      ></span>
    </router-link>

    <el-input
      size="large"
      placeholder="收尋:"
      v-model="input3"
      class="input-with-select"
    >
      <template #append>
        <el-button type="primary" class="submit2" @click="findbutton" size="small">收尋</el-button>
      </template>
    </el-input>
  </nav>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    return {
      input3: ref(""),
    };
  },
  props: ["currentroute"],
});

// export default {
//   props: ["currentroute"],
// };
</script>

<style>

.input-with-select {
  background-color: #fff;
  left: 10px;
  width: 200px;
}

.txt {
  position: relative;
  display: block;
}
.bar {
  display: block;
  background-color: #000;
  height: 5px;
  position: absolute;
  bottom: -10px;
  left: 0;
  right: 0;
  margin: auto;
  width: 0%;
}
nav a:hover .bar {
  width: 100%;
  transition: all 0.5s linear;
}

a {
  text-decoration: none;
}

nav {
  border-bottom: 2px solid;
  padding: 10px;
  background-color: white;
}

nav a {
  display: inline-block;
  margin-left: 20px;
  font-size: 20px;
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #000000;
}
</style>
