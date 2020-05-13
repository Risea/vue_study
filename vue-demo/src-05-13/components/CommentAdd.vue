<template>
    <div class="col-5 add">
        <div class="form-group">
            <label for="exampleFormControlTextarea1">Message content</label>
            <textarea v-model="content" class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="留言内容..."></textarea>
        </div>
        <div class="form-group">
            <label for="exampleFormControlInput1">NickName or Email-Address</label>
            <input v-model="nickName" type="email" class="form-control" id="exampleFormControlInput1" placeholder="匿名用户Aaa">
        </div>
        <div class="center">
            <button class="btn btn-info" @click="add">留言</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CommentAdd',
    data(){
        return {
            content: '',
            nickName: ''
        }
    },
    props: {
        comments: [Object],
        addComment: {
            type: Function,
            required: true
        }

    },
    methods: {
        add(){
            const nickName = this.nickName.trim();
            const content = this.content.trim();
            if(!nickName || !content){
                alert("请填写完整内容...");
                return;
            }
            //const comment = {"nickName": this.nickName, "content": this.content};
            // Es6 语法
            const comment = {nickName, content};
            this.addComment(comment);
            this.nickName = '';
            this.content = '';
        }
    }
}
</script>

<style scoped>
    .center{
        text-align: center;
    }

    .add{
        text-align: left;
        border-right: 1px solid #ccc;
    }

</style>