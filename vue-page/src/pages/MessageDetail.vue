<template>
    <div>
        <h5>ID: {{$route.params.id}}</h5>
        <div v-show="!('id' in msg)">未找到该数据</div>
        <table v-show="'id' in msg">
            <tr>
                <td>{{msg.id}}</td>
            </tr>
            <tr>
                <td>{{msg.title}}</td>
            </tr>
            <tr>
                <td>{{msg.content}}</td>
            </tr>
        </table>
    </div>
</template>

<script>
export default {
    data(){
        return {
            msg: {},
            msgs: []
        }
    },
    mounted(){
        const msgs = [
            {id: 1, title: "msg001", content: 'this is msg1'},
            {id: 2, title: "msg002", content: 'this is msg2'},
            {id: 4, title: "msg003", content: 'this is msg3'}
        ];
        this.msgs = msgs;
        const id = this.$route.params.id*1;
        const msg = msgs.find(item => item.id === id);
        //console.log(msg);
        if(msg){
            this.msg = msg;
        }else{
            this.msg = {};
        }
    },
    watch: {
        $route: function(newRoute){
            const id = newRoute.params.id*1;
            const msg = this.msgs.find(item => item.id === id);
            //console.log(msg);
            if(msg){
                this.msg = msg;
            }else{
                this.msg = {};
            }
        }
    }
}
</script>