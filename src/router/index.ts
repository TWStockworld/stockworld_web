import { createRouter, createWebHistory } from "vue-router";

import StartView from "../views/StartView";
import CalculateView from "../views/CalculateView.vue";
import AboutStockView from "../views/AboutStockView.vue";

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
import BulletinView from "../views/BulletinView";

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
    path: "/aboutstock/:stockid",
    name: "aboutstock",
    component: AboutStockView,
    props: true,
  },

  {
    path: "/bulletin/:name",
    name: "bulletin",
    component: BulletinView,
  },
  // {
  //   path: "/pm25",
  //   name: "pm25",
  //   component: pm25,
  // },
  // {
  //   path: "/register",
  //   name: "register",
  //   component: RegisterView,
  // },
  // {
  //   path: "/login",
  //   name: "login",
  //   component: LoginView,
  // },

  // {
  //   path: "/userprofile",
  //   name: "userprofile",
  //   component: UserProfileView,
  // },

  // {
  //   path: "/personalfile",
  //   name: "personalfile",
  //   component: PersonalFileView,
  // },
  // {
  //   path: "/changepassword",
  //   name: "changepassword",
  //   component: ChangePasswordView,
  // },
  // {
  //   path: "/favorite",
  //   name: "favorite",
  //   component: FavoriteView,
  // },
  // {
  //   path: "/help_support",
  //   name: "help_support",
  //   component: Help_SupportView,
  // },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
