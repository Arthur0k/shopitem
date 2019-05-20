<template>
  <mt-swipe :auto="4000" @change="handleChange" :show-indicators="false">
    <mt-swipe-item v-for="item in imgL" :key="item.img_url"><a href="#"><img alt="" :src="item.img_url" /></a></mt-swipe-item>
    <!-- <mt-swipe-item><a href="#"><img alt="" src="../img/2.jpg" /></a></mt-swipe-item> -->
    <!-- <mt-swipe-item><a href="#"><img alt="" src="../img/3.jpg" /></a></mt-swipe-item> -->
    <!-- <mt-swipe-item><a href="#"><img alt="" src="../img/zhu.jpg" /></a></mt-swipe-item> -->
  </mt-swipe>
</template>

<script>
 export default {
   methods: {
     handleChange() {
     },
   },
   props: ['imgL'],
 }
</script>

<style lang="sass" scoped>
 .mint-swipe {
   height: 190px;

   img {
     width: 100%;
     height: 190px;
   }
 }
</style>
