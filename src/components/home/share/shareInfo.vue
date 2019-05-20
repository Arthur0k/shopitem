<template>
    <div class="shareInfo-container">
        <header>
            <h1>5省25市4县共推共建生态经济带新蓝图</h1>
            <div class="someInfo">
                <span>发表时间： 2019.9.12&nbsp; 24:00:00</span>
                <span>点击： 10次</span>
            </div>
            <hr />
        </header>

        <div class="content">
            <vue-preview :slides="list" @close="handleClose"></vue-preview>
        </div>

        <hr />
        <comment></comment>
    </div>
</template>

<script>
 import comment from '../../public/comment.vue';

 export default {
   data() {
     return {
       list: [],
     }
   },
   methods: {
     getImgList() {
       this.$http.get('/api/getthumimages/:imgid').then(response => {
         if (response.body.status === 0) {
           var a = response.body.message.forEach(item => {
             item.w = 600;
             item.h = 500;
             this.list.push(item);
           })
         }
       })
     },
     handleClose() {
       console.log('event close')
     }
   },
   components: {
     comment
   },
   created() {
     this.getImgList();
   },
 }
</script>

<style lang="sass">
 .shareInfo-container {
   padding: 7px;

   header {
     margin: 10px 0;
     text-align: center;

     h1 {
       font-size: 17px;
       margin-bottom: 10px;
     }

     .someInfo {
       display: flex;
       justify-content: space-between;
       font-size: 14px;
       color: blue;
       margin-bottom: 8px;
     }
   }

   .content {
     div {
       width: 100%;

       div.my-gallery {
         width: 100%;
         display: flex;
         flex-wrap: wrap;
         justify-content: space-around;

         figure {
           margin: 0;
           width: 90px;

           img[itemprop] {
             width: 70px;
           }
         }
       }
     }
   }

 }
</style>
