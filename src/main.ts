import './polyfills'
import { createApp } from 'vue'
import App from './App.vue'
import './styles.css'
import { store } from "./store/pokemon";

createApp(App)
	.use(store)
	.mount('#app')
