<template>
<div class="home-container">

  <mt-swipe :auto="0" @change="handleChange">
    <mt-swipe-item><a href="#"><img alt="" src="../../img/1.jpg"/></a></mt-swipe-item>
    <mt-swipe-item><a href="#"><img alt="" src="../../img/2.jpg"/></a></mt-swipe-item>
    <mt-swipe-item><a href="#"><img alt="" src="../../img/3.jpg"/></a></mt-swipe-item>
    <mt-swipe-item><a href="#"><img alt="" src="../../img/zhu.jpg"/></a></mt-swipe-item>
  </mt-swipe>

  <ul class="navigation-container">
    <router-link to="/home/newslist" tag="li"><a href="#"><img alt="" src="../../img/menu1.png"/></a><span>新闻咨询</span></router-link>
    <router-link to="#" tag="li"><a href="#"><img alt="" src="../../img/menu2.png"/></a><span>新闻</span></router-link>
    <router-link to="#" tag="li"><a href="#"><img alt="" src="../../img/menu3.png"/></a><span>新闻</span></router-link>
    <router-link to="#" tag="li"><a href="#"><img alt="" src="../../img/menu4.png"/></a><span>新闻</span></router-link>
    <router-link to="#" tag="li"><a href="#"><img alt="" src="../../img/menu5.png"/></a><span>新闻</span></router-link>
    <router-link to="#" tag="li"><a href="#"><img alt="" src="../../img/menu6.png"/></a><span>新闻</span></router-link>
  </ul>
</div>
</template>

<script>
  export default {
  data: function () {
  return {}
  },
  methods: {
  handleChange(index) {

  }
  }
  };
</script>

<style lang="sass">
  .home-container {
  width: 100%;
  height: 100%;

  .navigation-container {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  li {
  text-align: center;
  display: flex;
  flex-direction: column;
  width: 120px;
  height: 129px;
  a {
margin-bottom: 10px;
  span {
  }

  img {
  width: 80px;
  height: 79px;
  }
  }

  }
  }

  .mint-swipe {
  height: 200px;

  img {
  width: 100%;
  }
  }
  }
</style>
