<template>
  <div class="shopcart-container">
    <div class="allItem" v-for="(item, index) in cartList">
      <div class="choose">
        <mt-switch @change="select(item.id, $store.getters.getGoodsSelected[item.id])" v-model="$store.getters.getGoodsSelected[item.id]"></mt-switch>
      </div>
      <div class="image">
        <img alt="" :src="item.thumb_path"/>
      </div>
      <div class="chooseInfo">
        <h4>{{ item.title }}</h4>
        <p>
          <span>￥{{ item.sell_price }}</span><numbox :goodsId="item.id" :goodsNum="$store.getters.getGoodsCount[item.id]"></numbox><a href="#" @click="removeList(item.id, index)">删除</a>
        </p>
      </div>
    </div>
    <div class="footer">
      <div class="payInfo">
        <p>
          总计（不含运费）
        </p>
        <p>
          已勾选商品 <span>{{ $store.getters.getTotalAmountAndPrice.selected || 0 }}</span> 件,总价: <span>￥{{ $store.getters.getTotalAmountAndPrice.totalPrice || 0 }}</span>
        </p>
      </div>
      <div class="btn">
        <mt-button size="normal"  type="danger">去结算</mt-button>
      </div>
    </div>
  </div>
</template>

<script>
 import numbox from '../goodsInfo_numbox.vue';

 export default {
   data() {
     return {
       cartList: [],
     };
   },
   created() {
     this.getCartList();
   },
   methods: {
     getCartList() {
       let arrId = [];
       this.$store.state.car.forEach((item) => {
         arrId.push(item.id);
       });
       if (arrId.length <= 0) {
         return;
       }
       this.$http.get('/api/goods/getshopcarlist/' + arrId.join(',')).then((response) => {
         if (response.body.status === 0) {
           this.cartList = response.body.message;
         }
       })
     },
     removeList(id, index) {
       this.cartList.splice(index, 1);
       this.$store.commit('removeCartList', id);
     },
     getSelected() {
       let o = {};
       $store.state.car.forEach((item) => {
o[item.id] = this
       })
     },
     select(id, val) {
       console.log(`${id}---${val}`);
       this.$store.commit('updateCartSelected', {id, selected: val});
     },
   },
   components: {
     numbox,
   }
 }
</script>

<style lang="sass" scoped>
 .shopcart-container {
   .allItem {
     height: 80px;
     box-shadow: 0px 0px 8px 2px #d6d4d4;
     border: 1px solid #eee;
     display: flex;
     .choose {
       flex: 1.3;
       label {
         top: 50%;
         transform: translateY(-50%);
         left: 8px;
       }
     }
     .image {
       flex: 1.3;
       line-height: 80px;
       img {
         height: 60px;
         width: 85%;
       }
     }
     .chooseInfo {
       flex: 5;
       display: flex;
       flex-direction: column;
       h4 {
         margin: 0px;
         flex: 1;
         font-size: 15px;
         line-height: 35px;
         height: 39px;
         overflow: hidden;
       }
       p {
         flex: 1;
         margin: 0px;
         span {
           color: red;
           font-weight: 700px;
           font-size: 15px;
           margin-right: 10px;
         }
         a {
           margin-left: 10px;
         }
       }
     }
   }
   padding: 10px;
   .footer {
     margin-top: 10px;
     box-shadow: 0px 0px 8px 2px #d6d4d4;
     border: 1px solid #eee;
     display: flex;
     div.payInfo {
       flex: 4;
       display: flex;
       flex-direction: column;
       height: 100%;
       p {
         text-indent: 0.7em;
         flex: 1;
         margin: 0px;
         padding: 0px;
         line-height: 40px;
         font-size: 15px;
         text-align: left;
       }
       p:first-child {

       }
       p:last-child {
         span {
           color: red;
           font-size: 18px;
         }
       }
     }
     div.btn {
       flex: 1;
       line-height: 80px;
       position: relative;
       button {
         position: absolute;
         right: 5px;
         transform: translateY(50%);
         font-weight: 700;
       }
     }
     height: 80px;
   }
 }
</style>
