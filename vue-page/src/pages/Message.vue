<template>
    <div>
        <ul class="list-group list-group-flush">
            <li v-for="(item) in message" :key="item.id" class="list-group-item">
                <!-- <a href="#">{{item.title}}</a> -->
                <router-link :to="`/home/message/msgdetail/${item.id}`">{{item.title}}</router-link>
                &nbsp;<button @click="pushShow(item.id)" class="btn btn-sm btn-info">push 查看</button> &nbsp;&nbsp;&nbsp;
                &nbsp;<button @click="replaceShow(item.id)" class="btn btn-sm btn-info">replace 查看</button>
            </li>
        </ul>
        <br>
        <button @click="$router.back()" class="btn btn-sm btn-info">回退</button>
        <br>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    data(){
        return {
            message: []
        }
    },
    mounted() {
        // 模拟请求数据
        setTimeout(() => {
            this.message = [
                {id: 1, title: "msg001", content: 'this is msg1'},
                {id: 2, title: "msg002", content: 'this is msg2'},
                {id: 3, title: "msg003", content: 'this is msg3'}
            ]
        }, 1000);
    },
    methods: {
        pushShow(id){
            this.$router.push(`/home/message/msgdetail/${id}`);
        },
        replaceShow(id){
            this.$router.replace(`/home/message/msgdetail/${id}`);
        }
    }
}
</script>