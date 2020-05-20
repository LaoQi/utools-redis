import './css/bulma.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './components/App';
import routes from './routes';
import locales from './locales';

import { utools } from './utils'

Vue.use(VueRouter);
Vue.prototype.$locales = locales;

const router = new VueRouter({routes})

const app = new Vue({
    router,
    render: h => h(App)
}).$mount('#app');


utools.onPluginEnter(function (target) {
    console.log('featura', target);
    app.$router.push(target.code).catch(err => {err});
    // utools.setExpendHeight(10);
});