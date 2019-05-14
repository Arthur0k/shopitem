<template>
  <div class="goodlist-container">
    <ul>
      <li v-for="item in goodsList">
        <router-link :to="'/home/goodlist/' + item.id">
          <img alt="" :src="item.img_url"/>
          <div>
            <p class="price">
              <span>￥{{ item.sell_price }}</span>
              <del>￥{{ item.del_price }}</del>
            </p>
            <p class="description">
              <span class="hot">热卖中</span>
              <span>剩余{{ item.rest }}件</span>
            </p>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
 export default {
   data() {
     return {goodsList: []};
   },
   created() {
     this.getGoodsList();
   },
   methods: {
     getGoodsList() {
       this.$http.get('/api/goods/getdesc/:id').then((response) => {
         if (response.body.status === 0) {
           this.goodsList = response.body.message;
         }
       })
     }
   }
 };
</script>

<style lang="sass">
 .goodlist-container {
   ul {
     height: 577px;
     padding: 0 10px;
     display: flex;
     justify-content: space-between;
     flex-wrap: wrap;
   }
   li {
     border: 1px solid #eee;
     box-shadow: 0px 0px 8px 2px #d6d4d4;
     margin-top: 10px;
     width: 173px;
     height: 278px;
     a {
       display: block;
       width: 100%;
       height: 100%;
       img {
         height: 220px;
         width: 100%;
       }
       div {
         height: 56px;
         background-color: #f6f6f6;
         .price {
           height: 50%;
           margin: 0;
           padding: 0 8px;
           span {
             color: red;
             font-size: 18px;
             font-weight: bold;
           }
           del {
             margin-left: 10px;
           }
         }
         .description {
           display: flex;
           height: 50%;
           margin: 0;
           padding: 0 8px;
           justify-content: space-between;
           .hot {
             color: red;
           }
         }
       }
     }
   }
 }
</style>
