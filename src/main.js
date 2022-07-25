import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import zhtw from 'element-plus/es/locale/lang/zh-tw'

import App from './App.vue'
import router from './router'

import axios from 'axios'
import VueAxios from 'vue-axios'

import Cookies from "js-cookie";

// import { ElMessage } from "element-plus";

const app = createApp(App)

app.use(ElementPlus, {
    locale: zhtw,
  })
app.config.globalProperties.$Cookies = Cookies;
app.use(router).use(VueAxios, axios).mount('#app')
