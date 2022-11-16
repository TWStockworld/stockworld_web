<template>
  <div class="bak">
    <Header :key="componentKey" @keytest="keytest"
      @change_stock_calculate_groups_id="change_stock_calculate_groups_id" />
    <router-view class="margintop" @keytest="keytest" :stock_calculate_groups_id="stock_calculate_groups_id" />
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

import { useHead } from "@vueuse/head";

export default {
  components: {
    Header,
    Footer
  },
  created() {
    const html = document.documentElement // returns the html tag
    html.setAttribute('lang', 'zh_TW')
  },
  data() {
    return {
      componentKey: 0,
      stock_calculate_groups_id: 1,
    };
  },
  setup() {
    useHead({
      title: "股票世界",
      meta: [
        {
          name: `description`,
          content:
            "股票分析系統，可以比對股票之間的相關性，並建議使用者選擇哪些股票和投資時間，因而提升投資成功的機率。除此之外，會在系統中提供學習文章和虛擬下單的服務，提升使用者的實戰學習的經驗。",
        },
      ],
    });
  },
  mounted() {
    // 下雪
    // this.$Snow.excludeMobile = false;
    // this.$Snow.animationInterval = 33;
    // this.$Snow.followMouse = false;
    // this.$Snow.flakesMaxActive = 35;
    // 下雪
    console.log(window.innerWidth)

    window.addEventListener('scroll', this.handleScroll, true);
  },
  beforeDestroy() {
    window.addEventListener('scroll', this.handleScroll, true);
  },
  methods: {
    change_stock_calculate_groups_id(stock_calculate_groups_id) {
      this.stock_calculate_groups_id = stock_calculate_groups_id;
    },
    keytest() {
      this.componentKey += 1;
    },
    // handleScroll(e) {
    //   console.log(window.scrollY)
    //   if (window.innerWidth < 1024) {
    //     if (window.scrollY < 150) {
    //       document.getElementById('navigation').setAttribute("style", "position: relative;background-color:#ffffff00;")
    //     }
    //     if (window.scrollY > 150) {
    //       document.getElementById('navigation').setAttribute("style", "position: fixed;background-color:#ffffffde;")
    //     }
    //   }
    // }
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+TC&display=swap");

.el-main {
  z-index: 1;
}

.sticky {
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 11;
}

* {
  padding: 0;
  margin: 0;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-family: "Noto Sans TC", sans-serif;
}

.el-button {
  font-family: "Noto Sans TC", sans-serif;
}

.el-button>span {
  width: 100%;
  display: inline-flex;
  align-items: center;
  justify-content: space-evenly;
}

.bak {
  background-image: linear-gradient(to top left, #467a91ed, #b7cbd2b5);
  width: 100%;
  background-attachment: fixed;
  background-size: cover;

}

.tv-lightweight-charts {
  border-radius: 3%;
}

.el-table .cell {
  display: inline;
}

a {
  color: #598ef6;
}

/* a:visited {
  color: blue;
} */

@media only screen and (max-width: 1200px) {
  .box {
    height: 5vh;
  }

  /* .margintop {
    margin-top: 25% !important;
  } */
}

@media only screen and (min-width: 1200px) {
  .bak {
    height: 100%;
  }

  .bulletin_el-row {
    padding: 0 1% 7% 0%;
    height: 100vh;
  }
}

.bulletin_right-col {
  background-color: #ffffff5e;
  border-radius: 30px;
}

.el-table {
  border-radius: 10px;
}
</style>
