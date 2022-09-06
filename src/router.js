import { createRouter, createWebHashHistory } from "vue-router";
import Main from "./components/Main.vue";
import Film from "./components/Film.vue";

export default createRouter({
    history: createWebHashHistory(),
    routes: [
        {path: "/", component: Main, alias: "/"},
        {path: "/film", component: Film}
    ]
})