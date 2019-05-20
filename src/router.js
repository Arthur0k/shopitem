import VueRouter from 'vue-router';
// 引入组件;
import home from './components/tabbar/home.vue';
import login from './components/tabbar/login.vue';
import explore from './components/tabbar/explore.vue';
import shopcart from './components/tabbar/shopcart.vue';
import newslist from './components/home/news/newslist.vue';
import newsInfo from './components/home/news/newsInfo.vue';
import share from './components/home/share/share.vue';
import shareInfo from './components/home/share/shareInfo.vue';
import comment from './components/public/comment.vue';
import goodlist from './components/home/goods/goodlist.vue';
import goodsInfo from './components/home/goods/goodsInfo.vue';

const router = new VueRouter({
  // mode: 'history',
  linkActiveClass: 'mui-active',
  routes: [
    { path: '', redirect: '/home' },
    { path: '/home', component: home },
    { path: '/home/share', component: share },
    { path: '/home/goodlist', component: goodlist },
    { path: '/home/goodlist/:goodid', component: goodsInfo },
    { path: '/home/shareInfo/:imgId', component: shareInfo },
    { path: '/home/newslist', component: newslist },
    {
      path: '/home/newslist/:id',
      component: newsInfo,
      children: [{ path: '', component: comment, name: 'comment' }],
    },
    { path: '/login', name: 'login', component: login },
    { path: '/shopcart', name: 'shop', component: shopcart },
    { path: '/vip', component: explore },
  ],
});

export default router;
