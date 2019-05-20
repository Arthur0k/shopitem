<template>
  <div class="explore-container">
    <ul ref="ul">
      <img alt="pic" v-for="(item, index) in imgL" :style="'z-index:'+parseInt(index+1)" :src="item.img_url"/>
    </ul>
    <div class="btn">
      <span return false class="mui-icon iconfont icon-zuojiantou" @click="back"></span>
      <span class="mui-icon iconfont icon-youjiantou" @click="forward"></span>
    </div>
  </div>
</template>

<script>
 import Explore from '../../js/class/explore';
 let obj = new Explore();

 export default {
   data() {
     return {oldL: [], imgL: []}
   },
   created() {
     this.getImgL();
   },
   mounted() {
     /* this.init(); */
   },
   updated() {
     this.init();
   },
   methods: {
     init() {
       this.oldL = Array.from(document.querySelectorAll('img'));
       obj.init(this.oldL);
     },
     getImgL() {
       this.$http.get('/api/getexplist').then((response) => {
         this.imgL = response.body.message;
       })
     },
     back() {
       obj.back();
     },
     forward() {
       obj.forward();
     },
   },
 }
</script>

<style lang="sass" scoped>
 .explore-container {
   padding: 40px 0 50px;
   display: flex;
   flex-direction: column;
   width: 375px;
   height: 450px;
   ul {
     border: 1px solid #fff;
     width: 100%;
     height: 100%;
     img {
       width: 250px;
       height: 300px;
       border: 1px solid #000;
       position: absolute;
       left: 50%;
       transform: translateX(-50%);
     }
   }
   div {
     height: 70px;
     display: flex;
     justify-content: space-around;
     span {
       display: block;
       border: 1px solid #000;
       line-height: 50px;
       text-align: center;
       margin-top: 30px;
       width: 50px;
       height: 50px;
       border-radius: 50%;
       font-size: 23px;
     }
   }
 }
</style>
