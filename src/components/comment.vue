<template>
  <div class="comments">
    <h1>评论区</h1>
    <hr />
    <textarea cols="30" placeholder="在此输入评论" v-model="msg" rows="10">
    </textarea>
    <mt-button size="large" @click="publish" type="primary">发表评论</mt-button>
    <ul class="comments-list">
      <li v-for="(item, i) in comments">
        <div>
          <span>第{{i+1}}楼&nbsp;&nbsp;&nbsp;&nbsp; {{item.username}}</span
          ><span class="published">发表时间: {{item.add_time}}</span>
        </div>
        <p class="comment-content">
          {{item.content}}
        </p>
      </li>
    </ul>
    <mt-button size="large" type="default" @click="loadmore">加载更多</mt-button>
  </div>
</template>

<script>
 import { Toast } from 'mint-ui';

export default {
  data() {
    return {
      msg: "",
      comments: [],
      pageindex: 1,
    };
  },
   created() {
     this.getComList();
   },
  methods: {
    publish() {
      if (this.msg.length < 6) {
        Toast({
          message: '请输入至少六个字',
          iconClass: 'icon icon-success'
        });
        return;
      }
      let comment = {
        username: '匿名用户',
        add_time:  '2019-9-20 24:00:42',
        content: this.msg,
      };
      this.comments.push(comment);
      localStorage.setItem('page1', JSON.stringify(this.comments));
      this.msg = '';
      Toast({
        message: '发表成功',
        iconClass: 'icon icon-success'
      });
    },
    loadmore() {
      this.pageindex++;
      this.$http.get('/api/getcomments/' + this.pageindex).then((response) => {
        if (response.body.status === 0) {
          this.comments = JSON.parse(localStorage.getItem('page1')).concat(response.body.message);
          localStorage.setItem('page1', JSON.stringify(this.comments));
        }
      })
    },
    getComList() {
      this.$http.get('/api/getcomments/' + this.pageindex)
          .then((response) => {
            if (response.body.status === 0) {
              this.comments = response.body.message;
              localStorage.setItem('page1', JSON.stringify(response.body.message));
            }
          });
    },
  }
};
</script>
<style lang="sass">
.comments {
  h1 {
    margin-bottom: 10px;
    font-size: 24px;
  }
  textarea {
    margin: 10px 0 0;
    height: 140px;
    padding: 10px;
  }
  mt-button {
    font-weight: bold;
  }
  .comments-list {
    margin-top: 10px;
    font-size: 15px;
    div {
      display: flex;
      justify-content: space-between;
      background-color: rgba(0, 0, 0, .4);
    }
    p[class*=com] {
      font-size: 15px;
      text-indent: 1.5em;
      height: 45px;
      display: -webkit-box;
      overflow: hidden;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
  }
}
</style>
