<template>
<div class="app-container">
  <mt-header fixed title="固定在顶部"></mt-header>

  <transition name="queque" mode="out-in">
<router-view></router-view>
  </transition>

<nav class="mui-bar mui-bar-tab">
    <router-link to="/home" class="mui-tab-item">
      <span class="mui-icon mui-icon-home"></span>
      <span class="mui-tab-label">首页</span>
    </router-link>
    <router-link to="vip"class="mui-tab-item">
      <span class="mui-icon mui-icon-contact"></span>
      <span class="mui-tab-label">会员</span>
    </router-link>
    <router-link to="/shopcart" class="mui-tab-item">
      <span class="mui-icon iconfont icon-gouwuche1"><span class="mui-badge">0</span></span>
      <span class="mui-tab-label">购物车</span>
    </router-link>
    <router-link :to="{path: 'search', query: {id: 1443}}" class="mui-tab-item">
      <span class="mui-icon mui-icon-search"></span>
      <span class="mui-tab-label">搜索</span>
    </router-link>
</nav>
</div>
</template>

<script>
</script>

<style lang="sass">
body{
  width: 100%;
  background: #fff;
  .app-container {
    height: 100%;
    padding-top: 40px;
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
