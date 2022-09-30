<template>
  <div class="bak">
    <Header :currentroute="this.$route.path" @header_stockid="stockid" :key="componentKey" @keytest="keytest" />
    <router-view @keytest="keytest" />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";

import { useHead } from "@vueuse/head";

export default {
  components: {
    Header,
  },
  data() {
    return {
      componentKey: 0,
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
  },
  methods: {
    keytest() {
      this.componentKey += 1;
    }
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+TC&display=swap");

* {
  padding: 0;
  margin: 0;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-family: "Noto Sans TC", sans-serif !important;
}

.bak {
  background-color: #6ea5e9;
  background-image: url("assets/img/Snow.svg");
  height: 100%;
  width: 100%;
  background-attachment: fixed;
  background-size: cover;
}
</style>
