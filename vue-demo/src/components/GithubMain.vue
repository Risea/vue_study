<template>
    <div style="text-align: left;">
        <h4 v-show="firstView">请输入用户名搜索</h4>
        <h5 v-show="loading">查询中...</h5>
        <div>
            <div class="card" v-for="(user, index) in users" :key="index">
                <img :src="user.avatar_url" class="card-img-top" alt="">
                <div class="card-body">
                    <p class="card-text">{{user.name}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import PubSub from 'pubsub-js'

export default {
    name: 'GithubMain',
    data(){
        return {
            firstView: true,
            loading: false,
            errorMsg: '',
            users: null
        }
    },
    mounted(){

        PubSub.subscribe('searchName', (msg, searchName) => {
            this.firstView = false;
            this.loading = true;
            this.errorMsg = '';
            this.users = null;
            const url = `https://api.github.com/search/users?q=${searchName}`;
            axios.get(url).then((res) => {
                console.log(res);
                this.loading = false;
                if(res.status == 200){
                    this.users = res.data.items.map(item => {
                        return {
                            "url": item.html_url,
                            "name": item.login,
                            "avatar_url": item.avatar_url
                        };
                    });
                }else{
                    this.errorMsg = res.status;
                }
            }).catch((error)=>{
                console.log(error);
                this.loading = false;
                this.errorMsg = error;
                this.users = null;
            });

        })
    }
    
}
</script>

<style scoped>
    .card{
        width: 18rem;
        float: left;
        margin: 20px;
    }
</style>