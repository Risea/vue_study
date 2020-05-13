<template>
    <div class="input-group mb-3">
        <input type="text" @keydown.enter="add" v-model="title" 
        class="form-control" placeholder="add item" aria-describedby="basic-addon2" ref="input">
        <div class="input-group-append">
            <button class="btn btn-info input-group-text" @click="add">添加</button>
        </div>
    </div>
</template>


<script>
export default {
    name: 'TodoHeader2',
    data(){
        return {
            title: ''
        }
    },
    // props: {
    //     addTodo: Function
    // },
    methods: {
        add(){
            const title = this.title;
            if(title != null && title.trim() != ''){
                // this.addTodo(title);
                // 触发自定义事件
                this.$emit('addTodo', title);
                this.title = '';
            }else{
                alert("请先填写待办事项...");
            }
        }
    }
}
</script>

<style scoped>

</style>