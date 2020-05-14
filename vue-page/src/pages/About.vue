<template>
    <div>
        <h6>about</h6>
        <input v-model="msg">
    </div>
    
</template>

<script>
// input 默认在切换panel时，会重新加载组件被清空  加keep-alive缓存路由组件
export default {
    props: {
        msg: String
    }
}
</script>