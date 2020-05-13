<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <div class="container">
      <div class="row">
        <CommentAdd :addComment="addComment"/>
        <CommentList :comments="comments" :delComment="delComment"/>
      </div>
    </div>

    <div style="height: 20px;">&nbsp;</div>
    <div class="container">
      <TodoHeader2 @addTodo="addTodo" />
      <TodoList :todos="todos" />
      <!-- <TodoFooter :todos="todos" :delComplete="delComplete" :selectAll="selectAll" /> -->
      <TodoFooter>
        <input slot="check" v-model="isAllCheck" class="form-check-input" type="checkbox">
        <label slot="count" class="form-check-label">
            已完成{{completeNum}} / 全部{{todos.length}}
        </label>
        <button slot="del" v-show="completeNum" @click="delComplete" class="btn btn-sm btn-danger" style="float: right;">清楚已完成任务</button>
      </TodoFooter>
    </div>


    <div style="height: 20px;">&nbsp;</div>
    <div class="container">
      <GithubSearch />
      <GithubMain></GithubMain>
    </div>
  </div>
</template>

<script>
import CommentAdd from './components/CommentAdd.vue'
import CommentList from './components/CommentList.vue'

// import TodoHeader from './components/TodoHeader.vue'
import TodoHeader2 from './components/TodoHeader2.vue'
import TodoList from './components/TodoList.vue'
import TodoFooter from './components/TodoFooter.vue'

import PubSub from 'pubsub-js'
import StorageUtil from './utils/storage-util'


import GithubSearch from './components/GithubSearch.vue'
import GithubMain from './components/GithubMain'

const TODO_KEY = 'todos';
export default {
  name: 'App',
  components: {
    CommentAdd, CommentList,
    //TodoHeader, 
    TodoHeader2,
    TodoList, TodoFooter,
    GithubSearch, GithubMain
  },
  data(){
    return {
      comments: [       // 数据在哪个组件、操作该数据的行为就应该在哪个组件
        {nickName: "Seands", content: "一直很安静..."},
        {nickName: "aaa", content: "我不喜欢说话..."},
        {nickName: "bbb", content: "关关雎鸠..."},
        {nickName: "ccc", content: "在河之洲..."}
      ],
      todos: StorageUtil.getData(TODO_KEY),
      searchFlag: false,
      searchList: []
    }
  },
  computed: {   
      completeNum(){
          return this.todos.reduce((num, todo) => num + (todo.complete ? 1:0), 0)
      },
      // 计算属性
      isAllCheck: {
          get(){
              return this.completeNum == this.todos.length && this.todos.length > 0;
          },

          set(val){
              this.selectAll(val);
          }
      }
  },
  methods: {
    addComment(comment){
      this.comments.unshift(comment);
    },
    delComment(idx){
      this.comments.splice(idx, 1);
    },
    addTodo(title){
      const todo = {title: title, complete: false};
      this.todos.unshift(todo);
    },
    delTodo(idx){
      this.todos.splice(idx, 1);
    },
    delComplete(){
      this.todos = this.todos.filter(todo => !todo.complete)
    },
    selectAll(flag){
      this.todos.forEach(todo => {
        todo.complete = flag;
      });
    }
  },
  watch: {
    todos: {
      // 深度监视
      deep: true,
      // handler: function(newVal){
      //   // 缓存数据
      //   // window.localStorage.setItem('todos', JSON.stringify(newVal));
      //   StorageUtil.saveData(TODO_KEY, newVal)
      // }
      handler: (newVal) => StorageUtil.saveData(TODO_KEY, newVal)
    }
  },
  mounted() {
    // 订阅消息 --- 绑定监听
    PubSub.subscribe('delTodo', (msg, idx) => {
      console.log(msg);
      this.delTodo(idx)
      }
    );

    // https://developer.github.com/v3/
    

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

.container{
  border: 1px solid #ccc; 
  padding: 20px 15px; 
  margin-bottom: 50px;
}
</style>
