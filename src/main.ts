import './polyfills'
import { createApp } from 'vue'
import App from './App.vue'
import './styles.css'
import { store } from "./store/pokemon";
import { router } from "./router";

createApp(App)
	.use(store)
	.use(router)
	.mount('#app')
