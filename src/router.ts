import * as VueRouter from 'vue-router'
import Welcome from "./pages/welcome/Welcome.vue";
import Pokemon from "./pages/pokemon/Pokemon.vue";

const routes = [
	{ path: '/', component: Welcome },
	{ path: '/list', component: Pokemon },
]

export const router = VueRouter.createRouter({
	history: VueRouter.createWebHashHistory(),
	routes,
})
