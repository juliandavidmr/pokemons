import * as VueRouter from 'vue-router'
import Welcome from "./pages/welcome/Welcome.vue";
import Pokemon from "./pages/pokemon/Pokemon.vue";

// 1. Define route components.
// These can be imported from other files
const Home = { template: '<div>Home</div>' }
const About = { template: '<div>About</div>' }

// 2. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.
const routes = [
	{ path: '/', component: Welcome },
	{ path: '/list', component: Pokemon },
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
export const router = VueRouter.createRouter({
	// 4. Provide the history implementation to use. We are using the hash history for simplicity here.
	history: VueRouter.createWebHashHistory(),
	routes, // short for `routes: routes`
})
