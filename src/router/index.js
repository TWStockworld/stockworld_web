import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import CalculateView from "../views/CalculateView.vue";
import pm25 from '../views/pm25.vue'

const routes = [{
        path: "/",
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
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;