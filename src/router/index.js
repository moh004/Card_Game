import { createRouter, createWebHistory } from "vue-router";
import game from "@/view/game.vue";
import HomePageView from "@/view/HomePageView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.Base_URL), // <=== i have no idea what's happening here
    routes:[
        {
            path: '/',
            name: "home",
            component: HomePageView
        },
        {
            path: '/game',
            name: "CardGame",
            component: game
        }
    ]
})

export default router