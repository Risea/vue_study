<template>
    <div>
        <table class="table">
            <tr v-for="(todo, index) in todos" :key="index">
                <td>
                    <TodoItem :todo="todo" :idx="index" />
                </td>
            </tr>
        </table>
    </div>
</template>

<script>
import TodoItem from './TodoItem.vue'

export default {
    name: 'TodoList',
    props: {
        'todos': Array,
        'delTodo': Function
    },
    components: {
        TodoItem
    }
}
</script>


<style scoped>
    .table{
        text-align: left !important;
    }

    tr:hover{
        background: lightcyan;
    }
</style>