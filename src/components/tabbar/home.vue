<template>
  <div class="home-container">
    <slider></slider>

    <ul class="navigation-container">
      <router-link to="/home/newslist" tag="li"><a href="#"><img alt="" src="../../img/menu1.png" /></a><span>新闻资讯</span></router-link>
      <router-link to="/home/share" tag="li"><a href="#"><img alt="" src="../../img/menu2.png" /></a><span>分享</span></router-link>
      <router-link to="/home/goodlist" tag="li"><a href="#"><img alt="" src="../../img/menu3.png" /></a><span>商品</span></router-link>
      <router-link to="#" tag="li"><a href="#"><img alt="" src="../../img/menu4.png" /></a><span>新闻</span></router-link>
      <router-link to="#" tag="li"><a href="#"><img alt="" src="../../img/menu5.png" /></a><span>新闻</span></router-link>
      <router-link to="#" tag="li"><a href="#"><img alt="" src="../../img/menu6.png" /></a><span>新闻</span></router-link>
    </ul>
  </div>
</template>

<script>
 import slider from '../slider.vue';
 export default {
   data: function() {
     return {};
   },
   methods: {
   },
   components: {
     slider,
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

         span {}

         img {
           width: 59px;
           height: 59px;
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
