<template>
    <div style="text-align: left; padding-left: 12px;">
        <div class="form-check">
            <input v-model="isAllCheck" class="form-check-input" type="checkbox">
            <label class="form-check-label">
                已完成{{completeNum}} / 全部{{todos.length}}
            </label>
            <button v-show="completeNum" @click="delComplete" class="btn btn-sm btn-danger" style="float: right;">清楚已完成任务</button>
        </div>
    </div>
</template>


<script>
export default {
    name: 'TodoFooter',
    props: {
        todos: Array,
        delComplete: Function,
        selectAll: Function
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
    }
}
</script>

<style scoped>

</style>