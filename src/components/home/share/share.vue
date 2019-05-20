<template>
  <div class="share-container">
    <div id="categories">
      <a href="#" v-for="(cate, index) in cates" :key="cate.id" :class="{fontActive: idx === index}" @click.prevent="getImgList(cate.id, index)">
        {{ cate.title }}
      </a>
    </div>

    <ul>
      <li v-for="item of list">
        <router-link :to="'/home/shareInfo/' + item.id">
          <img :src="item.img_url">
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
 import { Toast } from 'mint-ui';

 export default {
   data() {
     return {
       idx: "false",
       cates: [],
       list: [],
     }
   },
   created() {
     this.getCategory();
     this.getImgList(0, 0);
   },
   methods: {
     getCategory() {
       this.$http.get('/api/getimgcategory').then(response => {
         if (response.body.status === 0) {
           let all = {
             title: "全部",
             id: 0,
           };
           this.cates = response.body.message;
           this.cates.unshift(all);
         } else {

           let instance = Toast({
             message: 'operation success',
             iconClass: 'icon icon-success'
           });
           setTimeout(() => {
             instance.close();
           }, 2000);
         }

       })
     },
     getImgList(cateid, index) {
       this.$http.get("/api/getimages/" + cateid).then(response => {
         console.log(cateid);
         if (response.body.status === 0) {
           this.list = response.body.message;
           this.idx = index;
         }
       })
     }
   },
 }
</script>

<style lang="sass">
 .share-container {
   .fontActive {
     color: orange;
   }
   #categories {
     display: flex;
     a {
       flex: 1;
       height: 30px;
       font-size: 15px;
       text-align: center;
       line-height: 30px;
     }
   }
   li {
     img {
       width: 375px;
     }
   }
 }
</style>
