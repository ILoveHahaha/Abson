<template>
  <div id="app">
    <transition name="fade">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition>
  </div>
</template>

<script>
// import Login from './components/login/login.vue'
export default {
  name: 'App',
  components: {
    // 'login': Login
  }
}
</script>

<style lang="less">
@text-color: #2c3e50;
@height: 100%;
@width: 100%;
#app {
  height: @height;
  width: @width;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: @text-color;
  font-family: Helvetica Neue,Helvetica,Hiragino Sans GB,Microsoft YaHei,Arial,sans-serif;
}
</style>
