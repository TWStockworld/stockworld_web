<template>
  <nav v-if="this.$route.path != '/'">
    <div class="computer_size">
      <img src="../assets/img/logo2.png" alt="e" class="logo">
      <router-link to="/bulletin/ranking">
        <span class="txt" :class="[this.$route.name == 'bulletin' ? 'nowsite' : '']">
          主頁<span class="bar" style="left: auto; right: 0px; /* width: calc(0px + 0%); */"></span>
        </span>
      </router-link>

      <router-link to="/calculate">
        <span class="txt" :class="[this.$route.name == 'calculate' ? 'nowsite' : '']">漲幅機率計算<span class="bar"
            style="left: auto; right: 0px; /* width: calc(0px + 0%); */"></span></span>
      </router-link>

      <router-link to="/sort">
        <span class="txt" :class="[this.$route.name == 'sort' ? 'nowsite' : '']">台股分類<span class="bar"
            style="left: auto; right: 0px; /* width: calc(0px + 0%); */"></span></span>
      </router-link>

      <router-link to="/aboutstock/2330">
        <span class="txt" :class="[this.$route.name == 'aboutstock' ? 'nowsite' : '']">關於股票<span class="bar"
            style="left: auto; right: 0px; /* width: calc(0px + 0%); */"></span></span>
      </router-link>


      <el-form @submit.prevent="stocksearch" class="search-bar">
        <input type="search" name="search" v-model="stockid" required autocomplete="off">
        <button class="search-btn" type="submit">
          <span>Search</span>
        </button>
      </el-form>
    </div>

    <div class="navigation" :class="[this.toggle ? 'active' : '']">
      <div class=" userBx">
        <div class="imgBx">
          <img class="img-responsive1" src="@/assets/img/logo.png" />
        </div>
        <!--加入姓名錢-->
      </div>
      <div class="menuToggle" @click="menutoggle"></div>
      <div class="menu">
        <!--在裡面加入row col-->
        <div class="phone_size">
          <ul class="phone_size_ul">
            <li class="phone_size_li">
              <el-form @submit.prevent="stocksearch">

                <el-input size="large" placeholder="輸入股票代號或名稱" v-model="stockid" class="input-with-select"
                  type="search">
                </el-input>

              </el-form>
            </li>

            <li class="phone_size_li">
              <router-link to="/bulletin/ranking" class="menuset" @click="canclemenu">
                <a class="menuset2" href="#">
                  <ion-icon name="home-outline"></ion-icon>主頁
                </a>
              </router-link>
            </li>

            <li class="phone_size_li">
              <router-link to="/calculate" class="menuset" @click="canclemenu">
                <a class="menuset2" href="#">
                  <ion-icon name="calculator-outline"></ion-icon>相關度計算
                </a>
              </router-link>
            </li>
            <li class="phone_size_li">
              <router-link to="/sort" class="menuset" @click="canclemenu">
                <a class="menuset2" href="#">
                  <ion-icon name="funnel-outline"></ion-icon>股票分類
                </a>
              </router-link>
            </li>

            <li class="phone_size_li">
              <router-link to="/aboutstock/2330" class="menuset" @click="canclemenu">
                <a class="menuset2" href="#">
                  <ion-icon name="bar-chart-outline"></ion-icon>關於股票
                </a>
              </router-link>
            </li>

            <li class="phone_size_li">
              <router-link to="/logout" v-if="token" @click="logout" class="menuset">
                <a class="menuset2" href="#">
                  <ion-icon name="log-out-outline"></ion-icon>登出
                </a>
              </router-link>
            </li>
          </ul>
        </div>
        <!--*****************************************************-->
        <ul class="phone_size_ul">
          <li class="phone_size_li">
            <router-link to="/personalfile" v-if="token" class="menuset" @click="canclemenu">
              <a class="menuset2" href="#">
                <ion-icon name="person-outline"></ion-icon>My Profile
              </a>
            </router-link>
          </li>

          <li class="phone_size_li">
            <router-link to="/register" v-if="!token" class="menuset" @click="canclemenu">
              <a class="menuset2" href="#">
                <ion-icon name="add"></ion-icon>註冊
              </a>
            </router-link>
          </li>

          <li class="phone_size_li">
            <router-link to="/login" v-if="!token" class="menuset" @click="canclemenu">
              <a class="menuset2" href="#">
                <ion-icon name="log-in-outline"></ion-icon>登入
              </a>
            </router-link>
          </li>
          <li class="phone_size_li">
            <button v-if="token" @click="logout">
              <span class="txt">
                <ion-icon name="log-out-outline"></ion-icon>登出<span class="bar"
                  style="left: auto; right: 0px; /* width: calc(0px + 0%); */"></span>
              </span>
            </button>

          </li>
        </ul>
      </div>
    </div>

    <component :is="'script'" type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js">
    </component>
    <component :is="'script'" nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></component>
  </nav>
