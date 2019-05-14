<template>
  <div class="login-container">
    <div class="logo">
      <a href="#">
        <img alt="picture" src="../../img/offer.jpg"/>
      </a>
    </div>
    <form>
      <input name="" type="text" placeholder="请输入用户名" value=""/>
      <input ref="psw" name="" type="password" placeholder="请输入密码" value=""/>
      <span  @click="transf">oo</span>
      <span>忘记密码</span>
      <button>登录</button>
    </form>
    <div class="verification">
      <a href="#">短信验证码</a>
      <a href="#">注册</a>
    </div>
    <div class="other-way">
        <a href="#"><img alt="qq" src="../../img/qq.jpeg"/></a>
        <a href="#"><img alt="weixin" src="../../img/weixin.jpeg"/></a>
        <div>
          其他登录方式
        </div>
    </div>
  </div>
</template>

<script>
  export default {
  data() {
  return { msg: "haha" }
  },
    methods: {
      transf() {
        if (this.$refs.psw.type === 'password') {
          this.$refs.psw.type = 'text';
        } else {
          this.$refs.psw.type = 'password';
        }
      },
    },
  watch: {
  $route(to, from) {
  console.log(this.$route)
  console.log(this.$router)
  this.$router.push({name: 'shop'})
  }
  }
  }
</script>

<style lang="sass">
 .login-container {
   padding: 15px;
   .logo {
     height: 105px;
     a {
       display: block;
       width: 80px;
       height: 80px;
       margin: 25px auto;
       border-radius: 50%;
       overflow: hidden;
       img {
         height: 80px;
         width: 100%;
       }
     }
   }
   form {
     position: relative;
     input {
       border: none;
       border-bottom: 1px solid #eee;
       text-indent: 1.5em;
     }
     span:first-of-type {
       position: absolute;
       top: 61px;
       left: 10px;
     }
     span:last-of-type {
       position: absolute;
       top: 64px;
       right: 14px;
     }
     button {
       width: 100%;
       height: 45px;
       border-radius: 41px;
       font-size: 18px;
       background-color: dodgerblue;
       margin-top: 10px;
       color: white;
     }
   }
   .verification {
     display: flex;
     justify-content: space-between;
     margin-top: 10px;
   }
   .other-way {
     border-top: 1px solid #eee;
     margin-top: 35px;
     padding-top: 25px;
     position: relative;
     a {
       float: left;
       width: 63px;
       height: 63px;
     }
     a:first-child {
       margin-left: 27%;
       img {
         height: 43px;
         margin-left: 10px;
       }
     }
     a:nth-child(2) {
       margin-left: 30px;
       img {
         height: 43px;
       }
     }
     div {
       position: absolute;
       top: -12px;
       left: 120px;
       text-align: center;
       width: 110px;
       color: #8e8e8e;
     }
   }
 }
</style>
