<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <div class="container">
      <div class="row">
        <CommentAdd :addComment="addComment"/>
        <CommentList :comments="comments" :delComment="delComment"/>
      </div>
    </div>
  </div>
</template>

<script>
import CommentAdd from './components/CommentAdd.vue'
import CommentList from './components/CommentList.vue'

export default {
  name: 'App',
  components: {
    CommentAdd, CommentList
  },
  data(){
    return {
      comments: [       // 数据在哪个组件、操作该数据的行为就应该在哪个组件
        {nickName: "Seands", content: "一直很安静..."},
        {nickName: "aaa", content: "我不喜欢说话..."},
        {nickName: "bbb", content: "千山鸟飞绝..."},
        {nickName: "ccc", content: "万径人踪灭..."}
      ]
    }
  },
  methods: {
    addComment(comment){
      this.comments.unshift(comment);
    },
    delComment(idx){
      this.comments.splice(idx, 1);
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
