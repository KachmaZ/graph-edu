import { createApp } from 'vue';
import App from './App.vue';
import VNetworkGraph from 'v-network-graph';
import 'v-network-graph/lib/style.css';
import router from './router';
import { createPinia } from 'pinia';

const app = createApp(App);

app.use(createPinia()).use(VNetworkGraph).use(router);
app.mount('#app');
