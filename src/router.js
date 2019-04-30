import Vue from 'vue';
import VueRouter from 'vue-router';
;
//引入组件;
import app from './App.vue';
import home from './components/tabbar/home.vue';
import search from './components/tabbar/search.vue';
import vip from './components/tabbar/vip.vue';
import shopcart from './components/tabbar/shopcart.vue';
import newslist from './components/home/newslist.vue';


let router = new VueRouter({
  // mode: 'history',
  linkActiveClass: "mui-active",
  routes: [
    {path: '', redirect: '/home'},
    {path: '/home', component: home},
    {path: '/home/newslist', component: newslist},
    // {path: '/home/:name', component: this.params.name },
    {path: '/search*', name: 'search', component: search },
    {path: '/shopcart', name: 'shop', component: shopcart },
    {path: '/vip', component: vip },
  ]
});

export default router;
