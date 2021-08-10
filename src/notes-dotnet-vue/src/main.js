import { createApp } from 'vue';
import App from './App.vue';
import store from './store';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@/assets/css/global.css';
import '@/assets/css/themes.css';
// import router from './router';

createApp(App)
	.use(store)
	// .use(router)
	.mount('#app');
