<template>
  <nav v-if="currentroute != '/'">
    <div class="computer_size">
      <router-link to="/home">
        <span class="txt">主頁<span class="bar"
            style="left: auto; right: 0px; /* width: calc(0px + 0%); */"></span></span>
      </router-link>

      <router-link to="/calculate">
        <span class="txt">相關度計算<span class="bar"
            style="left: auto; right: 0px; /* width: calc(0px + 0%); */"></span></span>
      </router-link>

      <router-link to="/learning">
        <span class="txt">投資小學堂<span class="bar"
            style="left: auto; right: 0px; /* width: calc(0px + 0%); */"></span></span>
      </router-link>

      <router-link to="/sort">
        <span class="txt">台股分類<span class="bar"
            style="left: auto; right: 0px; /* width: calc(0px + 0%); */"></span></span>
      </router-link>

      <router-link to="/aboutstock">
        <span class="txt">關於股票<span class="bar"
            style="left: auto; right: 0px; /* width: calc(0px + 0%); */"></span></span>
      </router-link>

      <router-link to="/logout" v-if="token" @click="logout">
        <span class="txt">登出<span class="bar"
            style="left: auto; right: 0px; /* width: calc(0px + 0%); */"></span></span>
      </router-link>

      <el-input size="large" placeholder="輸入股票代號或名稱" v-model="input3" class="input-with-select" type="search">
        <template #append>
          <el-button type="primary" class="submit2" size="small">搜尋</el-button>
        </template>
      </el-input>
    </div>

    <div class="navigation">
      <div class="userBx">
        <div class="imgBx">
          <img class="img-responsive1" src="@/assets/img/logo.png" />
        </div>
        <!--加入姓名錢-->
        <p class="username1">目前剩餘:1000元</p>
      </div>
      <div class="menuToggle"></div>
      <div class="menu">
        <!--在裡面加入row col-->
        <div class="phone_size">
          <el-form @submit.prevent="stocksearch">
            <el-input size="large" placeholder="輸入股票代號或名稱" v-model="stockid" class="input-with-select2" type="search">
              <template #append>
                <el-button type="primary" class="submit2" size="small">搜尋</el-button>
              </template>
            </el-input>
          </el-form>
          <router-link to="/home" class="menuset">
            <a class="menuset2" href="#">
              <ion-icon name="home-outline"></ion-icon>主頁
            </a>
          </router-link>

          <router-link to="/calculate" class="menuset">
            <a class="menuset2" href="#">
              <ion-icon name="calculator-outline"></ion-icon>相關度計算
            </a>
          </router-link>

          <router-link to="/learning" class="menuset">
            <a class="menuset2" href="#">
              <ion-icon name="pencil-outline"></ion-icon>投資小學堂
            </a>
          </router-link>

          <router-link to="/sort" class="menuset">
            <a class="menuset2" href="#">
              <ion-icon name="funnel-outline"></ion-icon>股票分類
            </a>
          </router-link>

          <router-link to="/aboutstock" class="menuset">
            <a class="menuset2" href="#">
              <ion-icon name="bar-chart-outline"></ion-icon>關於股票
            </a>
          </router-link>

          <router-link to="/logout" v-if="token" @click="logout" class="menuset">
            <a class="menuset2" href="#">
              <ion-icon name="log-out-outline"></ion-icon>登出
            </a>
          </router-link>
        </div>
        <!--*****************************************************-->
        <router-link to="/personalfile" v-if="!token" class="menuset">
          <a class="menuset2" href="#">
            <ion-icon name="person-outline"></ion-icon>My Profile
          </a>
        </router-link>

        <router-link to="/register" v-if="!token" class="menuset">
          <a class="menuset2" href="#">
            <ion-icon name="add"></ion-icon>註冊
          </a>
        </router-link>

        <router-link to="/login" v-if="!token" class="menuset">
          <a class="menuset2" href="#">
            <ion-icon name="log-in-outline"></ion-icon>登入
          </a>
        </router-link>
      </div>
    </div>
    <component :is="'script'">
      let menuToggle = document.querySelector('.menuToggle'); let navigation
      =document.querySelector('.navigation'); menuToggle.onclick =
      function(){navigation.classList.toggle('active') }
    </component>
    <component :is="'script'" type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js">
    </component>
    <component :is="'script'" nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></component>
  </nav>