</template>
<script>
import { defineComponent, ref } from "vue";

export default defineComponent({

  props: ["keytest"],
  data() {
    return {
      stockid: "",
      token: this.$cookies.get("token"),
      toggle: false
    };
  },
  methods: {
    canclemenu() {
      this.$emit('keytest');
    },

    menutoggle() {
      if (this.toggle) {
        this.toggle = false;
      }
      else {
        this.toggle = true;
      }
    },
    logout() {
      this.axios
        .post("/api/logout", {}, {
          headers: {
            Authorization: `Bearer ` + this.token,
          }
        })
        .then((res) => {
          this.$cookies.remove("token");
          this.$router.push({
            name: 'bulletin',
            params: {
              name: 'ranking',
            }
          });
          this.$emit('keytest');
        })
      // this.$cookies.remove("token");
      // this.$router.push("/ranking");
      // this.$emit('keytest');
    },
    stocksearch() {
      this.$router.push({
        name: 'aboutstock',
        params: {
          stockid: this.stockid,
        }
      });
    }
  },
});
</script>

<style scoped>
.el-form {
  display: inline-block;
}

@media only screen and (max-width: 768px) {
  nav {
    height: 10%;
  }

  .computer_size {
    display: none;
  }

  .phone_size_ul {
    padding: 0;
  }

  .phone_size_li a {
    margin: 0;
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
    width: 100%;
    height: 10%;
    display: flex;
    justify-content: space-between;
    transition: height 0.05s, width 0.05s;
    transition-delay: 0s, 0.1s;
    overflow: hidden;
  }

  .navigation.active {
    width: 100%;
    height: 100%;
    transition: width 0.05s, height 0.05s;
    transition-delay: 0s, 0.1s;
  }

  .navigation .userBx {
    position: relative;
    width: 80px;
    height: 80px;
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
    min-width: 50px;
    height: 50px;
    overflow: hidden;
    background: rgb(0, 0, 0);
    border-radius: 50%;
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
    height: calc(100% - 75px);
    margin-top: 75px;
    padding: 0px;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    background: rgb(240, 240, 240);
  }

  .menu .menuset {
    list-style: none;
  }

  .menu .menuset .menuset2 {
    display: flex;
    align-items: center;
    gap: 20px;
    margin: 15px;
    font-size: 0.8em;
    text-decoration: none;
    color: #555;
  }

  .menu .menuset .menuset2:hover {
    color: #4e65ff;
  }

  .menu .menuset .menuset2 ion-icon {
    font-size: 1.5em;
  }

  .phone_size_li {
    list-style: none;
    padding: 2%;
  }
}

@media only screen and (min-width: 768px) {
  nav {
    padding: 22px;

  }

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
    display: flex;
    justify-content: space-between;
    transition: height 0.05s, width 0.05s;
    transition-delay: 0s, 0.1s;
    overflow: hidden;
  }

  .navigation.active {
    width: 280px;
    height: 320px;
    transition: width 0.05s, height 0.05s;
    transition-delay: 0s, 0.1s;
  }

  .navigation .userBx {
    position: relative;
    width: 80px;
    height: 80px;
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
    min-width: 50px;
    height: 50px;
    overflow: hidden;
    background: rgb(0, 0, 0);
    border-radius: 50%;
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
    background: rgb(240, 240, 240);

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

  .phone_size_li {
    list-style: none;
  }
}

