import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import CalculateView from "../views/CalculateView.vue";
import pm25 from '../views/pm25.vue'
import RegisterView from "../views/RegisterView.vue";
import LoginView from "../views/LoginView.vue";
import AboutStockView from "../views/AboutStockView.vue";
import tsmcView from "../views/tsmcView";
import StartView from "../views/StartView";
import SortView from "../views/SortView";
import AllrankView from "../views/AllrankView";
import TeachingView from "../views/TeachingView";

const routes = [{
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
        path: '/pm25',
        name: 'pm25',
        component: pm25
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
        component: tsmcView,
    },
    {
        path: "/",
        name: "start",
        component: StartView, 
    },
    {
        path: "/sort",
        name: "sort",
        component: SortView,
    },
    {
        path: "/allrank",
        name: "allrank",
        component: AllrankView,
    },
    {
        path: "/teaching",
        name: "teaching",
        component: TeachingView,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});


export default router;