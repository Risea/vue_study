<template>
    <div class="form-check" @mouseenter="isShow = true" @mouseleave="isShow = false">
        <input v-model="todo.complete" class="form-check-input" type="checkbox">
        <label class="form-check-label" for="defaultCheck1">
            {{todo.title}}
        </label>
        <button v-show="isShow" class="btn btn-sm btn-danger" @click="del">删除</button>
    </div>
</template>


<script>
import PubSub from 'pubsub-js'
// onmouseenter & onmouseleave 进入当前div包括其子div
// onmouseover & onmouseout 进入子div会触发out
export default {
    name: 'TodoItem',
    data(){
        return {
            isShow: false
        }
    },
    props: {
        todo: Object,
        idx: Number
    },
    methods: {
        del(){
            if(window.confirm(`确认删除 '${this.todo.title}' 待办吗?`)){
                // this.delTodo(this.idx);
                // 发布消息 --- 触发监听
                PubSub.publish('delTodo', this.idx)
            }
        }
    }
}
</script>

<style scoped>
    .btn{
        height: 23px;
        padding: 0 15px;
        line-height: 23px;
        float: right;
    }
</style>