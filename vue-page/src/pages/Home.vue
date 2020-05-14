<template>
    <div>
        <h6>Home</h6>
        <div>
            <ul class="nav nav-tabs">
                <li class="nav-item">
                    <router-link to="/home/news" class="nav-link">news</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/home/message" class="nav-link">message</router-link>
                </li>
            </ul>
            <div>
                <keep-alive>
                    <router-view></router-view>
                </keep-alive>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    
}
</script>