</template>
<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  /*
  setup() {
    const input3 = ref("")
    return {
      input3
    };
  },
  */
  props: ["currentroute"],
  data() {
    return {
      stockid: "",
      token: this.$Cookies.get("token"),
    };
  },
  methods: {
    logout() {
      this.$Cookies.remove("token");
      this.$router.push("/home");
    },
    stocksearch() {
      this.router.push("/aboutstock");
      this.$emit("header_stockid",this.stockid);
    }
  },
});
</script>

<style>
@media only screen and (max-width: 768px) {
  nav {
    height: 10%;
  }

  .computer_size {
    display: none;
  }

  .phone_size {
    display: block;
  }

  .input-with-select2 {
    background-color: #fff;
    width: 80%;
  }

  .navigation {
    z-index: 10;
    position: fixed;
    top: 0%;
    right: 0%;
    width: 75%;
    /* width: 280px; */
    height: 10%;
    /* height: 80px; */
    background: rgb(240, 240, 240);
    display: flex;
    justify-content: space-between;
    transition: height 0.05s, width 0.05s;
    transition-delay: 0s, 0.1s;
    overflow: hidden;
  }

  .navigation.active {
    width: 90%;
    /* width: 475px; */
    height: 55%;
    /* height: 350px; */
    transition: width 0.05s, height 0.05s;
    transition-delay: 0s, 0.1s;
  }

  .navigation .userBx {
    position: relative;
    width: 80px;
    height: 80px;
    background: rgb(240, 240, 240);
    display: flex;
    align-items: center;
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
    border: 10px solid rgb(240, 240, 240);
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
    z-index: 2;
    position: absolute;
    width: 100%;
    height: calc(100% - 80px);
    margin-top: 80px;
    padding: 0px;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
  }

  .menu .menuset {
    list-style: none;
  }

  .menu .menuset .menuset2 {
    display: flex;
    align-items: center;
    gap: 10px;
    margin: 15px;
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
}

@media only screen and (min-width: 768px) {
  .phone_size {
    display: none;
  }

  .input-with-select {
    background-color: #fff;
    left: 5px;
    width: 200px;
  }

  .navigation {
    z-index: 10;
    position: fixed;
    top: 0px;
    right: 20px;
    width: 280px;
    height: 80px;
    background: rgb(240, 240, 240);
    display: flex;
    justify-content: space-between;
    transition: height 0.05s, width 0.05s;
    transition-delay: 0s, 0.1s;
    overflow: hidden;
  }

  .navigation.active {
    width: 280px;
    height: 300px;
    transition: width 0.05s, height 0.05s;
    transition-delay: 0s, 0.1s;
  }

  .navigation .userBx {
    position: relative;
    width: 80px;
    height: 80px;
    background: rgb(240, 240, 240);
    display: flex;
    align-items: center;
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
    border: 10px solid rgb(240, 240, 240);
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
    z-index: 2;
    position: absolute;
    width: 100%;
    height: calc(100% - 80px);
    margin-top: 80px;
    padding: 0px;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
  }

  .menu .menuset {
    list-style: none;
  }

  .menu .menuset .menuset2 {
    display: flex;
    align-items: center;
    gap: 10px;
    margin: 20px;
    font-size: 1.1em;
    text-decoration: none;
    color: #555;
  }

  .menu .menuset .menuset2:hover {
    color: #4e65ff;
  }

  .menu .menuset .menuset2 ion-icon {
    font-size: 1.5em;
  }
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
  /* border-bottom: 2px solid; */
  padding: 22px;
  background-color: rgb(240, 240, 240);
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


.navigation.active .userBx .username1 {
  display: inline-block;
  color: rgb(255, 3, 3);
  /* height: 50%; */
  animation: movepoint1 3s infinite;
  -webkit-animation: movepoint1 3s infinite;
}

@keyframes movepoint1 {
  0% {
    height: 0%;
  }

  50% {
    height: 60%;
  }

  100% {
    height: 0%;
  }
}
</style>
