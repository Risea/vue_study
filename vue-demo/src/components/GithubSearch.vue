<template>
    <div class="input-group mb-3">
        <input type="text" @keydown.enter="search" v-model="text" 
        class="form-control" placeholder="search Github user" aria-describedby="basic-addon2" ref="input">
        <div class="input-group-append">
            <button class="btn btn-info input-group-text" @click="search">查询</button>
        </div>
    </div>
</template>


<script>
import PubSub from 'pubsub-js'

export default {
    name: 'GithubSearch',

    data(){
        return {
            text: ''
        }
    },
    methods: {
        search: function(){
            const searchName = this.text.trim();
            if(searchName){
                PubSub.publish('searchName', searchName);
            }
        }
    }
}
</script>


<style scoped>

</style>