import { createApp } from "vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import "element-plus/theme-chalk/display.css";
import zhtw from "element-plus/es/locale/lang/zh-tw";

import App from "./App.vue";
import router from "./router";

import axios from "axios";
import VueAxios from "vue-axios";

import Cookies from "js-cookie";
import Tradingview from "./assets/js/tradingview";

//下雪特效
// import Snow from "./plugins/snow/snowstorm";

//自訂html head
import { createHead } from "@vueuse/head";
const head = createHead();

import "./assets/css/common.css";

const app = createApp(App);

app.use(ElementPlus, {
  locale: zhtw,
});
app.config.globalProperties.$Cookies = Cookies;
// app.config.globalProperties.$Snow = Snow;
app.config.globalProperties.$Tradingview = Tradingview;
app.use(router).use(VueAxios, axios).use(head).mount("#app");
