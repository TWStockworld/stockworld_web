<template>
  <nav v-if="currentroute != '/'">
    <router-link to="/home">
      <span class="txt"
        >主頁<span
          class="bar"
          style="left: auto; right: 0px; /* width: calc(0px + 0%); */"
        ></span
      ></span>
    </router-link>

    <router-link to="/calculate">
      <span class="txt"
        >相關度計算<span
          class="bar"
          style="left: auto; right: 0px; /* width: calc(0px + 0%); */"
        ></span
      ></span>
    </router-link>

    <router-link to="/learning">
      <span class="txt"
        >投資小學堂<span
          class="bar"
          style="left: auto; right: 0px; /* width: calc(0px + 0%); */"
        ></span
      ></span>
    </router-link>

    <router-link to="/sort">
      <span class="txt"
        >台股分類<span
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

    <router-link to="/register" v-if="!token">
      <span class="txt"
        >註冊<span
          class="bar"
          style="left: auto; right: 0px; /* width: calc(0px + 0%); */"
        ></span
      ></span>
    </router-link>

    <router-link to="/login" v-if="!token">
      <span class="txt"
        >登入<span
          class="bar"
          style="left: auto; right: 0px; /* width: calc(0px + 0%); */"
        ></span
      ></span>
    </router-link>

    <router-link to="/logout" v-if="token" @click="logout">
      <span class="txt"
        >登出<span
          class="bar"
          style="left: auto; right: 0px; /* width: calc(0px + 0%); */"
        ></span
      ></span>
    </router-link>

    <el-input
      size="large"
      placeholder="輸入股票代號或名稱"
      v-model="input3"
      class="input-with-select"
    >
      <template #append>
        <el-button type="primary" class="submit2" size="small">搜尋</el-button>
      </template>
    </el-input>
    <div>
      <figure class="img-responsive1" style="width: 60px; height: 60px">
        <img
          class="img-responsive"
          src="@/assets/anime.jpg"
          alt="頭像"
          style="height: 100%; width: 100%; border-radius: 100%"
        />
      </figure>
    </div>
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
  data() {
    return {
      token: this.$Cookies.get("token"),
    };
  },
  methods: {
    logout() {
      this.$Cookies.remove("token");
      this.$router.push("/home");
    },
  },
});
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

.img-responsive1 {
  margin-top: -60px;
  margin-right: 0px;
  margin-bottom: auto;
  margin-left: auto;
}
</style>
