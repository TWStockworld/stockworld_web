import { createApp } from "vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import zhtw from "element-plus/es/locale/lang/zh-tw";

import App from "./App.vue";
import router from "./router";

import axios from "axios";
import VueAxios from "vue-axios";

import Cookies from "js-cookie";

//下雪特效
import Snow from "./assets/snow/snowstorm";

//自訂html head
import { createHead } from '@vueuse/head'
const head = createHead()

const app = createApp(App);

app.use(ElementPlus, {
  locale: zhtw,
});
app.config.globalProperties.$Cookies = Cookies;
app.config.globalProperties.$Snow = Snow;

app.use(router).use(VueAxios, axios).use(head).mount("#app");
