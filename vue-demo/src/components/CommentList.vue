<template>
    <div class="col-7 list">
        <h5>评论列表</h5>
        <div v-show="comments.length == 0">暂无评论</div>
        <div>
            <CommentItem v-for="(item, index) in comments" :key="index" :item="item" :delComment="delComment" :idx="index"/>
        </div>
    </div>
</template>

<script>
import CommentItem from './CommentItem.vue'

export default {
    name: 'CommentList',
    components: {
        CommentItem
    },
    // 声明 父组件传递过来的 数据
    // Vue中有热模替换的效果、页面改变后、更新后台某个模块，页面只更新某个模块，以前页面的状态还在
    props: ['comments', 'delComment'],

}
</script>

<style scoped>
    .list{
        text-align: left;
    }
</style>