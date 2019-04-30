import Vue from "vue";

import { Header, Tabbar, TabItem, Swipe, SwipeItem } from 'mint-ui';
import 'mint-ui/lib/style.css';
import './lib/mui/dist/css/mui.css';
import './lib/mui/dist/css/iconfont.css';

import VueRouter from "vue-router";
import router from "./router";
import app from "./App.vue";

// 注册组件
Vue.component(Tabbar.name, Tabbar);
Vue.component(TabItem.name, TabItem);
Vue.component(Header.name, Header),
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
// 挂载router
Vue.use(VueRouter);

let vm = new Vue({
  el: "#app",
  data: {
    msg: "appmsg"
  },
  methods: {},
  render: c => c(app),
  router,

});
