<template>
    <div>
        <ul class="list-group list-group-flush">
            <li v-for="(item, index) in news" :key="index" class="list-group-item">{{item.title}}</li>
        </ul>
    </div>
</template>

<script>
export default {
    data(){
        return {
            news: [
                {href: '#', title: '百度新闻'},
                {href: '#', title: '新浪新闻'},
                {href: '#', title: '网易新闻'},
                {href: '#', title: '腾讯新闻'}
            ]
        }
    }
}
</script>