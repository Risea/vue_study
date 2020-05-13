<template>
    <div class="item">
        <div class="del">
            <button class="btn btn-sm btn-primary" @click="del">删除</button>
        </div>
        <p>{{item.nickName}}说:</p>
        <p style="padding-left: 25px;">{{item.content}}</p>
    </div>
</template>

<script>
export default {
    name: 'CommentItem',
    props: {item: Object, delComment: Function, idx: Number},
    methods: {
        del(){
            const {nickName} = this.item;
            if(window.confirm(`确认删除${nickName}的评论吗?`)){
                this.delComment(this.idx);
            }
        }
    }
}
</script>

<style scoped>

    .item{
        padding: 2px 15px;
        border-top: 1px solid #ccc;
        position: relative;
    }

    .del{
        width: 100%;
        text-align: right;
    }

    .del button{
        font-size: 10px;
        height: 22px;
        padding: 2px 10px;
    }
</style>