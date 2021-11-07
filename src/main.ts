/*
 * @Author: FunJust
 * @Date: 2021-11-04 00:06:16
 * @Description:
 */
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

const app = createApp(App);
app.use(router);
app.mount('#app');