.txt {
  position: relative;
  display: block;
  color: #ffffff94;
}

.nowsite {
  color: #ffffff;

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
  color: rgb(230, 173, 15);
  animation: movepoint1 0.2s;
  -webkit-animation: movepoint1 0.2s;
}

@keyframes movepoint1 {
  0% {
    height: 30%;
  }

  50% {
    height: 50%;
  }

  100% {
    height: 30%;
  }
}

.search-bar input,
.search-btn,
.search-btn:before,
.search-btn:after {
  transition: all 0.25s ease-out;
}

.search-bar input,
.search-btn {
  width: 3em;
  height: 3em;
}

.search-bar input:invalid:not(:focus),
.search-btn {
  cursor: pointer;
}

.search-bar,
.search-bar input:focus,
.search-bar input:valid {
  width: 30%;
}

.search-bar input:focus,
.search-bar input:not(:focus)+.search-btn:focus {
  outline: transparent;
}

.search-bar {
  margin: 0px -20% 0 -5%;
  max-width: 30em;
}

.search-bar input {
  background: transparent;
  border-radius: 1.5em;
  box-shadow: 0 0 0 0.4em #171717 inset;
  padding: 0.75em;
  transform: translate(0.5em, 0.5em) scale(0.5);
  transform-origin: 100% 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}

.search-bar input::-webkit-search-decoration {
  -webkit-appearance: none;
}

.search-bar input:focus,
.search-bar input:valid {
  background: #fff;
  border-radius: 0.375em 0 0 0.375em;
  box-shadow: 0 0 0 0.1em #d9d9d9 inset;
  transform: scale(1);
}

.search-btn {
  background: #171717;
  border-radius: 0 0.75em 0.75em 0 / 0 1.5em 1.5em 0;
  padding: 0.75em;
  position: relative;
  transform: translate(0.25em, 0.25em) rotate(45deg) scale(0.25, 0.125);
  transform-origin: 0 50%;
}

.search-btn:before,
.search-btn:after {
  content: "";
  display: block;
  opacity: 0;
  position: absolute;
}

.search-btn:before {
  border-radius: 50%;
  box-shadow: 0 0 0 0.2em #f1f1f1 inset;
  top: 0.75em;
  left: 0.75em;
  width: 1.2em;
  height: 1.2em;
}

.search-btn:after {
  background: #f1f1f1;
  border-radius: 0 0.25em 0.25em 0;
  top: 51%;
  left: 51%;
  width: 0.75em;
  height: 0.25em;
  transform: translate(0.2em, 0) rotate(45deg);
  transform-origin: 0 50%;
}

.search-btn span {
  display: inline-block;
  overflow: hidden;
  width: 1px;
  height: 1px;
}

/* Active state */
.search-bar input:focus+.search-btn,
.search-bar input:valid+.search-btn {
  background: #2762f3;
  border-radius: 0 0.375em 0.375em 0;
  transform: scale(1);
}

.search-bar input:focus+.search-btn:before,
.search-bar input:focus+.search-btn:after,
.search-bar input:valid+.search-btn:before,
.search-bar input:valid+.search-btn:after {
  opacity: 1;
}

.search-bar input:focus+.search-btn:hover,
.search-bar input:valid+.search-btn:hover,
.search-bar input:valid:not(:focus)+.search-btn:focus {
  background: #0c48db;
}

.search-bar input:focus+.search-btn:active,
.search-bar input:valid+.search-btn:active {
  transform: translateY(1px);
}

* {
  border: 0;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body,
button,
input {
  font: 1em Hind, sans-serif;
  line-height: 1.5em;
}

body,
input {
  color: #171717;
}

.logo {
  left: 6%;
  position: absolute;
  width: 3.5%;
  border-radius: 5px;
}
</style>
