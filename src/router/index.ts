import { createRouter, createWebHistory } from "vue-router";

import StartView from "../views/StartView";
import CalculateView from "../views/CalculateView.vue";
import AboutStockView from "../views/AboutStockView.vue";
import SortView from "../views/SortView";
import LearningView from "../views/LearningView";

//test
import pm25 from "../views/test/pm25.vue";

//user
import RegisterView from "../views/user/RegisterView.vue";
import LoginView from "../views/user/LoginView.vue";

//user_profile
import PersonalFileView from "../views/user_profile/PersonalFileView";
import ChangePasswordView from "../views/user_profile/ChangePasswordView";
import FavoriteView from "../views/user_profile/FavoriteView";
import Help_SupportView from "../views/user_profile/Help_SupportView";

//bulletin 公告欄
import RankingView from "../views/bulletin/RankingView";
import TsmcView from "../views/bulletin/TsmcView";
import CarView from "../views/bulletin/CarView.vue";
import MetaView from "../views/bulletin/MetaView.vue";
import CityView from "../views/bulletin/CityView.vue";
import ICView from "../views/bulletin/ICView.vue";
import InternetView from "../views/bulletin/InternetView.vue";
import CloudView from "../views/bulletin/CloudView.vue";
import HHcarView from "../views/bulletin/HHcarView.vue";
import Vue from "vue";
//ttt
const routes = [
  {
    path: "/",
    name: "start",
    component: StartView,
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
    // /:stockid
    path: "/aboutstock/:stockid",
    name: "AboutStock",
    component: AboutStockView,
    props: true,
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
  // {
  //   path: "/userprofile",
  //   name: "userprofile",
  //   component: UserProfileView,
  // },

  {
    path: "/personalfile",
    name: "personalfile",
    component: PersonalFileView,
  },
  {
    path: "/changepassword",
    name: "changepassword",
    component: ChangePasswordView,
  },
  {
    path: "/favorite",
    name: "favorite",
    component: FavoriteView,
  },
  {
    path: "/help_support",
    name: "help_support",
    component: Help_SupportView,
  },
  {
    path: "/city",
    name: "city",
    component: CityView,
  },
  {
    path: "/cloud",
    name: "cloud",
    component: CloudView,
  },
  {
    path: "/IC",
    name: "IC",
    component: ICView,
  },
  {
    path: "/internet",
    name: "internet",
    component: InternetView,
  },
  {
    path: "/meta",
    name: "meta",
    component: MetaView,
  },
  {
    path: "/car",
    name: "car",
    component: CarView,
  },
  {
    path: "/hhcar",
    name: "hhcar",
    component: HHcarView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
