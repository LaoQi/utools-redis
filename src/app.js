import './css/bulma.min.css'
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './components/App';
import routes from './routes';

import { utools } from './utils'

Vue.prototype.$utools = utools;

Vue.use(VueRouter);

const router = new VueRouter({routes})

const app = new Vue({
    router,
    render: h => h(App)
}).$mount('#app');


utools.onPluginEnter(function (target) {
    console.log('featura', target);
    app.$router.push(target.code);
    // utools.setExpendHeight(10);
});