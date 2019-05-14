<template>
  <div class="mui-numbox">
    <button @click="subNum" class="mui-btn mui-btn-numbox-minus" type="button">-</button>
    <input readonly :value="goodsNum?goodsNum:1" ref="num" class="mui-input-numbox" type="text" />
    <button @click="addNum" class="mui-btn mui-btn-numbox-plus" type="button">+</button>
  </div>
</template>

<script>
 export default {
   props: [
     'goodsNum', 'goodsId'
   ],
   methods: {
     addNum() {
       this.$refs.num.value++;
       this.$emit('getNum', this.$refs.num.value);
       this.countChange();
     },
     subNum() {
       if (this.$refs.num.value > 0) {
         let num = this.$refs.num.value--;
         this.$emit('getNum', num)
         this.countChange();
       }
     },
     countChange() {
       if (this.goodsId) {
         this.$store.commit('updateGoodsCount', {id: this.goodsId, count: this.$refs.num.value})
         console.log({id: this.goodsId, count: this.$refs.num.value});
       }
     },
   },
 }
</script>

<style lang="sass" scoped>
 .mui-numbox {
   height: 30px;
   .mui-input-numbox {
     position: absolute;
     display: inline-block;
     overflow: hidden;
     width: 38px !important;
     height: 100%;
     margin: 0;
     padding: 0 3px !important;
     text-align: center;
     text-overflow: ellipsis;
     word-break: normal;
     border: none !important;
     border-right: solid 1px #ccc !important;
     border-left: solid 1px #ccc !important;
     border-radius: 0 !important;
     left: 40px;
     top: 0px;
   }
 }
</style>
