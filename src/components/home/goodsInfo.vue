<template>
  <div class="goodsInfo-container">
    <slider></slider>
    <div class="product-intro">
      <h3>{{ goodsInfo.title }}</h3>
      <hr/>

      <div class="choose-wrap">
        <div class="price">
          市场价 : <del>￥{{goodsInfo.del_price}}</del>&nbsp;&nbsp;&nbsp; 销售价 : <span>￥{{goodsInfo.sell_price}}</span>
        </div>
        <div class="choose-num">
          购买数量 :&nbsp;&nbsp;&nbsp;
          <numbox class="numbox" @getNum="getNum" ></numbox>
        </div>
        <div class="choose-btn">
          <mt-button id="purchase" @click="purchase" size="small" type="primary">立即购买</mt-button>
          <mt-button @click="addToCart" size="small" type="danger">加入购物车</mt-button>
        </div>
      </div>

    </div>

    <div class="paramters">
      <h3>
        商品参数
      </h3>
      <hr/>
      <div class="params-info">
        <p>
          商品编号：SD29023495805
        </p>
        <p>
          品牌： {{goodsInfo.brand}}（lenovo）
        </p>
        <p>
          型号： lenovo Z6 Pro
        </p>
        <p>
          上市年份： 2099年
        </p>
        <p>
          机身颜色： 黑色
        </p>
        <p>
          操作系统： Android
        </p>
      </div>

    </div>

  </div>
</template>

<script>
 import slider from '../slider.vue';
 import numbox from '../goodsInfo_numbox.vue';

 export default {
   data() {
     return {
       selectedCount: 1,
       id: this.$route.params.goodid,
       goodsInfo: {},
     };
   },
   created() {
     this.getGoodsDesc();
   },
   methods: {
     addToCart() {
       let goodsInfo = {
         id: parseInt(this.id),
         count: this.selectedCount,
         price: this.goodsInfo.sell_price,
         selected: true,
       };
       this.$store.commit('addToCart', goodsInfo);
     },
     getNum(num) {
       this.selectedCount = parseInt(num);
     },
     purchase() {
       this.$router.push({name: "shop"});
     },
     getGoodsDesc() {
       this.$http.get('/api/goods/getInfoDesc/' + this.$route.params.goodid).then((response) => {
         if (response.body.status === 0) {
           [this.goodsInfo] = response.body.message;
         }
       })
     },
   },
   components: {
     slider,
     numbox,
   }
 }
</script>

<style lang="sass" scoped>
 .goodsInfo-container {
   background-color: #eaece9;
   padding: 10px;
   .product-intro {
     margin-top: 10px;
     background-color: #fff;
     box-shadow: 0px 0px 8px 2px #d6d4d4;
     border: 1px solid #fff;
     height: 180px;
     h3 {
       font-size: 20px;
       font-weight: normal;
       text-indent: 0.7em;
       line-height: 30px;
       height: 30px;
       color: #808080;
     }
     .choose-wrap {
       text-indent: 0.7em;
       margin-top: 20px;
       font-size: 14px;
       .price {
         span {
           font-size: 16px;
           color: red;
         }
       }
       .choose-num {
         height: 40px;
         line-height: 40px;
       }
       .choose-btn {
         margin-top: 8px;
         #purchase {
           margin-right: 20px;
         }

       }
     }
   }
   .paramters {
     margin-top: 10px;
     background-color: #fff;
     box-shadow: 0px 0px 8px 2px #d6d4d4;
     height: 200px;
     overflow: auto;
     h3 {
       font-size: 20px;
       font-weight: normal;
       text-indent: 0.7em;
       line-height: 30px;
       height: 30px;
       color: #808080;
     }
     p:first-child {
       margin-top: 8px;
     }
     p {
       text-indent: 0.7em;
       font-size: 16px;
       line-height: 20px;
     }
   }
 }
</style>
