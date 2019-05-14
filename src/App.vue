<template>
<div class="app-container">
  <div class="head-container">
  <mt-header fixed title="买一送一买二倒贴"></mt-header>
  <a href="javascript;;" @click.prevent="goBack" id="back">&lt;</a>
  </div>

  <transition name="queque" mode="out-in">
<router-view></router-view>
  </transition>

<nav class="mui-bar mui-bar-tab">
    <router-link to="/home" class="mui-tab-item">
      <span class="mui-icon mui-icon-home"></span>
      <span class="mui-tab-label">首页</span>
    </router-link>
    <router-link to="/vip"class="mui-tab-item">
      <span class="mui-icon mui-icon-contact"></span>
      <span class="mui-tab-label">会员</span>
    </router-link>
    <router-link to="/shopcart" class="mui-tab-item">
      <span class="mui-icon iconfont icon-gouwuche1"><span class="mui-badge">{{ sumCount }}</span></span>
      <span class="mui-tab-label">购物车</span>
    </router-link>
    <router-link :to="{name: 'login'}" class="mui-tab-item">
      <span class="mui-icon mui-icon-search"></span>
      <span class="mui-tab-label">搜索</span>
    </router-link>
</nav>
</div>
</template>

<script>
  export default {
    computed: {
      sumCount() {
        return this.$store.getters.sumCount;
      },
    },
    methods: {
      goBack() {
        this.$router.go(-1);
      }
    },
  }
</script>

<style lang="sass">
body {
  width: 100%;
  padding: 40px 0 50px;
  background-color: #fff!important;
  .app-container {
    .mint-header-title {
      font-size: 17px;
      }
      #back {
        display: block;
        color: #fff;
        font-size: 30px;
        position: fixed;
        z-index: 99;
        left: 12px;
        top: 20px;
        transform: translateY(-50%);
      }
    height: 100%;
  }
}
.queque-enter {
  transform: translateX(375px)
}
.queque-enter-active,
.queque-leave-active {
  transition: all .2s;
}
.queque-leave-to {
  transform: translateX(-375px)
}
</style>
