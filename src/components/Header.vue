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

    <div class="navigation">
      <div class="userBx">
        <div class="imgBx">
          <img class="img-responsive1" src="@/assets/img/logo.png" />
        </div>
        <p class="username1">Jo Jo</p>
      </div>
      <div class="menuToggle"></div>
      <ul class="menu">
        <li class="menuset">
          <a class="menuset2" href="#"
            ><ion-icon name="person-outline"></ion-icon>My Profile</a
          >
        </li>
        <li class="menuset">
          <a class="menuset2" href="#"
            ><ion-icon name="chatbox-outline"></ion-icon>Message</a
          >
        </li>
        <li class="menuset">
          <a class="menuset2" href="#"
            ><ion-icon name="notifications-outline"></ion-icon>Notification</a
          >
        </li>
        <li class="menuset">
          <a class="menuset2" href="#"
            ><ion-icon name="settings-outline"></ion-icon>Settings</a
          >
        </li>
        <li class="menuset">
          <a class="menuset2" href="#"
            ><ion-icon name="help-outline"></ion-icon>Help & Support</a
          >
        </li>
      </ul>
    </div>
    <component :is="'script'">
      let menuToggle = document.querySelector('.menuToggle'); let navigation =
      document.querySelector('.navigation'); menuToggle.onclick = function(){
      navigation.classList.toggle('active') }
    </component>
    <component
      :is="'script'"
      type="module"
      src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
    ></component>
    <component
      :is="'script'"
      nomodule
      src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
    ></component>

    <!--
      

      <div>
      <figure class="img-responsive1" style="width: 60px; height: 60px">
        <img
          class="img-responsive"
          src="@/assets/img/anime.jpg"
          alt="頭像"
          style="height: 100%; width: 100%; border-radius: 100%"
        />
      </figure>
    </div>

    -->
  </nav>
</template>
<script>
import { defineComponent, ref } from "vue";

// var menuToggle = document.querySelector('.menuToggle');
// var navigation = document.querySelector('.navigation');
// menuToggle.onclick = function(){
//   navigation.classList.toggle('active')
// }

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
  box-sizing: border-box;
  border-bottom: 2px solid;
  padding: 21px;
  background-color: rgb(255 255 255);
}

nav a {
  display: inline-block;
  margin-left: 20px;
  font-size: 20px;
  font-weight: bold;
  color: #000000;
}

nav a.router-link-exact-active {
  color: #000000;
}

/* .img-responsive1 {
  margin-top: -60px;
  margin-right: 0px;
  margin-bottom: auto;
  margin-left: auto;
} */

.navigation {
  position: fixed;
  top: 0px;
  right: 20px;
  width: 160px;
  height: 80px;
  background: #fff;
  box-shadow: 0 25px 35px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  transition: height 0.2s, width 0.2s;
  transition-delay: 0s, 0.4s;
  overflow: hidden;
}
.navigation.active {
  width: 300px;
  height: 350px;
  transition: width 0.2s, height 0.2s;
  transition-delay: 0s, 0.4s;
}
.navigation .userBx {
  position: relative;
  width: 80px;
  height: 80px;
  background: #fff;
  display: flex;
  align-items: center;
  overflow: hidden;
  transition: 0.2s;
  transition-delay: 0.2s;
}
.navigation.active .userBx {
  width: calc(100% - 80px);
  transition-delay: 0s;
}
.navigation .userBx .username1 {
  white-space: nowrap;
  color: #555;
  font-size: 1.1em;
}
.navigation .userBx .imgBx {
  position: relative;
  min-width: 60px;
  height: 60px;
  overflow: hidden;
  background: rgb(0, 0, 0);
  border-radius: 50%;
  border: 10px solid rgb(255, 255, 255);
}
.navigation .userBx .imgBx .img-responsive1 {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.navigation .menuToggle {
  position: relative;
  width: 80px;
  height: 80px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
}
.navigation .menuToggle::before {
  content: "";
  position: absolute;
  width: 48px;
  height: 4px;
  background: #555;
  transform: translateY(-10px);
  box-shadow: 0 10px #555;
  transition: 0.2s;
}
.navigation .menuToggle::after {
  content: "";
  position: absolute;
  width: 48px;
  height: 4px;
  background: #555;
  transform: translateY(10px);
  transition: 0.2s;
}
.navigation.active .menuToggle::before {
  transform: translateY(0px) rotate(45deg);
  box-shadow: 0 0 #555;
}
.navigation.active .menuToggle::after {
  transform: translateY(0px) rotate(-45deg);
}
.menu {
  position: absolute;
  width: 100%;
  height: calc(100% - 80px);
  margin-top: 80px;
  padding: 20px;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
}
.menu .menuset {
  list-style: none;
}
.menu .menuset .menuset2 {
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 20px 0;
  font-size: 1em;
  text-decoration: none;
  color: #555;
}
.menu .menuset .menuset2:hover {
  color: #4e65ff;
}
.menu .menuset .menuset2 ion-icon {
  font-size: 1.5em;
}
</style>
