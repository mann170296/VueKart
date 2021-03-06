import Vue from 'vue'
import { store } from './store/store'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import VueRouter from 'vue-router'
import 'es6-promise/auto'

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(VueRouter);

// The main page that gets served
import Index from './Index'

import Home from './components/Home'
import Shop from './components/Shop'
import ViewProduct from './components/ViewProduct'
import Watch from './components/Watch'

const routes = [
  { path: '/', component: Home },
  { path: '/shop', component: Shop },
  { path: '/view/:id', component: ViewProduct },
  { path: '/watch', component: Watch },
];

const router = new VueRouter({
  routes,
  mode: 'history',
});

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(Index)
})
