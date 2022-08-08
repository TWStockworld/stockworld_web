import { createRouter, createWebHistory } from "vue-router";

import StartView from "../views/StartView";
import HomeView from "../views/HomeView.vue";
import CalculateView from "../views/CalculateView.vue";
import AboutStockView from "../views/AboutStockView.vue";
import SortView from "../views/SortView";
import LearningView from "../views/LearningView";

//test
import pm25 from "../views/test/pm25.vue";

//user
import RegisterView from "../views/user/RegisterView.vue";
import LoginView from "../views/user/LoginView.vue";

//bulletin 公告欄
import RankingView from "../views/bulletin/RankingView";
import TsmcView from "../views/bulletin/TsmcView";

//t
const routes = [
  {
    path: "/",
    name: "start",
    component: StartView,
  },
  {
    path: "/home",
    name: "home",
    component: HomeView,
  },
  {
    path: "/calculate",
    name: "calculate",
    component: CalculateView,
  },
  {
    path: "/pm25",
    name: "pm25",
    component: pm25,
  },
  {
    path: "/register",
    name: "register",
    component: RegisterView,
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
  },
  {
    path: "/aboutstock",
    name: "aboutstock",
    component: AboutStockView,
  },
  {
    path: "/tsmc",
    name: "tsmc",
    component: TsmcView,
  },
  {
    path: "/sort",
    name: "sort",
    component: SortView,
  },
  {
    path: "/ranking",
    name: "Ranking",
    component: RankingView,
  },
  {
    path: "/learning",
    name: "Learning",
    component: LearningView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
