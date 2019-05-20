<template>
  <div class="newslist-container">
    <ul class="mui-table-view">
      <li v-for="item in newsList" class="mui-table-view-cell mui-media">
        <router-link :to="{name: 'comment', params: {id: item.id}}">
          <img class="mui-media-object mui-pull-left" :src="item.img_url">
          <div class="mui-media-body">
            <p class='mui-ellipsis'>{{ item.title }}</p>
            <div class="info">
              <span>发表时间 {{ item.add_time }}</span>
              <span>点击： {{ item.click }}次</span>
            </div>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
 import { Indicator } from 'mint-ui';
 export default {
   data() {
     return {
       time: "2019.4.28",
       newsList: [],
     }
   },
   created() {
     this.getNewsList();
   },
   methods: {
     getNewsList() {
       this.$http.get('/api/getnewslist').then((response) => {
         if (response.body.status === 0) {
           this.newsList = response.body.message;
         }
       });
     }

   }
 }
</script>

<style lang="sass" scoped>
 .mui-table-view {
   li {
     div[class*=mui] {
       height: 42px;
       .info {
         display: flex;
         justify-content: space-between;
         span {
           font-size: 14px;
           color: blue;
         }
       }
     }
   }
 }
</style>
