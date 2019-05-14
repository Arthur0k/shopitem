import Vue from 'vue';
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import VuePreview from 'vue-preview';
import {
  Header,
  Tabbar,
  TabItem,
  Swipe,
  SwipeItem,
  Button,
  Switch,
} from 'mint-ui';
import store from './store/index';
import 'mint-ui/lib/style.css';
import './lib/mui/dist/css/mui.css';
import './lib/mui/dist/css/iconfont.css';
import app from './App.vue';
import router from './router';

Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(VuePreview, {
  mainClass: 'pswp--minimal--dark',
  barsSize: { top: 0, bottom: 0 },
  captionEl: false,
  fullscreenEl: false,
  shareEl: false,
  bgOpacity: 0.85,
  tapToClose: true,
  tapToToggleControls: false,
});

// 注册组件
Vue.component(Button.name, Button);
Vue.component(Tabbar.name, Tabbar);
Vue.component(TabItem.name, TabItem);
Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Button.name, Button);
Vue.component(Switch.name, Switch);

// 过滤器
Vue.filter('timeFormate', value => value.replace(/\./g, '-'));

let vm = new Vue({
  el: '#app',
  store,
  data: {
    msg: 'appmsg',
  },
  methods: {},
  render: c => c(app),
  router,
});
