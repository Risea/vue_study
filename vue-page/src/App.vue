<template>
  <div id="app">
    
    <div class="container">
      <h3>Router 01</h3>
      <hr>
      <div class="row">
        <div class="col-lg-3">
          <ul class="list-group">
            <router-link to="/about" class="list-group-item">About</router-link>
            <router-link to="/home" class="list-group-item">home</router-link>
          </ul>
        </div>

        <div class="col-lg-9">
          <div class="panel">
            <div class="panel-body">
              <keep-alive>
                <router-view msg="msg"></router-view>
              </keep-alive>
            </div>
          </div>
        </div>

      </div>

    </div>
    



  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.router-link-active{
  color: red;
}

a:hover{
  text-decoration: none;
}
</style>
