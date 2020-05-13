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
    <div class="container" style="border: 1px solid #ccc; padding: 20px 15px; margin-bottom: 50px;">
      <!-- <TodoHeader :addTodo="addTodo" /> -->
      <!-- <TodoHeader2 @addTodo="addTodo" /> -->
      <TodoHeader2 ref="todoHeader" />
      <TodoList :todos="todos" :delTodo="delTodo" />
      <TodoFooter :todos="todos" :delComplete="delComplete" :selectAll="selectAll" />
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

export default {
  name: 'App',
  components: {
    CommentAdd, CommentList,
    //TodoHeader, 
    TodoHeader2,
    TodoList, TodoFooter
  },
  data(){
    return {
      comments: [       // 数据在哪个组件、操作该数据的行为就应该在哪个组件
        {nickName: "Seands", content: "一直很安静..."},
        {nickName: "aaa", content: "我不喜欢说话..."},
        {nickName: "bbb", content: "关关雎鸠..."},
        {nickName: "ccc", content: "在河之洲..."}
      ],
      // todos: [
      //   {title: '吃饭', complete: false},
      //   {title: '睡觉', complete: false},
      //   {title: '打游戏', complete: true},
      //   {title: '学习', complete: false}
      // ]
      todos: JSON.parse(window.localStorage.getItem("todos") || '[]')
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
      handler: function(newVal){
        // 缓存数据
        window.localStorage.setItem('todos', JSON.stringify(newVal));
      }
    }
  },
  mounted() {
    // 给ref为todoHeader的组件绑定监听 addTodo方法
    this.$refs.todoHeader.$on("addTodo", this.addTodo);
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
