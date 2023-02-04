import { createApp } from 'vue'
import App from './App.vue'
import './assets/main.css'
import 'material-design-icons-iconfont/dist/material-design-icons.min.css'

import vSelect  from "vue-select";
import NotificationsPage from "./components/NotificationsPage.vue";
import ProductSourcesPage from "./components/ProductSourcesPage.vue";
import {createRouter, createWebHashHistory} from "vue-router";
import notifier from "./plugins/notifier";

const routes = [
    { path: '/', component: NotificationsPage },
    { path: '/product-sources', component: ProductSourcesPage }
]
const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

const app = createApp(App);
app.component('v-select', vSelect);
app.use(router);
app.use(notifier)

app.mount('#app');
